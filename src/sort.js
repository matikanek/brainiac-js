import { viewRefresh } from './getUsers';

export let sortSelect;
export function setSortSelect(value) {
  sortSelect = value;
}
export let orderSelect;

export function sortInit() {
  sortSelect = document.getElementById('sortSelect');
  orderSelect = document.getElementById('orderSelect');
  sortSelect.value = 'default';
  orderSelect.value = 'asc';
  orderSelect.disabled = true;
}

export async function onSortByChange() {
  if(sortSelect.value != 'default')
    orderSelect.disabled = false;
  else {
    orderSelect.value = 'asc';
    orderSelect.disabled = true;
  }
  viewRefresh();
}
window.onSortByChange = onSortByChange;

export async function onOrderChange() {
  viewRefresh();
}
window.onOrderChange = onOrderChange;