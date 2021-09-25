import { viewRefresh, page, pageCount, setPage } from './getUsers';

let activePageNode;

function clearPaginateList(ul) {
  let prev = ul.children[0];
  let next = ul.children[ul.children.length-1];
  ul.innerHTML = '';
  ul.append(prev);
  ul.append(next);
}

export function paginateInit() {
  let paginationLiNext = document.getElementById('clickNext').parentNode;
  let paginationUl = paginationLiNext.parentNode;
  clearPaginateList(paginationUl);
  if(pageCount <= 5) {
    for(let i=0; i<pageCount; i++) {
      let liElement = document.createElement('li');
      let aElement = document.createElement('a');
      liElement.classList.add('page-item');
      aElement.classList.add('page-link', 'text-primary', 'cursor-pointer');
      aElement.innerHTML = i+1;
      aElement.addEventListener("click", () => {
        onPageClick(aElement.innerHTML);
      });
      aElement.id = 'page'+(i+1).toString();
      if(page == i+1) {
        aElement.classList.add('bg-primary', 'text-white');
        activePageNode = aElement;
      }
      liElement.append(aElement);
      paginationUl.insertBefore(liElement, paginationLiNext);
    }
  } else {
    let ids = ['first', 'prev', 'curr', 'next', 'last'];
    for(let i=0; i<5; i++) {
      let liElement = document.createElement('li');
      let aElement = document.createElement('a');
      liElement.classList.add('page-item');
      aElement.classList.add('page-link', 'text-primary', 'cursor-pointer');
      aElement.id = ".."
      aElement.addEventListener("click", () => {
        onPageClick(aElement.innerHTML);
      });
      aElement.id = ids[i];
      liElement.append(aElement);
      paginationUl.insertBefore(liElement, paginationLiNext);
    }
    let first = document.getElementById('first');
    let prev = document.getElementById('prev');
    let curr = document.getElementById('curr');
    let next = document.getElementById('next');
    let last = document.getElementById('last');
    const list = [first, prev, curr, next, last];
    first.innerHTML = '1';
    last.innerHTML = pageCount;
    if(page == 1 || page == 2) {
      prev.innerHTML = '2';
      curr.innerHTML = '3';
      next.innerHTML = '4';
    } else if(page == pageCount || page == pageCount-1) {
      prev.innerHTML = parseInt(last.innerHTML)-3;
      curr.innerHTML = parseInt(last.innerHTML)-2;
      next.innerHTML = parseInt(last.innerHTML)-1;
    } else {
      prev.innerHTML = page-1;
      curr.innerHTML = page;
      next.innerHTML = page+1;
    }
    activePageNode = list.find((aElement) => {
      return aElement.innerHTML == page;
    });
    activePageNode.classList.add('bg-primary', 'text-white');
  }
}

async function onPageClick(index) {
  let pageList = Array.prototype.slice.call(document.getElementById('paginationList').children);
  pageList = pageList.slice(1, pageList.length-1);
  if(index != '-1' && index != '+1') {
    for(let i=0; i<pageList.length; i++) {
      if(pageList[i].children[0].innerHTML == index) {
        setPage(parseInt(index));
        activePageNode.classList.remove('bg-primary', 'text-white');
        pageList[i].children[0].classList.add('bg-primary', 'text-white');
        activePageNode = pageList[i].children[0];
        break;
      };  
    }
  } else {
    if(index == '-1' && activePageNode.parentNode.previousSibling.children[0].id != 'clickPrev') {
      setPage(page-1);
      activePageNode.classList.remove('bg-primary', 'text-white');
      activePageNode.parentNode.previousSibling.children[0].classList.add('bg-primary', 'text-white');
      activePageNode = activePageNode.parentNode.previousSibling.children[0];
    } 
    else if(index == '+1' && activePageNode.parentNode.nextSibling.children[0].id != 'clickNext') {
      setPage(page+1);
      activePageNode.classList.remove('bg-primary', 'text-white');
      activePageNode.parentNode.nextSibling.children[0].classList.add('bg-primary', 'text-white');
      activePageNode = activePageNode.parentNode.nextSibling.children[0];
    }
  }
  viewRefresh();
}
window.onPageClick = onPageClick;