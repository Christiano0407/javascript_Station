# javascript_Station
<<<<<<< HEAD
Proyects Javascript  and practice with anime.js 
#Links

[Links](https://animejs.com/)

# javascript_code (previous)

document.addEventListener(`DOMContentLoaded`, () => {
anime({
    targets: `.content-wrapper h1`,
    translateX: [-400, 0],
    easing: `easeOutExpo`,
    duration: 1500,
    delay: 1000,
    opacity:[0,1],
})

anime({
    targets:`p`,
    translateY: [50,0],
    easing: `easeOutExpo`,
    duration: 1500,
    delay: (el, i) => {
        return 1000 + 100 * i ;
    },
    opacity:[0, 1],
});
=======
Proyects and practice with Javascript
>>>>>>> cfb27fadf95e38b7c292d1015e0a0a78f02ef203
