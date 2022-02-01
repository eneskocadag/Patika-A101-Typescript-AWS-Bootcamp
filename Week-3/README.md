
# a101 Bootcamp Hafta 3
Eklenen tüm ürünleri getiren GET Request'in yolu
```javascript
localhost:3000/api/products
```
Ürünler içerisinden query params ile filtre yapılan veriye GET Request ile ulaşma
```javascript
localhost:3000/api/products/<productId>
```
İndirimli ürünleri getirecek olan GET Request'in yapılacağı yol
```javascript
localhost:3000/api/products/discount
```
ProductId ile ürün silmek için DELETE Request'in yapılacağı yol
```javascript
localhost:3000/api/products
```
Herhangi bir ürünün stoğunu değiştirmek için yapılan PUT Request'in yapılacağı yol
```javascript
localhost:3000/api/products
```
## NoSQL ve SQL arasındaki farklar

**Ana Farklar:**

TypeSQL veritabanları öncelikle İlişkisel Veritabanları olarak adlandırılır; NoSQL veri tabanı ise öncelikle ilişkisel olmayan veya dağıtılmış veri tabanı olarak adlandırılır.

**Dil:**
SQL veritabanları, veri tabanlı yapılandırılmış sorgu dilini (SQL) tanımlar ve işler. Bir taraftan bakıldığında bu dil son derece güçlüdür. SQL, özellikle büyük karmaşık sorgular için güvenli bir seçim haline getiren, mevcut en çok yönlü ve yaygın olarak kullanılan seçeneklerden biridir. Ancak diğer taraftan kısıtlayıcı olabilir. SQL, verilerle çalışmadan önce verilerinizin yapısını belirlemek için önceden tanımlanmış şemaları kullanmanızı gerektirir. Ayrıca tüm verileriniz aynı yapıyı takip etmelidir. Bu, önemli bir ön hazırlık gerektirebilir, bu da yapıdaki bir değişikliğin tüm sisteminiz için hem zor hem de yıkıcı olacağı anlamına gelir.
Bir NoSQL veritabanı, yapılandırılmamış veriler için dinamik şemaya sahiptir. Veriler birçok şekilde depolanır; bu, belge yönelimli, sütun yönelimli, grafik tabanlı veya bir KeyValue deposu olarak organize edilebileceği anlamına gelir. Bu esneklik, belgelerin önce tanımlanmış bir yapıya sahip olmadan oluşturulabileceği anlamına gelir. Ayrıca her belgenin kendine has yapısı olabilir. Sözdizimi veritabanından veritabanına değişir ve ilerledikçe alanlar ekleyebilirsiniz.

**Ölçeklenebilirlik:**
Hemen hemen tüm durumlarda SQL veritabanları dikey olarak ölçeklenebilir. Bu, RAM, CPU veya SSD gibi şeyleri artırarak tek bir sunucudaki yükü artırabileceğiniz anlamına gelir. Ancak öte yandan NoSQL veritabanları yatay olarak ölçeklenebilir. Bu, NoSQL veritabanınıza parçalayarak veya daha fazla sunucu ekleyerek daha fazla trafiği idare ettiğiniz anlamına gelir. Aynı binaya daha fazla kat eklemeye, mahalleye daha fazla bina eklemeye benzer. Böylece NoSQL nihayetinde daha büyük ve daha güçlü hale gelebilir ve bu veritabanlarını büyük veya sürekli değişen veri kümeleri için tercih edilen seçenek haline getirebilir.
 
**Yapı:**
SQL veritabanları tablo tabanlıdır, NoSQL veritabanları ise anahtar/değer çiftleri, belge tabanlı, grafik veritabanları veya geniş sütun depolarıdır. Bu, ilişkisel SQL veritabanlarını, muhasebe sistemi gibi çok satırlı işlemler gerektiren uygulamalar veya ilişkisel bir yapı için oluşturulmuş eski sistemler için daha iyi bir seçenek haline getirir.
 
**Destek:**
Satıcılarından tüm SQL veritabanı için büyük destek mevcuttur. Ayrıca, çok büyük ölçekli dağıtımlar için SQL veritabanı konusunda size yardımcı olabilecek birçok bağımsız danışma vardır, ancak bazı NoSQL veritabanları için yine de topluluk desteğine güvenmeniz gerekir ve büyük ölçekli NoSQL'inizi kurmak ve dağıtmak için yalnızca sınırlı dış uzmanlar mevcuttur. dağıtımlar.

**SQL ile NoSQL arasındaki önemli farklar** </br>
- SQL ilişkisel veritabanı yönetim sistemidir, NoSQL ilişkisel olmayan veya dağıtılmış veritabanı sistemidir.
- SQL veritabanları sabit veya statik ya da önceden tanımlanmış şemalara sahiptir, NoSQL'in dinamik şemaları vardır.
- SQL karmaşık sorgular için çok uygundur, NoSQL karmaşık sorgular için pek iyi değildir.
- SQL dikey ölçeklenebilirdir, NoSQL yatay ölçeklenebilirdir.
