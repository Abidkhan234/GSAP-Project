let typed = new Typed("#text-changing", {
    strings: ["Developer", "Designer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
});

let tl = gsap.timeline();

// For navbar animation
tl.from("#nav-right", {
    duration: 1,
    y: -30,
    opacity: 0
})

tl.from("#nav-left ul li", {
    duration: 1,
    y: -30,
    opacity: 0,
    stagger: 0.2
})
// For navbar animation

// For hero-section
tl.from(".hero-section div", {
    duration: 1,
    y: -40,
    opacity: 0,
})

// For hero-section

// For skils-section

gsap.from(".skills-section .card-container .card", {
    duration: 1,
    opacity: 0,
    y: -30,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".skills-section .card-container .card",
        scroller: "body",
        start: "top 50%"
    }
})


// For skils-section

// For exp section

gsap.to(".exp-section h1", {
    duration: 1,
    transform: `translateX(-230%)`,
    scrollTrigger: {
        trigger: ".exp-section",
        scroller: "body",
        start: "top 0%",
        end: "top -155%",
        scrub: 2,
        pin: true,
    }
})

// For exp section