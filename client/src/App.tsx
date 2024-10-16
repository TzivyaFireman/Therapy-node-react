import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage'; // נניח ש-HomePage ממוקם בתיקיית components
import Header from './components/Header';
import ContactPage from './components/contact';
import ArticlesPage from './components/articles';
import NewsPage from './components/News';
import AddArticle from './components/AddArticle';
import Register from './components/Register';
import Login from './components/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/articles',
    element: <ArticlesPage />,
  },
  {
    path: '/news',
    element: <NewsPage />,
  },
  {
    path: '/addArticle',
    element: <AddArticle />,
  },

]);

const App: React.FC = () => {
  return <><Header/><RouterProvider router={router} /></>;

}

export default App;
