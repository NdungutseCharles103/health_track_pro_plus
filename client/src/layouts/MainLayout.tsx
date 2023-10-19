import React from 'react';
import AdminNav from '../components/routing/AdminNav';
import SideBar from '../components/routing/SideBar';

interface Props {
   children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
   return (
      <div className="flex bg-black/90 w-full h-screen">
         <SideBar />
         <div className="flex bg-white text-black flex-col w-full overflow-y-auto h-screen">
            <AdminNav />
            <div className="flex flex-col w-full h-full sm:px-8 p-3">{children}</div>
         </div>
      </div>
   );
};

export default MainLayout;
