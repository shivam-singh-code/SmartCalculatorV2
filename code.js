let inputLabel = document.getElementById('inputLabel');

function pushbtn(object){
    let pushed = object.innerHTML;
    let click = object.value;
    
    if(pushed == '='){
        inputLabel.innerHTML = eval(inputLabel.innerHTML);
        setTimeout(function(){
            let voice = new SpeechSynthesisUtterance();
             voice.lang = "en-US";
             voice.text = inputLabel.innerHTML;
             voice.volume = 1;
             voice.rate = 1;
            voice.pitch = 1;

            window.speechSynthesis.speak(voice);
        }, 500);
    }
    else if(pushed == 'AC'){
        inputLabel.innerHTML = '0';
    }
    else{
        if(inputLabel.innerHTML == '0'){
            inputLabel.innerHTML = pushed;
        }
        else{
            inputLabel.innerHTML += pushed;
        }
    }
    console.log("hello Btn is working");
             let voice = new SpeechSynthesisUtterance();
             voice.lang = "en-US";
             voice.text = click;
             voice.volume = 1;
             voice.rate = 1;
            voice.pitch = 1;

            window.speechSynthesis.speak(voice);
}
