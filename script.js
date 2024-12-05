async function fetchServerInfo() {
  const guildId = prompt("Enter your Guild ID:");
  try {
    const response = await fetch(`http://localhost:5000/api/server-info?guild_id=${guildId}`);
    const data = await response.json();
    if (data.error) {
      alert(data.error);
    } else {
      document.getElementById("server-info").innerHTML = `
        <p><strong>Server Name:</strong> ${data.server_name}</p>
        <p><strong>Member Count:</strong> ${data.member_count}</p>
      `;
    }
  } catch (error) {
    console.error("Error fetching server info:", error);
    alert("Failed to fetch server info.");
  }
}
