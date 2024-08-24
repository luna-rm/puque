import './App.css';
import P1 from './imgs/P1.png'
import P2 from './imgs/P2.png'
import P3 from './imgs/P3.png'
import P4 from './imgs/P4.png'

function App() {
    return (
        <div className='App'>
            <div className="AAAAA">
                <img src={P1} alt='P1' className='imgs'/>
                <img src={P2} alt='P2' className='imgs'/>
                <img src={P3} alt='P3' className='imgs'/>
                <img src={P4} alt='P4' className='imgs'/>
            </div>
            {/* <img src={qr} alt='qr' className='qr'/> */}
        </div>
    );
}

export default App;
