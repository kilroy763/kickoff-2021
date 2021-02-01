
// const url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api/'

// // GET REQUEST
// const teams = fetch(`${url}/squads/2/teams/6/members/10`)
//                 .then(response => response.json())
//                 .then(data => console.log('fetch', data));

// // PUT REQUEST
// const putData = {
//     id:10,
//     teamId:6,
//     name:'Max',
//     prefix:'',
//     surname:'Mulder',
//     mugshot:'https://avatars.githubusercontent.com/u/58260542?s=460&u=05ef1122816b05254a7d2ef8f0181ebdef296bbe&v=4',
//     githubHandle:'Kilroy763',
//     other: {
//         sport: 'Geen',
//         muziek: 'Rap / HipHop',
//         werkplek: 'Thuis bij mijn ouders'
//     }
// }

// async function postData(url = '', data = {}) {
//     const response = await fetch(url, {
//         method: 'PUT',
//         headers: {
//         'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     });
//     return response.json();
// }
  
// postData(`${url}/squads/2/teams/6/members/10`, putData)
//     .then(data => {
//         console.log('put', data);
//     });
const url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api/'

// GET REQUEST
const teams = fetch(`${url}/squads/2/teams/6/members/10`)
                .then(response => response.json())
                .then(data => render(data));
            



function render(putData){
    let data = putData;
    console.log("this is data", data)
    myName(data);
    mySport(data);
    myMusic(data);
    myWork(data);
    myGithub(data);
    myMugshot(data);
}



function myName(data){
    let cont = document.getElementById('name')
    cont.innerHTML = data.name + ' ' + data.surname
}

function myGithub(data){
    let cont = document.getElementById('github')
    cont.innerHTML = data.githubHandle
}

function mySport(data){
    let cont = document.getElementById('sport')
    cont.innerHTML = data.other.sport
}

function myMusic(data){
    let cont = document.getElementById('muziek')
    cont.innerHTML = data.other.muziek
}

function myMugshot(data){
    let cont = document.getElementById('mugshot')
    cont.src = data.mugshot
}

function myWork(data){
    let cont = document.getElementById('werkplek')
    cont.innerHTML = data.other.werkplek
};


