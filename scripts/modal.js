let nameControl;
let lastNameControl;
let emailControl;
let userModalHeaderHandle;
let amountOfUsers;
let tmpUserToEdit;
let addingNewMode = false;
const avatarDictionary = ['aqua', 'black', 'brown', 'green', 'purple', 'yellow'];

document.addEventListener("DOMContentLoaded", () => {
  userModalHeaderHandle = document.getElementById('userModalHeader');
  nameControl = document.getElementById('InputName');
  lastNameControl = document.getElementById('InputLastName');
  emailControl = document.getElementById('InputEmail');
  amountOfUsers = document.getElementById('smart-guy-list').children.length;
});

function onAddNewBrainiacOpenModal() {
  addingNewMode = true;
  userModalHeaderHandle.innerHTML = 'Add new brainiac';
  nameControl.value = '';
  lastNameControl.value = '';
  emailControl.value = '';

  $('#userModal').modal('show');
}

function onSaveBrainiac() {
  if(userModalHeaderHandle.innerHTML == 'Add new brainiac') {
    let randomAvatar = avatarDictionary[getRandomInt(0, 6)];
    const newUser = {
      "first_name": nameControl.value, 
      "last_name": lastNameControl.value,
      "email": emailControl.value,
      "avatar": `./img/user-${randomAvatar}.png`
    };
    postUser(newUser);
  }
  else {
    users.find(item => item.id == tmpUserToEdit.id).first_name = tmpUserToEdit.first_name;
    users.find(item => item.id == tmpUserToEdit.id).last_name = tmpUserToEdit.last_name;
    users.find(item => item.id == tmpUserToEdit.id).email = tmpUserToEdit.email;
    const dataToUpdate = {
      "first_name": nameControl.value,
      "last_name": lastNameControl.value,
      "email": emailControl.value
    }
    putUser(tmpUserToEdit.id, dataToUpdate);
  }
}

function onEditBrainiacOpenModal(userToEdit) {
  addingNewMode = false;
  userModalHeaderHandle.innerHTML = 'Edit brainiac';
  nameControl.value = userToEdit.first_name;
  lastNameControl.value = userToEdit.last_name;
  emailControl.value = userToEdit.email;
  tmpUserToEdit = JSON.parse(JSON.stringify(userToEdit));

  $('#userModal').modal('show');
}

function onNameInput() {
  if(!addingNewMode)
    tmpUserToEdit.first_name = nameControl.value;
}

function onLastNameInput() {
  if(!addingNewMode)
    tmpUserToEdit.last_name = lastNameControl.value;
}

function onEmailInput() {
  if(!addingNewMode)
    tmpUserToEdit.email = emailControl.value;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}