var triviaGame = [
    {
        Question: "Which U.S. president issued the Emancipation Proclamation?",
        Answer: {
            A: "Abraham Lincoln",
            B: "George Washington",
            C: "James Edison",
            D: "Andrew Johnson"
        },
        CorrectAnswer: "Abraham Lincoln"
    },
    {
        Question: "Who is the actor in John Wick?",
        Answer: {
            A: "Keanu Reeves",
            B: "Ben Afleck",
            C: "Peter Parker",
            D: "Danny"
        },
        CorrectAnswer: "Keanu Reeves"
    },
    {
        Question: "The United States Supreme Court consists of how many judges?",
        Answer: {
            A: "Four",
            B: "Nine",
            C: "Six",
            D: "Two"
        },
        CorrectAnswer: "Nine"
    },
    {
        Question: "What is the color of the Underdog's cape",
        Answer: {
            A: "Green",
            B: "Yellow",
            C: "Red",
            D: "Blue"
        },
        CorrectAnswer: "Blue"
    },
    {
        Question: "Olympia is the capital city of which U.S. state?",
        Answer: {
            A: "Alabama",
            B: "Virgina",
            C: "Washington",
            D: "New Jersey"
        },
        CorrectAnswer: "Washington"
    }
]

var triviaCard = $("#card");
var gameTime = $("#time");
var startButton = $("#start");
var submitButton = $("#submit");
var triviaQuestion = $("#questions");
var radioButton = $("#radioBtn[name=radio]");
var label = $("#radioBtn[for=radioBtn");
var optionCheck = $(".form-check");
var optionA = $("#ansA");
var optionB = $("#ansB");
var optionC = $("#ansC");
var optionD = $("#ansD");
var buttonA = $(".btnA");
var buttonB = $(".btnB");
var buttonC = $(".btnC");
var buttonD = $(".btnD");
var userAnswer;
var i = 0;

// for (var i=0; i<triviaGame.length; i++){


startButton.on("click", function(){
    //console.log(this);
    //this.style.visibility = "hidden";
    startButton.hide();

    //console.log(triviaCard[0].style.visibility = "visible");
    triviaCard[0].style.visibility = "visible";

    //console.log(gameTime[0].style.visibility = "visible");
    gameTime[0].style.visibility = "visible"

    submitButton[0].style.visibility = "visible";

    nextQuestion();
});

function clearButton(){
    //for(var k = 0; k<$("input[name='radio']").length; k++){
        $("input[name='radio']").attr('checked', false);
        console.log($("input[name='radio']"));
        
    //}
}

function nextQuestion(){    
    
    if(i<triviaGame.length){
    //clearButton();
    //console.log($("input[name='radio']"));
    //console.log("correct answer is: ",userAnswer);
    console.log(triviaGame[i].CorrectAnswer);
    //console.log(triviaGame[i].Question);
    triviaQuestion.text(triviaGame[i].Question);
    optionA.text(triviaGame[i].Answer.A);
    optionB.text(triviaGame[i].Answer.B);
    optionC.text(triviaGame[i].Answer.C);
    optionD.text(triviaGame[i].Answer.D);    
    buttonA.attr("value", triviaGame[i].Answer.A);
    buttonB.attr("value", triviaGame[i].Answer.B);
    buttonC.attr("value", triviaGame[i].Answer.C);
    buttonD.attr("value", triviaGame[i].Answer.D);


    for(var j=0; j<radioButton.length; j++){
        
        //console.log(radioButton[j]);
        // radioButton[j].onclick = function(){
            
        //     userAnswer = this.value
        //     console.log(userAnswer);
        //     if(userAnswer === triviaGame[i].CorrectAnswer){
        //         console.log("Correct Answer");
        //         alert("Correct Answer");
        //         //userAnswer = this.value;
        //         //console.log(userAnswer);
        //     }
        //     else{
        //         console.log("Incorrect Answer");
        //         alert("Incorrect Answer")
        //         //userAnswer = this.value;
        //         //console.log(userAnswer);
        //     }
        //     i++;
        //     nextQuestion();
        //     console.log("correct answer is: ",userAnswer);
        // }
    }
    submitButton.on("click", function(){
        //console.log(userAnswer);
        
        console.log("before increment i value is: ",i);
        if(userAnswer === triviaGame[i].CorrectAnswer){
            console.log("Correct Answer");
            alert("Correct Answer");
            //userAnswer = this.value;
            //console.log(userAnswer);   
        }
        else{
            console.log("Incorrect Answer");
            alert("Incorrect Answer")
            //userAnswer = this.value;
            //console.log(userAnswer);
        }
        i++;
        console.log("The value of i now is: ",i);
        //debugger;
        nextQuestion();
    });
    }
    else{
        console.log("Game Over")
    }
}
// }





/****** Object with all the question, list of answer and correct answer ********/
/****** on start button click, hide the start button and display the first question ******/
/****** start the clock ******/
/****** If the answer is write show correct and go to next question ******/
/****** If the answer is wrong show incorrect and go the next question ******/
/****** start the clock ******/
/****** start the clock ******/
/****** start the clock ******/
/****** start the clock ******/
/****** start the clock ******/
/****** start the clock ******/
/****** start the clock ******/
/****** start the clock ******/




