//all h2 tag color lightblue
const h2 = document.getElementsByTagName('h2');
for(let i =0; i<h2.length; i++){
    h2[i].style.color = 'lightblue';
};

//Change background color with call section id
document.getElementById('backpack').style.backgroundColor = 'tomato';

//All card class change border-radius to 30px;
const cardClass = document.getElementsByClassName('card');
for(let i =0; i<cardClass.length; i++){
    cardClass[i].style.borderRadius = '30px';
}
//write a function & console log it..and the function add a button with click handeler
// document.getElementById('dom-btn').addEventListener('click', function(){
//     console.log('This is click handeler button');
// });

//Click to disabled all button
// const button = document.getElementById('dom-btn');
// button.addEventListener('click', function(){
//     this.parentNode.removeChild(button);
// })
//check input box


