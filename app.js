const nameElement = document.getElementById('name');

const updateButton = document.getElementById('update-button');

const nameInput = document.getElementById('name-input');

updateButton.addEventListener('click', () => {

    const name = nameInput.value;

    nameElement.textContent = name;
});

//nameInput.addEventListener('input', () => {
 //   const name = nameInput.value;

  //  nameElement.textContent = name;
//});

//const colorButton = document.getElementById('colorbutton');

//colorButton.addEventListener('click', () => {

    //const colorButton = document.getElementById('changecolor');

//}