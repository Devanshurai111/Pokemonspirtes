const baseurl ='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const container = document.querySelector('#container');
let n;
n=parseInt(prompt('No of pokemon'));
for(let i=1;i<=n;i++){
  const pokemon=document.createElement('div');
  pokemon.classList.add('pokemon');
  const label= document.createElement('span');
  label.innerText=`#${i}`;
const newImg= document.createElement('img');
  newImg.src=`${baseurl}${i}.png`;
  pokemon.appendChild(newImg);
  pokemon.appendChild(label);
  container.appendChild(pokemon);
}
