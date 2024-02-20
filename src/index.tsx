import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import ErrorPage from './error-page';
import Contact from './routes/contact';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "contacts/:contactId",
                element: <Contact />,
              }
        ]
        
    },
   
]);

const rootContainer = document.querySelector('#root');

if (rootContainer === null) throw new Error('Can\'t find root container');

const root = createRoot(rootContainer);

root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)