import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.tsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-2xl">Hello, Tailwind CSS!</h1>
        <p className="text-red-600">Welcome to my project.</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;
