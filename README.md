# İki Usta Kavurma

Emek, Ankara için hazırlanmış, bağımlılık veya derleme gerektirmeyen Türkçe HTML menü sitesi.

## Çalıştırma

`dist/index.html` dosyasını doğrudan tarayıcıda açın veya bu klasörde `python3 -m http.server 8080 --directory dist` çalıştırın.

## Düzenleme

- İçerik, gramaj ve fiyatlar: `dist/index.html`. Gramaj düğmelerindeki `data-price` değerlerini de güncelleyin.
- Renkler, mobil görünüm ve baskı düzeni: `dist/styles.css`.
- Menü filtreleri ve gramaj seçimi: `dist/script.js`.
- Logo ve temsili yemek görseli: `dist/assets/`.

Fiyatlar örnektir. Kesin adres, telefon ve çalışma saatleri henüz verilmediğinden eklenmemiştir. Sipariş veya ödeme alınmaz. Sayfa açılış öncesi konsepttir; arama motoru indekslemesi kapalıdır. Harita çizimi şematiktir. Yemek görseli yapay zekâyla üretilmiş temsili sunumdur. Google Fonts erişilemezse sistem yazı tipleri kullanılır.

## GitHub Pages

Yayın adresi: https://akinayturan.github.io/iki-usta-kavurma/

Depo ve web sitesi herkese açıktır. GitHub Pages, **Deploy from a branch → gh-pages → / (root)** ayarıyla statik dosyaları yayınlar. `main` dalı kaynakları, `gh-pages` dalı yalnızca `dist/` içeriğini taşır. Güncelleme sonrası yayınlamak için:

```sh
git push origin main
git subtree split --prefix dist -b pages-update
git push origin pages-update:gh-pages
git branch -D pages-update
```

Özel Actions iş akışı, hesapta bildirilen faturalandırma engeli nedeniyle kullanılmıyor; yayın GitHub Pages'in yerleşik dal yayınıyla yapılandırılmıştır.
