import Info from "./Info";

function App() {
  return (
    <div>
      <h1>Vaibhav</h1>
      <h2>Gajanan</h2>
      <h3>Alat</h3>
      <p>How are you</p>
      
      // info component
      <Info
        name="Vaibhav"
        surname="Alat"
        father="Gajanan"
        element={<h1>Hello, how are you?</h1>}
      >
        <h1>Welcome to learn React</h1>
      </Info>
    </div>
  );
}

export default App;
