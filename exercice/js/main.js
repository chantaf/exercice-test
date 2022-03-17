//table user 
let users = [
    {
      id: "123456789",
      createdDate: "2021-01-06T00:00:00.000Z",
      status: "En validation",
      firstName: "Mohamed",
      lastName: "Taha",
      userName: "mtaha",
      registrationNumber: "2584",
    },
     {
      id: "987654321",
      createdDate: "2021-07-25T00:00:00.000Z",
      status: "Validé",
      firstName: "Hamid",
      lastName: "Orrich",
      userName: "horrich",
      registrationNumber: "1594",
    },
       {
      id: "852963741",
      createdDate: "2021-09-15T00:00:00.000Z",
      status: "Rejeté",
      firstName: "Rachid",
      lastName: "Mahidi",
      userName: "rmahidi",
      registrationNumber: "3576",
    }
  ]

  //affichage users
  window.onload = function() {
      users.forEach(element => {
          let date= new Date(element.createdDate).toLocaleDateString();
        document.getElementById('tableuser').innerHTML+=`
        
        <tr>
            <td>${element.id}</td>
            <td>${date}</td>
            <td>${element.status}</td>
            <td>${element.firstName}</td>
            <td>${element.lastName}</td>
            <td>${element.userName}</td>
            <td>${element.registrationNumber}</td>
            <td><button class="supprimer" onclick="supprimer(${element.id})"><img id="icontrash" src="./icon/trash.png"></button></td>
        </tr>
        `
      });
   
  }
//ajouter user
function ajouter(){

}

//supprimer user
  function supprimer(id){
    users.forEach(element => {
        if(element.id==id){
            let index=users.indexOf(element);
            users.splice(index, 1);
            document.getElementById('tableuser').innerHTML="";
            window.onload();
        }
    })
  }


  // Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
