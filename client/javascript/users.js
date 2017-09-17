function loadFlipCardUsers() {

//fetch from local server to URL where you did your get
  fetch('http://localhost:3000/users')
//then take what you find (the response) and pass it through your function as a response
  .then(function(response) {
//return the part of the respnse that is JSON --> dot notation would be : response.json
    return response.json()
  })
//then take that JSON you found and pass it through this function as json
  .then(function(json) {
//then console.log(json) to display the JSON object you found in your console
    console.log(json)
//set a variable to json since that is what you passed through
    let users = json
//call the element from your index.html where you want to dislpay the JSON object
    var usersList = document.querySelector("#usersList")
//loop through the JSON object
    for (var i = 0; i < users.length; i++) {
//create a list element to display your information in a list
      let li = document.createElement("li")
//set the innerHTML of the list equal to the usernames that have been pulled from looping the JSON
      li.innerHTML = users[i].username
//append the list to whatever element you want from the index.html (in our case it will be the usersList)
      usersList.appendChild(li)
    }
  })
  .catch(function(error) {
    console.log('parsing failed', error)
  })
}


var userButton = document.querySelector("#userButton")
userButton.addEventListener('click',function(){
//calling loadFlipCardUsers function from aboce once you click on the userButton
  loadFlipCardUsers()
})
