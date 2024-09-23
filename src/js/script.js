window.addEventListener("load", () => {


    var slider2 = new Swiper(".mySwiper2", {
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2"
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination2",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet ' + className + '"></span>';
            }
        },
        breakpoints: {}
    });

    let receptor1 = document.querySelector('.LeftBottomItemTop1');
    let blockTop1 = document.querySelector('.LeftBottomItemBottom1');
    let receptor2 = document.querySelector('.LeftBottomItemTop2');
    let blockTop2 = document.querySelector('.LeftBottomItemBottom2');
    let receptor3 = document.querySelector('.LeftBottomItemTop3');
    let blockTop3 = document.querySelector('.LeftBottomItemBottom3');
    let receptor4 = document.querySelector('.LeftBottomItemTop4');
    let blockTop4 = document.querySelector('.LeftBottomItemBottom4');
    let receptor5 = document.querySelector('.LeftBottomItemTop5');
    let blockTop5 = document.querySelector('.LeftBottomItemBottom5');
    let receptor6 = document.querySelector('.LeftBottomItemTop6');
    let blockTop6 = document.querySelector('.LeftBottomItemBottom6');
    let receptor7 = document.querySelector('.LeftBottomItemTop7');
    let blockTop7 = document.querySelector('.LeftBottomItemBottom7');
    let receptor8 = document.querySelector('.LeftBottomItemTop8');
    let blockTop8 = document.querySelector('.LeftBottomItemBottom8');

    receptor1.addEventListener("click", () => {
        blockTop1.classList.toggle('other');
    })

    receptor2.addEventListener("click", () => {
        blockTop2.classList.toggle('other');
    })

    receptor3.addEventListener("click", () => {
        blockTop3.classList.toggle('other');
    })

    receptor4.addEventListener("click", () => {
        blockTop4.classList.toggle('other');
    })

    receptor5.addEventListener("click", () => {
        blockTop5.classList.toggle('other');
    })

    receptor6.addEventListener("click", () => {
        blockTop6.classList.toggle('other');
    })

    receptor7.addEventListener("click", () => {
        blockTop7.classList.toggle('other');
    })

    receptor8.addEventListener("click", () => {
        blockTop8.classList.toggle('other');
    })

    // var slider3 = new Swiper(".mySwiper3", {
    //     navigation: {
    //         nextEl: ".swiper-button-next3",
    //         prevEl: ".swiper-button-prev3"
    //     },
    //     pagination: {
    //         el: ".swiper-pagination3",
    //         clickable: true,
    //         renderBullet: function (index, className) {
    //             return '<span class="bullet3 ' + className + '"></span>';
    //         }
    //     },
    //     loop: true,
    //     breakpoints: {
    //         760: {
    //             slidesPerView: 3,
    //             slidesPerColumn: 1
    //         },
    //         999: {
    //             slidesPerView: 3,
    //             slidesPerColumn: 3
    //         },
    //     }
    // });

    // var slider4 = new Swiper(".mySwiper4", {
    //     navigation: {
    //         nextEl: ".swiper-button-next4",
    //         prevEl: ".swiper-button-prev4"
    //     },
    //     loop: true,
    //     pagination: {
    //         el: ".swiper-pagination4",
    //         clickable: true,
    //         renderBullet: function (index, className) {
    //             return '<span class="bullet ' + className + '"></span>';
    //         }
    //     },
    //     breakpoints: {
    //         760: {
    //             slidesPerView: 3,
    //             slidesPerColumn: 1
    //         },
    //         999: {
    //             slidesPerView: 1,
    //             slidesPerColumn: 1
    //         },
    //     }
    // });

    // var slider5 = new Swiper(".mySwiper5", {
    //     navigation: {
    //         nextEl: ".swiper-button-next5",
    //         prevEl: ".swiper-button-prev5"
    //     },
    //     pagination: {
    //         el: ".swiper-pagination5",
    //         clickable: true,
    //         renderBullet: function (index, className) {
    //             return '<span class="bullet ' + className + '"></span>';
    //         }
    //     },
    //     loop: true,
    //     breakpoints: {
    //         760: {
    //             slidesPerView: 3,
    //             slidesPerColumn: 1
    //         }
    //     }
    // });

    // var slider6 = new Swiper(".mySwiper6", {
    //     navigation: {
    //         nextEl: ".swiper-button-next6",
    //         prevEl: ".swiper-button-prev6"
    //     },
    //     pagination: {
    //         el: ".swiper-pagination6",
    //         clickable: true,
    //         renderBullet: function (index, className) {
    //             return '<span class="bullet ' + className + '"></span>';
    //         }
    //     },
    //     loop: true,
    //     breakpoints: {
    //         760: {
    //             slidesPerView: 3,
    //             slidesPerColumn: 1
    //         }
    //     }
    // });

    // var slider7 = new Swiper(".mySwiper7", {
    //     navigation: {
    //         nextEl: ".swiper-button-next7",
    //         prevEl: ".swiper-button-prev7"
    //     },
    //     pagination: {
    //         el: ".swiper-pagination7",
    //         clickable: true,
    //         renderBullet: function (index, className) {
    //             return '<span class="bullet ' + className + '"></span>';
    //         }
    //     },
    //     loop: true,
    //     breakpoints: {
    //         760: {
    //             slidesPerView: 1,
    //             slidesPerColumn: 1
    //         }
    //     }
    // });

//     let boton = document.querySelector('.bloqueFloat');

//    window.addEventListener("scroll", (e) => {

//         console.log(window.scrollY);





})


