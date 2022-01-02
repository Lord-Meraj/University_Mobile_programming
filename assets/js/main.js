var choosensong = sessionStorage.getItem('songname');
$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        nav: false,
        // navClass:["btn-custome","btn-custome"],
        // navText: ["<i class='fa fa-backward'></i>", "<i class='fa fa-forward'></i>"],
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            }
        }
    });

});

$("#nextbtn").click(function() {
    $(".owl-next").click();

});
$(".prev").click(function() {
    $(".owl-prev").click();
});