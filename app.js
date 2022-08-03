const membri = []
addMember('Wayne Barnett', 'Founder & CEO','wayne-barnett-founder-ceo.jpg', membri)
addMember('Angela Caroll', 'Chief Editor','angela-caroll-chief-editor.jpg', membri)
addMember('Walter Gordon', 'Office Manager','walter-gordon-office-manager.jpg', membri)
addMember('Angela Lopez', 'Social Media Manager','angela-lopez-social-media-manager.jpg', membri)
addMember('Scott Estrada', 'Developer','scott-estrada-developer.jpg', membri)
addMember('Barbara Ramos', 'Graphic Designer','barbara-ramos-graphic-designer.jpg', membri)
console.log(membri)

const gridEl = document.querySelector('.griglia')
addMemberDom(membri)

function addMemberDom(membri){
  for (let i = 0; i < membri.length; i++) {
    const membro = membri[i];
    gridEl.innerHTML += 
    `<div class="col">
      <img src="img/${membro.img}" alt="">
      <div class="card-body text-secondary">
        <h3>${membro.nome}</h3>
        <p class="card-text">${membro.ruolo}</p>
      </div>
    </div>`
  }

}



const addButton = document.getElementById('member-gen')


addButton.addEventListener('click', function(){
  alert("copia prima l'url della tua foto ")

  const userNome = prompt('inserisci il tuo nome ')
  const userRole = prompt('inserisci il tuo ruole ')
  const userImg = prompt('inserisci il tuo percorso immagine')
  addMember(userNome, userRole, userImg, membri)
  if(!userNome.length == 0 && !userRole == 0 && !userImg == 0){
    gridEl.innerHTML += 
    `<div class="col">
      <img class="new-member-img" src="${userImg}" alt="">
      <div class="card-body text-secondary">
        <h3>${userNome}</h3>
        <p class="card-text">${userRole}</p>
      </div>
    </div>`
    
  }
  
})



function addMember(name, role, img, array){
  const member = {
    nome: name,
    ruolo: role,
    img: img
  }
  array.push(member)
  return member
}

