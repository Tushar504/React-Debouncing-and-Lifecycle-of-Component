import React from 'react';
import ReactDOM from 'react-dom/client';

import {App} from './App';
import { Lifecycle } from './LifeCycle';
import { Debouncing } from './Debouncing';

import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
    Link,
  } from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="/" element={<Lifecycle/>} />
            <Route path="/debouncing" element={<Debouncing />} />
        </Route>
)
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
    <RouterProvider router={router} />
  
)