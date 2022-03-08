import {Routes, Route, Link} from 'react-router-dom'
import {Home} from './component/common/Home';
import { AccountBox } from './component/admin/AdminStyle';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/admin/login" element={<AccountBox/>}/>
      </Routes>
    </div>
  );
}

export default App;
