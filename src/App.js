import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navigation } from './components/Navigation';
import { AddExp } from './pages/AddExp';
import { AddIncome } from './pages/AddIncome';
import { ExpEdit } from './pages/EditExp';
import { IncEdit } from './pages/EditInc';
import { Home } from './pages/Home'
import SignUp from './components/Signup/SignUp'
import Login from './components/Login/Login'
import React from 'react'
// import Main from './components/Main/Main'
import SendOtp from './components/ForgotPassword/SendOtp'
import VerifyOtp from './components/ForgotPassword/VerifyOtp'
import ResetPassword from './components/ForgotPassword/ResetPassword'
import ProtectRoute from './components/ProtectRoute'
function App() {

  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/main' element={<ProtectRoute  > <Home /> </ProtectRoute>} />
        <Route path='/loginhelp' element={<SendOtp />} />
        <Route path='/loginhelp/otp/:token' element={<VerifyOtp />} />
        <Route path='/loginhelp/ResetPassword' element={<ResetPassword />} />
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/addexp' element={<ProtectRoute> <AddExp /> </ProtectRoute>} />
        <Route path='/addincome' element={<ProtectRoute> <AddIncome /> </ProtectRoute>} />
        <Route path='/expenses/edit/:id' element={<ProtectRoute> <ExpEdit /> </ProtectRoute>} />
        <Route path='/income/edit/:id' element={<ProtectRoute> <IncEdit /> </ProtectRoute>} />
      </Routes>
    </div>
  );
}

export default App;
