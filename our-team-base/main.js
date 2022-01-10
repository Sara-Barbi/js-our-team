
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

/*
let add= document.getElementById("addMemberButton");

add.addEventListener('click', function(){

   


  let ilNome =document.getElementById("name").value;
  let ilRuolo =document.getElementById("role").value;
  let lImg =document.getElementById("image").value;
  
  let divCard = document.createElement("div");
  divCard.classList.add("card-text");

  let divImg = document.createElement("div");
  divImg.classList.add("card-image");

  let pName = document.createElement("h3");
  pName.textContent = ilNome;
  divCard.appendChild(pName);

  let pRole = document.createElement("p");
  pRole.textContent = ilRuolo;
  divCard.appendChild(pRole);
  
  let pImg = document.createElement("img");
  pImg.src = lImg;
  pImg.alt = ilNome;
  divImg.appendChild(pImg);

  let element = document.getElementsByClassName("team-card");
  element.appendChild(divImg);
  element.appendChild(divCard);

  let container = document.getElementById("team-container");
  container.appendChild(element);
})
*/


/*
for(let i in team){
  console.log(team[i]);
}
*/

let teamContainer = document.querySelector(".team-container");

for (let i=0; i<team.length; i++) {
  teamContainer.innerHTML += `
  <div class="team-card">
    <div class="card-image">
      <img
      src="img/${team[i].image}"
      alt="${team[i].name}"
      />
    </div>
    <div class="card-text">
      <h3>${team[i].name}</h3>
      <p>${team[i].role}</p>
    </div>
  </div>
  `;
}




