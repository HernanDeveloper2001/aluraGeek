import "./Styles.css"
import MainNavegacion from "./components/nav/MainNavegacion";
import MainContent from "./components/main/MainContent";
import Footer from './components/footer/Footer';


export default function App() {

  return (
    <div className="App">
      <MainNavegacion/>
      <MainContent/>
      <Footer/>
    </div> 
  )
}
