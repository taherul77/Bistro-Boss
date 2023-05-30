import { Outlet, useLocation } from "react-router-dom"
import Header from "./Component/Header/Header"
import Footer from "./Component/Footer/Footer"


function App() {

  const location = useLocation();

  const onHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')

  return (
    <>
    <div className="bg-white">
   { onHeaderFooter ||  <Header></Header>}
   
    <Outlet></Outlet>

   
     
    { onHeaderFooter || <Footer></Footer>}
    </div>
    
    </>
  )
}

export default App
