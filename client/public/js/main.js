$(document).ready(async function () {
  const productsData = await fetch("http://localhost:3215/api/products", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  let products = await productsData.json();
  products.forEach((product) => {
    let html = `
      <div class="product_box">
            <h3>${product.name}</h3>
            <a href="productdetail.html"><img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8a100b24-af30-4d23-adb0-beaf2a2799a3/dunk-low-shoes-R8Sn2r.png" style="max-width: 100%" alt="Shoes 1" /></a>
            <p>${product.description}</p>
            <p class="product_price">${moneyFormatted(product.price)}</p>
            <a href="shoppingcart.html" class="addtocart"></a>
            <a href="productdetail.html" class="detail"></a>
        </div>`;
    $("#content").append(html);
  });
});
function moneyFormatted(money) {
  let formatters = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return formatters.format(money);
}
