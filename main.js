const timer = document.getElementById('timer');
const start = document.getElementById('start');
const stop  = document.getElementById('stop');
const reset = document.getElementById('reset');

let hour        = 0;
let minutes     = 0;
let seconds     = 0;
let millisecond = 0;

let stopWatch = function(){
    millisecond++;
    
    if(millisecond % 10 === 0){
        seconds++;
        millisecond = 0;
    }
    
    if(millisecond % 10 === 0 && seconds % 60 === 0){
        minutes++;
        seconds = 0;
    }
    
    if(millisecond % 10 === 0 && seconds % 60 === 0 && minutes % 60 === 0){
        hour++;
        minutes = 0;
    }
    timer.innerHTML =  hour + ':' + minutes + ':' + seconds + ':' + millisecond;
}

let interval;

start.addEventListener('click',function(){
    interval = setInterval(stopWatch,100);
    start.disabled = true;
    stop.disabled  = false;
    reset.disabled = true; 
});

stop.addEventListener('click',function(){
    clearInterval(interval);
    start.disabled = false;
    stop.disabled  = true;
    reset.disabled = false;
});
reset.addEventListener('click',function(){
    timer.innerHTML = '0:0:0:0';
    
    let hour        = 0;
    let minutes     = 0;
    let seconds     = 0;
    let millisecond = 0;
    
    start.disabled = false;
    stop.disabled  = true;
    reset.disabled = true; 
})