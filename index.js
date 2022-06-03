let playerIp = document.getElementById("playerIp").value;
let playerPort = document.getElementById("playerPort").value;


// ============= tryng to add button in a div with JS command //
let div = document.getElementById('actions');

function create_another_button(elm) {
  let lastBtnCounter = 
  let counter = parseInt(elm.getAttribute('data-counter'));
  let button = document.createElement('button');
  button.innerText = elm.id + '_' + counter;
  button.id = elm.id + '_' + counter;
  button.setAttribute('data-counter', '1');
  button.setAttribute('onclick', 'document.getElementById("triggerCommand")');
  div.appendChild(button);
  button.setAttribute('data-counter', counter);
  console.log(counter);
  
}

function triggerCampaign() {
  let playerIp = document.getElementById("playerIp").value;
  let playerPort = document.getElementById("playerPort").value;
  let pattern = document.getElementById("pattern").value;
  if (playerIp && playerPort) {
    let url =
      "http://" + playerIp + ":" + playerPort + "/trigger/" + pattern;
      document.getElementById("commandSent").innerHTML =
      "The command sent was: " + url;
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(""),
  });
} else {
  window.alert("Please input the player IP and Player Port");
}

}
function stopCampaign() {
  let playerIp = document.getElementById("playerIp").value;
  let playerPort = document.getElementById("playerPort").value;
  if (playerIp && playerPort) {
    let url =
      "http://" + playerIp + ":" + playerPort + "/campaign/current/stop";
    document.getElementById("commandSent").innerHTML =
      "The command sent was: " + url;
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(""),
    });
  } else {
    window.alert("Please input the player IP and Player Port");
  }
}





