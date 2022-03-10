import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import MainLayout from './containers/MainLayout';
import Footer from './components/Footer';
import Hello from './components/Hello';
import { useEffect } from 'react';
function App() {

  return (
     <>   
      
       <MainLayout /> 
       <Footer />
       
     </>
  );
}

export default App;
