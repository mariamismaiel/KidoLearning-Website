function changeBodyBg(pic){
var image = 'url(' + pic + '.jpg)';
localStorage.setItem("myimage",image);
var a=localStorage.getItem("myimage");
document.body.style.backgroundImage= a;
    }

function changeBackground()
{
var a=localStorage.getItem("myimage");
document.body.style.background= a;
}

function playAudio(x) {
 document.getElementById(x).play();
}