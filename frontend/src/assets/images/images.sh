#!/usr/local/bin/zsh

names=(
    bamboo-watch.jpg
    black-watch.jpg
    blue-band.jpg
    blue-t-shirt.jpg
    bracelet.jpg
    chakra-bracelet.jpg
    galaxy-earrings.jpg
    game-controller.jpg
    gaming-set.jpg
    gold-phone-case.jpg
    green-earbuds.jpg
    green-t-shirt.jpg
    grey-t-shirt.jpg
    headphones.jpg
    lime-band.jpg
    mini-speakers.jpg
    painted-phone-case.jpg
    pink-band.jpg
    pink-purse.jpg
    product-placeholder.svg
    purple-band.jpg
    purple-gemstone-necklace.jpg
    purple-t-shirt.jpg
    shoes.jpg
    sneakers.jpg
    teal-t-shirt.jpg
    yellow-earbuds.jpg
    yoga-mat.jpg
    yoga-set.jpg
)

for img in $names; do
    curl -O "https://www.primefaces.org/primeng/showcase/assets/showcase/images/demo/product/$img"
done
