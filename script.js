/*$(document).ready(function(){
    $("#butt").click(function(){
        $(".outer").hide();
        $(".container").show();
    });*/

//Using JQuery.    
//The content div is only visible.
$(document).ready(function(){
    $(".container").hide(); 
}); 
    

$(document).ready(function(){
    $("#butt").click(function(){
      $(".outer").fadeOut(400);
      $(".container").fadeIn(2000);
    });
});

const mdlbtn = document.getElementById("modal-button");
var modalback = document.querySelector(".modal-back");
mdlbtn.addEventListener('click' , function() {
    location.reload();
});

const closebtn = document.getElementById("close");
closebtn.addEventListener('click' , function() {
    modalback.classList.remove("modal-active");
});

function gameplay() {
    let playscore = 0;
    let compscore = 0;
    /*Player choice*/
    var rock_div = document.getElementById("first");
    var paper_div = document.getElementById("second");
    var scissors_div = document.getElementById("third");
    var playeroption = "" ;
        rock_div.addEventListener('click' , function(){
            playeroption = "rock";
            var element = document.getElementById("phand");
            element.classList.add("jering");
        });
        paper_div.addEventListener('click' , function(){
            playeroption = "paper";
        });
        scissors_div.addEventListener('click' , function(){
            playeroption = "scissors";
        });
    /*computer choice*/
    const opt = document.querySelectorAll(".options button");
    const playerhand = document.getElementById("phand");
    const computerhand = document.getElementById("chand");
    const hands = document.querySelectorAll(" .hand img");

    
    /*hands.forEach( hand =>{
        hand.
    });*/
    const array = ["rock" , "paper" , "scissors"];

    opt.forEach(option => {
        option.addEventListener('click' , function() {
            var rand = array[Math.floor(Math.random() * array.length)];
            console.log('computer chooses: ' + rand + '.');
            /*call function*/

            /*console tobe deleted afterwards*/
            console.log('player chooses:' + playeroption + '.');
            playerhand.style.animation = "jerking 2s ease";
            computerhand.style.animation = "jerking 2s ease"; 
           setTimeout( () =>{ 
           
                playerhand.style.animation = '';
                computerhand.style.animation = '';
            
               winner(playeroption , rand);
            /*update the hands*/
            playerhand.src = `${playeroption}.png`;
            computerhand.src = `${rand}.png`;
        } , 2000);
        
    });
});

    //this function keeps the count of the scores of teh system and the player.
    function winner(playerchoice , rand) {
        

        const start = document.getElementById("start");
        if(playerchoice === rand ){
            start.innerHTML = "It's a tie!";
            /*return;*/
        }
        if( playerchoice === 'rock') {
            if(rand === 'scissors') {
                start.innerHTML = "You win!";
                playscore = playscore + 1;
                document.getElementById("player-score").innerHTML = playscore;
                document.getElementById("computer-score").innerHTML = compscore;
                /*return;*/
            }
            else if(rand === 'paper'){
                start.innerHTML = 'Computer wins';
                compscore = compscore + 1;
                document.getElementById("player-score").innerHTML = playscore;
                document.getElementById("computer-score").innerHTML = compscore;
                /*return;*/
            }
        }
        if( playerchoice === 'paper') {
            if( rand === 'rock') {
                start.innerHTML = 'You win!';
                playscore = playscore + 1;
                document.getElementById("player-score").innerHTML = playscore;
                document.getElementById("computer-score").innerHTML = compscore;
                /*return;*/
            }
            else if( rand === 'scissors') {
                start.innerHTML = 'Computer wins!';
                compscore = compscore + 1;
                document.getElementById("player-score").innerHTML = playscore;
                document.getElementById("computer-score").innerHTML = compscore;
                /*return;*/
            }
        }
        if( playerchoice === 'scissors') {
            if( rand === 'paper') {
                start.innerHTML = 'You win!';
                playscore = playscore + 1;
                document.getElementById("player-score").innerHTML = playscore;
                document.getElementById("computer-score").innerHTML = compscore;
                /*return;*/
            }
            else if( rand === 'rock' ){
                start.innerHTML = 'Computer wins!';
                compscore = compscore + 1;
                document.getElementById("player-score").innerHTML = playscore;
                document.getElementById("computer-score").innerHTML = compscore;
                /*return;*/
            }
        }
        message(playscore , compscore);
    }
    //NOTE: Here the return statement is not used because it will carry the compiler out of the function without executing the remaining portion of the code.

    //This is the function used to return a modal that pops up if either of the two win the game.
    function message(playscore , compscore) {
        var modalback = document.querySelector(".modal-back");
        //Displays the message when the player wins the game    
        if( playscore === 5 ) {
            document.getElementById("message").innerHTML = "Player";
            modalback.classList.add("modal-active");
       }
       //Displays the message when the computer wins.
       if( compscore === 5 ) {
        document.getElementById("message").innerHTML = "Computer";
            modalback.classList.add("modal-active");
        }
    }
}
gameplay()