import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

// Lazy loaded components
const Navbar = lazy(() => import('./components/shared/Navbar'));
const Login = lazy(() => import('./components/auth/Login'));
const Signup = lazy(() => import('./components/auth/Signup'));
const Home = lazy(() => import('./components/Home'));
const Jobs = lazy(() => import('./components/Jobs'));
const Browse = lazy(() => import('./components/Browse'));
const Profile = lazy(() => import('./components/Profile'));
const JobDescription = lazy(() => import('./components/JobDescription'));
const Companies = lazy(() => import('./components/admin/Companies'));
const CompanyCreate = lazy(() => import('./components/admin/CompanyCreate'));
const CompanySetup = lazy(() => import('./components/admin/CompanySetup'));
const AdminJobs = lazy(() => import('./components/admin/AdminJobs'));
const PostJob = lazy(() => import('./components/admin/PostJob'));
const Applicants = lazy(() => import('./components/admin/Applicants'));
const ProtectedRoute = lazy(() => import('./components/admin/ProtectedRoute'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: '/signup',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Signup />
      </Suspense>
    ),
  },
  {
    path: '/jobs',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Jobs />
      </Suspense>
    ),
  },
  {
    path: '/description/:id',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <JobDescription />
      </Suspense>
    ),
  },
  {
    path: '/browse',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Browse />
      </Suspense>
    ),
  },
  {
    path: '/profile',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Profile />
      </Suspense>
    ),
  },
  // Admin routes
  {
    path: '/admin/companies',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ProtectedRoute>
          <Companies />
        </ProtectedRoute>
      </Suspense>
    ),
  },
  {
    path: '/admin/companies/create',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ProtectedRoute>
          <CompanyCreate />
        </ProtectedRoute>
      </Suspense>
    ),
  },
  {
    path: '/admin/companies/:id',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ProtectedRoute>
          <CompanySetup />
        </ProtectedRoute>
      </Suspense>
    ),
  },
  {
    path: '/admin/jobs',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ProtectedRoute>
          <AdminJobs />
        </ProtectedRoute>
      </Suspense>
    ),
  },
  {
    path: '/admin/jobs/create',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ProtectedRoute>
          <PostJob />
        </ProtectedRoute>
      </Suspense>
    ),
  },
  {
    path: '/admin/jobs/:id/applicants',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ProtectedRoute>
          <Applicants />
        </ProtectedRoute>
      </Suspense>
    ),
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
