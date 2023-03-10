const questions = document.querySelectorAll(".line-p")
const answers = document.querySelectorAll(".answer")
const arrowDowns = document.querySelectorAll(".arrow-down")


for (let index = 0; index < questions.length; index++) {
  questions[index].addEventListener("click",function(){
    answers[index].classList.toggle("show")
    arrowDowns[index].classList.toggle("arrow-up")
    questions[index].classList.toggle("line-bold")

    for (let index1 = 0; index1 < questions.length; index1++) {
      if (index !== index1 && answers[index].classList === "show") {
        answers[index].classList.toggle("answer")
      } else {
        
      }
      
    }
  })

  

  
}

