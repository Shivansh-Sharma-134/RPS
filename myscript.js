const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissors");
const results = document.getElementById("results");
const roundResults = document.getElementById("roundresults");
const choice=["rock","paper","scissors"]
let humanScore =0;
let computerScore=0;
let i =0;
const getComputerChoice = ()=>{
    return choice[Math.floor(Math.random()*3)]
}
const clear = ()=>{
 
    return;
}
const endGame = ()=>{
    console.log(i)
    humanScore>computerScore? results.innerHTML=`<h4>You Win the Game!!!</h4></br><h2>CLICK ANY BUTTON TO PLAY AGAIN!!</h2>`:humanScore<computerScore? results.innerHTML=`<h4>You Lose The Game</h4></br><h2>CLICK ANY BUTTON TO PLAY AGAIN!!</h2>`:results.innerHTML=`<h4>Its a Draw!!</h4></br><h2>CLICK ANY BUTTON TO PLAY AGAIN!!</h2>`;   
}
const userWins =(computerChoice)=>{
        humanScore++;
        roundResults.innerHTML+=`</br><h4>you win computer chose: ${computerChoice}</h4>`;
        i++;
        if(i==5){
            endGame();
        }
}

const playRound =(humanChoice, computerChoice)=>{
    console.log(i);
     console.log(humanScore,computerScore)
     if(i==5){
        roundResults.innerHTML=``;
        results.innerHTML=``;
        humanScore=0;
        computerScore=0;
        i=0;
        return
     }
    else if(humanChoice.toLowerCase() == computerChoice){
        roundResults.innerHTML+=`<br><h4>Draw</h4>`;
        i++;
        if(i==5){
            endGame();
        }
        return;
    }
    else if(humanChoice.toLowerCase() == "rock" && computerChoice =="scissors"){ 
        userWins(computerChoice);
        return;
    }
    else if(humanChoice.toLowerCase() == "paper" && computerChoice =="rock"){
    userWins(computerChoice);
        return;
    }
    else if(humanChoice.toLowerCase() == "scissors" &&computerChoice =="paper"){
        userWins(computerChoice);
        return;
    }
    else {
        computerScore++
        roundResults.innerHTML+=`</br><h4>you lose computer chose: ${computerChoice}</h4>`
        i++;
        if(i==5){
            endGame;
        }
        return;
    }
}

    

rockBtn.addEventListener("click",()=>playRound("rock",getComputerChoice()));
paperBtn.addEventListener("click",()=>playRound("paper",getComputerChoice()));
scissorBtn.addEventListener("click",()=>playRound("scissors",getComputerChoice()));
