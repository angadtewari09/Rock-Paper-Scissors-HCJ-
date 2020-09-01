/*$(document).ready(function(){
    $("#butt").click(function(){
        $(".outer").hide();
        $(".container").show();
    });*/

$(document).ready(function(){
    $(".container").hide(); 
}); 
    

$(document).ready(function(){
    $("#butt").click(function(){
      $(".outer").hide();
      $(".container").show();
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

            /*console tobe ddeleted afterwards*/
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
    
    function winner(playerchoice , rand) {
        

        const start = document.getElementById("start");
        if(playerchoice === rand ){
            start.innerHTML = "It's a tie!";
            return;
        }
        if( playerchoice === 'rock') {
            if(rand === 'scissors') {
                start.innerHTML = "You win!";
                playscore = playscore + 1;
                document.getElementById("player-score").innerHTML = playscore;
                document.getElementById("computer-score").innerHTML = compscore;
                return;
            }
            else {
                start.innerHTML = 'Computer wins';
                compscore = compscore + 1;
                document.getElementById("player-score").innerHTML = playscore;
                document.getElementById("computer-score").innerHTML = compscore;
                return;
            }
        }
        if( playerchoice === 'paper') {
            if( rand === 'rock') {
                start.innerHTML = 'You win!';
                playscore = playscore + 1;
                document.getElementById("player-score").innerHTML = playscore;
                document.getElementById("computer-score").innerHTML = compscore;
                return;
            }
            else {
                start.innerHTML = 'Computer wins!';
                compscore = compscore + 1;
                document.getElementById("player-score").innerHTML = playscore;
                document.getElementById("computer-score").innerHTML = compscore;
                return;
            }
        }
        if( playerchoice === 'scissors') {
            if( rand === 'paper') {
                start.innerHTML = 'You win!';
                playscore = playscore + 1;
                document.getElementById("player-score").innerHTML = playscore;
                document.getElementById("computer-score").innerHTML = compscore;
                return;
            }
            else {
                start.innerHTML = 'Computer wins!';
                compscore = compscore + 1;
                document.getElementById("player-score").innerHTML = playscore;
                document.getElementById("computer-score").innerHTML = compscore;
                return ;
            }
        }
        message(playscore , compscore);
    }
    function message(playscore , compscore) {
        var modalback = document.querySelector(".modal-back");
        if( playscore === 5 ) {
            document.getElementById("message").innerHTML = "Player";
            console.log("hello");
            modalback.classList.add("modal-active");
       }
    
       if( compscore === 5 ) {
        document.getElementById("message").innerHTML = "Computer";
            modalback.classList.add("modal-active");
            console.log("world");
        }
    }
}
gameplay()