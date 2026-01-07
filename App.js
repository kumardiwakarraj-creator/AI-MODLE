// import { useState } from "react";

// function App() {
//   const [command, setCommand] = useState("");
//   const [result, setResult] = useState("");
//   const [sql, setSql] = useState("");

//   const sendCommand = async () => {
//     const res = await fetch("http://localhost:5000/ai-command", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ command })
//     });

//     const data = await res.json();

//     if (data.error) {
//       setResult("❌ Error");
//       setSql(data.error);
//     } else {
//       setResult(data.message);
//       setSql(data.sql);
//     }
//   };

//   return (
//     <div style={{ padding: "30px" }}>
//       <h2>AI Database Command Website</h2>

//       <input
//         style={{ width: "400px" }}
//         placeholder="Command likho..."
//         value={command}
//         onChange={(e) => setCommand(e.target.value)}
//       />

//       <br /><br />

//       <button onClick={sendCommand}>Create Table</button>

//       <h3>{result}</h3>

//       <pre>{sql}</pre>
//     </div>
//   );
// }

// export default App;
