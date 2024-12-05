async function addRole() {
  const guildId = prompt("Enter the Guild ID (Server ID):");
  const userId = prompt("Enter the User ID (User to assign role):");
  const roleName = prompt("Enter the Role Name:");

  if (!guildId || !userId || !roleName) {
    alert("Please enter all fields!");
    return;
  }

  const response = await fetch('http://localhost:5000/api/add-role', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      guild_id: guildId,
      user_id: userId,
      role_name: roleName
    })
  });

  const result = await response.json();
  alert(result.status || result.error);
}

async function sendMessage() {
  const channelId = prompt("Enter the Channel ID:");
  const message = prompt("Enter the Message:");

  if (!channelId || !message) {
    alert("Please enter both Channel ID and Message!");
    return;
  }

  const response = await fetch('http://localhost:5000/api/send-message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      channel_id: channelId,
      message: message
    })
  });

  const result = await response.json();
  alert(result.status || result.error);
}
