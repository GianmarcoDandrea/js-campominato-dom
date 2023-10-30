// DICHIARAZIONI COSTANTI
const userChoiceElem = document.getElementById("selector");
const playBtn = document.getElementById("play-button");
let numbersClicked = [];
let numbersArray = [];
let arrayBomb = [];
let widthSquare = "";
let squareNumber = "";
let gameResult = "gameNotOver";

// Quando premo il tasto gioca
playBtn.addEventListener("click", function () {
    gameResult = "gameNotOver";
    document.getElementById("grid").innerHTML = ``;
    document.getElementById("result-text").innerHTML = ``;
    numbersClicked = [];

    // RACCOLTA DATI UNPUT
    const userChoice = userChoiceElem.value;

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

    numbersArray = genOrderedNumber(squareNumber);
    console.log(numbersArray);

    arrayBomb = generateBomb(squareNumber);
    console.log(arrayBomb)

    const gridElem = document.getElementById("grid");

    for (let i = 0; i < numbersArray.length; i++) {

        const curNumber = numbersArray[i];
        //Genera lo square con il numero all'interno a la classe in base alla difficoltà
        const square = generateGridSquare(curNumber, widthSquare);
        square.addEventListener("click", squareClick);


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
    for (let i = 1; i <= maxNumber; i++) {
        arrayOrderedNum.push(i);
    }

    return arrayOrderedNum;
}

/**
 * Genera un numero casuale di numeri compresi tra min e max
 * @param {number} min
 * @param {number} max
 * @return {array}
 */
function generateRndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Genera un numero di 16 bombe comprese tra 1 e maxNumberBomb e le inserisce in un array
 * @param {number} maxNumberBomb
 * @return {array}
 */
function generateBomb(maxNumberBomb) {
    const bombArray = [];
    while (bombArray.length < 16) {
        const rndNumber = generateRndNumber(1, maxNumberBomb)

        if (!bombArray.includes(rndNumber)) {
            bombArray.push(rndNumber);
        }
    }
    return bombArray;
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
 * Funzione che controlla se il numero cliccato è una bomba o meno,
 * se è una bomba l'utete perde altrimeti aggiunge il numero cliccato nell'array degli elementi cliccati
 * se gli elementi cliccati sono uguali al numero massimo della griglia - 16 allora l'utente vince.
 */
function squareClick() {
    // se sto ancora giocando
    if (gameResult === "gameNotOver") {
        const clickedNumber = parseInt(this.textContent);
        console.log(clickedNumber);

        if (arrayBomb.includes(clickedNumber)) {
            // aggiunge la classe bomb al numero cliccato
            this.classList.add("bomb");

            // conta la lunghezza dell'array dei numeri cliccati prima della bomba
            let clickedNumberlenght = parseInt(numbersClicked.length)
            console.log(clickedNumberlenght);

            // stampa dell'esito
            document.getElementById("result-text").innerHTML = `Mi dipiace ma sei esploso...Sei sopravvisuto per ${clickedNumberlenght} passi`;
            gameResult = "gameover"

        } else {
            // aggiunge la classe clicked-bg al numero cliccato
            this.classList.add("clicked-bg");

            // se il numero cliccato non è nell'array dei numeri cliccati lo aggiungo
            if (!numbersClicked.includes(clickedNumber)) {
                numbersClicked.push(clickedNumber);
            }
            console.log(numbersClicked);

            // se il numero degli elemnti cliccati è uguale al numero degli elementi massimi meno le bombe allora l'user ha vinto
            if (numbersClicked.length === squareNumber - 16) {
                document.getElementById("result-text").innerHTML = `Complimenti sei sopravvisuto`;
                gameResult = "gameover"
            }

        }
        return gameResult;
    }
}