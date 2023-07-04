import './App.css';
import Navbar from './layout/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AddUser from './user/AddUser';
import EditUser from './user/EditUser';
import ViewUser from './user/ViewUser';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
        <Routes>
        
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/adduser' element={<AddUser/>}/>
          <Route exact path='/edituser/:id' element={<EditUser/>}/>
          <Route exact path="/viewuser/:id" element={<ViewUser/>} />
          <Route exact path='*' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
