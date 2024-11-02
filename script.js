const textInput = document.getElementById("input-text");
const addButton = document.getElementById("add-button");    
const listContainer = document.getElementById("list-container");

addButton.addEventListener('click', () => {
    const listItem = document.createElement('li');
    listItem.textContent = textInput.value;
    listContainer.appendChild(listItem);
    textInput.value = "";
})