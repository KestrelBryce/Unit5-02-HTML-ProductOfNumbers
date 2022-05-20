  /* This function gets the user's two numbers and multiplies them togrther. 
*/

function displayGreeting () {

    // user input
  let int1 = parseInt((document.getElementById("int-1-Here").value));
    
  let int2 = parseInt((document.getElementById("int-2-Here").value));


    // initializing counter
  //let counter = 1


    // initializing values
  let numbers = ""

  let sum = ""
  
    // loop code
  for  (let counter = 0;  counter <= int1;  counter++)  {
    // building string of numbers with line break
    if  (counter < int1) {
      numbers = int2 + counter + " + "
      //sum = sum + int2 + "<br>"
    }
    else  {
      numbers = numbers + counter
    }
    // add to the counter
    sum = sum + counter
  }

  // return string
  document.getElementById("greeting").innerHTML = numbers + 
    
}