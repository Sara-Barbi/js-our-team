
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
    image: 'walter-gordon-office-manager.jpg',
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

let add= document.getElementById("addMemberButton");

add.addEventListener('click', function(){
  const newCard = {
    name: document.getElementById("name").value,
    role: document.getElementById("role").value,
    image: document.getElementById("image").value
  }

  team.push(newCard);

  teamContainer.innerHTML += `
  <div class="team-card">
    <div class="card-image">
      <img
      src="${newCard.image}"
      alt="${newCard.name}"
      />
    </div>
    <div class="card-text">
      <h3>${newCard.name}</h3>
      <p>${newCard.role}</p>
    </div>
  </div>
  `;

   
})

console.log(team);






