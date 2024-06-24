function searchMobile() {
    const MobileName = document.getElementById('Input').value
    const resultDiv = document.getElementById('result');


    
    const MobileData = {
        'oppo': 'https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/reno10-pro-plus-5g-en/listpage/reno10-pro-plus-5g-427_600-purple.png.thumb.webp',
        'vivo': 'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1712112039807/55ac95a3bb24aac4da0a98f3c3236254.png'
        ,
        'redmi': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcygYildayBjFsfmxXhYuXrKHqmiplHPDixw&shttps://www.moosani.pk/images/product_gallery/1708939695_xiaomi-redmi-note-13-pakistan-priceoye-3qnqc-500x500.webp',
        'realme': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeTAvdIuJQfpvGzKfQGNUN8KcyxT8GDAZclQ&s'
        ,
        'iphone': 'https://www.mega.pk/items_images/Apple+iPhone+15+Pro+Max_-_24629.webp',
        'qmobile': 'https://www.mega.pk/items_images/Q+Mobile+Hot+5++3GB+RAM++32GB+Storage+Price+in+Pakistan%2C+Specifications%2C+Features_-_20152.webp',
        'infinix': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlURJfrMoEnVwzxnsDcbtFpb66lvrQYKfow&s',
        
        'sumsung': 'https://qmart.pk/cdn/shop/files/Samsung_Galaxy-S24-Ultra-Qmart-7_df6a9239-b001-48bd-af06-95b3b152ba10.jpg?v=1714206754&width=1000',
        'apple': 'https://www.digitaltrends.com/wp-content/uploads/2022/08/iPhone-SE-2022-Starlight-Back-in-Hand.jpg?resize=625%2C417&p=1',
        'nokia': 'https://fdn.gsmarena.com/imgroot/static/headers/makers/nokia-2023-1.jpg',
        
        'lg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCMFAhDd8Blxv7JD-UgdaOQst2so3cWkLsrg&s',
        
    };
    if (MobileData[MobileName]) {
        resultDiv.innerHTML = `
            <div class="mobile-name">${MobileName}</div>
            <img src="${MobileData[MobileName]}" alt="${MobileName}" class="mobile-image">
        `;
    } else {
        resultDiv.innerHTML = `<div class="mobile-name">Mobile not found</div>`;
    }

  
    
}




























