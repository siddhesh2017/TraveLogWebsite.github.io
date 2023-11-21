function init() 
{
    
gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".container"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".container", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".container").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

init()

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".parallax #text",
        scroller:".container",
        start:"top 35%",
        end:"top 0",
        scrub:3
    }
})

tl.to(".parallax #text",{
    y:400,
},"animation")

tl.to(".parallax #leaf",{
    x:100,
    y:-100,
},"animation")

tl.to(".parallax #hill1",{
    y:50,
},"animation")

tl.to(".parallax #hill5",{
    x:70,
},"animation")

tl.to(".parallax #hill4",{
    x:-70,
},"animation")

tl.to(".parallax #tree",{
    y:70,
},"animation")


var tl2 = gsap.timeline({
  scrollTrigger:{
      trigger:".sec #heading-1",
      scroller:".container",
      start:"top 80%",
      end:"top 300",
      scrub:3
  }
})

tl2.to(".sec #heading-1",{
  x:-90,
},"animation")

tl2.to(".sec #heading-2",{
  x:90,
},"animation")

tl2.to(".sec .subheading",{
  x:-90,
},"animation")




let next = document.querySelector('.next')
let prev = document.querySelector('.previous')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) 
})


var tl3 = gsap.timeline({
  scrollTrigger:{
      trigger:".storesection .storetop h1",
      scroller:".container",
      start:"top 80%",
      end:"top 80",
      scrub:2
  }
})

tl3.to(".storesection .storetop h1",{
  x:430,
},"animation")


tl3.to(".storesection .storetop h5",{
  x:670,
},"animation")


tl3.to(".storesection .card-1",{
    width: 280,
    height: 400,
},"animation")

var tl4 = gsap.timeline({
  scrollTrigger:{
      trigger:".process #sideleaf",
      scroller:".container",
      start:"top 130%",
      end:"top 500",
      scrub:2
  }
})

tl4.to(".process #sideleaf",{
  x: 50,
},"animation")

tl4.to(".process #normalleaf",{
  x: -90,
},"animation")

tl4.to(".process #topleaf",{
  y: 200,
},"animation")

