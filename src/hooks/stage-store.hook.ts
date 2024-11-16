import { useContext } from "react";
import { StageContext } from "../context/stage";

const useStage = () => {
  const context = useContext(StageContext);

  if (!context) {
    throw new Error("useStage must be used within a StageProvider");
  }

  return context;
};

export default useStage;
