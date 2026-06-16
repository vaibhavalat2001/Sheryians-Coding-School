gsap.from("#page1 #box",{
    scale: 0,
    duration: 3,
    delay: 1,
    rotate: 360,
    // stagger: 2,
    repeat: -1,
    yoyo: true
})

gsap.from("#page2 h1",{
    opacity: 0,
    duration: 2,
    x: 500,
    scrollTrigger: {
        trigger: "#page2 h2", 
        scroller: "body",
        // markers: true,
        start: "top 100%",
        scrub: 1
    }
})

gsap.from("#page2 h2", {
    opacity: 0,
    duration: 2,
    x: -500,
    scrollTrigger: {
        trigger: "#page2 h2",
        scroller: "body",
        // markers: true,
        start: "top 100%",
        scrub: 1
    }
})

// gsap.from("#page2 #box",{
//     scale: 0,
//     duration: 3,
//     delay: 1, 
//     rotate: 360,
//     // scrollTrigger: "#page #box",
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller: "body",
//         markers: true, 
//         start: "top 50%"    // start when scroller start hit the page start/end
//     }
// })

gsap.from("#page2 #box",{
    scale: 0,
    duration: 1,
    rotate: 720,
    scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",
        // markers: true,
        start: "top 100%",
        end:"top 1%",
        scrub: 2,
        // pin: true
    }
})


// page 4 to 6
gsap.to("#page5 h1", {
    transform: "translate(-175%)",
    duration: 0.1,
    scrollTrigger: {
        trigger: "#page5",
        scoller: "body",
        markers: true,
        start: "top 0%",
        end: "top -200%",
        pin: true,
        scrub: 3
    }
})