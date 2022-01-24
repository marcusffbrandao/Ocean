import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router-dom';
import {HomePage, Products} from '../pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default Routes;