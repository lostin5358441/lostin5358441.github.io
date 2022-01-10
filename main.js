const genButton = document.getElementById("gen-button")
const memoryGen = document.getElementById("memory-gen")
const memoryPic = document.getElementById("memory-pic")

var array = [ 
    {memory: 'when you confronted me (only) two years later about a pencil I stole from you', pic: ''}, 
    {memory: 'noodle soup without noodles yum (never letting this go)', pic: 'media/noodles.png'},
    {memory: 'when we did that i-STEM hydraulics presentation together and did surprisingly well', pic: ''},
    {memory: 'when we went back and forth over text in yr 9 creating acronyms for at least two hours', pic: ''},
    {memory: 'when we sat together on a bench outside at night at SCG retreat', pic: ''},
    {memory: 'bröther may I have some oats', pic: 'media/oats.jpg'},
    {memory: 'when we watched kpop mvs in the library (or I was forced to, but I did it for friendship)', pic: 'media/kpop.gif'},
    {memory: 'soysacer', pic: 'media/soysacer.jpg'},
    {memory: 'when we did practical care together (aw)', pic: ''},
    {memory: 'intermission: thank you for letting me rant to you about useless things <3', pic:''},
    {memory: 'when I wrote you that socialisation word doc for your international science fair thing LOL', pic:''},
    {memory: 'I never told you this (I think) but whenever christianity gets too hard for me I think about that time at KYCK 2019 when you came outside with me for the "declare your commitment" thing and I remember you crying and then I get emotional lmao', pic:''},
    {memory: 'when we used to bash our chests twice and then throw peace signs', pic: ''},
    {memory: '"if you say so"', pic:''},
    {memory: 'sfhloop (idk man ask me what this is and i will explain)', pic:''},
    {memory: 'OUR PLANE AWW', pic:'media/plane.jpg'},
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

    /*
    const rand = Math.floor(Math.random()*array.length)
    var selection = array[rand];
    */

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
    /*setTimeout(function () {
      memoryGen.classList.remove("fade-in");
    }, 10000);*/
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
