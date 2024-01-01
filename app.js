let userScore=0;
let compScore=0;


const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    //rock paper scissors
   const options=["rock", "paper", "scissors"];
    // Math.random();//generates a random number between 0-9. This number is mainly generated in floating point number

    //to get a number in the range of 0-n multiply the Math.random with (n+1) 
    //to get a whole number, apply math.floor function

    const randomIndex=Math.floor(Math.random()*3);
    return options[randomIndex];

}

const drawGame=()=>{
    console.log("Game was draw");
    msg.innerText="Game was draw. Play Again";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("User Wins");
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        userScorePara.innerText=userScore;


    }
    else
    {console.log("Computer wins");
    msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
    compScore++;
    compScorePara.innerText=compScore;
}

}

const playgame=(userChoice)=>{
    console.log("User choice=", userChoice);
    const compChoice=genCompChoice();
    console.log("Comp choice=", compChoice);

    if(userChoice===compChoice){
        //draw
        drawGame();

    }
    else{
    let userWin=true;
    if(userChoice==="rock"){
        //scissors , paper
        userWin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        //scissors, rock
        userWin=compChoice==="scissors"?false:true;
    }
    else if(userChoice==="scissors"){
        //rock paper
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
}


}

//here we add an event listener on the image such that the user action is captured

//select all choices div
choices.forEach((choice)=>{
    // console.log(choice);//prints the choice divs

    // when any one of the choice div an event listener will be executed
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);//the game begins

    })

})



//one function performs only one action--> modularity