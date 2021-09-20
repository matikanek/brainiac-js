let users;
const apiUrl = 'https://61404fd85cb9280017a1121a.mockapi.io/api/test/users';
let page = 1;
let limit = 5;
let dataCount;
let amountAllData;
let pageCount;


function getCountOfRecievedData(typeFilter, substr) {
  return new Promise((resolve, reject) => {
    fetch(`https://61404fd85cb9280017a1121a.mockapi.io/api/test/users?${typeFilter}=${substr}`)
    .then(response => response.json())
    .then((data) => {
      resolve(data.items.length);
    })
    .catch(error => {
      reject('Something gone wrong with get amount of data from API: ', error);
    });
  })
}

function getUsers(sortby, order, typeFilter, substr, page, limit) {
  if(sortby == 'default') {
    sortby = '';
    order = '';
  }
  return new Promise((resolve, reject) => {
    fetch(`${apiUrl}?sortby=${sortby}&order=${order}&${typeFilter}=${substr}&page=${page}&limit=${limit}`)
    .then(response => response.json())
    .then(async function(data) {
      dataCount = await getCountOfRecievedData(typeFilter, substr);
      amountAllData = data.count;
      pageCount = Math.ceil(dataCount/limit);
      paginateInit();
      resolve(data.items);
    })
    .catch(error => {
      reject('Something gone wrong with get users from API: ', error);
    })
  });
}

document.addEventListener("DOMContentLoaded", () => {
  limitPerPageInit();
  radioCheckInit();
  sortInit();
  viewRefresh();
});

async function viewRefresh() {
  users = await getUsers(
    sortSelect.value, orderSelect.value, typeOfFilter, searchInputControl.value, page, limit
  );
  document.getElementById('smart-guy-list').innerHTML = '';
  for(let i=0; i<users.length; i++)
    addUser(users[i]);
}