import { FC, ReactNode, useState, useMemo } from "react";
import { StageContext } from "./stage.context";

export const StageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [step, setStep] = useState("home");
  const [createProduct, setCreateProduct] = useState(false);
  const [productName, setProductName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [productDescription, setProductDescription] = useState<string>("");
  const [productPrice, setProductPrice] = useState<number | string>("");
  const [productStock, setProductStock] = useState<number | string>("");
  const contextValue = useMemo(
    () => ({
      step,
      setStep,
      createProduct,
      setCreateProduct,
      productName,
      setProductName,
      image,
      setImage,
      productDescription,
      setProductDescription,
      productPrice,
      setProductPrice,
      productStock,
      setProductStock,
    }),
    [
      step,
      createProduct,
      productName,
      image,
      productDescription,
      productPrice,
      productStock,
    ]
  );

  return (
    <StageContext.Provider value={contextValue}>
      {children}
    </StageContext.Provider>
  );
};
