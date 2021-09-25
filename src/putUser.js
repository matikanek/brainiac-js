import { users, serverUrl } from './getUsers';

let updateUserId;

export function putUser(userId, dataToUpdate){
  updateUserId = userId;
  console.log(dataToUpdate);
  fetch(`${serverUrl}/${userId}`, {
    method: 'PUT',
    body: JSON.stringify(dataToUpdate),
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
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
  let userRowHandle = document.getElementById('smart-guy-list')
    .children[users.indexOf(users.find(el => el.id == updateUserId))];
  userRowHandle.children[2].innerHTML = userToUpdate.first_name;
  userRowHandle.children[3].innerHTML = userToUpdate.last_name;
  userRowHandle.children[4].innerHTML = userToUpdate.email;
}