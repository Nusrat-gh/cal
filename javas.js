let searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
};
let shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#cart-btn").onclick = () => {
  shoppingCart.classList.toggle("active");
};

let register_btn = document.querySelector(".Register-btn");
let login_btn = document.querySelector(".Login-form");
let form = document.querySelector(".Form-box");
register_btn.addEventListener("click", () => {
  form.classList.add("change-form");
});

login_btn.addEventListener("click", () => {
  form.classList.remove("change-form");
});
