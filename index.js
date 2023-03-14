const questions = document.querySelectorAll(".line-p")
const answers = document.querySelectorAll(".answer")
const arrowDowns = document.querySelectorAll(".arrow-down")
let active;

for (let index = 0; index < questions.length; index++) {
  questions[index].addEventListener("click",function(){
    if ((active || active === 0) && active !== index) {
      answers[active].classList.remove("show")
      arrowDowns[active].classList.remove("arrow-up")
      questions[active].classList.remove("line-bold")
    }

    active = index
    answers[index].classList.toggle("show")
    arrowDowns[index].classList.toggle("arrow-up")
    questions[index].classList.toggle("line-bold")

   
  })

  

  
}


