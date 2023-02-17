let value = 0;
let counter = document.getElementsByClassName("counter")[0];
function increment(){
    value ++;
    counter.innerHTML = value;
}
function reset(){
    counter.innerHTML = "0";
    value = 0;
}

function decrement(){
    value--;
    if(value<0){
        counter.innerHTML = "0";
        value=0;
    }
    else{
        counter.innerHTML = value;
    }
}




//let incre = document.querySelector('increment');
// incre.addEventListener("click",function(){
//     value += 1;
//     counter.innerHTML = value;
// });


// let reset_btn = document.querySelector('reset');
// reset_btn.addEventListener("click",reset());
