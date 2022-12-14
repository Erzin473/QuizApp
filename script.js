const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById("queston-cotainer")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

var shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener("click", () =>{
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
startButton.classList.add("hide")
shuffledQuestions = queston.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove("hide")
setNextQuestion()

}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions [currentQuestionIndex])
}

function showQuestion(queston){
    questionElement.innerText = queston.queston
    queston.answer.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}

function resetState(){
    clearSetStatusClass(document.body)
    nextButton.classList.add("hide")   
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove("hide")
    }else{
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
    
}

function setStatusClass(element,  correct){
    clearSetStatusClass(element)
    if (correct) {
        element.classList.add("correct")

    }else {
        element.classList.add("wrong")
    }
}

function clearSetStatusClass(element){
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const queston = [
    {
        queston: "What is 2 + 2",
        answer: [
            {text:  "4", correct: true},
            {text: "22", correct: false },
            {text: "8", correct: false },
            {text: "6", correct: false }
        ]
    },
    {
        queston: "What is 3 * 3",
        answer: [
            {text:  "9", correct: true},
            {text: "22", correct: false },
            {text: "77", correct: false },
            {text: "15", correct: false }
        ]
    },
    {
        queston: "What is 28 + 2",
        answer: [
            {text:  "8", correct: false},
            {text: "33", correct: false },
            {text: "12", correct: false },
            {text: "30", correct: true }
        ]
    },
    
]