import { FC } from "react";
import { RootProvider } from "./providers/root.provider";
import { AppRouter } from "./router/app.router";

export const Front: FC = () => {
  return (
    <RootProvider>
      <AppRouter/>
    </RootProvider>
  );
};
