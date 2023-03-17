//variables for the element selectors and the array
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

//function for pushing items to array based on input and clearing the input field after
function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    }
    items.push(item);
    populateList(items, itemsList);
    this.reset();

}
;
//function for creating Html from array
function populateList(plates = [], platesList){
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
            <input type="checkbox" data-index="${i}" id="item${i}" ${plate.done ? 'checked' : ''} />
            <label for="item${i}">${plate.text}</label>
        </li>
        `;
    }).join('');
    console.log(plates)
}

//event listener for the submit form element
addItems.addEventListener('submit', addItem);