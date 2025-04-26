const choice=["rock","paper","scissors"]
const humanScore =0;
const computerScore=0;
const getComputerChoice = ()=>{
    return choice[Math.floor(Math.random(3))]
}
const getHumanChoice=()=>{
    return prompt("please enter your choice\n1. Rock\n2. Paper\n3. Scissors", 3);
}

const playRound =(humanChoice, computerChoice)=>{

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);