  /* This function gets the user's two inserted numbers and multiplies them together. 
*/

function displayGreeting () {

    // user input
  let int1 = parseInt((document.getElementById("int-1-Here").value));
    
  let int2 = parseInt((document.getElementById("int-2-Here").value));

    // initializing variable(s)
  let sum = 0
  
    // loop code
  for  (let counter = 1;  counter <= int1;  counter++)  {
    
    sum = sum + int2
  }

  // return string
  document.getElementById("greeting").innerHTML = int1 + " * " + int2 + " = " + sum
}