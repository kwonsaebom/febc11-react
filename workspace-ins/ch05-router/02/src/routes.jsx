import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([{
  path: '/',
  element: <Home />
}, {
  path: '/page1',
  element: <Page1 />
}, {
  path: '/page2',
  element: <Page2 />
}], {});

export default router;