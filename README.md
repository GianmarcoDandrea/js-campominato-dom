# ESERCIZIO #
Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.  
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.  
I numeri nella lista delle bombe non possono essere duplicati.
[23, 65, 1, 4,78,15,....];  
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.  
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.  

**BONUS:**  
1. L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
2. quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
3. quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste

## SVOLGIMENTO ##



