import logo from './logo.svg';
import './App.css';
let link=["services","process","about"]

function App() {
  return (
    <div className="navbar">
      <div>LOGOBEKARY</div>
      <div className='link'>
        {/* <div>services</div>
        <div>process</div>
        <div>about</div> */}
        {link.map((e)=>{
          return <div>{e}</div>
        })}
      </div>
      <button>contact</button>
  
    </div>
  );
}

export default App;
