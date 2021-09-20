let sortSelect;
let orderSelect;

function sortInit() {
  sortSelect = document.getElementById('sortSelect');
  orderSelect = document.getElementById('orderSelect');
  sortSelect.value = 'default';
  orderSelect.value = 'asc';
  orderSelect.disabled = true;
}

async function onSortByChange() {
  if(sortSelect.value != 'default')
    orderSelect.disabled = false;
  else {
    orderSelect.value = 'asc';
    orderSelect.disabled = true;
  }
  viewRefresh();
}

async function onOrderChange() {
  viewRefresh();
}