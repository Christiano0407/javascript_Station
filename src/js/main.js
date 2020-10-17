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
})

})