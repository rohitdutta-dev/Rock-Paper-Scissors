let userscore=0;
let compscore=0;
let options=document.querySelectorAll(".option");
let msg=document.querySelector("#msg");
let userwin=true;
let userscoreup=document.querySelector("#user-score");
let compscoreup=document.querySelector("#comp-score");

options.forEach((option)=>{
    option.addEventListener("click",()=>{
        const userchoice=option.getAttribute("id");
        decide(userchoice);
    });
});
const gencompchoice = () =>{
    let options=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random() * 3)
    return options[randomIdx];
};
const decide=(userchoice) =>{
    const compchoice=gencompchoice();
    if(userchoice===compchoice){
        drawgame();
        return;
    }
    else if(userchoice==="rock"){
        userwin= compchoice === "scissors" ? true : false;
    }
    else if(userchoice==="paper"){
        userwin= compchoice === "rock" ? true : false;
    }
    else if(userchoice==="scissors"){
        userwin= compchoice === "paper" ? true : false;
    }
    showwinner(userwin);
}
const drawgame= () =>{
    msg.innerText="Game Draw! Play Again.";
        msg.style.backgroundColor= "#3498db";
        msg.style.borderRadius= "0.6rem";
}
const showwinner= (userwin) =>{
    if (userwin){
        userscore++;
        userscoreup.innerText=(userscore);
        msg.innerText="You Won!";
        msg.style.backgroundColor= "#2ecc71";
        msg.style.borderRadius= "0.6rem";
    }
    else{
        compscore++;
        compscoreup.innerText=compscore;
        msg.innerText="You Lost!";
        msg.style.backgroundColor= "#e74c3c";
        msg.style.borderRadius= "0.6rem";
    }
}

document.querySelector(".rstgm").addEventListener("click", () => {
    userscore = 0;
    compscore = 0;
    userscoreup.innerText = 0;
    compscoreup.innerText = 0;
    msg.innerText = "Play your move!";
});
