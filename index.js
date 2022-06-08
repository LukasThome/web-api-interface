let playerIp = document.getElementById("playerIp").value;
let playerPort = document.getElementById("playerPort").value;
let div = document.getElementById('actions');

let select = document.getElementById('triggersSelect');
let option = select.options[select.selectedIndex];
// ============= tryng to add button in a div with JS command //




function create_another_buttonTrigger() {
  let button = document.createElement('button');
  button.setAttribute('onclick', option.value);
  button.innerText = option.value;
  console.log(option.value);
  div.appendChild(button);
}

function triggerCampaign(id) {
  let playerIp = document.getElementById("playerIp").value;
  let playerPort = document.getElementById("playerPort").value;
  let pattern = id;
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


// campaing ready to use
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


function create_another_buttonAction() {
  let button = document.createElement('button');
  let patternField = document.getElementById("patternAction").value;
  button.innerText = patternField;
  document.getElementById('patternAction').value = '';
  button.setAttribute('id', patternField);
  button.setAttribute('onclick', 'triggerCampaign(this.id)');
  div.appendChild(button);
  
}


