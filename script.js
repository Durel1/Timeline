const timeline = document.getElementById("timeline")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const circle = document.querySelectorAll(".circle")


let step = 1

function mainCode(){
    circle.forEach((circle, index)=>{
        if(index < step){
           circle.classList.add("active") 
        }else{
            circle.classList.remove("active")
        }
    })

    const active = document.querySelectorAll(".active")
    timeline.style.width = `${
        ((active.length - 1) / (circle.length - 1)) * 100
    }%`

    if(step ===1){
        prev.disabled = true
    }else if (step === circle.length){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }
}

next.addEventListener("click",()=>{
    step++
    if(step > circle.length){
        step = circle.length
    }
    mainCode()
})

prev.addEventListener("click",()=>{
    step--
    if(step < 1 ){
        step = 1
    }
    mainCode()
})