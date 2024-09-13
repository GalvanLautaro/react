import logo from './logo.svg';
import './App.css';
//import MostrarGaleria from './Components/galeria/componente1';
import Formulario from './Components/formulario/componente2.js';
import AdivinaNumero from './Components/juego/componente3.js';
import Botones from './Components/botones/componente4.js'
import Nota from './Components/notas/componente5.js';

function App() {
  	return (
    	<div className="App">
      	<header className="App-header">
        	<img src={logo} className="App-logo" alt="logo" />
        	<p>
          	Edit <code>src/App.js</code> and save to reload.
        	</p>
        	<a
          	className="App-link"
          	href="https://reactjs.org"
          	target="_blank"
          	rel="noopener noreferrer"
        	>
          	Learn React
        	</a>
      	</header>
      	<body>
    		<div className='componente'>
				<Formulario />
        	</div>
			<div className='componente'>
				<AdivinaNumero />
        	</div>
			<div className='componente'>
				<Botones />
        	</div>
			<div className='componente'>
				<Nota />
        	</div>
      	</body>
    	</div>
  	);
}

export default App;
