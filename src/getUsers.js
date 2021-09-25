import { limitPerPageInit } from './choseLimit';
import { radioCheckInit, typeOfFilter, searchInputControl } from './filtration';
import { sortInit, sortSelect, orderSelect } from './sort';
import { paginateInit } from './pagination';
import { addUser } from './postUser';

export let users;
export function setUsers(value) {
  users = value;
}
export function pushUser(value) {
  users.push(value);
}
//export const apiUrl = 'https://61404fd85cb9280017a1121a.mockapi.io/api/test/users';
export const serverUrl = 'http://localhost:3000/users';
export let page = 1;
export function setPage(value) {
  page = value;
}
export let limit = 5;
export function setLimit(value) {
  limit = value;
}
export let dataCount;
export function setDataCount(value) {
  dataCount = value;
}
export let amountAllData;
export let pageCount;
export function setPageCount(value) {
  pageCount = value;
}


function getCountOfRecievedData(typeFilter, substr) {
  return new Promise((resolve, reject) => {
    fetch(`${serverUrl}?${typeFilter}=${substr}`,  {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then((data) => {
      resolve(data.items.length);
    })
    .catch(error => {
      reject('Something gone wrong with get amount of data from API: ', error);
    });
  })
}

export function getUsers(sortby, order, typeFilter, substr, page, limit) {
  if(sortby == 'default') {
    sortby = '';
    order = '';
  }
  return new Promise((resolve, reject) => {
    fetch(`${serverUrl}?sortby=${sortby}&order=${order}&${typeFilter}=${substr}&page=${page}&limit=${limit}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(async function(data) {
      dataCount = await getCountOfRecievedData(typeFilter, substr);
      amountAllData = data.count;
      pageCount = Math.ceil(dataCount/limit);
      paginateInit();
      resolve(data.items);
    })
    .catch(error => {
      localStorage.removeItem('token');
      window.location.href = 'http://127.0.0.1:8080/index.html';
      reject('Something gone wrong with get users from API: ', error);
    })
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if(!localStorage.getItem('token') && !window.location.href.match('index.html')) {
    window.location.href = 'http://127.0.0.1:8080/index.html';
  }
  if(localStorage.getItem('token') && window.location.href.match('index.html')) {
    window.location.href = 'http://127.0.0.1:8080/home.html';
  }
  if(site == 'list') { 
    limitPerPageInit();
    radioCheckInit();
    sortInit();
    viewRefresh();
  }
});

export async function viewRefresh() {
  users = await getUsers(
    sortSelect.value, orderSelect.value, typeOfFilter, searchInputControl.value, page, limit
  );
  document.getElementById('smart-guy-list').innerHTML = '';
  for(let i=0; i<users.length; i++)
    addUser(users[i]);
}