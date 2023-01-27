const bubble = document.querySelector(".bubble")
const bubbleSize = {height:50,width:50}

document.addEventListener("mousemove",(event)=>{
    bubble.style.left = (event.clientX - bubbleSize.width/2)  + 'px'
    bubble.style.top = (event.clientY - bubbleSize.height/2)  + 'px'
})

document.addEventListener("mouseenter",()=>{
    bubble.classList.add("show")
})

document.addEventListener("mouseleave",()=>{
    bubble.classList.remove("show")
})