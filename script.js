var you;
var yourscore = 0;
var opponent;
var opponentcore = 0;
var clicks = 0;

var choices = ["rock","paper","scissors"];

window.onload = function(){
    // reset button
    document.getElementById("reset").addEventListener("click",()=>{
        window.location.reload();
    });

    for(let i=0;i<3;i++){
        // <img id="rock" src="rock.png">
        let choice = document.createElement('img');
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click",selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice(){
    // increase clicks
    clicks += 1;
    document.getElementById("count").innerHTML = clicks;
    
    you = this.id;
    document.getElementById("your-choice").src = you + ".png";

    // random for opponent
    opponent = choices[Math.floor(Math.random() * 3)];
    document.getElementById("opponent-choice").src = opponent + ".png";

    if(you == opponent){
        yourscore += 1;
        opponentcore += 1;
    }else{
        if(you == "rock"){
            if(opponent == "scissors"){
                yourscore += 1;
            }else if(opponent == "paper"){
                opponentcore += 1;
            }
        }
        if(you == "paper"){
            if(opponent == "rock"){
                yourscore += 1;
            }else if(opponent == "scissors"){
                opponentcore += 1;
            }
        }
        if(you == "scissors"){
            if(opponent == "paper"){
                yourscore += 1;
            }else if(opponent == "rock"){
                opponentcore += 1;
            }
        }
    }
    document.getElementById("your-score").innerHTML = yourscore;
    document.getElementById("opponent-score").innerHTML = opponentcore;
}