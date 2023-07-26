
var startBtn=document.querySelector("#start-btn")
var questionStart=document.querySelector(".question-screen")
var intro=document.querySelector(".intro")

startBtn.addEventListener("click",function(){
    console.log("start button worked!")
    intro.classList.add("hidden")
    questionStart.classList.remove("hidden")
})