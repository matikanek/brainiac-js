let updateUserId;

function putUser(userId, dataToUpdate){
  updateUserId = userId;
  fetch(`https://61404fd85cb9280017a1121a.mockapi.io/api/test/users/${userId}`, {
    method: 'PUT',
    body: JSON.stringify(dataToUpdate),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then((user) => {
    updateUser(user)
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function updateUser(userToUpdate) {
  userRowHandle = document.getElementById('smart-guy-list')
    .children[users.indexOf(users.find(el => el.id == updateUserId))];
  userRowHandle.children[2].innerHTML = userToUpdate.first_name;
  userRowHandle.children[3].innerHTML = userToUpdate.last_name;
  userRowHandle.children[4].innerHTML = userToUpdate.email;
}