// DICHIARAZIONI COSTANTI
const userChoiceElem = document.getElementById("selector");
const playBtn = document.getElementById("play-button");

// Quando premo il tasto gioca
playBtn.addEventListener("click", function () {

    document.getElementById("grid").innerHTML = ``;

    // RACCOLTA DATI UNPUT
    const userChoice = userChoiceElem.value;

    // DICHIARAZIONI CONSTANTI
    let widthSquare = "";
    let squareNumber = "";

    if (userChoice === "easy") {

        squareNumber = 49;
        widthSquare = "dif-easy";

    } else if (userChoice === "medium") {

        squareNumber = 81;
        widthSquare = "dif-medium";

    } else {

        squareNumber = 100;
        widthSquare = "dif-hard";

    }

    const numbersArray = genOrderedNumber(squareNumber);
    console.log(numbersArray);

    const gridElem = document.getElementById("grid");

    for(let i = 0; i < numbersArray.length; i++) {

        const curNumber = numbersArray[i];
        //Genera lo square con il numero all'interno a la classe in base alla difficoltà 
        const square = generateGridSquare(curNumber, widthSquare);
        square.addEventListener("click", squareClick)

        gridElem.append(square);
    }

});



/*******************************************/
// FUNZIONI
/**
 * Restituisce array di maxNumber numeri tra 1 e maxNumber
 * @param {numer} maxNumber
 * @returns {array}
 */
function genOrderedNumber(maxNumber) {

    let arrayOrderedNum = [];
    for(let i = 1; i <= maxNumber; i++) {
        arrayOrderedNum.push(i);
    }
    
    return arrayOrderedNum;
}

/**
 * Dà al numero dell'array la classe square e la classe della larghezza in base alla difficoltà scelta, così da creare la cella con i bordi
 * @param {numer} maxNumber
 * @param {string} squareWidth
 * @returns {array}
 */
function generateGridSquare(innerNumber, squareWidth) {

    const newSquare = document.createElement("div");
    // aggiunge le classi
    newSquare.classList.add("square");
    newSquare.classList.add(squareWidth);
    // aggiunge il numero all'intero
    newSquare.innerHTML = innerNumber;

    return newSquare;
}


/**
 * Funcione che dà la classe per il colore del background quando clicchiamo sullo square
 */
function squareClick() {
    this.classList.add("clicked-bg");
}






