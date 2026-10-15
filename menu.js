// Menü buradan düzenlenir.
// Fiyat: "price" sayısını değiştir.
// İsim: "name" yazısını değiştir.
// Açıklama: "note" ekle, parantez içinde görünür. İstemiyorsan satırdan "note" kısmını sil.
// Görsel: images klasörüne aynı isimle fotoğraf koy, "image" yolunu ona göre yaz.
// Yeni ürün / kampanya: bir satırı kopyala, "id" yi benzersiz yap (ör. cay2).
window.BISCUIT_MENU = {
  "cafe": {
    "name": "BISCUIT",
    "subtitle": "GAME CENTER",
    "footerLine1": "BISCUIT GAME CENTER",
    "footerLine2": "İyi oyunlar, iyi eğlenceler 🎱"
  },
  "campaigns": [
    { "id": "tatli-cay", "name": "Tatlı + Çay", "price": 150, "image": "images/kampanya-tatli-cay.jpg" },
    { "id": "tatli-kahve", "name": "Tatlı + Kahve", "price": 200, "image": "images/kampanya-tatli-kahve.jpg" }
  ],
  "categories": [
    {
      "id": "sicak",
      "title": "☕ SICAK İÇECEKLER",
      "items": [
        { "id": "cay", "name": "Çay", "price": 40, "image": "images/cay.jpg" },
        { "id": "oralet", "name": "Oralet", "price": 50, "image": "images/oralet.jpg", "note": "Kivi, Muz, Kakao, Karadut, Portakal, Prenses, Elma, Şirin, Kuşburnu, Nane Limon, Limon, Atom, Kokteyl" },
        { "id": "turk-kahvesi", "name": "Türk Kahvesi", "price": 100, "image": "images/turk-kahvesi.jpg" },
        { "id": "espresso", "name": "Espresso", "price": 100, "image": "images/espresso.jpg" },
        { "id": "americano", "name": "Americano", "price": 100, "image": "images/americano.jpg" },
        { "id": "cappuccino", "name": "Cappuccino", "price": 100, "image": "images/cappuccino.jpg" },
        { "id": "latte", "name": "Latte", "price": 100, "image": "images/latte.jpg" },
        { "id": "mocha", "name": "Mocha", "price": 100, "image": "images/mocha.jpg" },
        { "id": "nescafe", "name": "Nescafe", "price": 100, "image": "images/nescafe.jpg" }
      ]
    },
    {
      "id": "soguk",
      "title": "🥤 SOĞUK İÇECEKLER",
      "items": [
        { "id": "su", "name": "Su", "price": 35, "image": "images/su.jpg" },
        { "id": "ice-tea", "name": "Ice Tea", "price": 90, "image": "images/ice-tea.jpg", "note": "Karpuz, Şeftali, Limon" },
        { "id": "coca-cola", "name": "Coca-Cola", "price": 90, "image": "images/coca-cola.jpg" },
        { "id": "fanta", "name": "Fanta", "price": 90, "image": "images/fanta.jpg" },
        { "id": "sprite", "name": "Sprite", "price": 90, "image": "images/sprite.jpg" },
        { "id": "avsar-elmali", "name": "Avşar Elmalı", "price": 90, "image": "images/avsar-elmali.jpg" },
        { "id": "avsar-karadut", "name": "Avşar Karadut & Frenk Üzümü", "price": 90, "image": "images/avsar-karadut.jpg" },
        { "id": "avsar-limon", "name": "Avşar Limon", "price": 90, "image": "images/avsar-limon.jpg" },
        { "id": "avsar-mandalina", "name": "Avşar Mandalina", "price": 90, "image": "images/avsar-mandalina.jpg" },
        { "id": "avsar-cilek", "name": "Avşar Çilek", "price": 90, "image": "images/avsar-cilek.jpg" },
        { "id": "karisik-meyve", "name": "Karışık Meyve Suyu", "price": 90, "image": "images/karisik-meyve.jpg" },
        { "id": "seftali", "name": "Şeftali Meyve Suyu", "price": 90, "image": "images/seftali.jpg" },
        { "id": "visne", "name": "Vişne Meyve Suyu", "price": 90, "image": "images/visne.jpg" }
      ]
    },
    {
      "id": "tatli",
      "title": "🍰 TATLI & ÇEREZ",
      "items": [
        { "id": "magnolya", "name": "Magnolya", "price": 150, "image": "images/magnolya.jpg" },
        { "id": "cerez", "name": "Çerez Tabağı", "price": 200, "image": "images/cerez.jpg" }
      ]
    }
  ]
};
