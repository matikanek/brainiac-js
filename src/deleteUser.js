import { getUsers, users, page, pageCount, dataCount, limit, pushUser, setPageCount, setDataCount, setPage, setUsers } from './getUsers';
import { sortSelect, orderSelect } from './sort';
import { typeOfFilter, searchInputControl } from './filtration';
import { addUser } from './postUser';
import { paginateInit } from './pagination';

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

export function removeUser(userId) {
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
    pushUser(usersNextPage[0]);
    addUser(usersNextPage[0]);
    if(dataCount%limit == 1) {
      setPageCount(pageCount-1);
      paginateInit();
    }
    setDataCount(dataCount-1);
  } else if (page == pageCount && dataCount%limit == 1) {
    setPage(page-1);
    let tmpusers = await getUsers(
      sortSelect.value, orderSelect.value, typeOfFilter, searchInputControl.value, page, limit
    );
    setUsers(tmpusers);
    setDataCount(dataCount-1);
    setPageCount(pageCount-1);
    paginateInit();
    document.getElementById('smart-guy-list').innerHTML = '';
    for(let i=0; i<users.length; i++)
      addUser(users[i]);
  } else {
    setDataCount(dataCount-1);
  }
  deleteUser(userToDeleteId);
  userRowHandle.remove();
}
window.onConfirmRemoveUser = onConfirmRemoveUser;

function actualizeUsersVariable(userId) {
  setUsers(users.filter(el => { return el.id != userId }));
}