import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import ProjectScreen from './Screens/ProjectScreen/ProjectScreen';
import ContactScreen from './Screens/ContactScreen/ContactScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/project/:id" element={<ProjectScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
    </Route>
  ),
  {
    future: {
      v7_skipActionErrorRevalidation: true, // Opt into new revalidation behavior
      v7_partialHydration: true, // Opt into new hydration behavior
      v7_normalizeFormMethod: true, // Enable normalization of formMethod
      v7_fetcherPersist: true, // Persistent fetcher state
      v7_relativeSplatPath: true, // Adjust splat route paths to be relative
      v7_startTransition: true, // Enable state updates with React.startTransition
    },
  }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
