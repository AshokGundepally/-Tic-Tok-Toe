let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let h4 = document.querySelector("h4");
let turnO = true;


let count = 0;

let patterns = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

// reset
 reset.addEventListener("click",()=>{
    document.body.style.backgroundColor = "brown";
    h4.style.color = "rgb(242, 252, 114)";
    turnO = true;
    count = 0;
    boxes.forEach((box)=>{
        box.innerText = "";
    });
   h4.innerText = " winner is Loading....";
   boxes.forEach((box)=>{
        box.disabled = false;
     });
 })
boxes.forEach((box )=> {
    box.addEventListener("click",()=>{

        console.dir(box);
        if(turnO){
          box.innerText = "O";
          turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        checkWinner();
        if(count == 9){
             h4.style.color = "black";
            h4.innerText = "draw";
            document.body.style.backgroundColor = "pink";
        }
    })
});
const displayWinner = (winner) =>{
    document.body.style.backgroundColor = "pink";
     h4.style.color = "black";
     h4.innerHTML = `The Winner is ${winner}`;
    //  then disable options
     boxes.forEach((box)=>{
        box.disabled = true;
     });
}
const checkWinner = ()=>{
patterns.forEach((pattern)=>{
    let b1 =  boxes[pattern[0]].innerText;
    let b2 =  boxes[pattern[1]].innerText;
    let b3 =  boxes[pattern[2]].innerText;

    
    if(b1 !=="" &&  b2!=="" && b3!==""){
        if(b1===b2 && b2===b3){
            if(turnO){
                 winner = "O";
                 displayWinner(b1);
            }else{
                winner = "X";
                displayWinner(b1);
            }
        }
    }
})
}

