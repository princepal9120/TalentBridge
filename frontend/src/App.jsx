import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Suspense, lazy } from 'react';

// Lazy load components
const Navbar = lazy(() => import('./components/shared/Navbar'));
const Login = lazy(() => import('./components/auth/Login'));
const Signup = lazy(() => import('./components/auth/Signup'));
import Home from './components/Home'
import Loader from './components/Loader';
const Jobs = lazy(() => import('./components/Jobs'));
const Browse = lazy(() => import('./components/Browse'));
const Profile = lazy(() => import('./components/Profile'));
const JobDescription = lazy(() => import('./components/JobDescription'));
const Companies = lazy(() => import('./components/admin/Companies'));
const CompanyCreate = lazy(() => import('./components/admin/CompanyCreate'));
const CompanySetup = lazy(() => import('./components/admin/CompanySetup'));
const AdminJobs = lazy(() => import("./components/admin/AdminJobs"));
const PostJob = lazy(() => import('./components/admin/PostJob'));
const Applicants = lazy(() => import('./components/admin/Applicants'));
const ProtectedRoute = lazy(() => import('./components/admin/ProtectedRoute'));

// Define the router
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Suspense fallback={<Loader/>}><Login /></Suspense>
  },
  {
    path: '/signup',
    element: <Suspense fallback={<Loader/>}><Signup /></Suspense>
  },
  {
    path: "/jobs",
    element: <Suspense fallback={<Loader/>}><Jobs /></Suspense>
  },
  {
    path: "/description/:id",
    element: <Suspense fallback={<Loader/>}><JobDescription /></Suspense>
  },
  {
    path: "/browse",
    element: <Suspense fallback={<Loader/>}><Browse /></Suspense>
  },
  {
    path: "/profile",
    element: <Suspense fallback={<Loader/>}><Profile /></Suspense>
  },
  // Admin routes
  {
    path: "/admin/companies",
    element: <Suspense fallback={<Loader/>}><ProtectedRoute><Companies /></ProtectedRoute></Suspense>
  },
  {
    path: "/admin/companies/create",
    element: <Suspense fallback={<Loader/>}><ProtectedRoute><CompanyCreate /></ProtectedRoute></Suspense>
  },
  {
    path: "/admin/companies/:id",
    element: <Suspense fallback={<Loader/>}><ProtectedRoute><CompanySetup /></ProtectedRoute></Suspense>
  },
  {
    path: "/admin/jobs",
    element: <Suspense fallback={<Loader/>}><ProtectedRoute><AdminJobs /></ProtectedRoute></Suspense>
  },
  {
    path: "/admin/jobs/create",
    element: <Suspense fallback={<Loader/>}><ProtectedRoute><PostJob /></ProtectedRoute></Suspense>
  },
  {
    path: "/admin/jobs/:id/applicants",
    element: <Suspense fallback={<Loader/>}><ProtectedRoute><Applicants /></ProtectedRoute></Suspense>
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
