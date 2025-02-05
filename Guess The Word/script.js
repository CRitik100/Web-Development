document.addEventListener('DOMContentLoaded',()=>{

    let wordToGuess = ["Apple","Mango","Virat","Ritik","Watch"];
    let pointer = 0;
    let attemptLeft = 5;
    let guessedWord = '';

    const wordToDisplay = document.querySelector('.wordToGuess');
    const next = document.querySelector('#Next');
    const submit = document.querySelector('#Submit');
    const userInput = document.querySelectorAll('.inputChar input');
    const noOfAttemptLeft = document.querySelector('#noOfAttemptsLeft');
    const showAnswer = document.querySelector('.showAns');
    const ans = document.querySelector('.ans');
    const result = document.querySelector('.result');


    // First Element to guess.
    wordToDisplay.innerHTML = shuffle(wordToGuess[pointer++]);


    // Function to shuffle letters.
    function shuffle(str) { 
        let arrayOfChar = Array.from(str, c => c.toUpperCase());
        for (let i = 0; i < arrayOfChar.length - 1; i++) { 
            let j = Math.floor(Math.random() * arrayOfChar.length); 
            let temp = arrayOfChar[i]; 
            arrayOfChar[i] = arrayOfChar[j]; 
            arrayOfChar[j] = temp; 
        } 
        return arrayOfChar.join(""); 
    };

    // Clear the Input Field
    function clearUserInput(){
        for(let i =0; i<userInput.length;i++){
            userInput[i].value=null;
        }
    }

    // Next Button Functionality.
    next.addEventListener('click',()=>{
        attemptLeft = 5 ;
        noOfAttemptLeft.innerHTML = attemptLeft;
        if(pointer===wordToGuess.length)
            pointer=0;
        wordToDisplay.innerHTML = shuffle(wordToGuess[pointer++]);
        if(ans.style.maxHeight != '0px'){
            ans.style.maxHeight = '0px';
        }
        // clearUserInput();
        clearUserInput();
        result.style.maxHeight = '0px';
    });

    // Submit Button Functionality.
    submit.addEventListener('click',()=>{
        guessedWord = '';
        for(let i =0; i<userInput.length;i++){
            guessedWord = guessedWord+userInput[i].value.toUpperCase();
        }
        if (guessedWord == (wordToGuess[pointer-1].toUpperCase())){
            result.innerHTML = "Won The Match...!!!";
            result.style.color = 'darkgreen';
            result.style.maxHeight = result.scrollHeight + 'px';
        }
        else if (attemptLeft>1){
            noOfAttemptLeft.innerHTML = --attemptLeft;
            result.innerHTML = "Try once Again...!!!";
            result.style.color = 'violet';
            result.style.maxHeight = result.scrollHeight + 'px';
        }
        else if (attemptLeft == 1){
            noOfAttemptLeft.innerHTML = --attemptLeft;
            result.innerHTML = "Lost The Match...!!!";
            result.style.color = 'red';   
        }
    });

    // show Ans Functionality.
    showAnswer.addEventListener('click',()=>{
        if(ans.style.maxHeight == '0px'){
            ans.innerHTML = wordToGuess[pointer-1];
            ans.style.maxHeight = ans.scrollHeight + 'px';
        }
        else{
            ans.style.maxHeight = '0px';
        }
    });

});