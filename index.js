
var colorArray = ["pink","orange","purple","brown","blue","green"];
function randomNumber1Generator(){
  return Math.floor(Math.random()*(colorArray.length)+1);
} 
function randomNumber2Generator(){
  return Math.floor(Math.random()*(colorArray.length)+1);
} 
let win = document.getElementById('wins');
 

document.querySelector("button").addEventListener("click",function(){
let randomNumber1 = randomNumber1Generator();
let randomNumber2 = randomNumber2Generator();
  console.log(randomNumber1 , randomNumber2)

  document.querySelector(".box1").style.backgroundColor= colorArray[randomNumber1]
  document.querySelector(".box2").style.backgroundColor= colorArray[randomNumber2]

  if ( randomNumber1 === 5){
    return win.textContent = 'Player1 wins';
  }
  else if ( randomNumber2 === 5 ){
    return win.textContent = 'Player2 wins';
  }
   
  else if(randomNumber1 === 5 && randomNumber2 === 5){
    return win.textContent = 'Draw';
  }
  else {
    return win.textContent = 'Try Again'; 
  }

} )

