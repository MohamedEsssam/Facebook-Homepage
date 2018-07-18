function sing_up(){
    
  console.log("button clicked");
  alert('thank you for sign up')
  document.getElementById("submit").removeEventListener("click", sing_up);
  document.getElementById("out").innerHTML = 'signed up thank you'
}


function sign_in(){
  console.log("button clicked");
  alert('you are sign in ')
  document.getElementById("in").removeEventListener("click", sign_in);
  document.getElementById("output").innerHTML = 'signed in'
}
