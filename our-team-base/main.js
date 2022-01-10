
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
  let name=document.getElementById("name");
  let role= document.getElementById("role");
  let image=document.getElementById("image");

  teamContainer.innerHTML += `
  <div class="team-card">
    <div class="card-image">
      <img
      src="img/${image.value}"
      alt="${name.value}"
      />
    </div>
    <div class="card-text">
      <h3>${name.value}</h3>
      <p>${role.value}</p>
    </div>
  </div>
  `;

   
})






