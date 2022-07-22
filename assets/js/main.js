$(document).ready(function () {
    $(".navbar-nav .nav-item").bind("click", function (event) {
        // event.preventDefault();
        var clickedItem = $(this);
        $(".navbar-nav .nav-item").each(function () {
            $(this).removeClass("active");
            $(this).removeClass("rounded");
        });
        clickedItem.addClass("active");
        clickedItem.addClass("rounded");
    });
});