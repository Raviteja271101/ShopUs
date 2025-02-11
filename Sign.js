async function signUp(event) {
  let name, email, number, password;
  name = document.getElementById("username").value,
    email = document.getElementById("email").value,
  number = document.getElementById("number").value,
  password = document.getElementById("password").value
  console.log(name, email, number, password)
  if (name != "" && email != "" && number != "" && password != "") {
    let test = {
      name: name,
      email: email,
      mobile: number,
      password: password
    }
    console.log(test)
    const response = fetch('http://localhost:3000/insertData', {
      method: 'POST',
      body: JSON.stringify(test), // string or object
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response;
    console.log(data)
    if (data.status == 200) {
      alert("User created successfully... please login to shop us")
      window.open('./login.html',"_self")
    } else {
      alert("User creation Unsuccessfull")
    }
  } else {
    alert("All fields are mandatory")
  }

}

function ready() {
  console.log("testing")
  var removeCartItemButtons = document.getElementsByClassName('sign-up')
  // for (var i = 0; i < removeCartItemButtons.length; i++) {
  console.log(removeCartItemButtons)
  var button = removeCartItemButtons[0]
  button.addEventListener('click', signUp)
  // }
}

if (document.readyState == "loading") {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}