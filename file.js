const quizDB = [{
        question: "Q1: What is the full form of Html?",
        a: "Hello to my text",
        b: "Hey markup text Language",
        c: "HyperText Markup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"

    },

    {
        question: "Q2:CSS define as ?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cascading Style slip",
        d: "Cascading Super sheets",
        ans: "ans1"
    },

    {
        question: "Q3: What is full form of HTTP ?",
        a: "Hyper Transfer protocol",
        b: "Hyper Test testing protocol ",
        c: "HyperText testing protocol",
        d: "Hypertext Transfer Protocol",
        ans: "ans4"
    },

    {
        question: "Q4:What is full form of JS?",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JavaScrept",
        d: "JavaSerial",
        ans: "ans1"
    },

    {
        question: "Q5: What is the popular framwork of JS?",
        a: "MogoDB",
        b: "Numpy",
        c: "Bootstrap",
        d: "Angular",
        ans: "ans4"
    },

];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');




const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');


let questionCount = 0;

let score = 0;
const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;


}
loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};
const deselectAll = () => {
    answer.forEach((curAnsElem) => curAnsElem.checked = false)
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    };

    questionCount++;

    const deselectAll = () => {
        answers.forEach((curAnsElem) => false)
    }

    if (questionCount < quizDB.length) {
        loadQuestion()
    } else {
        showScore.innerHTML = `

            <h3> You score ${score} /${quizDB.length} </h3>
            <button class ="btn" onclick="location.reload()">PlayAgain</button>
            `;

        showScore.classList.remove('scoreArea')
    }

});