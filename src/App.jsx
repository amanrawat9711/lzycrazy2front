import { Route, Routes } from "react-router-dom"
import Careers from "./pages/Careers"
import Company from "./pages/Company"
import HelpCenter from "./pages/HelpCenter"
import Home from "./pages/Home"
import Newsroom from "./pages/Newsroom"
import Services from "./pages/Services"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import CompanyInfo from "./pages/CompanyInfo"

 

function App() { 

  return (
    <> 
         <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/company-info' element={<CompanyInfo />} />
        <Route path='/newsroom' element={<Newsroom />} /> 
        <Route path='/services' element={<Services />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/help-center' element={<HelpCenter />} />
      </Routes> 
      <Footer/>
    </>
  )
}

export default App
