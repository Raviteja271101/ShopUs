if (document.readyState == "loading") {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
async function signIn(event){
    let username,password;
    username = document.getElementById('username').value,
    password= document.getElementById('password').value
    let test =  {
        username:username,
        password:password
    }
    console.log(test)
    const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    body:JSON.stringify(test), // string or object
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();
  console.log(data)
  if(data.loginflag == 1){
      getUserDetails(username)
  }else{
      alert("Your Username or Password is Incorrect")
  }
}
async function getUserDetails(username){
    let test =  {
        username:username,
    }
    console.log(test)
    const response = await fetch('http://localhost:3000/userdetails', {
    method: 'POST',
    body:JSON.stringify(test), // string or object
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();
  console.log(data)
  localStorage.setItem("userdetails",JSON.stringify(data));
  window.open('../Home.html',"_self")
}

function ready(){
    console.log("testing")
    var removeCartItemButtons = document.getElementsByClassName('sign-in')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        console.log(removeCartItemButtons)
        var button = removeCartItemButtons[0]
        button.addEventListener('click', signIn)
    }
}

