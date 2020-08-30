// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// formulating our medical questions
let questions = [
    {
        question :"What carries oxygen in your body?",
        choiceA:"plasma",
        choiceB:"platelets",
        choiceC:"white blood cells",
        choiceD:"red blood cells",
        correct:"D"
    },
    {
        question :"What cell increases the most during viral infections, such as COVID?",
        choiceA:"neutrophils",
        choiceB:"eiosinophils",
        choiceC:"lymphocytes",
        choiceD:"basophils",
        correct:"C"
    },
    {
        question :"Who is the universal donor for red blood cells?",
        choiceA:"A+",
        choiceB:"O-",
        choiceC:"B+",
        choiceD:"AB-",
        correct:"B"
    },
    {
        question :"What substance in elevated numbers causes jaundice when liver is damged?",
        choiceA:"bilirubin",
        choiceB:"lipids",
        choiceC:"protein",
        choiceD:"sugars",
        correct:"A"
    }
];

//lastQuestion is in index form which is always one less than the length. index is 3 length is 4.
var lastQuestion = questions.length - 1;
var multipleQuestions = 0;
var count = 0;
var questionTime = 10; // 10s
var TIMER;
var score = 0;

// creating the question with respective multiple choices
function questionFormat(){
    //initially q = questions[0] = first block of questions= 'carry oxygen' question
    let q = questions[multipleQuestions];
    //displays index 0 question in question div
    question.innerHTML = q.question;
    //access the respective div to dipslay the multiple choices 
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}
//starts the whole process by clicking start
start.addEventListener("click",startQuiz);

// adding function to click
function startQuiz(){
    //makes "start" disapear
    start.style.display = "none";
    questionFormat();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// answer progress
function renderProgress(){
    for(let i = 0; i <= lastQuestion; i++){
    }
}



// deals with count
function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        count++
    }else{
        count = 0;

        if(multipleQuestions < lastQuestion){
            multipleQuestions++;
            questionFormat();
        }
        else{
            // end the quiz and show the score
            clearInterval(TIMER);
            quiz.style.display = "none";
            scoreRender();
        }
    }
}

//this checks that snwer is right or wrong
//if checkAnswer is equivalent to the correct answer the score goes up
function checkAnswer(answer){
    if( answer == questions[multipleQuestions].correct){
        // answer is correct
        score++;
    }
    count = 0;
    if(multipleQuestions < lastQuestion){
        multipleQuestions++;
        questionFormat();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        quiz.style.display = "none";
        scoreRender();
    }
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    scoreDiv.innerHTML += "<p>"+ "Your score is: "+ "<br>" + scorePerCent +"%</p>";
}
