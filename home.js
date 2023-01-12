const topLeft = document.querySelector(".topLeft")
const topRight = document.querySelector(".topRight")
const box = document.querySelectorAll(".box");
const chooseButton=Array.from(document.querySelectorAll(".chooseButton"));
const choose=document.querySelector(".choose")
const game=document.querySelector(".game")
const winner=document.querySelector(".winner")
const replay=document.querySelector(".replay")
const winnerName=document.querySelector(".winnerName")




const win=new Audio("./song/win.wav");
const move=new Audio("./song/move.wav")


let choice;

let boxes = Array.from(box);

chooseButton[0].addEventListener("click",()=>{
        choice="X";
        choose.style.display="none";
        game.style.display="flex";
        changeUser()

})

chooseButton[1].addEventListener("click",()=>{
    choice="O"
    choose.style.display="none";
    game.style.display="flex";
    changeUser()
})



const clearBox=()=>{
    boxes.forEach((e)=>{
        e.innerText="";
    })
}


const showWinner=()=>{
    win.play();
    game.style.display="none";
    winner.style.display="flex";
    if(choice==="X"){
        winnerName.innerText="O"
    }
    else{
        winnerName.innerText="X"
    }
    clearBox();

}


replay.addEventListener("click",()=>{
    winner.style.display="none";
    choose.style.display="flex";

})


function checkWinner() {
    box.forEach(() => {
        if (box[0].innerText === "X" && box[1].innerText === "X" && box[2].innerText === "X" ||
            box[3].innerText === "X" && box[4].innerText === "X" && box[5].innerText === "X" ||
            box[6].innerText === "X" && box[7].innerText === "X" && box[8].innerText === "X" ||
            box[0].innerText === "X" && box[3].innerText === "X" && box[6].innerText === "X" ||
            box[1].innerText === "X" && box[4].innerText === "X" && box[7].innerText === "X" ||
            box[2].innerText === "X" && box[5].innerText === "X" && box[8].innerText === "X" ||
            box[0].innerText === "X" && box[4].innerText === "X" && box[8].innerText === "X" ||
            box[2].innerText === "X" && box[4].innerText === "X" && box[6].innerText === "X") {
                showWinner();

        }
        else if (box[0].innerText === "O" && box[1].innerText === "O" && box[2].innerText === "O" ||
            box[3].innerText === "O" && box[4].innerText === "O" && box[5].innerText === "O" ||
            box[6].innerText === "O" && box[7].innerText === "O" && box[8].innerText === "O" ||
            box[0].innerText === "O" && box[3].innerText === "O" && box[6].innerText === "O" ||
            box[1].innerText === "O" && box[4].innerText === "O" && box[7].innerText === "O" ||
            box[2].innerText === "O" && box[5].innerText === "O" && box[8].innerText === "O" ||
            box[0].innerText === "O" && box[4].innerText === "O" && box[8].innerText === "O" ||
            box[2].innerText === "O" && box[4].innerText === "O" && box[6].innerText === "O") {
                showWinner();
        }
    })
}

const changeUser=()=>{
    if(choice=="X"){
        topLeft.style.backgroundColor="rgb(78, 159, 230)";
        topLeft.style.color="white";
        topRight.style.backgroundColor="white";
        topRight.style.color="rgb(78, 159, 230)";
    }
    else{
        topRight.style.backgroundColor="rgb(78, 159, 230)";
        topRight.style.color="white";
        topLeft.style.backgroundColor="white";
        topLeft.style.color="rgb(78, 159, 230)";
    }
    return;
}


const checkFull=()=>{
    let found=false;
    boxes.forEach((b)=>{
        
        if(b.innerText===""){
            found=true;
        }
    })
    if(found===false){
        clearBox();
    }
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            box.innerText = choice;
            if (choice === "X") {
                choice = "O";
            }
            else {
                choice = "X"
            }
            move.play();
        }
        checkWinner();
        changeUser();
        checkFull()
        

    })
})


