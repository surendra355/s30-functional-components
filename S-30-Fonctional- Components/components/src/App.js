import logo from './logo.svg';
import './App.css';
import CricketPlayers from './components/CricketPlayers';

function App() {
  return (
    <div className="App">

      <h1>Without Components</h1>

    <div className='mainContainer'>
      <img src='./images/Arjun Tendulkar.webp'className='playerPic' alt=''></img>
<h1>Arjun Tendulkar</h1>
<h3>Team:Mumbai Indians</h3>
<h3>Role:Batter</h3>
    </div>
    <div className='mainContainer'>
      <img src='./images/Tilak Varma.webp'className='playerPic' alt=''></img>
<h1>Tilak Varma</h1>
<h3>Team:Mumbai Indians</h3>
<h3>Role:Bowler</h3>
    </div>

    <div className='mainContainer'>
      <img src='./images/Shivam Dube.webp'className='playerPic' alt=''></img>
<h1>Shivam Dube</h1>
<h3>Team:CSK</h3>
<h3>Role:All Rounder</h3>
    </div>

    <div className='mainContainer'>
      <img src='./images/Ishan Kishan.webp'className='playerPic' alt=''></img>
<h1>Ishan Kishan</h1>
<h3>Team:Mumbai Indians</h3>
<h3>Role:Batter</h3>
    </div>
    <div>
  <hr></hr>
  <h1>With Components</h1>
      <CricketPlayers name="MS Dhoni" team="CSK" role="Batter/Captain" picURL="./images/Dhoni.webp" alt=""></CricketPlayers>
      <CricketPlayers name="Jadeja" team="CSK" role="All Rounder" picURL="./images/Jadeja.webp" alt=""></CricketPlayers>
      <CricketPlayers name="Hardik Pandya" team="MI" role="All Rounder/Captain" picURL="./images/Hardik Pandya.webp" alt=""></CricketPlayers>
      <CricketPlayers name="Rohith Sharma" team="MI" role="Captain/Batter" picURL="./images/Rohit sharma.webp" alt=""></CricketPlayers>
      <CricketPlayers name="Dewald Brevis" team="MI" role="All Rounder" picURL="./images/Dewald Brevis.webp" alt=""></CricketPlayers>
      <CricketPlayers name="Kumar Karthikeya" team="MI" role="Bowler" picURL="./images/Kumar Karthikeya Singh.webp" alt=""></CricketPlayers>
      <CricketPlayers name="Surya Kumar Yadav" team="MI" role="Batter" picURL="./images/Suryakumar Yadav.webp" alt=""></CricketPlayers>
      <CricketPlayers name="Tilak Varma" team="MI" role="Bowler" picURL="./IMAGES/TILAK VARMA.WEBP" alt=""></CricketPlayers>
      
      </div>
      <hr></hr>

     

     
</div>


  );
}

export default App;
