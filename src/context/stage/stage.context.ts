import { createContext } from "react";
import { StageState } from "./stage.type";

export const StageContext = createContext<StageState | undefined>(undefined);
