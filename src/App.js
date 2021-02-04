import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import TransactionCard from './component/TransactionCard'

function App() {
  return (
    <div className="App">
      <Header/>
        <TransactionCard/>
    </div>
  );
}

export default App;
