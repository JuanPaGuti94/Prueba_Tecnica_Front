import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { TopBar } from '../shared/topbar/topbar.component';
import { Footer } from '../shared/footer/footer.component';

export const AppLayout: FC = () => {
  return (
    <div className="w-full h-screen overflow-y-scroll bg-[#ffffff]">
      <TopBar />
      <main
        data-testid="main"
        className="h-auto"
        style={{
          minHeight: `calc(100vh - 224px)`,
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
