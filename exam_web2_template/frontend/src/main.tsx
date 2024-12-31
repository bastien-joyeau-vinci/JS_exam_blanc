import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/index.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/pages/HomePage.tsx';
import LibraryPage from './components/pages/LibraryPage.tsx';
import BookPage from './components/pages/BookPage.tsx';

// Création du router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "library",
        element: <LibraryPage />,
      },
      {
        path: "library/:id",
        element: <BookPage />,
      }
    ]
  }
]
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/> {/*on enveloppe l'application dans le RouterProvider*/}
  </StrictMode>,
)
