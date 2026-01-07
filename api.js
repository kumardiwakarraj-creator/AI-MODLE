export async function sendCommand(command) {
  const res = await fetch("http://localhost:5000/ai-command", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ command })
  });

  return res.json();
}
