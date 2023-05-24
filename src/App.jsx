import { Outlet } from "react-router-dom"
import Header from "./Component/Header/Header"
import Footer from "./Component/Footer/Footer"


function App() {


  return (
    <>
    <div className="">
    <Header></Header>
    <div className="max-w-screen-xl mx-auto">
    <Outlet></Outlet>

    </div>
     
     <Footer></Footer>
    </div>
    
    </>
  )
}

export default App
