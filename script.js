let footballTeam = {
  team: `Barcelona`,
  year: 1992,
  headCoach: `Johan Cruyff`,
  players: [
    // Forwards
    { name: `Hristo Stoichkov`, position: `forward`, isCaptain: false },
    { name: `Michael Laudrup`, position: `forward`, isCaptain: false },
    { name: `Julio Salinas`, position: `forward`, isCaptain: false },

    // Midfielders
    { name: `Pep Guardiola`, position: `midfielder`, isCaptain: false },
    { name: `José Mari Bakero`, position: `midfielder`, isCaptain: false },
    { name: `Eusebio Sacristán`, position: `midfielder`, isCaptain: false },

    // Defenders
    { name: `Ronald Koeman`, position: `defender`, isCaptain: false },
    { name: `Albert Ferrer`, position: `defender`, isCaptain: false },
    { name: `Miguel Ángel Nadal`, position: `defender`, isCaptain: false },

    // Goalkeepers
    { name: `Andoni Zubizarreta`, position: `goalkeeper`, isCaptain: true },
    { name: `Carles Busquets`, position: `goalkeeper`, isCaptain: false },
    { name: `Julen Lopetegui`, position: `goalkeeper`, isCaptain: false },
  ],
};

let team = (document.querySelector(
  `#team`
).textContent = `${footballTeam.team}`);
let year = (document.querySelector(
  `#year`
).textContent = `${footballTeam.year}`);
let headCoach = (document.querySelector(
  `#head-coach`
).textContent = `${footballTeam.headCoach}`);

let playersCard = document.querySelector(`#player-cards`);
let teamArr = footballTeam.players.map((player) => player);
let teamPlayers = footballTeam.players.map((player) => player.name);
let playersPosition = footballTeam.players.map((player) => player.position);

let players = document.querySelector(`#players`);

function showAllPlayers() {
  playersCard.innerHTML = teamArr.map((item) => {
    if (item.isCaptain === true) {
      return `<div class="player-card"><h2>(Captain)${item.name}</h2><p>Position: ${item.position}</p></div> `;
    } else {
      return `<div class="player-card"><h2>${item.name}</h2><p>Position: ${item.position}</p></div> `;
    }
  });
}
function filterTeamMates() {
  let playerValue = players.value;
  let playerFilter = teamArr.filter((name) => name.position === playerValue);
  let playerName = playerFilter.map((name) => name.name);
  let position = playerFilter.map((position) => position.position);
  let isCaptain = playerFilter.map((captain) => captain.isCaptain);

  let divDetails = ``;

  if (playerValue === `all`) {
    showAllPlayers();
  } else {
    for (let i = 0; i < playerName.length; i++) {
      let newdiv = document.createElement(`div`);

      if (isCaptain[i] === true) {
        divDetails +=
          newdiv.innerHTML = `<div class="player-card"><h2>(Captain)${playerName[i]}</h2><p>Position: ${position[i]}</p></div> `;
      } else {
        divDetails +=
          newdiv.innerHTML = `<div class="player-card"><h2>${playerName[i]}</h2><p>Position: ${position[i]}</p></div> `;
      }
    }

    playersCard.innerHTML = divDetails;
  }
}

showAllPlayers();

players.addEventListener(`change`, filterTeamMates);
