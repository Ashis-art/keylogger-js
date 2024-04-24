const logdiv = document.getElementById("yellow")
const stateDiv = document.getElementById("grey")
const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")

startBtn.addEventListener("click",()=>{
    document.addEventListener("keydown",handleDown)
    document.addEventListener("keyup",handleUp)
})

stopBtn.addEventListener("click",()=>{
    document.removeEventListener("keydown",handleDown)
    document.removeEventListener("keyup",handleUp)
    logdiv.textContent = "";
    stateDiv.textContent = "";
})

function handleDown(e){
    logdiv.textContent = `Key ${e.key} pressed down`;
    stateDiv.textContent = "Key is down"
}

function handleUp(e){
    logdiv.textContent = `Key ${e.key} pressed up`;
    stateDiv.textContent = "Key is up"
}