var tl=gsap.timeline()
tl.to("page 1",{
    y:"100vh"
    scale:0.6,
    duration:0
})
 tl.from("#page1",{
    y:"30vh",
    duration:1,
    delay:1,
})
tl.from("#page1",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0,
})