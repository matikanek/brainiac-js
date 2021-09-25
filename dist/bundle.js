/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/choseLimit.js":
/*!***************************!*\
  !*** ./src/choseLimit.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"limitSelect\": () => (/* binding */ limitSelect),\n/* harmony export */   \"limitPerPageInit\": () => (/* binding */ limitPerPageInit)\n/* harmony export */ });\n/* harmony import */ var _getUsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getUsers */ \"./src/getUsers.js\");\n\r\n\r\nlet limitSelect;\r\n\r\nfunction limitPerPageInit() {\r\n  limitSelect = document.getElementById('choseLimit');\r\n  limitSelect.value = _getUsers__WEBPACK_IMPORTED_MODULE_0__.limit;\r\n}\r\n\r\nfunction onLimitOnPageChange() {\r\n  (0,_getUsers__WEBPACK_IMPORTED_MODULE_0__.setLimit)(limitSelect.value);\r\n  (0,_getUsers__WEBPACK_IMPORTED_MODULE_0__.setPage)(1);\r\n  (0,_getUsers__WEBPACK_IMPORTED_MODULE_0__.viewRefresh)();\r\n}\r\nwindow.onLimitOnPageChange = onLimitOnPageChange;\n\n//# sourceURL=webpack://javascript-smart-guys/./src/choseLimit.js?");

/***/ }),

/***/ "./src/deleteUser.js":
/*!***************************!*\
  !*** ./src/deleteUser.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeUser\": () => (/* binding */ removeUser)\n/* harmony export */ });\n/* harmony import */ var _getUsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getUsers */ \"./src/getUsers.js\");\n/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sort */ \"./src/sort.js\");\n/* harmony import */ var _filtration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filtration */ \"./src/filtration.js\");\n/* harmony import */ var _postUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postUser */ \"./src/postUser.js\");\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagination */ \"./src/pagination.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet userToDeleteId;\r\nlet usersNextPage;\r\n\r\nfunction deleteUser(userId) {\r\n  fetch(`https://61404fd85cb9280017a1121a.mockapi.io/api/test/users/${userId}`, {\r\n    method: 'DELETE'\r\n  })\r\n  .then(response => response.json())\r\n  .catch((error) => {\r\n    console.error('Error:', error);\r\n  });\r\n}\r\n\r\nfunction removeUser(userId) {\r\n  userToDeleteId = userId;\r\n  $('#confirmDeleteModal').modal('show');\r\n}\r\n\r\nasync function onConfirmRemoveUser() {\r\n  let userRowHandle = document.getElementById('smart-guy-list')\r\n    .children[_getUsers__WEBPACK_IMPORTED_MODULE_0__.users.indexOf(_getUsers__WEBPACK_IMPORTED_MODULE_0__.users.find(el => el.id == userToDeleteId))];  \r\n  actualizeUsersVariable(userToDeleteId);\r\n  if(_getUsers__WEBPACK_IMPORTED_MODULE_0__.page != _getUsers__WEBPACK_IMPORTED_MODULE_0__.pageCount) {\r\n    usersNextPage = await (0,_getUsers__WEBPACK_IMPORTED_MODULE_0__.getUsers)(\r\n      _sort__WEBPACK_IMPORTED_MODULE_1__.sortSelect.value, _sort__WEBPACK_IMPORTED_MODULE_1__.orderSelect.value, _filtration__WEBPACK_IMPORTED_MODULE_2__.typeOfFilter, _filtration__WEBPACK_IMPORTED_MODULE_2__.searchInputControl.value, _getUsers__WEBPACK_IMPORTED_MODULE_0__.page, _getUsers__WEBPACK_IMPORTED_MODULE_0__.limit\r\n    );\r\n    (0,_getUsers__WEBPACK_IMPORTED_MODULE_0__.pushUser)(usersNextPage[0]);\r\n    (0,_postUser__WEBPACK_IMPORTED_MODULE_3__.addUser)(usersNextPage[0]);\r\n    if(_getUsers__WEBPACK_IMPORTED_MODULE_0__.dataCount%_getUsers__WEBPACK_IMPORTED_MODULE_0__.limit == 1) {\r\n      (0,_getUsers__WEBPACK_IMPORTED_MODULE_0__.setPageCount)(_getUsers__WEBPACK_IMPORTED_MODULE_0__.pageCount-1);\r\n      (0,_pagination__WEBPACK_IMPORTED_MODULE_4__.paginateInit)();\r\n    }\r\n    (0,_getUsers__WEBPACK_IMPORTED_MODULE_0__.setDataCount)(_getUsers__WEBPACK_IMPORTED_MODULE_0__.dataCount-1);\r\n  } else if (_getUsers__WEBPACK_IMPORTED_MODULE_0__.page == _getUsers__WEBPACK_IMPORTED_MODULE_0__.pageCount && _getUsers__WEBPACK_IMPORTED_MODULE_0__.dataCount%_getUsers__WEBPACK_IMPORTED_MODULE_0__.limit == 1) {\r\n    (0,_getUsers__WEBPACK_IMPORTED_MODULE_0__.setPage)(_getUsers__WEBPACK_IMPORTED_MODULE_0__.page-1);\r\n    let tmpusers = await (0,_getUsers__WEBPACK_IMPORTED_MODULE_0__.getUsers)(\r\n      _sort__WEBPACK_IMPORTED_MODULE_1__.sortSelect.value, _sort__WEBPACK_IMPORTED_MODULE_1__.orderSelect.value, _filtration__WEBPACK_IMPORTED_MODULE_2__.typeOfFilter, _filtration__WEBPACK_IMPORTED_MODULE_2__.searchInputControl.value, _getUsers__WEBPACK_IMPORTED_MODULE_0__.page, _getUsers__WEBPACK_IMPORTED_MODULE_0__.limit\r\n    );\r\n    (0,_getUsers__WEBPACK_IMPORTED_MODULE_0__.setUsers)(tmpusers);\r\n    (0,_getUsers__WEBPACK_IMPORTED_MODULE_0__.setDataCount)(_getUsers__WEBPACK_IMPORTED_MODULE_0__.dataCount-1);\r\n    (0,_getUsers__WEBPACK_IMPORTED_MODULE_0__.setPageCount)(_getUsers__WEBPACK_IMPORTED_MODULE_0__.pageCount-1);\r\n    (0,_pagination__WEBPACK_IMPORTED_MODULE_4__.paginateInit)();\r\n    document.getElementById('smart-guy-list').innerHTML = '';\r\n    for(let i=0; i<_getUsers__WEBPACK_IMPORTED_MODULE_0__.users.length; i++)\r\n      (0,_postUser__WEBPACK_IMPORTED_MODULE_3__.addUser)(_getUsers__WEBPACK_IMPORTED_MODULE_0__.users[i]);\r\n  } else {\r\n    (0,_getUsers__WEBPACK_IMPORTED_MODULE_0__.setDataCount)(_getUsers__WEBPACK_IMPORTED_MODULE_0__.dataCount-1);\r\n  }\r\n  deleteUser(userToDeleteId);\r\n  userRowHandle.remove();\r\n}\r\nwindow.onConfirmRemoveUser = onConfirmRemoveUser;\r\n\r\nfunction actualizeUsersVariable(userId) {\r\n  (0,_getUsers__WEBPACK_IMPORTED_MODULE_0__.setUsers)(_getUsers__WEBPACK_IMPORTED_MODULE_0__.users.filter(el => { return el.id != userId }));\r\n}\n\n//# sourceURL=webpack://javascript-smart-guys/./src/deleteUser.js?");

/***/ }),

/***/ "./src/filtration.js":
/*!***************************!*\
  !*** ./src/filtration.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchInputControl\": () => (/* binding */ searchInputControl),\n/* harmony export */   \"typeOfFilter\": () => (/* binding */ typeOfFilter),\n/* harmony export */   \"radioCheckInit\": () => (/* binding */ radioCheckInit)\n/* harmony export */ });\n/* harmony import */ var _getUsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getUsers */ \"./src/getUsers.js\");\n\r\n\r\nlet radioCheckFirstName;\r\nlet radioCheckLastName;\r\nlet radioCheckEmail;\r\nlet radioCheckAll;\r\nlet searchInputControl;\r\nlet typeOfFilter;\r\nlet typingTimer;\r\nlet doneTypingInterval = 600;\r\n\r\nfunction radioCheckInit() {\r\n  searchInputControl = document.getElementById('SearchInput');\r\n  radioCheckFirstName = document.getElementById('checkFirstName');\r\n  radioCheckLastName = document.getElementById('checkLastName');\r\n  radioCheckEmail = document.getElementById('checkEmail');\r\n  radioCheckAll = document.getElementById('checkAll');\r\n  typeOfFilter = radioCheckAll.value;\r\n  searchInputControl.value = '';\r\n\r\n  radioCheckAll.checked = true;\r\n}\r\n\r\nfunction radioFirstNameCheck() {\r\n  typeOfFilter = radioCheckFirstName.value;\r\n  if(searchInputControl.value != '')\r\n    onSearch();\r\n}\r\nwindow.radioFirstNameCheck = radioFirstNameCheck;\r\n\r\nfunction radioLastNameCheck() {\r\n  typeOfFilter = radioCheckLastName.value;\r\n  if(searchInputControl.value != '')\r\n    onSearch();\r\n}\r\nwindow.radioLastNameCheck = radioLastNameCheck;\r\n\r\nfunction radioEmailCheck() {\r\n  typeOfFilter = radioCheckEmail.value;\r\n  if(searchInputControl.value != '')\r\n    onSearch();\r\n}\r\nwindow.radioEmailCheck = radioEmailCheck;\r\n\r\nfunction radioAllCheck() {\r\n  typeOfFilter = radioCheckAll.value;\r\n  if(searchInputControl.value != '')\r\n    onSearch();\r\n}\r\nwindow.radioAllCheck = radioAllCheck;\r\n\r\nfunction onSearchInput() {\r\n  clearTimeout(typingTimer);\r\n}\r\nwindow.onSearchInput = onSearchInput;\r\n\r\nfunction onDoneTypingSearch() {\r\n  clearTimeout(typingTimer);\r\n  typingTimer = setTimeout(doneTyping, doneTypingInterval);\r\n}\r\nwindow.onDoneTypingSearch = onDoneTypingSearch;\r\n\r\nfunction doneTyping () {\r\n  onSearch();\r\n}\r\n\r\nfunction onSearch() {\r\n  (0,_getUsers__WEBPACK_IMPORTED_MODULE_0__.setPage)(1);\r\n  (0,_getUsers__WEBPACK_IMPORTED_MODULE_0__.viewRefresh)();\r\n}\r\nwindow.onSearch = onSearch;\n\n//# sourceURL=webpack://javascript-smart-guys/./src/filtration.js?");

/***/ }),

/***/ "./src/getUsers.js":
/*!*************************!*\
  !*** ./src/getUsers.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"users\": () => (/* binding */ users),\n/* harmony export */   \"setUsers\": () => (/* binding */ setUsers),\n/* harmony export */   \"pushUser\": () => (/* binding */ pushUser),\n/* harmony export */   \"serverUrl\": () => (/* binding */ serverUrl),\n/* harmony export */   \"page\": () => (/* binding */ page),\n/* harmony export */   \"setPage\": () => (/* binding */ setPage),\n/* harmony export */   \"limit\": () => (/* binding */ limit),\n/* harmony export */   \"setLimit\": () => (/* binding */ setLimit),\n/* harmony export */   \"dataCount\": () => (/* binding */ dataCount),\n/* harmony export */   \"setDataCount\": () => (/* binding */ setDataCount),\n/* harmony export */   \"amountAllData\": () => (/* binding */ amountAllData),\n/* harmony export */   \"pageCount\": () => (/* binding */ pageCount),\n/* harmony export */   \"setPageCount\": () => (/* binding */ setPageCount),\n/* harmony export */   \"getUsers\": () => (/* binding */ getUsers),\n/* harmony export */   \"viewRefresh\": () => (/* binding */ viewRefresh)\n/* harmony export */ });\n/* harmony import */ var _choseLimit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./choseLimit */ \"./src/choseLimit.js\");\n/* harmony import */ var _filtration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filtration */ \"./src/filtration.js\");\n/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort */ \"./src/sort.js\");\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagination */ \"./src/pagination.js\");\n/* harmony import */ var _postUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./postUser */ \"./src/postUser.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet users;\r\nfunction setUsers(value) {\r\n  users = value;\r\n}\r\nfunction pushUser(value) {\r\n  users.push(value);\r\n}\r\n//export const apiUrl = 'https://61404fd85cb9280017a1121a.mockapi.io/api/test/users';\r\nconst serverUrl = 'http://localhost:3000/users';\r\nlet page = 1;\r\nfunction setPage(value) {\r\n  page = value;\r\n}\r\nlet limit = 5;\r\nfunction setLimit(value) {\r\n  limit = value;\r\n}\r\nlet dataCount;\r\nfunction setDataCount(value) {\r\n  dataCount = value;\r\n}\r\nlet amountAllData;\r\nlet pageCount;\r\nfunction setPageCount(value) {\r\n  pageCount = value;\r\n}\r\n\r\n\r\nfunction getCountOfRecievedData(typeFilter, substr) {\r\n  return new Promise((resolve, reject) => {\r\n    fetch(`${serverUrl}?${typeFilter}=${substr}`,  {\r\n      method: 'GET',\r\n      headers: {\r\n        Authorization: `Bearer ${localStorage.getItem('token')}`,\r\n        'Content-Type': 'application/json',\r\n        'Accept': 'application/json'\r\n      }\r\n    })\r\n    .then(response => response.json())\r\n    .then((data) => {\r\n      resolve(data.items.length);\r\n    })\r\n    .catch(error => {\r\n      reject('Something gone wrong with get amount of data from API: ', error);\r\n    });\r\n  })\r\n}\r\n\r\nfunction getUsers(sortby, order, typeFilter, substr, page, limit) {\r\n  if(sortby == 'default') {\r\n    sortby = '';\r\n    order = '';\r\n  }\r\n  return new Promise((resolve, reject) => {\r\n    fetch(`${serverUrl}?sortby=${sortby}&order=${order}&${typeFilter}=${substr}&page=${page}&limit=${limit}`, {\r\n      method: 'GET',\r\n      headers: {\r\n        Authorization: `Bearer ${localStorage.getItem('token')}`,\r\n        'Content-Type': 'application/json',\r\n        'Accept': 'application/json'\r\n      }\r\n    })\r\n    .then(response => response.json())\r\n    .then(async function(data) {\r\n      dataCount = await getCountOfRecievedData(typeFilter, substr);\r\n      amountAllData = data.count;\r\n      pageCount = Math.ceil(dataCount/limit);\r\n      (0,_pagination__WEBPACK_IMPORTED_MODULE_3__.paginateInit)();\r\n      resolve(data.items);\r\n    })\r\n    .catch(error => {\r\n      localStorage.removeItem('token');\r\n      window.location.href = 'http://127.0.0.1:8080/index.html';\r\n      reject('Something gone wrong with get users from API: ', error);\r\n    })\r\n  });\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  if(!localStorage.getItem('token') && !window.location.href.match('index.html')) {\r\n    window.location.href = 'http://127.0.0.1:8080/index.html';\r\n  }\r\n  if(localStorage.getItem('token') && window.location.href.match('index.html')) {\r\n    window.location.href = 'http://127.0.0.1:8080/home.html';\r\n  }\r\n  if(site == 'list') { \r\n    (0,_choseLimit__WEBPACK_IMPORTED_MODULE_0__.limitPerPageInit)();\r\n    (0,_filtration__WEBPACK_IMPORTED_MODULE_1__.radioCheckInit)();\r\n    (0,_sort__WEBPACK_IMPORTED_MODULE_2__.sortInit)();\r\n    viewRefresh();\r\n  }\r\n});\r\n\r\nasync function viewRefresh() {\r\n  users = await getUsers(\r\n    _sort__WEBPACK_IMPORTED_MODULE_2__.sortSelect.value, _sort__WEBPACK_IMPORTED_MODULE_2__.orderSelect.value, _filtration__WEBPACK_IMPORTED_MODULE_1__.typeOfFilter, _filtration__WEBPACK_IMPORTED_MODULE_1__.searchInputControl.value, page, limit\r\n  );\r\n  document.getElementById('smart-guy-list').innerHTML = '';\r\n  for(let i=0; i<users.length; i++)\r\n    (0,_postUser__WEBPACK_IMPORTED_MODULE_4__.addUser)(users[i]);\r\n}\n\n//# sourceURL=webpack://javascript-smart-guys/./src/getUsers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _choseLimit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./choseLimit */ \"./src/choseLimit.js\");\n/* harmony import */ var _deleteUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteUser */ \"./src/deleteUser.js\");\n/* harmony import */ var _filtration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filtration */ \"./src/filtration.js\");\n/* harmony import */ var _getUsers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getUsers */ \"./src/getUsers.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ \"./src/modal.js\");\n/* harmony import */ var _modal_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-validation */ \"./src/modal-validation.js\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_navbar__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pagination */ \"./src/pagination.js\");\n/* harmony import */ var _postUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./postUser */ \"./src/postUser.js\");\n/* harmony import */ var _putUser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./putUser */ \"./src/putUser.js\");\n/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sort */ \"./src/sort.js\");\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login */ \"./src/login.js\");\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_login__WEBPACK_IMPORTED_MODULE_11__);\nconst window = __webpack_require__.g.window;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://javascript-smart-guys/./src/index.js?");

/***/ }),

/***/ "./src/login.js":
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
/***/ (() => {

eval("let emailControl;\r\nlet passwordControl;\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  emailControl = document.getElementById('emailInput');\r\n  passwordControl = document.getElementById('passwordInput');\r\n});\r\n\r\nfunction loginHome() {\r\n  window.location.href = 'http://127.0.0.1:8080/home.html';\r\n}\r\nwindow.loginHome = loginHome;\r\n\r\nfunction login() {\r\n  let dataToLogin = {\r\n    email: emailControl.value,\r\n    password: passwordControl.value\r\n  };\r\n  fetch('http://localhost:3000/api/login', {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify(dataToLogin),\r\n  })\r\n  .then(response => response.json())\r\n  .then(data => {\r\n    localStorage.setItem('token', data.token);\r\n  })\r\n  .then(() => {\r\n    loginHome();\r\n  })\r\n  .catch((error) => {\r\n    console.error('Something wrong with login to application:', error);\r\n  });\r\n}\r\nwindow.login = login;\r\n\r\nfunction logout() {\r\n  fetch(`http://localhost:3000/api/logout`, {\r\n    method: 'DELETE'\r\n  })\r\n  .then(response => response.json())\r\n  .then(() => {\r\n    localStorage.removeItem('token');\r\n    if(!localStorage.getItem('token') && !window.location.href.match('index.html')) {\r\n      window.location.href = 'http://127.0.0.1:8080/index.html';\r\n    }\r\n  })\r\n  .catch((error) => {\r\n    console.error('Error:', error);\r\n  });\r\n}\r\nwindow.logout = logout;\n\n//# sourceURL=webpack://javascript-smart-guys/./src/login.js?");

/***/ }),

/***/ "./src/modal-validation.js":
/*!*********************************!*\
  !*** ./src/modal-validation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./src/modal.js\");\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  var forms = document.querySelectorAll('.needs-validation');\r\n\r\n  Array.prototype.slice.call(forms).forEach(function(form){\r\n    form.addEventListener('submit', function(event){\r\n      event.preventDefault();\r\n      event.stopPropagation();\r\n      if(!form.checkValidity())\r\n        form.classList.add('was-validated');\r\n      else {\r\n        form.classList.remove('was-validated');\r\n        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.onSaveBrainiac)();\r\n        $(\"#userModal\").modal('hide');\r\n      }\r\n    }, false);\r\n  });\r\n});\n\n//# sourceURL=webpack://javascript-smart-guys/./src/modal-validation.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onSaveBrainiac\": () => (/* binding */ onSaveBrainiac),\n/* harmony export */   \"onEditBrainiacOpenModal\": () => (/* binding */ onEditBrainiacOpenModal),\n/* harmony export */   \"onNameInput\": () => (/* binding */ onNameInput),\n/* harmony export */   \"onLastNameInput\": () => (/* binding */ onLastNameInput),\n/* harmony export */   \"onEmailInput\": () => (/* binding */ onEmailInput)\n/* harmony export */ });\n/* harmony import */ var _postUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postUser */ \"./src/postUser.js\");\n/* harmony import */ var _putUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./putUser */ \"./src/putUser.js\");\n/* harmony import */ var _getUsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getUsers */ \"./src/getUsers.js\");\n\r\n\r\n\r\n\r\nlet nameControl;\r\nlet lastNameControl;\r\nlet emailControl;\r\nlet userModalHeaderHandle;\r\nlet amountOfUsers;\r\nlet tmpUserToEdit;\r\nlet addingNewMode = false;\r\nconst avatarDictionary = ['aqua', 'black', 'brown', 'green', 'purple', 'yellow'];\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  if(site == 'list') { \r\n    userModalHeaderHandle = document.getElementById('userModalHeader');\r\n    nameControl = document.getElementById('InputName');\r\n    lastNameControl = document.getElementById('InputLastName');\r\n    emailControl = document.getElementById('InputEmail');\r\n    amountOfUsers = document.getElementById('smart-guy-list').children.length;\r\n  }\r\n});\r\n\r\nfunction onAddNewBrainiacOpenModal() {\r\n  addingNewMode = true;\r\n  userModalHeaderHandle.innerHTML = 'Add new brainiac';\r\n  nameControl.value = '';\r\n  lastNameControl.value = '';\r\n  emailControl.value = '';\r\n\r\n  $('#userModal').modal('show');\r\n}\r\nwindow.onAddNewBrainiacOpenModal = onAddNewBrainiacOpenModal;\r\n\r\nfunction onSaveBrainiac() {\r\n  if(userModalHeaderHandle.innerHTML == 'Add new brainiac') {\r\n    let randomAvatar = avatarDictionary[getRandomInt(0, 6)];\r\n    const newUser = {\r\n      \"first_name\": nameControl.value, \r\n      \"last_name\": lastNameControl.value,\r\n      \"email\": emailControl.value,\r\n      \"avatar\": `./img/user-${randomAvatar}.png`\r\n    };\r\n    (0,_postUser__WEBPACK_IMPORTED_MODULE_0__.postUser)(newUser);\r\n  }\r\n  else {\r\n    _getUsers__WEBPACK_IMPORTED_MODULE_2__.users.find(item => item.id == tmpUserToEdit.id).first_name = tmpUserToEdit.first_name;\r\n    _getUsers__WEBPACK_IMPORTED_MODULE_2__.users.find(item => item.id == tmpUserToEdit.id).last_name = tmpUserToEdit.last_name;\r\n    _getUsers__WEBPACK_IMPORTED_MODULE_2__.users.find(item => item.id == tmpUserToEdit.id).email = tmpUserToEdit.email;\r\n    const dataToUpdate = {\r\n      \"first_name\": nameControl.value,\r\n      \"last_name\": lastNameControl.value,\r\n      \"email\": emailControl.value\r\n    }\r\n    ;(0,_putUser__WEBPACK_IMPORTED_MODULE_1__.putUser)(tmpUserToEdit.id, dataToUpdate);\r\n  }\r\n}\r\n\r\nfunction onEditBrainiacOpenModal(userToEdit) {\r\n  addingNewMode = false;\r\n  userModalHeaderHandle.innerHTML = 'Edit brainiac';\r\n  nameControl.value = userToEdit.first_name;\r\n  lastNameControl.value = userToEdit.last_name;\r\n  emailControl.value = userToEdit.email;\r\n  tmpUserToEdit = JSON.parse(JSON.stringify(userToEdit));\r\n\r\n  $('#userModal').modal('show');\r\n}\r\n\r\nfunction onNameInput() {\r\n  if(!addingNewMode)\r\n    tmpUserToEdit.first_name = nameControl.value;\r\n}\r\nwindow.onNameInput = onNameInput;\r\n\r\nfunction onLastNameInput() {\r\n  if(!addingNewMode)\r\n    tmpUserToEdit.last_name = lastNameControl.value;\r\n}\r\nwindow.onLastNameInput = onLastNameInput;\r\n\r\nfunction onEmailInput() {\r\n  if(!addingNewMode)\r\n    tmpUserToEdit.email = emailControl.value;\r\n}\r\nwindow.onEmailInput = onEmailInput;\r\n\r\nfunction getRandomInt(min, max) {\r\n  min = Math.ceil(min);\r\n  max = Math.floor(max);\r\n  return Math.floor(Math.random() * (max - min)) + min;\r\n}\n\n//# sourceURL=webpack://javascript-smart-guys/./src/modal.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\r\n  if(site != 'login') {\r\n    const mediumWidth = 768;\r\n\r\n    let navContentHandle = document.getElementsByClassName('nav-menu-container')[0];\r\n    \r\n    let navContentLarge = document.createElement('ul');\r\n    navContentLarge.classList.add('navbar-nav', 'd-flex', 'flex-row');\r\n    navContentLarge.innerHTML = '<li class=\"nav-item me-3\"><a class=\"nav-link home\" href=\"index.html\">Home</a></li><li class=\"nav-item me-3\"><a class=\"nav-link list\" href=\"list-of-smart-guys.html\">List of smart guys</a></li><li class=\"nav-item me-3\"><a class=\"nav-link disabled\" href=\"#\">Help</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"#\" onclick=\"logout()\">Logout</a></li>';\r\n    \r\n    let navContentSmall = document.createElement('div');\r\n    navContentSmall.classList.add('pos-f-t', 'd-flex', 'flex-column', 'align-items-end');\r\n    navContentSmall.innerHTML = '<div class=\"pos-f-t d-flex flex-column align-items-end\"><nav class=\"navbar-dark bg-primary\"><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggleExternalContent\" aria-controls=\"navbarToggleExternalContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button></nav><div class=\"collapse mt-1\" id=\"navbarToggleExternalContent\"><div class=\"bg-primary p-2\"><ul class=\"navbar-nav d-flex flex-column align-items-end mt-2\"><li class=\"nav-item mb-2\"><a class=\"nav-link home\" href=\"index.html\">Home</a></li><li class=\"nav-item mb-2\"><a class=\"nav-link list\" href=\"list-of-smart-guys.html\">List of smart guys</a></li><li class=\"nav-item mb-2\"><a class=\"nav-link disabled\" href=\"#\">Help</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"#\" onclick=\"logout()\">Logout</a></li></ul></div></div></div>';\r\n\r\n    window.onload = () => {\r\n      if(window.innerWidth >= mediumWidth) {\r\n        navContentHandle.appendChild(navContentLarge);\r\n        navContentLarge.getElementsByClassName(site)[0].classList.add('active');\r\n      }\r\n      else\r\n        navContentHandle.appendChild(navContentSmall);\r\n        navContentSmall.getElementsByClassName(site)[0].classList.add('active');\r\n    };\r\n\r\n    window.addEventListener('resize', () => {\r\n      if(window.innerWidth >= mediumWidth) {\r\n        navContentHandle.innerHTML = '';\r\n        navContentHandle.appendChild(navContentLarge);\r\n        navContentLarge.getElementsByClassName(site)[0].classList.add('active');\r\n      }\r\n      else {\r\n        navContentHandle.innerHTML = '';\r\n        navContentHandle.appendChild(navContentSmall);\r\n        navContentSmall.getElementsByClassName(site)[0].classList.add('active');\r\n      }\r\n    });\r\n  }\r\n});\n\n//# sourceURL=webpack://javascript-smart-guys/./src/navbar.js?");

/***/ }),

/***/ "./src/pagination.js":
/*!***************************!*\
  !*** ./src/pagination.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"paginateInit\": () => (/* binding */ paginateInit)\n/* harmony export */ });\n/* harmony import */ var _getUsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getUsers */ \"./src/getUsers.js\");\n\r\n\r\nlet activePageNode;\r\n\r\nfunction clearPaginateList(ul) {\r\n  let prev = ul.children[0];\r\n  let next = ul.children[ul.children.length-1];\r\n  ul.innerHTML = '';\r\n  ul.append(prev);\r\n  ul.append(next);\r\n}\r\n\r\nfunction paginateInit() {\r\n  let paginationLiNext = document.getElementById('clickNext').parentNode;\r\n  let paginationUl = paginationLiNext.parentNode;\r\n  clearPaginateList(paginationUl);\r\n  if(_getUsers__WEBPACK_IMPORTED_MODULE_0__.pageCount <= 5) {\r\n    for(let i=0; i<_getUsers__WEBPACK_IMPORTED_MODULE_0__.pageCount; i++) {\r\n      let liElement = document.createElement('li');\r\n      let aElement = document.createElement('a');\r\n      liElement.classList.add('page-item');\r\n      aElement.classList.add('page-link', 'text-primary', 'cursor-pointer');\r\n      aElement.innerHTML = i+1;\r\n      aElement.addEventListener(\"click\", () => {\r\n        onPageClick(aElement.innerHTML);\r\n      });\r\n      aElement.id = 'page'+(i+1).toString();\r\n      if(_getUsers__WEBPACK_IMPORTED_MODULE_0__.page == i+1) {\r\n        aElement.classList.add('bg-primary', 'text-white');\r\n        activePageNode = aElement;\r\n      }\r\n      liElement.append(aElement);\r\n      paginationUl.insertBefore(liElement, paginationLiNext);\r\n    }\r\n  } else {\r\n    let ids = ['first', 'prev', 'curr', 'next', 'last'];\r\n    for(let i=0; i<5; i++) {\r\n      let liElement = document.createElement('li');\r\n      let aElement = document.createElement('a');\r\n      liElement.classList.add('page-item');\r\n      aElement.classList.add('page-link', 'text-primary', 'cursor-pointer');\r\n      aElement.id = \"..\"\r\n      aElement.addEventListener(\"click\", () => {\r\n        onPageClick(aElement.innerHTML);\r\n      });\r\n      aElement.id = ids[i];\r\n      liElement.append(aElement);\r\n      paginationUl.insertBefore(liElement, paginationLiNext);\r\n    }\r\n    let first = document.getElementById('first');\r\n    let prev = document.getElementById('prev');\r\n    let curr = document.getElementById('curr');\r\n    let next = document.getElementById('next');\r\n    let last = document.getElementById('last');\r\n    const list = [first, prev, curr, next, last];\r\n    first.innerHTML = '1';\r\n    last.innerHTML = _getUsers__WEBPACK_IMPORTED_MODULE_0__.pageCount;\r\n    if(_getUsers__WEBPACK_IMPORTED_MODULE_0__.page == 1 || _getUsers__WEBPACK_IMPORTED_MODULE_0__.page == 2) {\r\n      prev.innerHTML = '2';\r\n      curr.innerHTML = '3';\r\n      next.innerHTML = '4';\r\n    } else if(_getUsers__WEBPACK_IMPORTED_MODULE_0__.page == _getUsers__WEBPACK_IMPORTED_MODULE_0__.pageCount || _getUsers__WEBPACK_IMPORTED_MODULE_0__.page == _getUsers__WEBPACK_IMPORTED_MODULE_0__.pageCount-1) {\r\n      prev.innerHTML = parseInt(last.innerHTML)-3;\r\n      curr.innerHTML = parseInt(last.innerHTML)-2;\r\n      next.innerHTML = parseInt(last.innerHTML)-1;\r\n    } else {\r\n      prev.innerHTML = _getUsers__WEBPACK_IMPORTED_MODULE_0__.page-1;\r\n      curr.innerHTML = _getUsers__WEBPACK_IMPORTED_MODULE_0__.page;\r\n      next.innerHTML = _getUsers__WEBPACK_IMPORTED_MODULE_0__.page+1;\r\n    }\r\n    activePageNode = list.find((aElement) => {\r\n      return aElement.innerHTML == _getUsers__WEBPACK_IMPORTED_MODULE_0__.page;\r\n    });\r\n    activePageNode.classList.add('bg-primary', 'text-white');\r\n  }\r\n}\r\n\r\nasync function onPageClick(index) {\r\n  let pageList = Array.prototype.slice.call(document.getElementById('paginationList').children);\r\n  pageList = pageList.slice(1, pageList.length-1);\r\n  if(index != '-1' && index != '+1') {\r\n    for(let i=0; i<pageList.length; i++) {\r\n      if(pageList[i].children[0].innerHTML == index) {\r\n        (0,_getUsers__WEBPACK_IMPORTED_MODULE_0__.setPage)(parseInt(index));\r\n        activePageNode.classList.remove('bg-primary', 'text-white');\r\n        pageList[i].children[0].classList.add('bg-primary', 'text-white');\r\n        activePageNode = pageList[i].children[0];\r\n        break;\r\n      };  \r\n    }\r\n  } else {\r\n    if(index == '-1' && activePageNode.parentNode.previousSibling.children[0].id != 'clickPrev') {\r\n      (0,_getUsers__WEBPACK_IMPORTED_MODULE_0__.setPage)(_getUsers__WEBPACK_IMPORTED_MODULE_0__.page-1);\r\n      activePageNode.classList.remove('bg-primary', 'text-white');\r\n      activePageNode.parentNode.previousSibling.children[0].classList.add('bg-primary', 'text-white');\r\n      activePageNode = activePageNode.parentNode.previousSibling.children[0];\r\n    } \r\n    else if(index == '+1' && activePageNode.parentNode.nextSibling.children[0].id != 'clickNext') {\r\n      (0,_getUsers__WEBPACK_IMPORTED_MODULE_0__.setPage)(_getUsers__WEBPACK_IMPORTED_MODULE_0__.page+1);\r\n      activePageNode.classList.remove('bg-primary', 'text-white');\r\n      activePageNode.parentNode.nextSibling.children[0].classList.add('bg-primary', 'text-white');\r\n      activePageNode = activePageNode.parentNode.nextSibling.children[0];\r\n    }\r\n  }\r\n  (0,_getUsers__WEBPACK_IMPORTED_MODULE_0__.viewRefresh)();\r\n}\r\nwindow.onPageClick = onPageClick;\n\n//# sourceURL=webpack://javascript-smart-guys/./src/pagination.js?");

/***/ }),

/***/ "./src/postUser.js":
/*!*************************!*\
  !*** ./src/postUser.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postUser\": () => (/* binding */ postUser),\n/* harmony export */   \"addUser\": () => (/* binding */ addUser)\n/* harmony export */ });\n/* harmony import */ var _getUsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getUsers */ \"./src/getUsers.js\");\n/* harmony import */ var _deleteUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteUser */ \"./src/deleteUser.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ \"./src/modal.js\");\n/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sort */ \"./src/sort.js\");\n/* harmony import */ var _filtration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filtration */ \"./src/filtration.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nasync function postUser(newUser) {\r\n  fetch('https://61404fd85cb9280017a1121a.mockapi.io/api/test/users', {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify(newUser),\r\n  })\r\n  .then(response => response.json())\r\n  .then(() => {\r\n    if(!Number.isInteger(_getUsers__WEBPACK_IMPORTED_MODULE_0__.amountAllData/_getUsers__WEBPACK_IMPORTED_MODULE_0__.limit)) \r\n      (0,_getUsers__WEBPACK_IMPORTED_MODULE_0__.setPage)(Math.ceil(_getUsers__WEBPACK_IMPORTED_MODULE_0__.amountAllData/_getUsers__WEBPACK_IMPORTED_MODULE_0__.limit));\r\n    else\r\n      (0,_getUsers__WEBPACK_IMPORTED_MODULE_0__.setPage)(Math.ceil(_getUsers__WEBPACK_IMPORTED_MODULE_0__.amountAllData/_getUsers__WEBPACK_IMPORTED_MODULE_0__.limit)+1);\r\n    (0,_getUsers__WEBPACK_IMPORTED_MODULE_0__.setPageCount)(Math.ceil(_getUsers__WEBPACK_IMPORTED_MODULE_0__.amountAllData/_getUsers__WEBPACK_IMPORTED_MODULE_0__.limit));\r\n    (0,_sort__WEBPACK_IMPORTED_MODULE_3__.setSortSelect)('default');\r\n    (0,_sort__WEBPACK_IMPORTED_MODULE_3__.onSortByChange)();\r\n    (0,_filtration__WEBPACK_IMPORTED_MODULE_4__.radioCheckInit)();\r\n    (0,_getUsers__WEBPACK_IMPORTED_MODULE_0__.viewRefresh)();\r\n  })\r\n  .catch((error) => {\r\n    console.error('Error:', error);\r\n  });\r\n}\r\n\r\nfunction addUser(user) {\r\n  let smartGuysTableHandle = document.getElementById('smart-guy-list');\r\n  let tableRow = document.createElement('tr');\r\n  let tableCol = [...Array(6)].map(() => {\r\n    return document.createElement('td')\r\n  });\r\n  let userImage = document.createElement('img');\r\n  let penIcon = document.createElement('i');\r\n  let trashIcon = document.createElement('i');\r\n    \r\n  //Id\r\n  tableRow.classList.add('align-middle');\r\n  tableCol[0].innerHTML = user.id;\r\n  tableRow.append(tableCol[0]);\r\n\r\n  //Image\r\n  userImage.classList.add('smart-guy-image');\r\n  userImage.src = user.avatar;\r\n  tableCol[1].append(userImage);\r\n  tableRow.append(tableCol[1]);\r\n\r\n  //First name\r\n  tableCol[2].innerHTML = user.first_name;\r\n  tableRow.append(tableCol[2]);\r\n\r\n  //Last name\r\n  tableCol[3].innerHTML = user.last_name;\r\n  tableRow.append(tableCol[3]);\r\n\r\n  //Email\r\n  tableCol[4].innerHTML = user.email;\r\n  tableRow.append(tableCol[4]);\r\n\r\n  //Icons\r\n  let wrapper = document.createElement('div');\r\n  let penIconButton = document.createElement('button');\r\n  penIconButton.addEventListener(\"click\", () => {\r\n    (0,_modal__WEBPACK_IMPORTED_MODULE_2__.onEditBrainiacOpenModal)(\r\n      _getUsers__WEBPACK_IMPORTED_MODULE_0__.users.find(el => el.id == user.id)\r\n    );\r\n  });\r\n  penIconButton.classList.add('btn', 'p-0');\r\n  let trashIconButton = document.createElement('button');\r\n  trashIconButton.addEventListener(\"click\", () => {\r\n    (0,_deleteUser__WEBPACK_IMPORTED_MODULE_1__.removeUser)(user.id);\r\n  });\r\n  trashIconButton.classList.add('btn', 'p-0');\r\n  wrapper.classList.add('d-flex');\r\n  penIcon.classList.add('fas', 'fa-pen', 'cursor-pointer', 'icon-size', 'text-primary');\r\n  trashIcon.classList.add('fas', 'fa-trash', 'mx-2', 'cursor-pointer', 'icon-size', 'text-primary');\r\n  wrapper.append(penIconButton);\r\n  penIconButton.append(penIcon);\r\n  wrapper.append(trashIconButton);\r\n  trashIconButton.append(trashIcon);\r\n  tableCol[5].append(wrapper);\r\n  tableRow.append(tableCol[5]);\r\n\r\n  smartGuysTableHandle.appendChild(tableRow);\r\n}\n\n//# sourceURL=webpack://javascript-smart-guys/./src/postUser.js?");

/***/ }),

/***/ "./src/putUser.js":
/*!************************!*\
  !*** ./src/putUser.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"putUser\": () => (/* binding */ putUser)\n/* harmony export */ });\n/* harmony import */ var _getUsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getUsers */ \"./src/getUsers.js\");\n\r\n\r\nlet updateUserId;\r\n\r\nfunction putUser(userId, dataToUpdate){\r\n  updateUserId = userId;\r\n  console.log(dataToUpdate);\r\n  fetch(`${_getUsers__WEBPACK_IMPORTED_MODULE_0__.serverUrl}/${userId}`, {\r\n    method: 'PUT',\r\n    body: JSON.stringify(dataToUpdate),\r\n    headers: {\r\n      Authorization: `Bearer ${localStorage.getItem('token')}`\r\n    }\r\n  })\r\n  .then(response => response.json())\r\n  .then((user) => {\r\n    updateUser(user)\r\n  })\r\n  .catch((error) => {\r\n    console.error('Error:', error);\r\n  });\r\n}\r\n\r\nfunction updateUser(userToUpdate) {\r\n  let userRowHandle = document.getElementById('smart-guy-list')\r\n    .children[_getUsers__WEBPACK_IMPORTED_MODULE_0__.users.indexOf(_getUsers__WEBPACK_IMPORTED_MODULE_0__.users.find(el => el.id == updateUserId))];\r\n  userRowHandle.children[2].innerHTML = userToUpdate.first_name;\r\n  userRowHandle.children[3].innerHTML = userToUpdate.last_name;\r\n  userRowHandle.children[4].innerHTML = userToUpdate.email;\r\n}\n\n//# sourceURL=webpack://javascript-smart-guys/./src/putUser.js?");

/***/ }),

/***/ "./src/sort.js":
/*!*********************!*\
  !*** ./src/sort.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sortSelect\": () => (/* binding */ sortSelect),\n/* harmony export */   \"setSortSelect\": () => (/* binding */ setSortSelect),\n/* harmony export */   \"orderSelect\": () => (/* binding */ orderSelect),\n/* harmony export */   \"sortInit\": () => (/* binding */ sortInit),\n/* harmony export */   \"onSortByChange\": () => (/* binding */ onSortByChange),\n/* harmony export */   \"onOrderChange\": () => (/* binding */ onOrderChange)\n/* harmony export */ });\n/* harmony import */ var _getUsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getUsers */ \"./src/getUsers.js\");\n\r\n\r\nlet sortSelect;\r\nfunction setSortSelect(value) {\r\n  sortSelect = value;\r\n}\r\nlet orderSelect;\r\n\r\nfunction sortInit() {\r\n  sortSelect = document.getElementById('sortSelect');\r\n  orderSelect = document.getElementById('orderSelect');\r\n  sortSelect.value = 'default';\r\n  orderSelect.value = 'asc';\r\n  orderSelect.disabled = true;\r\n}\r\n\r\nasync function onSortByChange() {\r\n  if(sortSelect.value != 'default')\r\n    orderSelect.disabled = false;\r\n  else {\r\n    orderSelect.value = 'asc';\r\n    orderSelect.disabled = true;\r\n  }\r\n  (0,_getUsers__WEBPACK_IMPORTED_MODULE_0__.viewRefresh)();\r\n}\r\nwindow.onSortByChange = onSortByChange;\r\n\r\nasync function onOrderChange() {\r\n  (0,_getUsers__WEBPACK_IMPORTED_MODULE_0__.viewRefresh)();\r\n}\r\nwindow.onOrderChange = onOrderChange;\n\n//# sourceURL=webpack://javascript-smart-guys/./src/sort.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;