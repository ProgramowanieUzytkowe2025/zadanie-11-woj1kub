import logo from './logo.svg';
import './App.css';
import { AppTitle } from './AppTitle';
import { AppCalculator } from './AppCalculator';
import AppHeader from './AppHeader';

function App() {
  return (
    <div className="App">
      <AppTitle>AppHeader </AppTitle>
      <AppHeader />
      <AppTitle>AppCalculator</AppTitle>
      <AppCalculator />
    </div>
  );
}

export default App;
