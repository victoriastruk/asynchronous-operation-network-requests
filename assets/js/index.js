"use strict";

const productsUrl = "https://fakestoreapi.com/products";
fetch(productsUrl)
  .then((response) => response.json())
  .then((data) => generateCards(data))
  .catch((err) => console.log("err: ", err));

function generateCards(products) {
  const container = document.createElement("div");
  container.classList.add("container");
  document.body.append(container);

  products.forEach((product) => {
    const card = createCard(product);
    container.append(card);
  });
}

function createCard({ rating, title, image, price: productPrice }) {
  const card = document.createElement("a");
  card.href = "#";
  card.classList.add("card");
  const rateBlock = createRateBlock(rating);
  const imgCard = createImage(image, title);
  const titleCard = createTitle(title);
  const price = createPriceBlock(productPrice);
  card.append(rateBlock, imgCard, titleCard, price);
  return card;
}

function createRateBlock(rating) {
  const rateBlock = document.createElement("div");
  rateBlock.classList.add("rate");
  const rateValue = document.createElement("span");
  rateValue.textContent = rating.rate;

  const star = document.createElement("i");
  star.classList.add("fa-solid", "fa-star", "rate-icon");
  rateBlock.append(rateValue, star);

  return rateBlock;
}

function createImage(src, alt) {
  const imgCard = document.createElement("img");
  imgCard.classList.add("card-img");
  imgCard.alt = alt;
  imgCard.src = src;
  return imgCard;
}

function createTitle(title) {
  const titleCard = document.createElement("h2");
  titleCard.classList.add("card-title");
  titleCard.textContent = title;
  return titleCard;
}

function createPriceBlock(price) {
  const priceBlock = document.createElement("div");
  priceBlock.classList.add("price");
  priceBlock.textContent = `$${price}`;
  return priceBlock;
}
