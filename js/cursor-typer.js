var settings;
var wormWord;

function typer(settings) {
    wormWord = document.getElementById('worm-word');
    settings = {
        words: wormWord.dataset.words.split(','),
        writeTime: 2000,
        eraseTime: 2000,
        stopTime: 500
    }
    var span = document.createElement("span");
    var text = document.createTextNode('|');
    span.appendChild(text);
    span.setAttribute('id','worm-word-cursor');
    wormWord.after(span);
    
    // KEYFRAMES
    var keyframes = `
    @keyframes cursorAnimation {
        0% { opacity: 1 }
        50% { opacity: 0 }
        100% { opacity: 1 } 
    }
    `
    var keyframeStyle = document.createElement('style');
    keyframeStyle.innerHTML = keyframes;
    
    document.getElementsByTagName('head')[0].appendChild(keyframeStyle);

    var wordCounter = -1;

    iterateCursorTyper();
    
    function iterateCursorTyper() {
        if (settings.words.length === wordCounter + 1) {
            wordCounter = 0;
        } else {
            wordCounter++;
        }
        wordWriter(settings.words[wordCounter]);
    }
    
    function wordWriter(word) {
        document.getElementById('worm-word-cursor').style.animation = "cursorAnimation 1s ease-in-out infinite";
    
        var i;
        for (var i = 0; i < word.length; i++) {
            letterWriter(i, word.charAt(i));
        }
        setTimeout(()=>{
            wordEraser(i);
        }, (i+1) * 500);
    }

    function letterWriter(i, letter) {
        setTimeout(() => {
            wormWord.innerHTML += letter;
        }, i * 500)
    }

    function wordEraser(d) {
        document.getElementById('worm-word-cursor').style.animation = "";
        for (var j = 0; j < wormWord.innerHTML.length; j++) {
            letterEraser(j)
        }
        setTimeout(()=>{
            iterateCursorTyper();
        }, (d+1) * 500)

    }

    function letterEraser(j) {
        setTimeout(() => {
            wormWord.innerHTML = 
            wormWord.innerHTML.substring(0, wormWord.innerHTML.length-1); 
        }, j * 500);
    }
    
}

