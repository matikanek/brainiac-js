let limitSelect;

function limitPerPageInit() {
  limitSelect = document.getElementById('choseLimit');
  limitSelect.value = limit;
}

function onLimitOnPageChange() {
  limit = limitSelect.value;
  page = 1;
  viewRefresh();
}