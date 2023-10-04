// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import './index.css';
// // import App from './components/App';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// // offensive score: at least 60 games, points / minutes_played 
// // defense is STL * 0.4 + BLK * .6
    
// const URL = 'http://localhost:3000/players'
// const addBtn = document.querySelector('#new-toy-btn')
// const toyFormCont = document.querySelector('.container')
// const toyForm = document.querySelector('.add-toy-form')
// const toyCollection = document.getElementById('toy-collection')
// let addToy = false

// // YOUR CODE HERE

// toyForm.addEventListener('submit',function(e){
//   e.preventDefault();
//   let toyName = e.target.children.name.value
//   let toyImgUrl = e.target.children.image.value
//   e.target.children.name.value = ''
//   e.target.children.image.value = ''
//   createNewToy(toyName,toyImgUrl)
//   .then(json => createToyCard(json))
// })

// addBtn.addEventListener('click', () => {
//   // hide & seek with the form
//   addToy = !addToy
//   if (addToy) {
//     toyFormCont.style.display = 'block'
//     // submit listener here
//   } else {
//     toyFormCont.style.display = 'none'
//   }
// })

// function Fetch() {
//   fetch(URL)
//     .then(res => res.json())
//     .then(createToyCards);
// }

// function createToyCards(toys) {
//   toys.forEach(createToyCard)
// }

// function createToyCard(toy) {
//   // console.log(toy)
//   let toyDivCard = document.createElement('div')
//   toyDivCard.className = 'card' 

//   let toyh2 = document.createElement('h2')
//   toyh2.innerText = toy.player_name
//   let toyImg = document.createElement('img')
//   toyImg.src = toy.image
//   toyImg.className = 'toy-avatar'
 
//   toyCollection.appendChild(toyDivCard)
//   toyDivCard.appendChild(toyh2)
//   toyDivCard.appendChild(toyImg)
// }

// function createNewToy(name,url){
//   return fetch(URL,{
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({name: name, image: url, likes: 0})
//   })
//   .then(res => res.json())
// }

// Fetch()

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; // Import your main App component
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));