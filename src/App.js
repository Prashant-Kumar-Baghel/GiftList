import logo from './logo.svg';
import { ReceipientForm } from './components/form/ReciepientForm.tsx';
import { GiftForm } from './components/form/GiftForm.tsx';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const appRouter=createBrowserRouter([
 
    {
      path:"/",
      element:<ReceipientForm/>
    },
    {
      path:"/gift-form",
      element:<GiftForm/>
    }
  ])
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <ReceipientForm/> */}
      {/* <GiftForm/> */}
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
