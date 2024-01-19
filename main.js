const items = document.querySelector('.items');
const input = document.querySelector('.footer-input');
const addBtn = document.querySelector('.footer-button');

/**
 *
 */
function onAdd() {
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }
  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: 'center' });
  input.value = '';
  input.focus();
}

let id = 0; // UUID 같은걸 쓰는게 좋음
function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item-row');
  itemRow.setAttribute('data-id', id)
  itemRow.innerHTML = `
      <div class="item">
        <span class="item-name">${text}</span>
        <button class="item-delete">
          <span class="material-symbols-outlined" data-id=${id}> delete </span>
        </button>
      </div>
      <div class="item-divider"></div>
  `;
  id++;

  return itemRow;
}

addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAdd();
  }
});

items.addEventListener('click', (event) => {
  // if(event.target.nodeName === 'SPAN'){
  //   console.log('he');
  // }
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item-row[data-id="${id}"]`)
    toBeDeleted.remove();
  }
});
