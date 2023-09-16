const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
const imageFiles = ['anime.jpeg', 'fate.png', 'anime.jpg', 'Tori Uta.jpg', 'fatejogo.jpg'];

// Array de texto alternativo para cada imagem
const altTexts = [];

// Loop para criar miniaturas e configurar os manipuladores de eventos
for (let i = 0; i < imageFiles.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${imageFiles[i]}`);
  newImage.setAttribute('alt', altTexts[i]);
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', function () {
    displayedImage.setAttribute('src', `images/${imageFiles[i]}`);
    displayedImage.setAttribute('alt', altTexts[i]);
  });
}

// Variável para controlar o estado de escurecimento
let isDarkened = false;

// Manipulador de evento para o botão Darken/Lighten
btn.addEventListener('click', function () {
  if (isDarkened) {
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    btn.textContent = 'Darken';
  } else {
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    btn.textContent = 'Lighten';
  }
  isDarkened = !isDarkened;
});

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

