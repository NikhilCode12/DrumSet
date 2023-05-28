// Adding event listener to the button
var sounds = [
    'sounds/tom-1.mp3',
    'sounds/tom-2.mp3',
    'sounds/tom-3.mp3',
    'sounds/tom-4.mp3',
    'sounds/snare.mp3',
    'sounds/crash.mp3',
    'sounds/kick-bass.mp3'
]

for(var i=0;i<7;i++){
    var buttonPress = document.querySelectorAll('.drum')[i].addEventListener("click",function(){    
        var btnText = this.textContent;
        makeSound(btnText);
    });
}

document.addEventListener('keydown',function(event){
    makeSound(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            var audio = new Audio(sounds[0]);
            audio.play();
        break;
        case "a":
            var audio = new Audio(sounds[1]);
            audio.play();
        break;
        case "s":
            var audio = new Audio(sounds[2]);
            audio.play();
        break;
        case "d":
            var audio = new Audio(sounds[3]);
            audio.play();
        break;
        case "j":
            var audio = new Audio(sounds[4]);
            audio.play();
        break;
        case "k":
            var audio = new Audio(sounds[5]);
            audio.play();
        break;
        case "l":
            var audio = new Audio(sounds[6]);
            audio.play();
        break;
    }
}