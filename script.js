const ScrollContainer = document.querySelector(".Gallery")
const backButton = document.querySelector(".fa-circle-chevron-left")
const forwardButton = document.querySelector(".fa-circle-chevron-right")


ScrollContainer.addEventListener("wheel",(e)=>{

e.preventDefault()

ScrollContainer.scrollLeft = ScrollContainer.scrollLeft + e.deltaY

ScrollContainer.style.scrollBehavior = "auto"

})

backButton.addEventListener("click",(e)=>{
    ScrollContainer.style.scrollBehavior = "smooth"
    ScrollContainer.scrollLeft-=300
    
})

forwardButton.addEventListener("click",(e)=>{
    
    ScrollContainer.style.scrollBehavior = "smooth"
    
    ScrollContainer.scrollLeft+=300
})