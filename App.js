const resetbtn = document.querySelector("#reset")
const increasebtn = document.querySelector("#increase")
const decreasebtn = document.querySelector("#decrease")
const Counter = document.querySelector("#counter")
let number =0;
const Increase = ()=>{
        number++;
        Counter.innerText = number

};
const Decrease=  ()=>{
   if(number >0){
    number--;
    Counter.innerText = number
   }
   else{
    Counter.innerText = "0"
   }
}
const Reset = ()=>{
    location.reload();
}

increasebtn.addEventListener("click", Increase);
decreasebtn.addEventListener("click", Decrease);
resetbtn.addEventListener("click", Reset)