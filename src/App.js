import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import TransactionCard from './component/TransactionCard'
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <TransactionCard/>
      </div>
    </Router>
  );
}

export default App;
