"use strict";
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => generateCards(data))
  .catch((err) => console.log("err: ", err));

function generateCards(data) {
  const container = document.createElement("div");
  container.classList.add("container");
  document.body.append(container);

  data.forEach((product) => {
    const card = document.createElement("a");
    card.setAttribute("href", "#");
    card.classList.add("card");
    container.append(card);

    const rateBlock = document.createElement("div");
    rateBlock.classList.add("rate");
    card.append(rateBlock);

    const rateValue = document.createElement("span");
    rateValue.textContent = product.rating.rate;
    rateBlock.append(rateValue);

    const star = document.createElement("i");
    star.classList.add("fa-solid");
    star.classList.add("fa-star");
    star.classList.add("rate-icon");
    rateBlock.append(star);

    const imgCard = document.createElement("img");
    imgCard.classList.add("card-img");
    imgCard.setAttribute("alt", `${product.title}`);
    imgCard.setAttribute("src", `${product.image}`);
    card.append(imgCard);

    const titleCard = document.createElement("h2");
    titleCard.classList.add("card-title");
    titleCard.textContent = product.title;
    card.append(titleCard);

    const price = document.createElement("div");
    price.classList.add("price");
    price.textContent = `$${product.price}`;
    card.append(price);
  });
}
