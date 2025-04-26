const btn = document.getElementById("play");
const choice=["rock","paper","scissors"]
let humanScore =0;
let computerScore=0;
const getComputerChoice = ()=>{
    return choice[Math.floor(Math.random()*3)]
}
const getHumanChoice=()=>{
    return prompt("please enter your choice\n1. Rock\n2. Paper\n3. Scissors");
}

const playRound =(humanChoice, computerChoice)=>{
    if(humanChoice.toLowerCase() == computerChoice){
        console.log("Draw" )
        return;
    }
    else if(humanChoice.toLowerCase() == "rock" && computerChoice =="scissors"){ 
        humanScore++;
        console.log("you win computer chose:"+computerChoice)
        return;
    }
    else if(humanChoice.toLowerCase() == "paper" && computerChoice =="rock"){
        humanScore++;
        console.log("you win computer chose:"+computerChoice)
        return;
    }
    else if(humanChoice.toLowerCase() == "scissors" &&computerChoice =="paper"){
        humanScore++
        console.log("you win computer chose:"+computerChoice)
        return;
    }
    else {
        computerScore++
        console.log("you lose computer chose:"+computerChoice)
        return;
    }
}
function playGame(){
    let i = 0;
    while(i<5){
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(Math.floor(Math.random()*3))
playRound(humanSelection, computerSelection);    
i++
}
humanScore>computerScore? console.log("You Win the Game!!!"):humanScore<computerScore? console.log("You Lose The Game"):console.log("Its a Draw!!");
}
btn.addEventListener("click",playGame);
