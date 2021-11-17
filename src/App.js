import './App.css';
import adele from './images/OIF.jpg'
import vedioAdele from './Adele - Someone Like You (Official Music Video).mp4'
function App() {
  return (
    <div>
<div >
  <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    <h1 className="titleRed"> Adele Laurie Blue Adkins MBE </h1>
    <br/>
    <br/> 
<div className ="total ">
      <img src={adele} alt="try again " /> 

        <img src ="OUI.jpg" alt ="there is no "/>
        </div>
  </div>
  </div>
   <video width={320} height={240} controls>
   <source src={vedioAdele} type="video/mp4" />
 </video>
 </div>
 )
}
export default App;
