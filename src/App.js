import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './Pages/About/About';
import Appoinment from './Pages/Appoinment/Appoinment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequiredAuth from './Pages/Login/RequiredAuth';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './Pages/Dashboard/DashBoard';
import MyAppoinment from './Pages/Dashboard/MyAppoinment';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import RequiredAdmin from './Pages/Login/RequiredAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/appoinment' element={
          <RequiredAuth>
            <Appoinment></Appoinment>
          </RequiredAuth>}></Route>
        <Route path='/dashboard' element={
          <RequiredAuth>
            <DashBoard></DashBoard>
          </RequiredAuth>}>
          <Route index element={<MyAppoinment></MyAppoinment>}></Route>
          <Route path='myreview' element={<MyReview></MyReview>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element={<RequiredAdmin><Users></Users></RequiredAdmin>}></Route>
          <Route path='doctors' element={<RequiredAdmin><AddDoctor></AddDoctor></RequiredAdmin>}></Route>
          <Route path='manageDoctors' element={<RequiredAdmin><ManageDoctors></ManageDoctors></RequiredAdmin>}></Route>
        </Route>
        <Route path='*'></Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
