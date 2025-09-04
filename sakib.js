

document.addEventListener("DOMContentLoaded", () => {
    //list as many as you'd like

    console.log("dom loaded")
    gsap.registerPlugin(ScrollTrigger, SplitText);


    // split


    let split = SplitText.create(".split", { type: "words, chars ,lines" });

    // add gsap to split

    gsap.from(split.chars, {
        duration: 2,
        y: 100,
        autoAlpha: 0,
        stagger:{
            amount:0.5,
            from:"center",

        },
    })
    console.log(split);

    let loremtext = SplitText.create("#lorem",{type:"words,chars", mask:"lines",linesClass:"line++"
    });

    gsap.from(loremtext.chars,{
        duration:3,
        y:40,
        autoAlpha:0,
        stagger:0.04,
        
     
    

    })







    // view and scrolltrigger 

    gsap.to("#view", {


        scrollTrigger: {
            trigger: "#view",
            start: "top 20%",
            end: "bottom top",
            markers: true,
            pin: true,
            scrub: true,
        },
        x: 400,

    })


    let t = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: '#view',
            pin: true, // pin the trigger element while active
            start: 'top top', // when the top of the trigger hits the top of the viewport
            end: '+=500', // end after scrolling 500px beyond the start
            scrub: 1,
            pin: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar,
            toggleActions: "play none none none"

        }

    },);

    // view 2

    gsap.to("#view2", {
        backgroundColor: "red",
        rotation: -100,
        scale: 1,
        duration: 4,
        scrollTrigger: {
            trigger: "#view",
            start: "top bottom",
            end: "20px 90%",
            pin: true,
            scrub: true,
            toggleActions: "restart none none pause"


        }

    })










    // load dom

    // hello 







    gsap.fromTo("#hello",
        {
            x: 10,
            backgroundColor: "black",
            scale: 1.4,
            yoyo: true
            ,
            duration: 5,

        },
        {
            x: 20,
            y: 30,
            backgroundColor: "green",
            scale: 1,
            duration: 10,

        }
    )

    console.log("Dom loaded");

    // ball 

    gsap.fromTo("#ball", {

        x: window.innerWidth / 2,
        y: 40,
        opacity: 0.3,
        duration: 10,
        ease: "bounce(0.6)",

    },
        {
            x: 300,
            y: 20,
            opacity: 1,
            duration: 4,
            delay: 2,
            ease: "bounce({strength:0.5, endAtStart:true})"

        }
    )

    document.body.addEventListener("mousemove", (event) => {




        const { clientX, clientY } = event;


        // gsap effect 

        gsap.to("#box", {
            x: clientX,
            y: clientY,


            duration: 0.4,
            fontSize: "40px",
            boxShadow: "2px 2px 1px 0px",
            rotate: 360,
            ease: "elastic.inOut"







        })


        // box 2

        const box2 = document.getElementById("box2");


        box2.addEventListener("mouseover", () => {

            gsap.to(box2, {

                height: 200,
                width: 200,
                boxShadow: "2px 2px 0px 0px",
                backgroundColor: "red",
                rotationX: 100,


                duration: 3,



            }),
                // after 3 second
                gsap.from(box2, {

                    x: 300,
                    y: 100,
                    boxShadow: "2px 3px 1px",
                    ease: "elastic.inOut"



                })

        })


        // button 

        const boxsize = document.getElementById("boxsize");
        let tween = gsap.to(boxsize, { rotation: 360, x: 300, duration: 5, ease: "elastic", repeat: 1, yoyo: true, paused: true });
        // design
        console.log(tween)

        // make a function that gave dynamic value return 
        const EelementGet = (id = "") =>
            document.getElementById(id);


        EelementGet("play").addEventListener("click", () => {
            console.log("play click")
            tween.play();

        })
        // resume
        EelementGet("pause").addEventListener('click', () => {
            tween.pause();
            console.log("paused click")
        })

        // resume
        EelementGet("resume").addEventListener("click", () => {
            tween.resume();
            console.log(" resume ")
        })

        // stop 
        EelementGet("stop").addEventListener("click", () => {
            tween.restart();

        })









    })


    // scroll trigger 

    gsap.to("#scroll", {
        fontSize: "40px",

        delay: 0.4,
        scrollTrigger: {

            trigger: "#scroll",
            start: "top bottom",
            end: "bottom 30%",


            scrub: true,

            onLeave: () => {
                gsap.to("#scroll", {
                    fontSize: "10px"

                })
            }


        }

    });


    // timeline 

    const tl = gsap.timeline();

    // const tween2text = gsap.to("#text",{duration:10 , x:100, y:100,});

    ///
    gsap.to("#text", {


        backgroundColor: "black",
        color: "white",
        rotateX: 10,
        duration: 5,
        opacity: 0.3,
        height: "600px",


        scrollTrigger: {
            trigger: "#text",
            start: "top bottom",
            end: "bottom ",


            scrub: true,
            markers: true,
            onLeave: () => {
                gsap.to("#text", {
                    fontSize: "20px",
                    color: "black"

                })
            }
        }

    })

    // add into time line
    // create time line for box 

    const timeLine = gsap.timeline();

    timeLine.to(".div1", {
        rotation: -343,
        duration: 2,
        ease: "elastic"
    })
    timeLine.to(".div2", {

        rotation: -343,
        duration: 2,
        ease: "elastic"

    })
    timeLine.to(".div3", {
        rotation: -343,
        duration: 10,
        delay: 0.7,
        ease: "elastic",

        scrollTrigger: {
            trigger: ".div3",
            start: "top 90%",
            markers: true,
            scrub: true
        }
    })
    timeLine.to(".div4", {
        rotation: -343,
        duration: 2,
        ease: "elastic"
        ,
        scrollTrigger: {
            trigger: ".div3",
            start: "top 90%",
            markers: true,
            scrub: true,
            onmouseover: () => {

                gsap.to(".div", {
                    rotation: -343,
                    duration: 2,
                    ease: "elastic"
                })

            },
            onmouseleave: () => {
                gsap.to(".div", {
                    rotation: -343,
                    duration: 2,
                    ease: "elastic"
                })


            }
        }
    });


    // custome bounce




    console.log(timeLine, "timdLine")




})