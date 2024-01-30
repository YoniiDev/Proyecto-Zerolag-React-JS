import './sass/navbar.scss'
import './sass/itemlistcontainer.scss'
import { Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
export const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos a ZeroLag"}/>
    </>
  );
}

