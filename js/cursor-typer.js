
function typer(wordsArray) {
    var timeSettings = {
        writeTime: 2000,
        eraseTime: 1500,
        stopTime: 500
    }
    var wormWord = document.getElementById('worm-word');
    var span = document.createElement("span");
    var text = document.createTextNode('|');
    span.appendChild(text);
    span.setAttribute('id','worm-word-cursor');
    wormWord.after(span);
    
    document.getElementById('worm-word-cursor')
    .animate([
        { opacity: 1 },
        { opacity: 0 },
        { opacity: 1 } 
    ],{
        duration: 1200,
        iterations: Infinity,
        direction: "alternate",
        easing:'ease-in-out'
    });    
    
    
    
    var letterErase = setInterval(function() {
        wordErase(timeSettings.eraseTime, wormWord);
    }, timeSettings.eraseTime/wormWord.innerHTML.length)
    
}

function wordErase(eraseTime, wormWord) {  
    wormWord.innerHTML = 
    wormWord.innerHTML.substring(0, wormWord.innerHTML.length-1);      
}

function wordWrite(params) {
    
}
