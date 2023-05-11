import { Route, Routes } from 'react-router-dom';
import { PageConfidentiality, PageHome, PageOrder } from '../../Pages/index';

import './App.scss';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<PageHome/>}/>
        <Route path="confidentiality" element={<PageConfidentiality/>}/>
        <Route path="order" element={<PageOrder/>}/>
      </Routes>
    </div>
  );
};
