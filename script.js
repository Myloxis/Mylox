async function addRole() {
  const guildId = prompt("Enter the Guild ID:");
  const userId = prompt("Enter the User ID:");
  const roleName = prompt("Enter the Role Name:");

  const response = await fetch('http://localhost:5000/api/add-role', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ guild_id: guildId, user_id: userId, role_name: roleName }),
  });

  const result = await response.json();
  alert(result.status || result.error);
}

async function sendMessage() {
  const channelId = prompt("Enter the Channel ID:");
  const message = prompt("Enter the Message:");

  const response = await fetch('http://localhost:5000/api/send-message', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ channel_id: channelId, message: message }),
  });

  const result = await response.json();
  alert(result.status || result.error);
}
