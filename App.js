import { useState } from "react";
import { sendCommand } from "./api";

function App() {
  const [command, setCommand] = useState("");
  const [message, setMessage] = useState("");
  const [sql, setSql] = useState("");

  const handleSubmit = async () => {
    const data = await sendCommand(command);

    if (data.error) {
      setMessage("❌ Error");
      setSql(data.error);
    } else {
      setMessage(data.message);
      setSql(data.sql);
    }
  };

  return (
    <div className="container">
      <h1>AI Database Command System</h1>

      <input
        type="text"
        placeholder="Command likho..."
        value={command}
        onChange={(e) => setCommand(e.target.value)}
      />

      <button onClick={handleSubmit}>Create Table</button>

      <h3>{message}</h3>
      <pre>{sql}</pre>
    </div>
  );
}

export default App;
