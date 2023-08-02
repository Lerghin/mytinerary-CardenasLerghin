import { Navbar } from "react-bootstrap";
import NavbarMain from '../../components/Navbar/NavbarMain'
import Main from "../../components/Main/Main";
import '../Home/home.css'
import Footer from "../../components/Footer/Footer";

const Home = () => {


    const alumnos =["Lerghin", "jesus", "cardenas", "Insignares"];

  const listItem= alumnos.map(alumno=> <li> {alumno} </li> )

  return (
  <>

    <div className="app-layout">

     <header className="container app-header">
        
    <NavbarMain />
     
     
     </header>





    <main className="container  app-main">
     
     <Main />
    
    </main>
 


    
    <footer className="container  app-footer"  >
      <Footer />
    </footer>
    </div>
    </>
  )
}

export default Home
