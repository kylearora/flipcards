function saveNewUser(username,password) {

  //fetch to your local server where you wrote your post function on the backend
  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
}

var redirect = function redirection(){
     window.location.href='file:///Users/kylearora/Desktop/tiy/projects/weekly/backend/flipcards/client/html/index.html';
  }

var newUserButton = document.querySelector("#newUserButton")
newUserButton.addEventListener('click',function(){

    let username = document.querySelector('#usernameInputField').value
    let password = document.querySelector('#passwordInputField').value


    saveNewUser(username,password)
    //need to figure the lag in redirect
    // redirect()
  })
})
