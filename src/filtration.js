import { viewRefresh, setPage } from './getUsers';

let radioCheckFirstName;
let radioCheckLastName;
let radioCheckEmail;
let radioCheckAll;
export let searchInputControl;
export let typeOfFilter;
let typingTimer;
let doneTypingInterval = 600;

export function radioCheckInit() {
  searchInputControl = document.getElementById('SearchInput');
  radioCheckFirstName = document.getElementById('checkFirstName');
  radioCheckLastName = document.getElementById('checkLastName');
  radioCheckEmail = document.getElementById('checkEmail');
  radioCheckAll = document.getElementById('checkAll');
  typeOfFilter = radioCheckAll.value;
  searchInputControl.value = '';

  radioCheckAll.checked = true;
}

function radioFirstNameCheck() {
  typeOfFilter = radioCheckFirstName.value;
  if(searchInputControl.value != '')
    onSearch();
}
window.radioFirstNameCheck = radioFirstNameCheck;

function radioLastNameCheck() {
  typeOfFilter = radioCheckLastName.value;
  if(searchInputControl.value != '')
    onSearch();
}
window.radioLastNameCheck = radioLastNameCheck;

function radioEmailCheck() {
  typeOfFilter = radioCheckEmail.value;
  if(searchInputControl.value != '')
    onSearch();
}
window.radioEmailCheck = radioEmailCheck;

function radioAllCheck() {
  typeOfFilter = radioCheckAll.value;
  if(searchInputControl.value != '')
    onSearch();
}
window.radioAllCheck = radioAllCheck;

function onSearchInput() {
  clearTimeout(typingTimer);
}
window.onSearchInput = onSearchInput;

function onDoneTypingSearch() {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(doneTyping, doneTypingInterval);
}
window.onDoneTypingSearch = onDoneTypingSearch;

function doneTyping () {
  onSearch();
}

function onSearch() {
  setPage(1);
  viewRefresh();
}
window.onSearch = onSearch;