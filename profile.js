const FavButton = document.querySelector('#color');
FavButton.addEventListener('click', () => {
    FavButton.classList.add('color')
    alert('Blue');
});

const FavPlace = document.querySelector('#place');
FavPlace.addEventListener('click', () => {
    FavPlace.classList.add('place')
    alert('Italy');
});

const FavRitual = document.querySelector('#ritual');
FavRitual.addEventListener('click', () => {
    FavRitual.classList.add('ritual')
    alert('Meditation');
});

// var button = document.getElementById('ele');
//  element.classList.add('color', 'place', 'ritual');

//const profileBtns = document.querySelector('button');

// profileBtns.forEach((btn) => {
//     btn.addEventListener('click', (event) => {
//         let favorite = ''
//         switch (event.target.id) {
//             case 'color':
//                 favorite = 'blue';
//             case 'place':
//                 favorite = 'Italy';
//             case 'ritual':
//                 favorite = 'Meditation';

//         }
//         alert()
//     })
// })
