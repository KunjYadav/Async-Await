function saveToLocalStorage(event) {
  event.preventDefault();
  const name = event.target.username.value;
  const email = event.target.emailId.value;
  const phonenumber = event.target.phonenumber.value;
  // localStorage.setItem('name', name);
  // localStorage.setItem('email', email);
  // localStorage.setItem('phonenumber', phonenumber)
  const obj = {
      name,
      email,
      phonenumber
  }

  axios.post("https://crudcrud.com/api/6f72d71e0df24ee8b500cf541be43bdd/appointmentData", obj)
  .then((response) => {
    showNewUserOnScreen(response.data)
    // console.log(response)
  })
  .catch((err) => {
    console.log(err)
  })

  // localStorage.setItem(obj.email, JSON.stringify(obj))
  // showNewUserOnScreen(obj)
}

window.addEventListener("DOMContentLoaded", () => {
  const localStorageObj = localStorage;
  const localstoragekeys  = Object.keys(localStorageObj)

  for(var i =0; i< localstoragekeys.length; i++){
      const key = localstoragekeys[i]
      const userDetailsString = localStorageObj[key];
      const userDetailsObj = JSON.parse(userDetailsString);
      showNewUserOnScreen(userDetailsObj)
  }
})

function showNewUserOnScreen(user){
  const parentNode = document.getElementById('listOfUsers');
  const childHTML = `<li id=${user.email}> ${user.name} - ${user.email}
  <button onclick=deleteUser('${user.email}')> Delete User </button>
  <button onclick=editUserDetails('${user.email}','${user.name}','${user.phonenumber}')>Edit User </button>
  </li>`

  parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

//Edit User

function editUserDetails(emailId, name, phonenumber){

  document.getElementById('email').value = emailId;
  document.getElementById('username').value = name;
  document.getElementById('phonenumber').value =phonenumber;

  deleteUser(emailId)
}

// deleteUser('abc@gmail.com')

function deleteUser(emailId){
  console.log(emailId)
  localStorage.removeItem(emailId);
  removeUserFromScreen(emailId);

}

function removeUserFromScreen(emailId){
  const parentNode = document.getElementById('listOfUsers');
  const childNodeToBeDeleted = document.getElementById(emailId);

  parentNode.removeChild(childNodeToBeDeleted)
}
