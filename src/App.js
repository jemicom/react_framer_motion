import './App.css';
import {
  Header, 
  Work,
  Skills,
  Aboutme
} from './compnents' 
 
import SectionTemp from './layouts/SectionTemp';

function App() {
  return (
    <div className="App">
        <SectionTemp><Header /></SectionTemp>
        <SectionTemp><Work /></SectionTemp>
        <SectionTemp><Skills /></SectionTemp>
        <SectionTemp><Aboutme /></SectionTemp> 
    </div>
  );
}

export default App;
