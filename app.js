let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreG = document.querySelector("#user_score");
const compScoreG = document.querySelector("#comp_score");

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options [randIdx];
};
const drowGame = () => {
    msg.innerText = "Game is drow play again !";
    msg.style.background = 'black';
};
const showWinner = (userWin) => {
if (userWin) {
    userScore++;
    userScoreG.innerText = userScore;
    msg.innerText = "you win !";
    msg.style.backgroundColor = "green";
} else {
    compScore++;
    compScoreG.innerText = compScore;
    msg.innerText = "you lose !";
    msg.style.backgroundColor = "red";
}
};
const playGame = (userChoice) => {
    const compChoice = genCompChoice ();

    if (userChoice === compChoice) {
        drowGame ();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper"? false : true;
    } else if (userChoice === "paper"){
        userWin = compChoice === "scissors"? false : true;
    } else {
        userWin = compChoice === "rock"? false : true;
    }
showWinner (userWin);
}
}; 

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
        console.log ("choice", userChoice);  //,userChoice);
        playGame(userChoice);
    });
});
