import './App.css'
import { HeaderComponents } from './components/header/HeaderComponent';
import { Agentes } from './components/agents/Agentes';


export default function App() {
  return(
    <div className='main'> 
      <HeaderComponents />
      <Agentes />
    </div>
  );
};