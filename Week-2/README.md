# A-101 Bootcamp Ödev 2 💻

Kullanılan Trendyol Api'nin dökümantasyon sayfası

[Documentation](https://developers.trendyol.com/tr)

## Requests

- Markalar'dan spesifik bir değer almak için gereken Get Request url'i

```bash
  localhost:<PORT>/api/brands/brand-name
```

- Markalar'ın hepsini almak için gereken Get Request url'i

```bash
  localhost:<PORT>/api/brands
```

- Kategoriler'den spesifik bir değer almak için gereken Get Request url'i

```bash
  localhost:<PORT>/api/categories/categories-name
```

- Kategoriler'in hepsini almak için gereken Get Request url'i

```bash
  localhost:<PORT>/api/categories
```

## Validation

Kullanıcıyı doğrulamak için joi ile aşağıdaki schema eşleştirilir. Ödev gereği bir database'e
bağlanma durumu olmadığından schema'ya uyan her e-mail ve password içeri alınır

```bash
const registerSchema = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(6).max(16).required(),
});
```

Başarılı olan kullanıcıya jwttoken verilir
Token alınmadan ulaşılan tek yol `/api/login` 'dir

Alınan token ile postman'in authorization sekmesindeki `Bearer Token` kısmına token değeri girilerek diğer sayfalara da erişim sağlanır.
Token alınmadan gidilmeye çalışılan sayfalarda error-handler devreye girer ve yetkisizlik hatası gibi hatalar döndürülür.

##

- [@eneskocadag](https://github.com/eneskocadag)
- [@furkanayhan](https://github.com/mfurkanayhan)
