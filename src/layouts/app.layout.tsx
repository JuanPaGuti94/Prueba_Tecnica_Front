import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const AppLayout: FC = () => {
  return (
    <div className="w-full h-screen overflow-y-scroll bg-[#ffffff]">
      <main
        data-testid="main"
        className="h-auto"
        style={{
          minHeight: `calc(100vh - 224px)`,
        }}
      >
        <Outlet />
      </main>
    </div>
  );
};
