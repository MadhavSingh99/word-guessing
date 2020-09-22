// words list
var words = ["ANIL", "RISHI", "SALMAN", "AKSHAY", "DHARMENDRA", "AMITABH", "SANJAY", "JACKY","SHAHRUKH","MITHUN","SUNNY","SUNIL"];


var maxNumGuesses = 8; // max number of guesses 
var guessedLetters = []; // store the guessed letters
var ansWordArr = []; // store the "_" and to be used to replace the word answer
var numGuessesRemaining = 0; // number of guesses remaining
var numWins = 0; // number of wins
var numLosses = 0; // number of losses
var isFinished = false; // when true, game can start again
var ansWord; // the word that is being played

// function runs at the start of page and used to restart after game isFinished
function setup() {
    document.querySelector("img").style.display = "none";
    //picks random word from words list
    ansWord = words[Math.floor(Math.random() * words.length)];

    ansWordArr = [];
    // adds "_" to ansWordArr
    for (var i = 0; i < ansWord.length; i++) {
        ansWordArr[i] = "_";
    }
    // reset the variables 
    numGuessesRemaining = maxNumGuesses;
    guessedLetters = [];

    //clears giphy-embed to now show any gifs
    document.getElementById("giphy-embed").src = "";
    //removes color from numGuesses
    document.getElementById("numGuesses").style.color = "";

    //show the selected elements on the screen 
    updateScreen();
};

//updates the HTML from the functions
function updateScreen() {
    document.getElementById("numWins").innerText = numWins;
    document.getElementById("numLosses").innerText = numLosses;
    document.getElementById("numGuesses").innerText = numGuessesRemaining;
    document.getElementById("answerWord").innerText = ansWordArr.join("");
    document.getElementById("guessedLetters").innerText = guessedLetters;

};

//function to check the key that's pressed
function checkGuess(letter) {

    //if letter is not in guessedLetters array then push the letter to the array
    if (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);
        //if the letter isn't in the answer word then -1 the numGuessesRemaining
        if (ansWord.indexOf(letter) === -1) {
            numGuessesRemaining--;
            //if numGuessesRemaining is 3 or less then change the color
            if (numGuessesRemaining <=3) {
                document.getElementById("numGuesses").style.color = "#e12d2e";
            }
            //if letter is in answer then replace the positioned "_" with the letter
        } else { 
            for (var i = 0; i < ansWord.length; i++) {
                if (letter === ansWord[i]) {
                    ansWordArr[i] = letter;
                } 
            }                
        }
    }

}; 



//function to check if the player is a winner
function isWinner() {
    //if there are no more "_" in the ansWordArr then +1 to Wins and switch isFinished to true
    if (ansWordArr.indexOf("_") === -1) {
        numWins++;
        isFinished = true;
        //if the answer is guessed then play assigned gif
        // if(ansWord === "DOUG") {
        //     document.getElementById("giphy-embed").src = "https://giphy.com/embed/w7iOaLoi84N6E";
        // } else if (ansWord === "RUGRATS") {
        //     document.getElementById("giphy-embed").src = "https://giphy.com/embed/3x5V8j8T341lS";
        // } else if (ansWord === "SPONGEBOB") {
        //     document.getElementById("giphy-embed").src = "https://giphy.com/embed/TdfyKrN7HGTIY";
        // } else if (ansWord === "POKEMON") {
        //     document.getElementById("giphy-embed").src = "https://giphy.com/embed/xuXzcHMkuwvf2";
        // } else if (ansWord === "ANIMANIACS") {
        //     document.getElementById("giphy-embed").src = "https://giphy.com/embed/Vpu0dyuOVbrBC";
        // } else if (ansWord === "RECESS") {
        //     document.getElementById("giphy-embed").src = "https://giphy.com/embed/ENjchsyk8aSoE";
        // } else if (ansWord === "CATDOG") {
        //     document.getElementById("giphy-embed").src = "https://giphy.com/embed/VqWjJR7vOwmSk";
        // } else if (ansWord === "SIMPSONS") {
        //     document.getElementById("giphy-embed").src = "https://giphy.com/embed/tkYpAbKdWj4TS";
        // }
        if(ansWord === "ANIL") {
            document.querySelector("img").style.display = "block";
            document.getElementById("giphy-embed").src = "https://in.bmscdn.com/iedb/artist/images/website/poster/large/anil-kapoor-176-12-09-2017-07-42-36.jpg?1";
        } else if (ansWord === "RISHI") {
            document.querySelector("img").style.display = "block";
            document.getElementById("giphy-embed").src = "https://mcmscache.epapr.in/post_images/website_350/post_16056826/full.jpg";
        } else if (ansWord === "SALMAN") {
            document.querySelector("img").style.display = "block";
            document.getElementById("giphy-embed").src = "https://i.pinimg.com/originals/bc/93/c2/bc93c26f13591a614ac32960157cd92e.jpg";
        } else if (ansWord === "AKSHAY") {
            document.querySelector("img").style.display = "block";
            document.getElementById("giphy-embed").src = "https://i.pinimg.com/originals/0c/bf/de/0cbfde26475f81ade45ee0d8d63ed6f8.jpg";
        } else if (ansWord === "DHARMENDRA") {
            document.querySelector("img").style.display = "block";
            document.getElementById("giphy-embed").src = "https://i.pinimg.com/originals/e9/b0/27/e9b02736600b9f5465acdb370f6e8795.jpg";
        } else if (ansWord === "SHAHRUKH") {
            document.querySelector("img").style.display = "block";
            document.getElementById("giphy-embed").src = "https://static.toiimg.com/thumb/msid-69633629,width-800,height-600,resizemode-75,imgsize-154977,pt-32,y_pad-40/69633629.jpg";
        } else if (ansWord === "JACKY") {
            document.querySelector("img").style.display = "block";
            document.getElementById("giphy-embed").src = "https://static.toiimg.com/thumb/msid-64273864,imgsize-153531,width-800,height-600,resizemode-75/64273864.jpg";
        } else if (ansWord === "SANJAY") {
            document.querySelector("img").style.display = "block";
            document.getElementById("giphy-embed").src = "https://i.pinimg.com/originals/ec/16/24/ec1624f3214db882ccda524e3960256d.jpg";
        }else if (ansWord === "AMITABH") {
            document.querySelector("img").style.display = "block";
            document.getElementById("giphy-embed").src = "https://i.ndtvimg.com/mt/2012-10/bigbndtv-big.jpg?downsize=360:*";
        }else if (ansWord === "SUNNY") {
            document.querySelector("img").style.display = "block";
            document.getElementById("giphy-embed").src = "https://pbs.twimg.com/media/Dtiot0mVYAAmYS6.jpg";
        }else if (ansWord === "SUNIL") {
            document.querySelector("img").style.display = "block";
            document.getElementById("giphy-embed").src = "https://im.indiatimes.in/content/itimes/photo/2015/Apr/12/1428860509-sunil-shetty-stylish-photos.jpg?w=570&h=712&cc=1";
        }else if (ansWord === "MITHUN") {
            document.querySelector("img").style.display = "block";
            document.getElementById("giphy-embed").src = "https://img.pgc.in.goldenmob.com/img/0b44cf60c2b94629b417dac99ac46f5c/53573dbc819b186b4f8b52eb058207a4-400.webp";
        }

    }
};

//function to check if player is a loser
function isLoser() {
    // if the numGuessesRemaining is 0 then -1 numLosses and switch isFinished to true
    if(numGuessesRemaining <= 0) {
        numLosses++;
        isFinished = true;
        //play the loser gif
        document.getElementById("giphy-embed").src = "https://giphy.com/embed/3oFzmko6SiknmpR2NO";
        document.getElementById("numLosses").style.color = "#e12d2e";
    }

};



//event listener for key pressed
document.onkeyup = function(event) {
    //if isFinished is true then restart the game to the initial setup 
    //and switch isFinished back to false
    if (isFinished) {
        setup();
        isFinished = false;
    } else {
        //check to see if only letters A-Z are pressed
        //functions are executed when user presses A-Z key
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            checkGuess(event.key.toUpperCase());
            checkGuess(event.key.toUpperCase()); 
            updateScreen();
            isWinner();
            isLoser();
        }
    }
};
setup();
updateScreen();

console.log(ansWord);








// var words = ["RUGRATS", "SPONGEBOB", "POKEMON", "ANIMANIACS", "RECESS", "DOUG", "CATDOG", "SIMPSONS"];

// var maxNumGuesses = 8; 
// var guessedLetters = [];
// var ansWordArr = [];
// var numGuessesRemaining = 0;
// var numWins = 0;
// var numLosses = 0;
// var isFinished = false;
// var ansWord;


// function restart() {
//     //picks random word from words list
//     ansWord = words[Math.floor(Math.random() * words.length)];

//     ansWordArr = [];

//     // adds "_" to ansWordArr
//     for (var i = 0; i < ansWord.length; i++) {
//         ansWordArr[i] = "_";
//     }

//     // reset the variables 
//     numGuessesRemaining = maxNumGuesses;
//     guessedLetters = [];

//     //show the selected elements on the screen 
//     updateScreen();
// };

// function updateScreen() {
//     document.getElementById("numWins").innerText = numWins;
//     document.getElementById("numLosses").innerText = numLosses;
//     document.getElementById("numGuesses").innerText = numGuessesRemaining;
//     document.getElementById("answerWord").innerText = ansWordArr.join("");
//     document.getElementById("guessedLetters").innerText = guessedLetters;

// };

// function checkGuess(letter) {

//     if (guessedLetters.indexOf(letter) === -1) {
//         guessedLetters.push(letter);
//         if (ansWord.indexOf(letter) === -1) {
//             numGuessesRemaining--;
//         } else {
//             for (var i = 0; i < ansWord.length; i++) {
//                 if (letter === ansWord[i]) {
//                     ansWordArr[i] = letter;
//                 } 
//             }                
//         }
//     }

// }; 



// function isWinner() {
//     if (ansWordArr.indexOf("_") === -1) {
//         numWins++;
//         isFinished = true;
//     }
// };

// function isLoser() {
//     if(numGuessesRemaining <= 0) {
//         numLosses++;
//         isFinished = true;
//     }

// };



// document.onkeyup = function(event) {
//     if (isFinished) {
//         restart();
//         isFinished = false;
//     } else {
//         if(event.keyCode >= 65 && event.keyCode <= 90) {
//             checkGuess(event.key.toUpperCase());
//             updateScreen();
//             isWinner();
//             isLoser();
//         }
//     }
// };


// restart();
// updateScreen();

// console.log(ansWord);




