const quizData = [
    {
       question: "Eyes Wide Shut'taki gizli partiye erişmenin şifresi nedir?",
       a:"Eroica",
       b:"Fidello",
       c:"Figaro",
       d:"Strangelove",
       correct:"b",
    
    },
    {
        question: "2001: A Space Odyssey'de ilk diyalog satırından önce kaç dakika geçer?",
        a:"7",
        b:"25",
        c:"17",
        d:"48",
        correct:"b",
     
     },
     {
        question: "Stanley Kubirck'in çekmiş olduğu en fazla bütçeli filmi hangisidir?",
        a:"Spartacus",
        b:"The Shining",
        c:"Eyes Wide Shut",
        d:"2001:A Space Odyssey",
        correct:"c",
     
     },
     {
        question: "Stanley Kubrick'in son filmi hangisidir?",
        a:"A Clockwork Orange",
        b:"Full Metal Jacket",
        c:"The Shining",
        d:"Eyes Wide Shut",
        correct:"d",
     
     },
     {
        question: "Stephan King'in aynı adlı romanından sinemaya uyarlanan Kubrick filmi hangisidir?",
        a:"2001:A Space Odyssey",
        b:"The Shining",
        c:"Eyes Wide Shut",
        d:"Spartacus",
        correct:"a",
     
     },
];
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score=0 

loadQuiz()

function loadQuiz(){
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d
}

function deselectAnswers(){
    
    answerEls.forEach(answerEl => answerEl.checked =false)
}
function getSelected(){
     let answer
     answerEls.forEach(answerEl =>{
         if(answerEl.checked){
             answer = answerEl.id
         }
     })
     return answer
}
submitBtn.addEventListener('click',() =>{
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++
        if(currentQuiz < quizData.length){
            loadQuiz()
        }else {
            quiz.innerHTML=`
            <h2>Dogru cevap sayınız :  ${score}/${quizData.length}</h2>
            <button onclick ="location.reload()">Baştan başla</button>
            `
        }
    }
})





