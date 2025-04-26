const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissors");
const results = document.getElementById("results");
const choice=["rock","paper","scissors"]
let humanScore =0;
let computerScore=0;
let i =0;
const getComputerChoice = ()=>{
    return choice[Math.floor(Math.random()*3)]
}

const playRound =(humanChoice, computerChoice)=>{
    if(i==5){
      humanScore>computerScore? results.innerHTML=`<h4>You Win the Game!!!</h4>`:humanScore<computerScore? console.log("You Lose The Game"):console.log("Its a Draw!!");
      i=0;
      return;
    }
    else if(humanChoice.toLowerCase() == computerChoice){
        console.log("Draw" )
        i++;
        return;
    }
    else if(humanChoice.toLowerCase() == "rock" && computerChoice =="scissors"){ 
        humanScore++;
        console.log("you win computer chose:"+computerChoice)
        i++;
        return;
    }
    else if(humanChoice.toLowerCase() == "paper" && computerChoice =="rock"){
        humanScore++;
        console.log("you win computer chose:"+computerChoice)
        i++;
        return;
    }
    else if(humanChoice.toLowerCase() == "scissors" &&computerChoice =="paper"){
        humanScore++
        console.log("you win computer chose:"+computerChoice)
        i++;
        return;
    }
    else {
        computerScore++
        console.log("you lose computer chose:"+computerChoice)
        i++;
        return;
    }
}

    

rockBtn.addEventListener("click",()=>playRound("rock",getComputerChoice()));
paperBtn.addEventListener("click",()=>playRound("paper",getComputerChoice()));
scissorBtn.addEventListener("click",()=>playRound("scissors",getComputerChoice()));
