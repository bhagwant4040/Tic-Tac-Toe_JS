let btnRef= document.querySelectorAll(".boardCell");
let popupRef= document.querySelector(".popup");
let newGameBtn= document.querySelector(".popupRestartBtn");
let restartBtn= document.querySelector(".gameRestartBtn");
let mesRef= document.getElementById("message");

let winningPattern= [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
];

let xTurn = true;
count= 0;
// this will disable all the buttons and make popup visible by removing hide class form it
const disableButtons = () => {
    btnRef.forEach((element) => element.disabled = true);
    popupRef.classList.remove ("hide");
}

// this will enable the button for new game or restart and hide the popup 
const enableButtons = () => {
    btnRef.forEach((element) => 
        {element.innerText=''; 
        element.disabled = false;
    });
    popupRef.classList.add("hide");
};

// this will dispaly the winning 
const winFunction = (letter) => {
    disableButtons();
    if (letter == "X") {
        mesRef.innerHTML = "&#x1F389; <br> 'X' Wins";
    } else {
        mesRef.innerHTML = "&#x1F389; <br> 'O' Wins";
    }
};

// when game gets draw
const drawFunction = () => {
    disableButtons();
    mesRef.innerHTML = "&#x1F60E; <br> It's a Draw";
};

// new game 
newGameBtn.addEventListener('click', () => {
    count = 0;
    enableButtons();
});

restartBtn.addEventListener('click', () => {
    count = 0;
    enableButtons();
});

// win logic
const winChecker = () => {
    for (let pattern of winningPattern) {
      let [element1, element2, element3] = [
        btnRef[pattern[0]].innerText,
        btnRef[pattern[1]].innerText,
        btnRef[pattern[2]].innerText,
      ];
  
      if (element1 !== "" && element2 !== "" && element3 !== "") {
        if (element1 === element2 && element2 === element3) {
          winFunction(element1);
        }
      }
    }
  };

// X/O click 
btnRef.forEach((element) => {
    element.addEventListener('click', () => {
        if (xTurn) {
            xTurn = false;
            element.innerText = ('X');
            element.disabled = true;
        }  else {
            xTurn = true;
            element.innerText = ('O');
            element.disabled = true;
        }
        count +=1 
        if (count == 9){
            drawFunction();
        }
        winChecker();
    });
});

window.onload = enableButtons;