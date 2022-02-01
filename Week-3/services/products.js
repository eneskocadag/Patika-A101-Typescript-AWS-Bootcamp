const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");

AWS.config.update({
  region: process.env.REGION,
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  endpoint: process.env.ENDPOINT,
});

let table = "products";
let docClient = new AWS.DynamoDB.DocumentClient();

module.exports.add = async (item) => {
  let params = {
    TableName: table,
    Item: {
      productId: uuidv4(),
      stock: item.stock,
      productName: item.productName,
      isDiscount: item?.isDiscount || false,
      category: {
        categoryId: uuidv4(),
        categoryName: item.categoryName,
      },
    },
  };
  try {
    await docClient.put(params).promise();
    return {
      status: true,
      message: "Ürün eklendi",
    };
  } catch (err) {
    console.log(err);
    return { status: false, message: "Ürün eklenemedi" };
  }
};

module.exports.fetchAll = async () => {
  let params = {
    TableName: table,
  };
  try {
    let response = await docClient.scan(params).promise();
    return {
      status: true,
      message: "Ürünler başarıyla çekildi",
      data: response,
    };
  } catch (err) {
    console.log(err);
    return { status: false, message: "Ürünler çekilemedi" };
  }
};

module.exports.fetchSingle = async (query) => {
  let params = {
    TableName: table,
    Key: {
      productId: query.productId,
    },
  };
  try {
    let response = await docClient.get(params).promise();
    return { status: true, message: "Spesifik veri çekildi", data: response };
  } catch (err) {
    console.log(err);
    return { status: false, message: "Spesifik veri çekilemedi" };
  }
};

module.exports.fetchDiscount = async () => {
  let params = {
    TableName: table,
    Key: {},
    FilterExpression: "isDiscount = :r",
    ExpressionAttributeValues: {
      ":r": true,
    },
  };
  try {
    let editeddata = await docClient.scan(params).promise();
    return {
      status: true,
      message: "İndirimli ürünler başarıyla çekildi",
      data: editeddata,
    };
  } catch (err) {
    console.log(err);
    return { status: false, message: "Ürünler çekilemedi" };
  }
};

module.exports.update = async (item) => {
  let params = {
    TableName: table,
    Key: {
      productId: item.productId,
    },
    UpdateExpression: "set stock = :r",
    ExpressionAttributeValues: {
      ":r": item.stock,
    },
    ReturnValues: "UPDATED_NEW",
  };
  try {
    await docClient.update(params).promise();
    return { status: true, message: "Ürün stok değeri başarıyla güncellendi" };
  } catch (err) {
    console.log(err);
    return { status: false, message: "Ürün değeri güncellenemedi" };
  }
};

module.exports.delete = async (item) => {
  let params = {
    TableName: table,
    Key: {
      productId: item.productId,
    },
  };
  try {
    let response = await docClient.get(params).promise();
    if (response.Item.isDiscount)
      return { status: false, message: "Ürün indirimde olduğundan silinemez" };
    await docClient.delete(params).promise();
    return { status: true, message: "Ürün veritabanından silindi" };
  } catch (err) {
    console.log(err);
    return { status: false, message: "Ürün silinemedi" };
  }
};
