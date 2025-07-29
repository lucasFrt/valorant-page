import './App.css'
import { HeaderComponents } from './components/header/HeaderComponent';
import { AgentsComponent } from './components/agents/agentsComponent';


export default function App() {
  return(
    <div className='main'> 
      <HeaderComponents />
      <AgentsComponent />
    </div>
  );
};

