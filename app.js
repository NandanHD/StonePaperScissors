let userscore=0;
let computerscore=0;

const choices=document.querySelectorAll(".choices");
const result=document.querySelector("#res");

const userscorePara=document.querySelector("#user-score")
const compscorePara=document.querySelector("#comp-score")




const gencomputerchoice=()=>{
    const options=["stone","papper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

}


const drawgame=()=>{
    console.log("Game was draw");
    result.innerText="Game was draw.Play again.";
    result.style.backgroundColor="#081b31";

}


const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin)
    {
        userscore++;
        userscorePara.innerText=userscore;
        result.innerText=`You win! Your ${userchoice} beats ${compchoice}`;
        result.style.backgroundColor="green";

    }
    else{
        computerscore++;
        compscorePara.innerText=computerscore;
        console.log("You loose");
        result.innerText=`You loose! ${compchoice} beats Your ${userchoice}`;
        result.style.backgroundColor="red";

    }
}

const playgame=(userchoice)=>{
    // console.log("user choice=",userchoice);

    const compchoice=gencomputerchoice();
    // console.log("comp choice=",compchoice);

    if(userchoice===compchoice)
    {
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="stone")
        {
            userwin=compchoice==="papper"?false:true;

        }
        else if(userchoice==="papper")
        {
            userwin=compchoice==="scissors"?false:true;
        }
        else{
           userwin= compchoice==="stone"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);

    }

};




choices.forEach((choice)=>{
   
    choice.addEventListener("click",()=>{
      
        const userchoice=choice.getAttribute("id");
       
        playgame(userchoice);
        

    });
});

