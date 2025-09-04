


document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger, SplitText);
    console.log("plugn and js loaded");

    const text = SplitText.create("#text", { type: "words,chars",mask:"lines" , linesClass:"line++"});

    gsap.from(text.chars, {
        duration: 1,
        y: 100,       // animate from 100px below
        autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
        stagger: 0.05 // 0.05 seconds between each

    })  

    // add img and img2

    const timeline = gsap.timeline();

    timeline.to("#img" , {
        duration:2,
        x:10,
        rotate:-90,
        delay:1,
        yoyo:1,
        ease:"elastic"
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
         duration:10,
        x:10,
        rotate:-90,
        delay:1,
        ease:"bounce",
        scrollTrigger:{

            trigger:"#img2",
            start:"top 90%",
            end:"bottom 80%",
            scrub:true,
            markers:true , 
            pin:true,


        }


    })

    // text 
    gsap.to(".text",{
        opacity:0.4,
        x:100,
        y:10 , 
        scrollTrigger:{
            trigger:".text",
            start:"top bottom",
            end:"bottom 90%",
            scrub:true,
        }


    })



})