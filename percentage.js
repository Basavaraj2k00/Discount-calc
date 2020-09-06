function calculate() {


    var price = 0,
        discount = 0,
        savings = 0,
        afterDiscount = 0;
    price = Number(document.discountCalculator.price.value);
    discount = Number(document.discountCalculator.discount.value);
    afterDiscount = price - (price * discount) / 100;
    savings = price - afterDiscount;
    document.discountCalculator.price.value = price.toFixed(2);
    document.discountCalculator.discount.value = discount.toFixed(2);
    document.discountCalculator.afterDiscount.value = afterDiscount.toFixed(2);
    document.discountCalculator.savings.value = savings.toFixed(2);

}
