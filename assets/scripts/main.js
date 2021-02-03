// main.js

// TODO
const form = document.getElementById("party-horn-form");
const hornsound = document.getElementById("horn-sound");
const soundimage = document.getElementById("sound-image");

const volumenumber = document.getElementById("volume-number");
const volumeslider = document.getElementById("volume-slider");
const volumeimage = document.getElementById("volume-image");


const radioairhorn = document.getElementById("radio-air-horn");
const radiocarhorn = document.getElementById("radio-car-horn");
const radiopartyhorn = document.getElementById("radio-party-horn");

const listofhorn = [radioairhorn, radiocarhorn, radiopartyhorn];
const listofvolume = [volumenumber, volumeslider];
 

form.addEventListener("submit", (e)=>{
    hornsound.pause();
    hornsound.currentTime = 0;
    e.preventDefault();
    hornsound.play();
});

listofhorn.forEach( horn =>{
    horn.addEventListener('change', ()=>{
        if (radiopartyhorn.checked){
            hornsound.src = "./assets/media/audio/party-horn.mp3";
            soundimage.src = "./assets/media/images/party-horn.svg";
        }
        else if (radiocarhorn.checked){
            hornsound.src = "./assets/media/audio/car-horn.mp3";
            soundimage.src = "./assets/media/images/car.svg";
        }
        else {
            hornsound.src = "./assets/media/audio/air-horn.mp3";
            soundimage.src = "./assets/media/images/air-horn.svg";
        }   
    });
});


listofvolume.forEach(volume =>{
    volume.addEventListener('pointermove', ()=>{
        if (volume === volumenumber){   
            volumeslider.value = volume.value;
        }
        else{
            volumenumber.value = volume.value;
        }

        if (volume.value > 66){
            volumeimage.src = "./assets/media/icons/volume-level-3.svg";
        }
        else if (volume.value > 33){
            volumeimage.src = "./assets/media/icons/volume-level-2.svg";
        }
        else if (volume.value > 0){
            volumeimage.src = "./assets/media/icons/volume-level-1.svg";
        }
        else{
            volumeimage.src = "./assets/media/icons/volume-level-0.svg";
        }
        hornsound.volume = volume.value/100;
    });
    
});
volumenumber.addEventListener('input', ()=>{
    
    volumeslider.value = volumenumber.value;
    if (volumenumber.value > 66){
        volumeimage.src = "./assets/media/icons/volume-level-3.svg";
    }
    else if (volumenumber.value > 33){
        volumeimage.src = "./assets/media/icons/volume-level-2.svg";
    }
    else if (volumenumber.value > 0){
        volumeimage.src = "./assets/media/icons/volume-level-1.svg";
    }
    else{
        volumeimage.src = "./assets/media/icons/volume-level-0.svg";
    }
    hornsound.volume = volumenumber.value/100;
});