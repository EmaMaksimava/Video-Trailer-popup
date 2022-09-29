const watchBtn = document.querySelector('.btn');
const videoWindowElement = document.querySelector('.trailer-container');
const closeBtn = document.querySelector('i');

watchBtn.addEventListener('click', () => {
  videoWindowElement.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  videoWindowElement.classList.toggle('hidden');
})