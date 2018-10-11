$(document).ready(function(){

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

    //**** Variables ****//
    var triviaCard = $("#card");
    var gameQ = $("#gameQ");
    var triviaResult = $("#result");
    var timeLeft = $("#time");
    var startButton = $("#start");
    var submitButton = $("#submit");
    var restartButton = $("#restart");
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
    var radio = $(":radio");
    var userAnswer;
    var interval;
    var correctAns = 0;
    var incorrectAns = 0;
    var clockRunning = false;
    var i = 0;

    //**** Start button on click function ****//
    startButton.on("click", function(){

        //**** Hide the Start Button *****//
        startButton.hide();
        
        //**** Make the Div that has Time Remaining visible *****//
        timeLeft[0].style.visibility = "visible"

        // //**** Make the question Div visible *****//    
        // triviaCard[0].style.visibility = "visible";    
    
        // //**** Make the Submit button visible *****//
        // submitButton[0].style.visibility = "visible";

        gameQ[0].style.display = "unset";
    
        nextQuestion();
    });
    
    //**** Function to display questions based on i ****//
    function nextQuestion(){
        
        //**** Checks if the value of i is not greater than the length of the Object ****//
        if(i<triviaGame.length){

            $('input').prop("checked", false);
            
            //**** Start the Game Time clock ****//
            gameTime.start();
            
            //**** Puts the questions on the Div based on the value of i ****//
            triviaQuestion.text(triviaGame[i].Question);   // Populates question based on i //
            optionA.text(triviaGame[i].Answer.A);  // Populates answer based on i //
            optionB.text(triviaGame[i].Answer.B);  // Populates answer based on i //
            optionC.text(triviaGame[i].Answer.C);  // Populates answer based on i //
            optionD.text(triviaGame[i].Answer.D);  // Populates answer based on i //
            buttonA.attr("value", triviaGame[i].Answer.A);  // Adds Value attribute based on i //
            buttonB.attr("value", triviaGame[i].Answer.B);  // Adds Value attribute based on i //
            buttonC.attr("value", triviaGame[i].Answer.C);  // Adds Value attribute based on i //
            buttonD.attr("value", triviaGame[i].Answer.D);  // Adds Value attribute based on i //
            
            //**** Call the function to select the radio button ****//
            selectRadio();
        
        }
        else{
            gameTime.stop();   // Stops the game time clock //
            // console.log("Game Over");
            alert("Game Over");
            
            // console.log(gameQ);
            // console.log(triviaResult);
            $("#title2").append(triviaResult);

            triviaResult[0].style.display = "unset";  // Hide the Question div //
            $("#correctResult").text(correctAns);
            $("#incorrectResult").text(incorrectAns); 
            gameQ[0].style.display = "none";    

        }
    }
    
    //**** Function to let the user select radio button option ****//
    function selectRadio(){    
        for(var j=0; j<radioButton.length; j++){
            radioButton[j].onclick = function(){                
                userAnswer = this.value;
            }
        }
    } 

    /**** submit button on click function ****/
    submitButton.on("click", function(){

        //**** Stopping the clock and resetting because submit button is clicked ****//
        gameTime.stop();

        //**** checks if the value of the radio button selected is equal to the correct answer ****/
        if(userAnswer == triviaGame[i].CorrectAnswer){
            alert("Correct Answer");
            correctAns++;
            clockRunning = false;
            //console.log(clockRunning);
        }
        else{
            alert("Incorrect Answer\n" +
                "Correct Answer is: "+triviaGame[i].CorrectAnswer);
            incorrectAns++;
        }
        //**** Increments i ****/
        i++;
        //**** Calls the next question function to display next question in the object based on i ****/
        nextQuestion();

        //**** Checks if there is next question or not. If there is then starts the clock again ****//
        if(i<triviaGame.length){
            gameTime.start();
        }
    });
    
    //**** Game Time clock ****//   
    var gameTime = {
        time: 15,

        reset: function(){
            gameTime.time = 15;
            timeLeft.text("Time Remaining: ",i);
        },

        start: function(){
            if(!clockRunning){
                interval = setInterval(gameTime.count, 1000);
                clockRunning = true;
                //console.log("clock running");
            }
        },        
        stop: function(){
            //console.log("running stop function");
            clearInterval(interval);
            clockRunning = false;
            gameTime.reset();
        },
        count: function(){            
            if(gameTime.time === 0){
                gameTime.stop();
                i++;
                //console.log("value of i is: ",i);
                nextQuestion();
            }
            //console.log(gameTime.time)
            timeLeft.text("Time Remaining: "+gameTime.time)
            gameTime.time--;
        }
    }

    //**** Restart game function ****//
    restartButton.on("click", function(){

        gameQ[0].style.display = "unset";  // make the Question div visible //
        triviaResult[0].style.display = "none";  // make the Result div invisible //

        i=0;
        correctAns = 0;
        incorrectAns = 0;
        console.log(i);
        nextQuestion();
    })
    
});
    
    
    
    
    