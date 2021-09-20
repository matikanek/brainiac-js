let userToDeleteId;
let usersNextPage;

function deleteUser(userId) {
  fetch(`https://61404fd85cb9280017a1121a.mockapi.io/api/test/users/${userId}`, {
    method: 'DELETE'
  })
  .then(response => response.json())
  .catch((error) => {
    console.error('Error:', error);
  });
}

function removeUser(userId) {
  userToDeleteId = userId;
  $('#confirmDeleteModal').modal('show');
}

async function onConfirmRemoveUser() {
  let userRowHandle = document.getElementById('smart-guy-list')
    .children[users.indexOf(users.find(el => el.id == userToDeleteId))];  
  actualizeUsersVariable(userToDeleteId);
  if(page != pageCount) {
    usersNextPage = await getUsers(
      sortSelect.value, orderSelect.value, typeOfFilter, searchInputControl.value, page, limit
    );
    users.push(usersNextPage[0]);
    addUser(usersNextPage[0]);
    if(dataCount%limit == 1) {
      pageCount = pageCount-1;
      paginateInit();
    }
    dataCount = dataCount-1;
  } else if (page == pageCount && dataCount%limit == 1) {
    page = page-1;
    users = await getUsers(
      sortSelect.value, orderSelect.value, typeOfFilter, searchInputControl.value, page, limit
    );
    dataCount = dataCount-1;
    pageCount = pageCount-1;
    paginateInit();
    document.getElementById('smart-guy-list').innerHTML = '';
    for(let i=0; i<users.length; i++)
      addUser(users[i]);
  } else {
    dataCount = dataCount-1;
  }
  deleteUser(userToDeleteId);
  userRowHandle.remove();
}

function actualizeUsersVariable(userId) {
  users = users.filter(el => { return el.id != userId });
}