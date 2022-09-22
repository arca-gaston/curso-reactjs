import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/shop/ItemListContainer'

function App() {
  return (
    <>
      <NavBar>
      </NavBar>
      <ItemListContainer greeting="Mundo"></ItemListContainer>
    </>
    );
}

export default App;
