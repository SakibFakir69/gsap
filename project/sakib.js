


// offset width



document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger, SplitText);
    console.log("plugn and js loaded");

    // mouse

    document.addEventListener("mousemove", (event) => {
        const { clientX, clientY } = event;
        const mouse = document.getElementById("mouse");
        mouse.style.transform = `translaate${clientX}px, ${clientY}px`;

        gsap.to("#mouse", {
            height: 150,
            width: 150,
            yoyo: true,
            ease: "elastic",

        })
    })

    const text = SplitText.create("#text", { type: "words,chars", mask: "lines", linesClass: "line++" });

    gsap.from(text.chars, {
        duration: 1,
        y: 100,       // animate from 100px below
        autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
        stagger: 0.05 // 0.05 seconds between each

    })

    // add img and img2

    const timeline = gsap.timeline();

    timeline.to("#img", {
        duration: 2,
        x: 10,
        rotate: -90,
        delay: 1,
        yoyo: 1,
        ease: "elastic",
        scrollTrigger: {

            trigger: "#img",
            start: "top bottom",
            end: "bottom 90%"
        }

    })

    // img
    //   timeline.to("#img2" , {
    //     duration:3,
    //     x:10,
    //     rotate:10,
    //     delay:1,
    //     ease:"elastic",



    // })
    // gsap 
    gsap.to("#img2", {
        duration: 4,
        x: 10,
        rotate: -90,
        delay: 1.5,
        ease: "bounce",
        scrollTrigger: {

            trigger: "#img2",
            start: "top 90%",
            end: "bottom 50%",
            scrub: true,

            markers: true,



        }


    })

    // text 
    gsap.to(".text", {
        opacity: 0.4,
        x: 100,
        y: -window.innerWidth,
        duration: 4,
        delay: 0.5,


        scrollTrigger: {
            trigger: ".text",
            start: "top 70%",
            end: "bottom 30%",
            markers: true,


            scrub: true,



        }


    })

    // h1

    gsap.fromTo("#h1",
        {
            x: -window.innerWidth,
            duration: 5,
            opacity: 0,
            dealy: 2,

        },
        {
            x: window.innerWidth - 400,
            opacity: 1,
            duration: 10,



        }

    )


    // sakib

    gsap.fromTo("#sakib", {
        // to 
        opacity: 0.6,
        rotation: 0,
        duration: 4,
        delay: 0.5,





    },
        {
            opacity: 1,
            duration: 5,
            delay: 0.5,
            rotation: 360,
            y: window.innerHeight,



            scrollTrigger: {
                trigger: "#sakib",
                top: "top center",
                end: "bottom 40px",
                pin: true,
                scrub: true,
                markers: true,

            }


        })

    // box-2 box 1

    gsap.fromTo(".box1",
        {
            x: -window.innerWidth,
            opacity: 0.5,
            duration: 5,
            delay: 0.5,


        },
        {
            x: window.innerWidth + 170,
            opacity: 1,
            duration: 6,
            delay: 0.4,
            direction: "left",

            scrollTrigger: {
                trigger: ".box1",
                start: "top center",
                end: "bottom 50px",
                scrub: true,
                markers: true,


            }

        }
    )

    // box2

    gsap.fromTo(".box2", {
        // to

        x: window.innerWidth,
        duration: 5,
        delay: 0.5,
        direction: "left",




    },
        {
            // from
            x: -window.innerWidth,
            duration: 5,
            delay: 0.5,
            scrollTrigger: {
                trigger: ".box2",
                start: "top 98%",
                end: "bottom 10%",
                markers: true,
                scrub: true,

            }

        }

    )


    // box a b c

    const tl = gsap.timeline();

    tl.to(".a", {
        x: 400,
        rotation: 360,
        duration: 3,

        scrollTrigger: {
            trigger: ".a",
            pin: true,

            toogleAction: "play restart reverse none",
            scrub: true,

        }
    })
    // gsap
    tl.to(".b", {
        x: 400,
        rotation: 360,
        duration: 3,
        scrollTrigger: {
            trigger: ".b",
            toogleAction: "play restart reverse none",
            scrub: true
        }
    })

    // conatiner

    // const tl2 = gsap.timeline();
    // tl2.from("#ss", {xPercent:100})
    //  tl2.from("#sakib2", {yPercent:-100})


    //  create scroll trigger

    gsap.utils.toArray("#container img").forEach((panel, i) => {

        ScrollTrigger.create({
            trigger: panel,
            start: "top top",

            pin: true,
            scrub: true,


        })
        console.log(panel, i)




    })
    // 2

    const container2 = gsap.utils.toArray("#container2  ");
    console.log(container2)

    gsap.to(container2, {
        xPercent: -100 * (container2.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#container2",
            pin: true,
            scrub: 1,
            snap: 1 / (container2.length - 1),
              end: () => "+=" + (document.querySelector("#container2").scrollWidth - window.innerWidth),
        }
    })





})