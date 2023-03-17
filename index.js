const ms = document.getElementById("milisecond")
const sec = document.getElementById("second")
const min = document.getElementById("minute")
const start = document.getElementById("start")
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')
let id1 ,id2,id3
let num = 0;
let num1 = 0;
let num2 = 0 ;
  function Start () {
   start.classList.add('red')
   stop.classList.remove('red')
   reset.classList.remove('red')
id1=setInterval(()=>{
  num == 60 ? num = 0 :
  num++
  sec.innerHTML=num
},1000)
id2=setInterval(()=>{
  num1 == 100 ? num1 = 0 :
  num1++
  ms.innerHTML=num1
},10)
id3=setInterval(()=>{
  num2++
  min.innerHTML=num2
},60000)
  }

  function Stop(){
    start.classList.remove('red')
    stop.classList.add('red')
    reset.classList.remove('red')
    clearInterval(id1)
    clearInterval(id2)
    clearInterval(id3)
  }

  function Reset (){
    Stop()
    start.classList.remove('red')
    stop.classList.remove('red')
    reset.classList.add('red')
    sec.innerHTML= "00"
    ms.innerHTML= "00"
    min.innerHTML= "00"
    num = 0,
    num1 =0,
    num2 =0
  }
  