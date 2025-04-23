 const num1 = Math.floor(Math.random()*10);
const num2 = Math.floor(Math.random()*10);
const question = document.getElementById("question");
 question.innerHTML = `What is ${num1} multiply ${num2}?`
 
 
 let score =  JSON.parse(localStorage.getItem("score"));// JSON.parse coverts string to number
 if(!score)
 {
    score = 0;
 }
 else if(score < 0)
 {
    score = 0;
    updateLocalStorage();
 }
 const correct = num1 * num2;
 const inputE = document.getElementById("input");
 
 const form1= document.getElementById("form");
 form1.addEventListener("submit", ()=>{
    const x = +inputE.value; //the input value we are getting is a string so we need to convert it into number by using +
    if(x == correct)
    {
        score++;
        updateLocalStorage();
        console.log(score);
    }
    else
    {
        score--;
        updateLocalStorage();
        console.log(score);
    }
 })

 function updateLocalStorage()
 {
    localStorage.setItem("score",JSON.stringify(score));//json.stringfy converts the num to string
 }
 document.getElementById("Score").innerHTML=`Score: ${score}`