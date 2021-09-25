import { limit, viewRefresh, setLimit, setPage } from './getUsers';

export let limitSelect;

export function limitPerPageInit() {
  limitSelect = document.getElementById('choseLimit');
  limitSelect.value = limit;
}

function onLimitOnPageChange() {
  setLimit(limitSelect.value);
  setPage(1);
  viewRefresh();
}
window.onLimitOnPageChange = onLimitOnPageChange;