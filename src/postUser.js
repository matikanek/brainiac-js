import { viewRefresh, amountAllData, limit, users, setPage, setPageCount } from './getUsers';
import { removeUser } from './deleteUser';
import { onEditBrainiacOpenModal } from './modal';
import { onSortByChange, setSortSelect } from './sort';
import { radioCheckInit } from './filtration';

export async function postUser(newUser) {
  fetch('https://61404fd85cb9280017a1121a.mockapi.io/api/test/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  })
  .then(response => response.json())
  .then(() => {
    if(!Number.isInteger(amountAllData/limit)) 
      setPage(Math.ceil(amountAllData/limit));
    else
      setPage(Math.ceil(amountAllData/limit)+1);
    setPageCount(Math.ceil(amountAllData/limit));
    setSortSelect('default');
    onSortByChange();
    radioCheckInit();
    viewRefresh();
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

export function addUser(user) {
  let smartGuysTableHandle = document.getElementById('smart-guy-list');
  let tableRow = document.createElement('tr');
  let tableCol = [...Array(6)].map(() => {
    return document.createElement('td')
  });
  let userImage = document.createElement('img');
  let penIcon = document.createElement('i');
  let trashIcon = document.createElement('i');
    
  //Id
  tableRow.classList.add('align-middle');
  tableCol[0].innerHTML = user.id;
  tableRow.append(tableCol[0]);

  //Image
  userImage.classList.add('smart-guy-image');
  userImage.src = user.avatar;
  tableCol[1].append(userImage);
  tableRow.append(tableCol[1]);

  //First name
  tableCol[2].innerHTML = user.first_name;
  tableRow.append(tableCol[2]);

  //Last name
  tableCol[3].innerHTML = user.last_name;
  tableRow.append(tableCol[3]);

  //Email
  tableCol[4].innerHTML = user.email;
  tableRow.append(tableCol[4]);

  //Icons
  let wrapper = document.createElement('div');
  let penIconButton = document.createElement('button');
  penIconButton.addEventListener("click", () => {
    onEditBrainiacOpenModal(
      users.find(el => el.id == user.id)
    );
  });
  penIconButton.classList.add('btn', 'p-0');
  let trashIconButton = document.createElement('button');
  trashIconButton.addEventListener("click", () => {
    removeUser(user.id);
  });
  trashIconButton.classList.add('btn', 'p-0');
  wrapper.classList.add('d-flex');
  penIcon.classList.add('fas', 'fa-pen', 'cursor-pointer', 'icon-size', 'text-primary');
  trashIcon.classList.add('fas', 'fa-trash', 'mx-2', 'cursor-pointer', 'icon-size', 'text-primary');
  wrapper.append(penIconButton);
  penIconButton.append(penIcon);
  wrapper.append(trashIconButton);
  trashIconButton.append(trashIcon);
  tableCol[5].append(wrapper);
  tableRow.append(tableCol[5]);

  smartGuysTableHandle.appendChild(tableRow);
}