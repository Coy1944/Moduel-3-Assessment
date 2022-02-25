const FavButton = document.querySelector('#color');
FavButton.addEventListener('click', () => {
    FavButton.classList.add('FavButton')
    alert('Blue');
});

const FavPlace = document.querySelector('#place');
FavPlace.addEventListener('click', () => {
    FavPlace.classList.add('FavPlace')
    alert('Italy');
});

const FavRitual = document.querySelector('#ritual');
FavRitual.addEventListener('click', () => {
    FavRitual.classList.add('FavRitual')
    alert('Meditation');
});