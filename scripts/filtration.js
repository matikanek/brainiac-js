let radioCheckFirstName;
let radioCheckLastName;
let radioCheckEmail;
let radioCheckAll;
let searchInputControl;
let typeOfFilter;
let typingTimer;
let doneTypingInterval = 600;

function radioCheckInit() {
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

function radioLastNameCheck() {
  typeOfFilter = radioCheckLastName.value;
  if(searchInputControl.value != '')
    onSearch();
}

function radioEmailCheck() {
  typeOfFilter = radioCheckEmail.value;
  if(searchInputControl.value != '')
    onSearch();
}

function radioAllCheck() {
  typeOfFilter = radioCheckAll.value;
  if(searchInputControl.value != '')
    onSearch();
}

function onSearchInput() {
  clearTimeout(typingTimer);
}

function onDoneTypingSearch() {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(doneTyping, doneTypingInterval);
}

function doneTyping () {
  onSearch();
}

function onSearch() {
  page = 1;
  viewRefresh();
}