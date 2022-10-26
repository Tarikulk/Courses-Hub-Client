import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes/Routes';

function App() {
  return (
    <div>
      <header>
         <RouterProvider router={router}></RouterProvider>
      </header>
    </div>
  );
}

export default App;
