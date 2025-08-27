// Getting stored user data
let Name = localStorage.getItem("loggedInUserName");
let Gender = localStorage.getItem("loggedInUserGender");

// Generating random Toss
let toss = Math.floor(Math.random()*2);

// Reqired gameplay variables 
let start = false;
let computerChoose = Math.floor(Math.random()*2);
let decision;
let playDecision = null;
let score = 0;
let target = 0;
let execute = true;
let click = localStorage.setItem("hasClicked","true");
document.getElementById("outputName").innerHTML = Name +"  &#11166";

function changer(){
    document.getElementById("sideWindow").classList.toggle("active");
    document.getElementById("profOutput1").innerHTML = "Name : " + Name;
    document.getElementById("profOutput2").innerHTML = "Gender : " + Gender;
}

function logOut(){
    localStorage.setItem("loggedInUserName","");
    localStorage.setItem("loggedInUserGender",null);
    window.location.href = "index.html";
    alert("Logging Out..");
}

function playNotes(){
    let clicked = localStorage.getItem("hasClicked");
    if(clicked == "true"){
        if(Gender == "Male"){
            localStorage.setItem("hasClicked","false");
            document.getElementById("notes").innerHTML = 
            "Hello Mr." + Name + "!"; 
            document.getElementById("step1").innerHTML = 
            "This is a new version of cricket developed by Mohammed Sharukkhan, an RIT college student.";
            document.getElementById("step2").innerHTML = 
            "Step-1: In this game first you need to put the toss either 'Head' or 'Tail'.";
            document.getElementById("step3").innerHTML = 
            "Step-2: If you win the toss you can choose what to play either 'batting' or 'bowling'.On loosing computer chooses on it's own.";
            document.getElementById("step4").innerHTML = 
            "Step-3: There will be some buttons with numbers from 1 to 6 and also 0.And you need to press it, for which respective number will be dispayed on the screen.";
            document.getElementById("step5").innerHTML = 
            "Step-4: The computer also randomly displays the same set of numbers.";
            document.getElementById("step6").innerHTML = 
            "Step-5: If you are batting and the number entered by you and the computer are same then you loose your wicket with setting the target for computer to achieve.";
            document.getElementById("step7").innerHTML = 
            "Then you will be shifted for bowling. If you want to win, defend the computer from achieving.";
            document.getElementById("step8").innerHTML = 
            "Step-6: And this is wise versa for bowling!";
            document.getElementById("step9").innerHTML = 
                "All The Best for Winning!";
        } else{
            localStorage.setItem("hasClicked","false");
            document.getElementById("notes").innerHTML = 
            "Hello Ms." + Name + "!"; 
            document.getElementById("step1").innerHTML = 
            "This is a new version of cricket developed by Mohammed Sharukkhan, an RIT college student.";
            document.getElementById("step2").innerHTML = 
            "Step-1: In this game first you need to put the toss either 'Head' or 'Tail'.";
            document.getElementById("step3").innerHTML = 
            "Step-2: If you win the toss you can choose what to play either 'batting' or 'bowling'.On loosing computer chooses on it's own.";
            document.getElementById("step4").innerHTML = 
            "Step-3: There will be some buttons with numbers from 1 to 6 and also 0.And you need to press it, for which respective number will be dispayed on the screen.";
            document.getElementById("step5").innerHTML = 
            "Step-4: The computer also randomly displays the same set of numbers.";
            document.getElementById("step6").innerHTML = 
            "Step-5: If you are batting and the number entered by you and the computer are same then you loose your wicket with setting the target for computer to achieve.";
            document.getElementById("step7").innerHTML = 
            "Then you will be shifted for bowling. If you want to win, defend the computer from achieving.";
            document.getElementById("step8").innerHTML = 
            "Step-6: And this is wise versa for bowling!";
            document.getElementById("step9").innerHTML = 
            "All The Best for Winning!";
        }
    } else{
        localStorage.setItem("hasClicked","true");
        document.getElementById("notes").innerHTML ="";
        document.getElementById("step1").innerHTML ="";
        document.getElementById("step2").innerHTML ="";
        document.getElementById("step3").innerHTML ="";
        document.getElementById("step4").innerHTML ="";
        document.getElementById("step5").innerHTML ="";
        document.getElementById("step6").innerHTML ="";
        document.getElementById("step7").innerHTML ="";
        document.getElementById("step8").innerHTML ="";
        document.getElementById("step9").innerHTML ="";
    }
}
function Toss(){
    const tossChoice = document.querySelector('input[name="choice"]:checked');
    console.log(tossChoice);
    let coin = document.getElementById("tossBtn");
    coin.classList.add("flipping");
    coin.innerText = "";
    setTimeout(() => {
        coin.classList.remove("flipping");
        if(tossChoice){
            if(toss == 1){
                coin.innerText = "Head";
            } else{
                coin.innerText = "Tail"
            }
            setTimeout(() => {
                nextToss(tossChoice);
            },700)
        } else{
            coin.innerText = "!!";
            alert("Make a choice before Tossing.");
        }
    },2000);
}

function nextToss(toss_Choice){
    localStorage.setItem("anotherSumma","true");
    localStorage.setItem("start","true")
    localStorage.setItem("summa","true");
    if(toss_Choice){
        localStorage.setItem("tossChoiceByUser",toss_Choice.value);
        let choice = toss_Choice.value;

        if((choice == "Head" && toss == 1) || (choice == "Tail" && toss == 0)){
            alert("Congrats! You Won the Toss.");
            playDecision = prompt("Enter '0' for Batting or '1' for Bowling :");

            if(playDecision == 0){
                localStorage.setItem("decision","batting");
                alert("Game Started!");
                window.location.href = "Game_page.html";
                batting();
            } else if(playDecision == 1){
                localStorage.setItem("decision","bowling");
                alert("Game Started!"); 
                window.location.href = "Game_page.html";
                bowling();
            } else{
                alert("Oops! Something went wrong");
            }

        } else{
            alert("Oops! You lose the Toss.")
            if(computerChoose == 0){
                alert("Computer chooses to Batting, then you have to do Bowling now.");
                localStorage.setItem("compDecision","batting");
                alert("Game Started!"); 
                window.location.href = "Game_page.html";
                bowling();
            } else if(computerChoose == 1){
                alert("Computer chooses to Bowling, then you have to do Batting now.");
                localStorage.setItem("compDecision","bowling");
                alert("Game Started!"); 
                window.location.href = "Game_page.html";
                batting();
            } else{
                alert("Oops! Something went wrong");
            }
        }
    }
}

function imageLoader1(num){
    let imageElement = document.getElementById("handImage1");
    if(num == 0){
        imageElement.src = "Images/0.jpg";
    } else if(num == '1'){
        imageElement.src = "Images/1.jpg";
    } else if(num == '2'){
        imageElement.src = "Images/2.jpg";
    } else if(num == '3'){
        imageElement.src = "Images/3.jpg";
    } else if(num == '4'){
        imageElement.src = "Images/4.jpg";
    } else if(num == '5'){
        imageElement.src = "Images/5.jpg";
    } else{
        imageElement.src = "Images/6.jpg";
    }
}

function imageLoader2(num){
    let imageElement = document.getElementById("handImage2");
    if(num == '0'){
        imageElement.src = "Images/0.jpg";
    } else if(num == '1'){
        imageElement.src = "Images/1.jpg";
    } else if(num == '2'){
        imageElement.src = "Images/2.jpg";
    } else if(num == '3'){
        imageElement.src = "Images/3.jpg";
    } else if(num == '4'){
        imageElement.src = "Images/4.jpg";
    } else if(num == '5'){
        imageElement.src = "Images/5.jpg";
    } else{
        imageElement.src = "Images/6.jpg";
    }
}

function cellClicked(value){
    document.getElementById("userName").innerHTML = Name;
    let start = localStorage.getItem("start");
    if(start == "true"){
        let changer = localStorage.getItem("summa");
        let randNum = Math.floor(Math.random()*7);
        let knowDecision = localStorage.getItem("decision");
        if(changer == "true"){
            if(value != randNum){
                document.querySelectorAll('.images');
                if(knowDecision == "batting"){
                    let Score = runScorer(value);
                    imageLoader1(value);
                    imageLoader2(randNum);
                    document.getElementById("output1").innerHTML = value;
                    document.getElementById("output2").innerHTML = "You Scored : " + Score;
                    document.getElementById("output0").innerHTML = randNum;
                } else if(knowDecision == "bowling"){
                    let Score = runScorer(randNum);
                    imageLoader1(value);
                    imageLoader2(randNum)
                    document.getElementById("output1").innerHTML = value;
                    document.getElementById("output2").innerHTML = "Computer Scored : " + Score;
                    document.getElementById("output0").innerHTML = randNum;
                } else{
                    alert("Error");
                }
            } else{
                let changer = localStorage.getItem("summa");
                if(changer == "true"){
                    flowChanger();
                } else{
                    endGame();
                }
            }
        } else{
            let scoredValue = localStorage.getItem("runs");
            let target1 = localStorage.getItem("tarRuns");
            if(scoredValue <= target1){
                if(value != randNum){
                    if(knowDecision == "batting"){
                        let Score = runScorer(value);
                        imageLoader1(value);
                        imageLoader2(randNum)
                        document.getElementById("output1").innerHTML = value;
                        document.getElementById("output2").innerHTML = "You Scored : " + Score;
                        document.getElementById("output0").innerHTML = randNum;
                    } else if(knowDecision == "bowling"){
                        let Score = runScorer(randNum);
                        imageLoader1(value);
                        imageLoader2(randNum)
                        document.getElementById("output1").innerHTML = value;
                        document.getElementById("output2").innerHTML = "Computer Scored : " + Score;
                        document.getElementById("output0").innerHTML = randNum;
                    } else{
                    alert("Error");
                    }
                } else{
                    endGame();
                } 
            } else{
                endGame();
            }
        }
    }
}

function runScorer(Value){
    let changer1 = localStorage.getItem("anotherSumma");
    score = score + Value;
    if(changer1 == "true"){
        localStorage.setItem("runs",score);
        return score;
    } else{
        localStorage.setItem("anotherSumma","true");
        localStorage.setItem("tarRuns",score);
        localStorage.setItem("runs",0);
        score = 0;
        return score;
    }
}

function flowChanger(){
    localStorage.setItem("summa","false");
    localStorage.setItem("anotherSumma","false");
    let something = localStorage.getItem("decision");
    target = parseInt(localStorage.getItem("runs"));
    alert("Wicket!");
    if(something == "batting"){
        localStorage.setItem("decision","bowling");
        document.getElementById("output3").innerHTML = "Target :" + (target+1) ;
        localStorage.setItem("runs",0);
    } else if(something == "bowling"){
        localStorage.setItem("decision","batting");
        document.getElementById("output3").innerHTML = "Target :" + (target+1);
        localStorage.setItem("runs",0);
    } else{
        alert("Error");
    }
}

function endGame(){
    let scoredValue = localStorage.getItem("runs");
    let target = localStorage.getItem("tarRuns");
    let knowDecision = localStorage.getItem("decision");
    if(scoredValue >= target){
        if(knowDecision == "bowling"){
            document.getElementById("output2").innerHTML = "You Scored : " + scoredValue;
            alert("You have won the Match! 0"); // User won in 2nd batting.
            window.location.href = "Home_page.html";
        } else if(knowDecision == "batting"){
            document.getElementById("output2").innerHTML = "You Scored : " + scoredValue;
            alert("Oops! You Lost. 0"); // User lost in 2nd batting.
            window.location.href = "Home_page.html";
        } else{
            alert("Error");
        }
    } else{
        if(knowDecision == "bowling"){
            
            alert("You have won the Match! 1"); // User won in 1st batting
            document.getElementById("output2").innerHTML = "Computer Scored : " + scoredValue;
            window.location.href = "Home_page.html";
        } else if(knowDecision == "batting"){
            document.getElementById("output2").innerHTML = "Computer Scored : " + scoredValue;
            alert("Oops! You Lost. 1"); // User lost in 1st batting.
            window.location.href = "Home_page.html";
        } else{
            alert("Error");
        }
    }
}

function homePage(){
    window.location.href = "Home_page.html";
}



// let knowCompDeci = localStorage.getItem("compDecision")
//     alert("wicket");
//     console.log(knowDecision);
//     if(knowDecision == "bowling"){ // 1st batting
//         if(scoredValue >= target){
//             alert("Computer won on second batting");
//             document.getElementById("output2").innerHTML = "Computer Scored : " + scoredValue;
//             window.location.href = "Home_page.html";
//         } else if(scoredValue < target){
//             alert("You won on first batting");
//             document.getElementById("output2").innerHTML = "Computer Scored : " + scoredValue;
//             window.location.href = "Home_page.html";
//         } else{
//             alert("Error404");
//         }
//     } else if(knowDecision == "batting"){ // 1st bowling
//         if(scoredValue >= target){
//             alert("You won on second batting");
//             document.getElementById("output2").innerHTML = "Computer Scored : " + scoredValue;
//             window.location.href = "Home_page.html";
//         } else if(scoredValue < target){
//             alert("Computer won on first batting");
//             document.getElementById("output2").innerHTML = "Computer Scored : " + scoredValue;
//             window.location.href = "Home_page.html";
//         } else{
//             alert("Error404");
//         }
//     } else{
//         alert("Error404");
//     }


// summa
