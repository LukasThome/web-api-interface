let playerIp = document.getElementById("playerIp").value;
let playerPort = document.getElementById("playerPort").value;

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

