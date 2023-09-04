import { Navigate } from 'react-router-dom';
import {Complete} from '../../pages'

export const routes = [
  // { path: '/todo', element: <Todo /> },
  // { path: '/favourite', element: <Favourite /> },
  { path: '/complete', element: <Complete /> },
  { path: '/', element: <Navigate to='/todo' /> },
  { path: '*', element: <Navigate to='/todo' /> },
];