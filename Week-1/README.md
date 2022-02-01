<p align="center"> 🚀🤓🙂😄💻📝📚A101 Nodejs &amp; Typescript Bootcamp - İlk Hafta Ödevi📚📝💻😄🙂🤓🚀 </p>

## TypeScript ile Javascript arasındaki farklar <br />
- Javascript betik dildir.<br />
- Typescript Nesneye dayalı programlama dilidir.<br />
- Javascript'in tür denetimi yoktur : Fonksiyonlara parametre geçerken türünü belirleyemezsiniz. <br />
- Typescript statik tür denetimine sahiptir : Fonksiyonlara gönderilen parametrelerin ve alınan parametrenin türünü kontrol edebilirsiniz. Fonksiyonun döneceği değeri de kontrol edebilirsiniz.<br />
- Javascript'i derlediğinizde hataları görürsünüz. Typescript yazarken de hataları görebilirsiniz.<br />
- Typescript çalışmak için javascript'e dönüşmesi gerekir ve typescript kendi içerisinde bir derleyici bulundurur. Javascript bu derleyiciyi tarayıcılardan sağlar.<br />
- Typescript modulleri desteklerken javascript desteklemez.<br />
- Typescript kendine has özellikleri ve javascript özelliklerini barındırdığı için javascriptin bir üst kümesidir.<br />
- Typescript her ortamda çalıştırılabilir.<br />
- Typescript güvenli kod yazmaya ve hata yapmamaya olanak sağlar.<br />

## NodeJS ile server ayağa kaldırma <br />

```
// express'in özelliklerini kullanabilmek için require komutuyla express içe aktarılır.
const express = require("express");
const app = express();
// JSON formatlı içeriği bodyden gönderebilmek için express.json() kullanılır.
app.use(express.json());
// html istekleri olan get ve post komutu küçük harflerle kullanılarak tarayıcıdan gelen istekler üzerinden işlem yapılır.
// Buradaki req parametresi sayfaya yapılan istek ile gönderilen bütün veriyi tutar. URL, ip, protocol, query gibi
// res parametresi ile gönderilen isteğe göre yanıt verme işine yarar
app.get("/", function (req, res) {
  console.log("Ana dizin GET REQUEST");
  // res.status komutu ile gönderilen response'un durumunun başarılı olduğu ifade edilir ve sayfaya isteğin url'si gönderilir.
  res.status(200).send(req.url);
});
app.post("/", (req, res) => {
  console.log("Ana dizin POST REQUEST");
  // Post edilen json dosyası başarılı ifadesi "200" status'u ile json olarak tekrar iletilir.
  res.status(200).json(req.body);
});
// Server'ın çalıştığına dair dinleme adı verilen metod ile konsol günlüğüne bir çıktı gönderilir.
app.listen(3000, () => {
  console.log("Server running");
});
```
