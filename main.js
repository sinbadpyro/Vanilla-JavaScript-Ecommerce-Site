let shop = document.getElementById('shop');

let generateShop = () => {
    return (shop.innerHTML = shopItemsData
      .map((x) => {
        let { id, name, desc, img, price } = x;
       
        return `
        <div id=product-id-${id}   class="card">
        <img src=${img} alt="image1">
        <div class="container">
            <h2>${name}</h2>
                <p>${desc}</p>
                <div class="price-quantity">
                    <p class="price">${price}</p>
                    <div class="buttons">
                        <i class="bi bi-dash-lg plus"></i>
                        <div id=${id} class="quantity">0</div>
                        <i class="bi bi-plus-lg minus"></i>
                    </div>

                </div>

        </div>
    </div>
      `;
      })
      .join(""));
  };