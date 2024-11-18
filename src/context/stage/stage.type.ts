
export type StageState = {
 
  step: string | undefined;
  setStep: (step: string) => void;
  createProduct: boolean | undefined;
  setCreateProduct: (createProduct: boolean) => void;
  createOrder: boolean | undefined;
  setCreateOrder: (createOrder: boolean) => void;


  productName: string ;
  setProductName: (productName: string) => void;
  image: string ;
  setImage: (image: string) => void;
  productDescription: string ;
  setProductDescription: (productDescription: string) => void;
  productPrice: number | string | undefined;
  setProductPrice: (productPrice: number | string) => void;
  productStock: number | string | undefined;
  setProductStock: (productStock: number | string) => void;
};


