import './App.css';
import Register from './Auth/Register';
import Dashboard from './Component/Dashboard';
import Forgetmail from './Auth/Forgetmail';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Resetpass from './Auth/Resetpass';
import UserPlan from './Auth/UserPlan';
import SigninCompo from './Auth/SigninCompo';
import QuestionForm1 from './Question/QuestionForm1';
import QuestionForm2 from './Question/QuestionForm2';
import QuestionForm3 from './Question/QuestionForm3';

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
          <Route path='/form1' element={<QuestionForm1 />} />
          <Route path='/form2' element={<QuestionForm2 />} />
          <Route path='/form3' element={<QuestionForm3 />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;