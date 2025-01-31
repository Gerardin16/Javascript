let noOfDrumButtons=document.querySelectorAll(".drum").length;

for(i=0;i<noOfDrumButtons;i++)
{
    // Named function
    document.querySelectorAll(".drum")[i].addEventListener("click",buttonclick);
    // Anonymous function 
    // document.querySelectorAll(".drum")[i].addEventListener("click",  function (){
    //     alert("I got clicked");
    // });
    
   
}

function buttonclick(){
   let clickedButton=this.innerHTML;
   chosenDrum(clickedButton);
   showAnimation(clickedButton);
}

document.addEventListener("keydown",keypress);

function keypress(event){
    let pressedKey=event.key;
    chosenDrum(pressedKey);
    showAnimation(pressedKey);

}

function chosenDrum(selectedValue){
    switch (selectedValue) {
        case "w":
            let crash = new Audio('/sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            let kickBass = new Audio('/sounds/kick-bass.mp3');
            kickBass.play();
            break;
        case "s":
            let snare= new Audio('/sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            let tom1 = new Audio('/sounds/tom-1.mp3');
            tom1.play();
                break;
        case "j":
            let tom2 = new Audio('/sounds/tom-2.mp3');
            tom2.play();
            break;
        case "k":
            let tom3 = new Audio('/sounds/tom-3.mp3');
            tom3.play();
            break;
        case "l":
            let tom4 = new Audio('/sounds/tom-4.mp3');
            tom4.play();
            break;     
       default:
           alert("Click the correct drum.");
           break;
   }


}

function showAnimation(selectedValue){

    let pressedDrum=document.querySelector("."+selectedValue);
    // pressedDrum.setAttribute("class","pressed");
    pressedDrum.classList.add("pressed");
    setTimeout(function(){
        pressedDrum.classList.remove("pressed");
    },100);
}