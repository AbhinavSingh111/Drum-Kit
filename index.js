let len = document.querySelectorAll(".drum").length;
let fav = document.querySelectorAll("link")[2];
function makeSound(key){
    switch (key) {
        case "w":
            let crash = new Audio("./sounds/crash.mp3");
            crash.play();  
            fav.setAttribute("href","./images/crash.png");
            break;
        case "a":
            let kickBass = new Audio("./sounds/kick-bass.mp3");
            kickBass.play();  
            fav.setAttribute("href","./images/kick.png");
            break;
        case "s":
            let snare = new Audio("./sounds/snare.mp3");
            snare.play();  
            fav.setAttribute("href","./images/snare.png");
            break;
        case "d":
            let tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();  
            fav.setAttribute("href","./images/tom1.png");
            break;
        case "j":
            let tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();  
            fav.setAttribute("href","./images/tom2.png");
            break;
        case "k":
            let tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();  
            fav.setAttribute("href","./images/tom3.png");
            break;
        case "l":
            let tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();  
            fav.setAttribute("href","./images/tom4.png");
            break;
    
        default:
            console.log('wrong key pressed')
            break;
    }
}

for (let i = 0 ; i < len ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        let key = this.innerHTML;
        makeSound(key);
    });
}

document.addEventListener("keydown", (event)=>{
    makeSound(event.key);
});