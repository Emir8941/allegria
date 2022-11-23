import Header from './components/header/header';
import Brand from './components/brand/Brand';
import Arrival from './components/arrival/Arrival';
import Popular from './components/popular/Popular';
import AboutUs from './components/about/AboutUs';
import './scss/style.scss'

function App() {
  return (
    <>
      <Header/>
      <main>
        <Brand/>
        <Arrival/>
        <Popular/>
        <AboutUs/>
      </main>
    </>
  );
}

export default App;
