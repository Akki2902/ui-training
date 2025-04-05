import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Tailwind is working! 🚀</h1>
      <p className="mt-4 text-gray-700">Nice setup!</p>
    </div>
      </header>
     
    </div>
  );
}

export default App;
