// characters
const characters = "abcdefghijklmnopqrstuvwxyz";

//Get Array of Letters
let charactersArray = Array.from(characters);

//Select Letters Container
let charactersContainer = document.querySelector(".letters");

//Generate Characters

charactersArray.forEach((letter) => {
  //Create Span
  let mySpan = document.createElement("span");
  //Create Letter Text Node
  let text = document.createTextNode(letter);
  //Apend The Letter To Span
  mySpan.appendChild(text);
  //Add Class Name TO Span
  mySpan.className = "character-box";
  //Appen Span To The Letter Container
  charactersContainer.appendChild(mySpan);
});

//Object  Of Words & Categories

const words = {
  colors: [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Orange",
    "Purple",
    "Pink",
    "Brown",
    "Black",
    "White",
    "Gray",
    "Twilight Teal",
    "Teal",
    "Gold",
    "Indigo",
  ],
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],

  people: [
    "Marie Curie",
    "Nikola Tesla",
    "Elon Musk",
    "Jeff Bezos",
    "Bill Gates",
    "Nelson Mandela",
    "Martin Luther",
    "Pablo Picasso",
    "Salvador Dalí",
    "Van Gogh",
    "Beethoven ",
    "Mozart",
    "Queen",
    "Eminem",
    "Bob Dylan",
    "Tupac",
    "Snoop Dogg",
    "Rihanna",
  ],

  countries: [
    "Saudi Arabia",
    "Egypt",
    "Iraq",
    "Jordan",
    "uae",
    "Syria",
    "Lebanon",
    "Morocco",
    "Algeria",
    "Tunisia",
    "Sudan",
    "France",
    "Japan",
    "Brazil",
    "Australia",
    "Canada",
    "Spain",
    "Russia",
  ],
  food: ["Pizza", "Pasta", "Sushi", "Chocolate", "Burger", "Ice Cream"],
  fruits: [
    "Apple",
    "Banana",
    "Orange",
    "Strawberry",
    "Pineapple",
    "Watermelon",
    "Grapes",
  ],
  Animals: [
    "Tiger",
    "Elephant",
    "Lion",
    "Dolphin",
    "Penguin",
    "Giraffe",
    "Kangaroo",
  ],
  Transportation: [
    "Car",
    "Bicycle",
    "Train",
    "Airplane",
    "Boat",
    "Motorcycle",
    "Helicopter",
  ],
  Movies: [
    "La La Land",
    "Avatar",
    "Titanic",
    "Harry Potter",
    "Inception",
    "The Matrix",
    "The Godfather",
    "Joker",
    "Her",
    "Interstellar",
  ],
};

//GEt Random Property

//Get All Property
let allKeys = Object.keys(words);

//Get Random Number  Depends on Keys Lenght
let randomPropNum = Math.floor(Math.random() * allKeys.length);

//Get Random Property
//The Category
let randomPropName = allKeys[randomPropNum];

////Get Random Value OF Random Property////

//Get All Values Of Random Property Name
let randomPropValue = words[randomPropName];

//Get Random Number Depends on  Property Name
let randomValueNum = Math.floor(Math.random() * randomPropValue.length);

//Get Random Value OF Random Property Name
//The Chosen Word
let randomValueOfRandomProp = randomPropValue[randomValueNum].toLowerCase();

//Set Category Info
let categoryInfo = document.querySelector(".create-category");
categoryInfo.innerHTML = randomPropName;

//Select Letter Guess Element
let letterGuessContainer = document.querySelector(".letters-guess");

//Convert Chosen Word TO Array
let choesnWorld = Array.from(randomValueOfRandomProp);
console.log(`Word befor play agin: ${choesnWorld}`);

//Creat Spans Depened On Word
choesnWorld.forEach((ele) => {
  //Create Span
  let span = document.createElement("span");
  span.className = "letter";
  //if letter Have Space
  if (ele === " ") {
    span.className = "has-space";
  }
  //Append Span To The letters-guess-container
  letterGuessContainer.appendChild(span);
});

//Handle Clicking On Letters

//Selct guess span
let guessSpans = document.querySelectorAll(".letters-guess span");

//Set Wrong  Attempts
let wrongAttempts = 0;
//Set True  Attempts
let trueAttempts = 0;

const win = {
  headerMessegWin: "You've won!",
  findWordWin: "You are found the word!",
  level: "Your level is:",
};
const lost = {
  headerMessegLose: "You've lost!",
  findWordLose: "The word is",
  myLostMessage: "It's okay, keep trying!",
};

//level system

const theLevel = {
  big: "Beginner",
  inte: "Intermediate",
  Adv: "Advanced",
};

let { headerMessegLose, findWordLose, myLostMessage } = lost;
let { headerMessegWin, findWordWin, level } = win;
let { big, inte, Adv } = theLevel;

let numRowng = document.querySelector(".error-num");

//Select Draw Element
let theDraw = document.querySelector(".hangman-draw");

let chosenWordLenght = 0;

document.addEventListener("click", (e) => {
  if (e.target.className === "character-box") {
    e.target.classList.add("clicked");

    var chosenLetter = e.target.innerHTML.toLowerCase();
    //Set The Chose Status
    let Status = false;

    ///Start handel Bug
    let spans = Array.from(guessSpans);
    let spansspans = spans.map((ele) => {
      return ele.innerHTML;
    });
    ///End handel Bug

    choesnWorld.forEach((wordLetter, wordIndex) => {
      //Compear bettwen Clicked Letter And Each letter in Chosen Word
      if (chosenLetter == wordLetter) {
        //Set The Status to Correct
        Status = true;
        trueAttempts++;

        // Handel box-Shadow
        if (theDraw.classList.contains("lost-box-shadow")) {
          theDraw.classList.remove("lost-box-shadow");
        }
        if (theDraw.classList.contains("win-box-shadow")) {
          theDraw.classList.remove("win-box-shadow");
        }
        //We add class by setTimeout cuase adding and removing a class quickly can happen so fast that the browser doesn't have time to notice the change.
        setTimeout(function () {
          theDraw.classList.add("win-box-shadow");
        }, 10);

        guessSpans.forEach((span, spanIndex) => {
          if (wordIndex === spanIndex) {
            span.innerHTML = wordLetter;
          }
        });
        //End OF The Ganme
        //Finch good
        if (choesnWorld.includes(" ")) {
          chosenWordLenght = choesnWorld.length - 1;
        } else {
          chosenWordLenght = choesnWorld.length;
        }

        if (trueAttempts === chosenWordLenght) {
          charactersContainer.classList.add("finished");
          setTimeout(finsh, 1000);
        }
      }
    });

    // IF Letter Is Wrong
    if (Status !== true) {
      //increas the Wrong Attempts
      wrongAttempts++;

      //Add Class Wrong On the Draw Element
      theDraw.classList.add(`wrong-${wrongAttempts}`);

      //Handel box shadow
      if (theDraw.classList.contains("lost-box-shadow")) {
        theDraw.classList.remove("lost-box-shadow");
      }
      if (theDraw.classList.contains("win-box-shadow")) {
        theDraw.classList.remove("win-box-shadow");
      }
      setTimeout(function () {
        theDraw.classList.add("lost-box-shadow");
      }, 10);

      //End OF The Ganme
      //Finch Bad
      if (wrongAttempts === 9) {
        charactersContainer.classList.add("finished");
        setTimeout(finsh, 1000);
      }

      //play Fail Sound
      document.querySelector("#fail").play();
    } else {
      //play Success Sound
      document.querySelector("#success").play();
    }
    //set incorect-guess
    numRowng.innerHTML = wrongAttempts;
  }
});

///handel HIT Buttom
let hintButton = document.querySelector(".hint-button");

hintButton.addEventListener("click", () => {
  //Generate an array of  innerHtml Guess Spans
  let hintSpan = document.querySelectorAll(".letters-guess span");

  // Start to git all classes innerHtml  without has-span
  hintSpan.forEach((ele) => {
    if (ele.className.includes("has-space")) {
      ele.innerHTML = "   ";
    }
  });

  // End to git all classes innerHtml  without has-span

  let guessSpansArray = Array.from(hintSpan);
  let innerArrSpan = guessSpansArray.map((ele) => {
    return ele.innerHTML;
  });
  //Generate an  array contain Just empty indexs
  let emptyIndices = innerArrSpan.reduce((acc, val, index) => {
    //if has class letter only

    if (val === "") {
      acc.push(index);
    }
    return acc;
  }, []);

  //Generate An random Empty Index of an array
  let randomEmptyIndex =
    emptyIndices[Math.floor(Math.random() * emptyIndices.length)];

  letterGuessContainer.children[randomEmptyIndex].innerHTML =
    choesnWorld[randomEmptyIndex];

  //delete a hint letter form chosen word

  //Handel Hint Letter And Give The Hit Letter  Class clicked
  let letters = document.querySelectorAll(".character-box");

  let countHint = choesnWorld.filter(
    (ele) => ele === choesnWorld[randomEmptyIndex]
  ).length;

  letters.forEach((ele) => {
    if (ele.innerHTML === choesnWorld[randomEmptyIndex] && countHint == 1) {
      ele.classList.add("clicked");
    }
  });

  trueAttempts++;
  //handel if hint letter exsit more then one time then rplace a hint letter in array to undefined
  if (countHint > 1) {
    choesnWorld[randomEmptyIndex] = undefined;
  }

  if (trueAttempts === chosenWordLenght) {
    charactersContainer.classList.add("finished");
    setTimeout(finsh, 1000);
  }

  // // Disable hint button after use
  hintButton.classList.add("clicked");
});

//get my finsh container element

function finsh() {
  hintButton.classList.add("finsh-button");
  let myPoup = document.createElement("div");
  myPoup.className = "restGame";
  //create SVg
  let svgContainer = document.createElement("div");
  svgContainer.className = "my-svg";
  trueAttempts === chosenWordLenght
    ? (svgContainer.innerHTML = `<svg  width="250px" height="400px" viewBox="0 -12.02 94.572 94.572" xmlns="http://www.w3.org/2000/svg">
  <g id="happy" transform="translate(-62.8 -53.014)">
    <path id="Path_1" data-name="Path 1" d="M64.223,87.785c.283-26.649,16.426-33.362,45.857-33.353,29.458.009,45.585,6.732,45.869,33.353.293,27.433-16.715,34.458-46.566,34.333C79.9,121.992,63.938,114.549,64.223,87.785Z" fill="#a4d4b2" fill-rule="evenodd"/>
    <path id="Path_2" data-name="Path 2" d="M64.223,87.785c.015-1.428.078-2.8.184-4.11,1.853,22.4,17.569,28.84,44.977,28.957,27.8.116,44.46-5.971,46.379-28.97.107,1.319.171,2.69.186,4.123.292,27.433-16.714,34.458-46.565,34.333C79.9,121.992,63.939,114.55,64.223,87.785Z" fill="#1a1818" fill-rule="evenodd" opacity="0.15"/>
    <path id="Path_3" data-name="Path 3" d="M62.8,87.774c.147-13.863,4.477-22.577,12.649-27.858,8.008-5.175,19.647-6.907,34.627-6.9s26.629,1.745,34.642,6.925c8.172,5.282,12.5,13.991,12.646,27.835.152,14.26-4.252,23.255-12.625,28.7-8.21,5.341-20.175,7.124-35.365,7.06-15.021-.064-26.638-2.02-34.54-7.422-8.051-5.5-12.182-14.431-12.034-28.34ZM76.988,62.308C69.661,67.043,65.776,75.01,65.641,87.8c-.137,12.855,3.57,21.031,10.8,25.971,7.377,5.043,18.483,6.871,32.949,6.932,14.66.062,26.125-1.606,33.808-6.6,7.52-4.893,11.474-13.128,11.334-26.3-.137-12.776-4.017-20.74-11.344-25.477-7.485-4.838-18.638-6.464-33.107-6.469C95.63,55.846,84.48,57.467,76.988,62.308Z" fill="#1a1818" fill-rule="evenodd"/>
    <path id="Path_4" data-name="Path 4" d="M95.871,86.318a1.419,1.419,0,1,1,2.146-1.857,15.345,15.345,0,0,0,1.58,1.584,16.308,16.308,0,0,0,20.969,0,15.318,15.318,0,0,0,1.588-1.584,1.419,1.419,0,1,1,2.146,1.857,17.937,17.937,0,0,1-1.877,1.873,19.151,19.151,0,0,1-24.683,0A17.964,17.964,0,0,1,95.871,86.318Z" fill="#1a1818" fill-rule="evenodd"/>
    <path id="Path_5" data-name="Path 5" d="M89.369,88.893l-6.057,0a1.68,1.68,0,0,1-1.172-2.884,5.753,5.753,0,0,1,7.928-.46,5.537,5.537,0,0,1,.568.568,1.678,1.678,0,0,1-1.267,2.773Z" fill="#eb505e" fill-rule="evenodd"/>
    <path id="Path_6" data-name="Path 6" d="M136.858,88.895H130.8A1.68,1.68,0,0,1,129.638,86a5.438,5.438,0,0,1,.462-.45,5.77,5.77,0,0,1,7.458,0,5.575,5.575,0,0,1,.567.56,1.68,1.68,0,0,1-1.267,2.782Z" fill="#eb505e" fill-rule="evenodd"/>
    <g id="Group_1" data-name="Group 1">
      <path id="Path_7" data-name="Path 7" d="M86.342,82.325A6.226,6.226,0,1,0,80.116,76.1,6.237,6.237,0,0,0,86.342,82.325Z" fill="#1a1818" fill-rule="evenodd"/>
      <path id="Path_8" data-name="Path 8" d="M85.747,75.709a2,2,0,1,0-2-2A2,2,0,0,0,85.747,75.709Z" fill="#ffffff" fill-rule="evenodd"/>
      <path id="Path_9" data-name="Path 9" d="M83.649,79.028a1.241,1.241,0,1,0-1.241-1.24A1.242,1.242,0,0,0,83.649,79.028Z" fill="#ffffff" fill-rule="evenodd"/>
    </g>
    <g id="Group_2" data-name="Group 2">
      <path id="Path_10" data-name="Path 10" d="M133.83,82.325A6.226,6.226,0,1,0,127.6,76.1,6.238,6.238,0,0,0,133.83,82.325Z" fill="#1a1818" fill-rule="evenodd"/>
      <path id="Path_11" data-name="Path 11" d="M133.236,75.709a2,2,0,1,0-2-2A2,2,0,0,0,133.236,75.709Z" fill="#ffffff" fill-rule="evenodd"/>
      <path id="Path_12" data-name="Path 12" d="M131.137,79.028a1.241,1.241,0,1,0-1.241-1.24A1.243,1.243,0,0,0,131.137,79.028Z" fill="#ffffff" fill-rule="evenodd"/>
    </g>
  </g>
</svg>`)
    : (svgContainer.innerHTML = `<svg  width="250px" height="400px" viewBox="0 -12.02 94.572 94.572" xmlns="http://www.w3.org/2000/svg">
  <g id="sad" transform="translate(-205.409 -53.014)">
    <path id="Path_14" data-name="Path 14" d="M206.832,87.785c.283-26.649,16.426-33.362,45.857-33.353,29.458.009,45.585,6.732,45.869,33.353.293,27.433-16.715,34.458-46.565,34.333C222.506,121.992,206.548,114.549,206.832,87.785Z" fill="#b9e2f8" fill-rule="evenodd"/>
    <path id="Path_15" data-name="Path 15" d="M206.832,87.785c.015-1.428.078-2.8.184-4.11,1.853,22.4,17.57,28.84,44.977,28.957,27.8.116,44.46-5.971,46.38-28.97.106,1.319.17,2.69.185,4.123.293,27.433-16.714,34.458-46.565,34.333C222.506,121.992,206.548,114.55,206.832,87.785Z" fill="#1a1818" fill-rule="evenodd" opacity="0.15"/>
    <path id="Path_16" data-name="Path 16" d="M205.413,87.774c.148-13.863,4.477-22.577,12.649-27.858,8.008-5.175,19.647-6.907,34.627-6.9s26.629,1.745,34.643,6.925c8.171,5.282,12.5,13.991,12.645,27.835.152,14.26-4.252,23.255-12.624,28.7-8.211,5.341-20.176,7.124-35.366,7.06-15.021-.064-26.638-2.02-34.54-7.422-8.051-5.5-12.181-14.431-12.034-28.34ZM219.6,62.308c-7.328,4.735-11.212,12.7-11.348,25.488-.136,12.855,3.571,21.031,10.8,25.971,7.377,5.043,18.483,6.871,32.949,6.932,14.66.062,26.125-1.606,33.808-6.6,7.52-4.893,11.474-13.128,11.334-26.3C297,75.02,293.123,67.056,285.8,62.319c-7.485-4.838-18.638-6.464-33.107-6.469C238.239,55.846,227.089,57.467,219.6,62.308Z" fill="#1a1818" fill-rule="evenodd"/>
    <path id="Path_17" data-name="Path 17" d="M240.627,92.208a1.419,1.419,0,0,1-2.147-1.857,17.965,17.965,0,0,1,1.869-1.873,19.154,19.154,0,0,1,24.684,0,18.133,18.133,0,0,1,1.876,1.874,1.419,1.419,0,0,1-2.146,1.857,15.317,15.317,0,0,0-1.588-1.584,16.308,16.308,0,0,0-20.969,0A15.239,15.239,0,0,0,240.627,92.208Z" fill="#1a1818" fill-rule="evenodd"/>
    <path id="Path_18" data-name="Path 18" d="M228.951,82.24a6.226,6.226,0,1,0-6.226-6.226A6.238,6.238,0,0,0,228.951,82.24Z" fill="#1a1818" fill-rule="evenodd"/>
    <path id="Path_19" data-name="Path 19" d="M228.356,75.624a2,2,0,1,0-2-2A2,2,0,0,0,228.356,75.624Z" fill="#ffffff" fill-rule="evenodd"/>
    <path id="Path_20" data-name="Path 20" d="M226.258,78.943a1.241,1.241,0,1,0-1.241-1.24A1.242,1.242,0,0,0,226.258,78.943Z" fill="#ffffff" fill-rule="evenodd"/>
    <g id="Group_5" data-name="Group 5">
      <path id="Path_21" data-name="Path 21" d="M276.439,82.24a6.226,6.226,0,1,0-6.226-6.226A6.238,6.238,0,0,0,276.439,82.24Z" fill="#1a1818" fill-rule="evenodd"/>
      <path id="Path_22" data-name="Path 22" d="M275.845,75.624a2,2,0,1,0-2-2A2,2,0,0,0,275.845,75.624Z" fill="#ffffff" fill-rule="evenodd"/>
      <path id="Path_23" data-name="Path 23" d="M273.747,78.943a1.241,1.241,0,1,0-1.241-1.24A1.242,1.242,0,0,0,273.747,78.943Z" fill="#ffffff" fill-rule="evenodd"/>
    </g>
    <path id="Path_24" data-name="Path 24" d="M231.978,88.89l-6.057,0a1.68,1.68,0,0,1-1.171-2.884,5.51,5.51,0,0,1,.471-.459,5.767,5.767,0,0,1,7.456,0,5.536,5.536,0,0,1,.568.568,1.678,1.678,0,0,1-1.267,2.773Z" fill="#eb505e" fill-rule="evenodd"/>
    <path id="Path_25" data-name="Path 25" d="M279.468,88.892H273.41A1.68,1.68,0,0,1,272.247,86a5.581,5.581,0,0,1,.462-.449,5.77,5.77,0,0,1,7.458,0,5.471,5.471,0,0,1,.567.56,1.68,1.68,0,0,1-1.266,2.782Z" fill="#eb505e" fill-rule="evenodd"/>
    <path id="Path_26" data-name="Path 26" d="M228.95,82.738c2.345,0,4.258-.717,4.258-1.6s-1.913-1.6-4.258-1.6-4.258.717-4.258,1.6S226.6,82.738,228.95,82.738Z" fill="#00a1ed" fill-rule="evenodd"/>
    <path id="Path_27" data-name="Path 27" d="M276.439,82.738c2.345,0,4.258-.717,4.258-1.6s-1.913-1.6-4.258-1.6-4.259.717-4.259,1.6S274.093,82.738,276.439,82.738Z" fill="#00a1ed" fill-rule="evenodd"/>
  </g>
</svg>`);

  let message = document.createTextNode(
    trueAttempts === chosenWordLenght ? headerMessegWin : headerMessegLose
  );

  let eleMessage = document.createElement("div");
  eleMessage.className = "my-message";
  trueAttempts === chosenWordLenght
    ? eleMessage.classList.add("hooray")
    : eleMessage.classList.add("aw");

  let wordName = document.createElement("span");
  wordName.className = "result-word";
  trueAttempts === chosenWordLenght
    ? wordName.classList.add("word-win")
    : wordName.classList.add("word-lost");
  let theWord = document.createTextNode(
    `${trueAttempts === chosenWordLenght ? findWordWin : findWordLose}: `
  );
  //
  let theWordName = document.createElement("span");
  theWordName.appendChild(
    document.createTextNode(`${randomValueOfRandomProp.toUpperCase()}`)
  );

  //level
  let myLevel = document.createElement("p");
  myLevel.className = "myLevel";
  myLevel.appendChild(document.createTextNode(`${level}`));
  let youerLevel = document.createElement("span");
  let levelText = document.createTextNode(
    `${
      wrongAttempts >= 0 && wrongAttempts < 3
        ? Adv
        : wrongAttempts >= 3 && wrongAttempts < 6
        ? inte
        : big
    }`
  );

  let lostMessageContainer = document.createElement("p");
  lostMessageContainer.className = "lostMessage";
  let lostMessage = document.createTextNode(`${myLostMessage}`);
  lostMessageContainer.appendChild(lostMessage);

  let tryAgain = document.createElement("button");
  tryAgain.className = "try-again";
  tryAgain.appendChild(document.createTextNode("Play agian"));
  tryAgain.addEventListener("click", (ele) => {
    // window.location.reload();
    // ele.preventDefault();

    resetGame();
  });
  eleMessage.appendChild(message);
  wordName.appendChild(theWord);
  wordName.appendChild(theWordName);

  youerLevel.appendChild(levelText);
  myLevel.appendChild(youerLevel);
  myPoup.appendChild(svgContainer);
  myPoup.appendChild(eleMessage);
  myPoup.appendChild(wordName);
  if (trueAttempts === chosenWordLenght) {
    myPoup.appendChild(myLevel);
  } else {
    myPoup.appendChild(lostMessageContainer);
  }
  myPoup.appendChild(tryAgain);
  document.body.appendChild(myPoup);
}

/// Rest Game
function resetGame() {
  hintButton.classList.remove("finsh-button");
  //Clear Class clicked From  Hint Button
  hintButton.classList.remove("clicked");
  numRowng.innerHTML = 0;
  // Clear wrong attempts
  wrongAttempts = 0;
  // Clear true attempts
  trueAttempts = 0;

  // Reset the hangman drawing
  theDraw.className = "hangman-draw";

  // Remove the finished class from charactersContainer
  charactersContainer.classList.remove("finished");

  // Clear the finish element
  let myPop = document.querySelector(".restGame");
  myPop.classList.add("fadeOut");
  myPop.addEventListener("animationend", () => myPop.remove());

  // Generate a new random word
  randomPropNum = Math.floor(Math.random() * allKeys.length);
  randomPropName = allKeys[randomPropNum];
  randomPropValue = words[randomPropName];
  randomValueNum = Math.floor(Math.random() * randomPropValue.length);
  randomValueOfRandomProp = randomPropValue[randomValueNum].toLowerCase();
  //
  // Set category info
  categoryInfo.innerHTML = randomPropName;

  // Convert chosen word to array and create spans
  choesnWorld = Array.from(randomValueOfRandomProp);
  // Clear the letter guesses
  letterGuessContainer.innerHTML = "";
  //create spans
  choesnWorld.forEach((ele) => {
    let span = document.createElement("span");
    span.className = "letter";
    if (ele === " ") {
      span.className = "has-space";
    }
    letterGuessContainer.appendChild(span);
  });
  console.log(`Word after play agin: ${choesnWorld}`);

  let letters = document.querySelectorAll(".character-box");
  letters.forEach((ele) => {
    //reset letters opacity
    ele.classList.remove("clicked");
    //match the chosenLetter  with chosen Word
    ele.addEventListener("click", function () {
      let restChosenLetter = ele.innerHTML;
      choesnWorld.forEach((wordLetter, indexLetter) => {
        if (wordLetter == restChosenLetter) {
          letterGuessContainer.children[indexLetter].innerHTML =
            restChosenLetter;
        }
      });
    });
  });
}
