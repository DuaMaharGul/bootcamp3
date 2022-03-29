import logo from './logo.svg';
import './App.css';

// all properties we pass in ReactDOM will b available in 1st arrg of func
function App(props) {
  return <div id="header">
    <h1 class="hover">Welcome to My Website</h1>
			<p id="name"><b><em>Dua Mahar Gul</em></b></p>
			<a href="#"><p id="email">duamahargul@gmail.com</p></a>
			<p>or</p>
			<a href="#"><p id="email">duasdesignhouse.com</p></a>
      <br/>
    <h2>About Me</h2>
    <p>

    Hello from <strong id="name">{props.name}</strong> a student of PIAIC batch 35. 
  <br/>
    I'm {props.age + 2} years old. Some of my favorite things to do are designing, 
		listening to music, and watching anime.These are activities that I enjoy immensely and indulge in daily.
    <br/>
    
    </p>

    <h2>Favorite Anime Shows</h2>
			<ul>
				<li>One Piece</li>
				<li>Bleach</li>
				<li>Naruto</li>
				<li>Haikyuu</li>
				<li>My Hero Academia</li>
			</ul>
  </div>
}

// for short codes like single line
/*
const App = (props) => <div> Hello from {props.name} a student of PIAIC </div>;
*/

export default App;
