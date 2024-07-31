//Snake water and gun game 
function game() {
    let score = 0;
    let score2 = 0;
    for (let i = 0; i < 5; i++) {
        let user = prompt("Enter S,W,G");
        let ran = Math.round(Math.random() * 2);
        let userInput = ["S", "W", "G"][ran];
        if (userInput === user) {
            console.log("tie");
        }
        else if (userInput === "S" && user === "W") {
            console.log("CPU wins");
            score2++;
        }
        else if (userInput === "W" && user === "S") {
            console.log("You wins");
            score++;
        }
        else if (userInput === "G" && user === "S") {
            console.log("CPU wins");
            score2++;
        }
        else if (userInput === "S" && user === "G") {
            console.log("You wins");
            score++;
        }
        else if (userInput === "W" && user === "G") {
            console.log("CPU wins");
            score2++;
        }
        else if (userInput === "G" && user === "W") {
            console.log("You Wins");
            score++;
        }
    }
    console.log("Your score is " + score + " and CPU score is " + score2);
}
console.log(game());
export {};
