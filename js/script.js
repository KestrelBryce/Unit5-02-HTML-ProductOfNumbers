  /* This function gets the user's int1 and int2 numbers and displays the product. 
*/

function displayGreeting () {

    // user input
  let int1 = parseInt(document.getElementById("int-1-Here").value);
    
  let int2 = parseInt(document.getElementById("int-2-Here").value);

    // initializing sum
  let sum = 0
  
    // loop code, works for ++, and +-
   if  (int1 > 0)  { 
      for  (let counter = 1;  counter <= int1; counter++)  {
        sum = sum + int2
      }
        
    }

    // loop code, works for --, and -+
    else if  (int1 < 0)  {
      for  (let counter = -1;  counter >= int1; counter--)  {
        sum = sum + int2
      }  
      
    }
  
    // return string code
    // return string negative
  if  ((int1 < 0)  &&  (int2 < 0)) {
    document.getElementById("greeting").innerHTML = int1 + " x " + int2 + " = " + sum * -1
  }

  else if  (int1 < 0)  {
    document.getElementById("greeting").innerHTML = int1 + " x " + int2 + " = -" + sum
  }
    // return string positive
  else  {
    document.getElementById("greeting").innerHTML = int1 + " x " + int2 + " = " + sum
  }
    
}