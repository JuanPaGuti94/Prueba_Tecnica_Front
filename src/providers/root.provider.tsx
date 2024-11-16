import { FC } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { StageProvider } from '../context/stage';
const queryClient = new QueryClient();

type RootProviderProps = {
  children: React.ReactNode;
};
export const RootProvider: FC<RootProviderProps> = ({ children }) => {
  return (
    <StageProvider>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster />
      </QueryClientProvider>
    </StageProvider>
  );
};
