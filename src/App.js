import './App.css';
import Register from './Auth/Register';
import Dashboard from './Component/Dashboard';
import Forgetmail from './Auth/Forgetmail';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Resetpass from './Auth/Resetpass';
import UserPlan from './Auth/UserPlan';
import SigninCompo from './Auth/SigninCompo';

function App() {
  return (
    <div class="wrapper">
      {/* <Dashboard /> */}

      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/forgetmail' element={<Forgetmail />} />
          <Route path='/resetpass' element={<Resetpass />} />
          <Route path='/plan' element={<UserPlan />} />
          <Route path='/signin' element={<SigninCompo />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;