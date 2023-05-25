import { Outlet } from "react-router-dom"
import Header from "./Component/Header/Header"
import Footer from "./Component/Footer/Footer"


function App() {


  return (
    <>
    <div className="bg-white">
    <Header></Header>
   
    <Outlet></Outlet>

   
     
     <Footer></Footer>
    </div>
    
    </>
  )
}

export default App
