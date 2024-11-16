import { FC, ReactNode, useState, useMemo } from 'react';
import { StageContext } from './stage.context';

export const StageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [step, setStep] = useState('home');
  const contextValue = useMemo(
    () => ({
      step,
      setStep,
    }),
    [step],
  );

  return (
    <StageContext.Provider value={contextValue}>
      {children}
    </StageContext.Provider>
  );
};
