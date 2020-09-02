import './sass/style.scss';

document.getElementById("trigger").onclick = function() {
    open()
};

document.getElementsByClassName("navigation__list").onclick = function() {
    close()
}
  
function open() {
    document.getElementById("navigation").classList.toggle("show");
}

function close() {
    document.getElementById("navigation").classList.toggle("show");
}

$('.promo').slick({
    dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><span><</span></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-next"><span>></span></button>',
    responsive: [
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                arrows: true,
                dots: false
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
});