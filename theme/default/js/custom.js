$(function () {
    $(".productItem").on("mouseenter", function () {
        $(this).find(".addToCart").css("display", "inline-block");
        /* wl.emitEvent("product-hover", {"prodId": productId}); */
    }).on("mouseleave", function () {
        $(this).find(".addToCart").css("display", "none")
    });
});
