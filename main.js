const genButton = document.getElementById("gen-button")
const memoryGen = document.getElementById("memory-gen")
const memoryPic = document.getElementById("memory-pic")

var array = [ 
    {memory: 'when you confronted me (only) two years later about a pencil I stole from you', pic: 'media/confrontation.jpg'}, 
    {memory: 'noodle soup without noodles yum (never letting this go)', pic: 'media/noodles.png'},
    {memory: 'when we did that i-STEM hydraulics presentation together and did surprisingly well??', pic: 'media/confused.png'},
    {memory: 'when we went back and forth over text in yr 9 creating acronyms for at least two hours...', pic: ''},
    {memory: 'that night at SCG retreat when we went and sat on a bench outside haha (helpful image below)', pic: 'media/bench.jpg'},
    {memory: 'bröther may I have some oats', pic: 'media/oats.jpg'},
    {memory: 'when we watched kpop mvs in our study periods (or I was forced to, but I did it for friendship)', pic: 'media/kpop.gif'},
    {memory: 'soysacer', pic: 'media/soysacer.jpg'},
    {memory: 'when we did practical care together (aw)', pic: ''},
    {memory: 'intermission: thank you for letting me rant to you about useless things <3 (and sorry)', pic:'media/mental.jpg'},
    {memory: 'when I wrote you that socialisation word doc for your international science fair thing LOL', pic:'media/socialisation.jpg'},
    {memory: 'when we used to bash our chests twice and then throw peace signs', pic: ''},
    {memory: '"if you say so"', pic:'media/pigeon.jpg'},
    {memory: 'sfhloop (idk man ask me what this is and i will explain)', pic:''},
    {memory: 'OUR PLANE AWW', pic:'media/plane.jpg'},
    {memory: 'fabulous laptop drawings', pic: 'media/drawing.jpg'}
]; 

document.addEventListener('DOMContentLoaded', function() {
    window.count = 0;
}, false);

Array.prototype.shuffle = function () {
    let input = this;
  
    for (let i = input.length - 1; i >= 0; i--) {
  
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let itemAtIndex = input[randomIndex];
  
      input[randomIndex] = input[i];
      input[i] = itemAtIndex;
    }
    return input;
}

function generateMem() {
    if (count == 0 || (array.length == count)) {
        array.shuffle();
        count = 0;
    }
    var selection = array[count];

    memoryGen.innerHTML = selection["memory"]; 
    memoryPic.src = selection["pic"];

    count = count + 1;
}

genButton.onclick = generateMem;

genButton.addEventListener("click", function () {
    var audio = new Audio('media/click.mp3');
    audio.play();

    memoryGen.classList.add("fade-in");
    memoryPic.classList.add("fade-in"); 
});

var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");

icon.onclick = function(){
    if (mySong.paused){
        mySong.play();
        icon.src = "media/pause.png";
    } else {
        mySong.pause();
        icon.src = "media/play.png";
    }
}
