let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const genCompChoice=()=>{
const options =["rock","paper","scissors"];
const radInd= Math.floor(Math.random()*3);
return options[radInd];
};
const drawGame= ()=>{
    // console.log("game was draw");
    msg.innerText="Game was draw.Play again";
    msg.style.backgroundColor="grey";
};
const showWinner=(userWin , choiceId, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("You win!");
        msg.innerText=`You win! Your ${choiceId} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        // console.log("you lose");
        msg.innerText=`You lose! ${compChoice} beats your ${choiceId}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(choiceId)=>{
    // console.log("user choice=",choiceId);
    const compChoice=genCompChoice();
    // console.log("Computer choice=",compChoice);
    if(choiceId===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(choiceId==="rock"){
            userWin=compChoice==="paper"? false:true;
        }else if(choiceId==="paper"){
            userWin=compChoice==="scissors"? false:true;
        }
        else{
            userWin=compChoice==="rock"? false:true;
        }   
        showWinner(userWin,choiceId,compChoice);
     }
};

choices.forEach((choice)=> {
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const choiceId = choice.getAttribute("id");  
        // console.log("choice was clicked",choiceId);
        playGame(choiceId);
    });
});