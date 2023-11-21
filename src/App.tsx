import '@mantine/core/styles.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import { viteClerkPublishableKey } from './constants';
import RootLayout from './layouts/RootLayout';
import ProtectedRoute from './routes/ProtectedRoute';
import { HomePage } from './pages/Home.page';

export default function App() {
  const navigate = useNavigate();

  return (
    <ClerkProvider publishableKey={viteClerkPublishableKey} navigate={(to) => navigate(to)}>
      <Routes>
        <Route path="" element={<RootLayout />}>
          <Route
            path="/"
            index
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </ClerkProvider>
  );
}
