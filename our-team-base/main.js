
const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-mager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

let add= document.getElementById("addMemberButton");

add.addEventListener('click', function(){
  let ilNome =document.getElementById("name").value;
  let ilRuolo =document.getElementById("role").value;
  let lImg =document.getElementById("image").value;

  
  let elementoNome = document.createElement("h3");
  elementoNome.textContent=(ilNome);
  
  let elementoRuolo= document.createElement("p");
  elementoRuolo.textContent=(ilRuolo);
  
  let elementoImg = document.createElement("img");
  elementoImg.textContent=(lImg);

  
 
 
 
  

})


/*
for(let i in team){
  console.log(team[i]);
}
*/





