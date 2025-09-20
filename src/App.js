
import './App.css';
import MyFirstComponent from './MyFirstComponent';
import PokemonHeader from './PokemonHeader';

function App() {
  return (
    <div className="App">
      <PokemonHeader />
      <main className="App-main">
        <h1>🌟 Hello, World!</h1>
        <p>Welcome to my first React app!</p>
        <p>Built with Create React App and GitHub Copilot 🚀</p>
        <p>This is my journey learning React step by step!</p>
        <MyFirstComponent />
      </main>
    </div>
  );
}

export default App;
