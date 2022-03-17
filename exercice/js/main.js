
//déclarer la forme et l'arrière-plan pour les utiliser dans plusieurs place
  let div = document.getElementById("div"); 
  let tableuser = document.querySelector(".tableuser");

  //afficher modal
  const afficher = () => {
    if (div.classList.contains("invisible")) {
      div.classList.remove("invisible");
      div.classList.add("div");
      tableuser.classList.add("tableuser");
    }
  };
  
  //affichage users
  window.onload = function() {
    let color="";
      users.forEach(element => {
        if(element.status=="En validation"){
            color="#FDB64D";
        }else if(element.status=="Validé"){
            color="#5BE881";
        }else{
            color="#FF0000";
        }
          let date= new Date(element.createdDate).toLocaleDateString();
        document.getElementById('tableuser').innerHTML+=`
        
        <tr>
            <td>${element.id}</td>
            <td>${date}</td>
            <td><span class="spanstatus" style="background-color: ${color};">${element.status}</span></td>
            <td>${element.firstName}</td>
            <td>${element.lastName}</td>
            <td>${element.userName}</td>
            <td>${element.registrationNumber}</td>
            <td><img class="supprimer" id="icontrash" src="./icon/trash.png"></td>
        </tr>
        `
      });
   
  }

  //vider les inputs
    function vider(){
      document.getElementById('nom').value="";
      document.getElementById('prenom').value="";
      document.getElementById('etat').value="";
      document.getElementById('nomu').value="";
      document.getElementById('datec').value="";
      document.getElementById('matricule').value="";
    }


//ajouter user
function ajouter(){
  let user = {
    id:Math.floor(100000000 + Math.random() * 900000000) ,
    createdDate:document.getElementById('datec').value,
    status: document.getElementById('etat').value,
    lastName: document.getElementById('nom').value,
    firstName: document.getElementById('prenom').value,
    userName: document.getElementById('nomu').value,
    registrationNumber: document.getElementById('matricule').value,
  };

  // push  user en table users
  users.push(user);

  vider();

     //afficher le table et cacher le modal
     if (div.classList.contains("div")) {
      div.classList.remove("div");
      div.classList.add("invisible");
      tableuser.classList.remove("tableuser");
    }

  //refresh 
    document.getElementById('tableuser').innerHTML="";
    window.onload();

 
}



//supprimer user
  document.getElementById('table').addEventListener("click", (e) => {
    let warning = "voulez vous supprimer cet utilisateur ?";
    if (e.target.classList.contains("supprimer")) {
      if (confirm(warning) == true) {
        e.target.parentNode.parentNode.remove();
      }
    }
  });


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