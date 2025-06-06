import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

// import Layout from "./pages/Layout";
// import { RouterProvider } from "react-router-dom";
// import { myRoutes } from "./Routes";

function App() {
  

  return (
    <>
 {/* return <RouterProvider router={myRoutes}></RouterProvider> */}

 <BrowserRouter>
 <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
    </Routes>
    
   <Footer/> 
   
 </BrowserRouter>
    </>
  )
}

export default App;
