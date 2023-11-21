import { Outlet } from 'react-router-dom';

import { useAuth } from '@clerk/clerk-react';
import Sidebar from '../components/navigation/Sidebar';

const RootLayout = () => {
  // const { session } = useSession();
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return null;
  }

  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
