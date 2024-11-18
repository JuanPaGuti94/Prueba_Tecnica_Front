import { FC } from 'react';
import { HomeImages } from './components/home-images.component';
import { useNavigate } from "react-router-dom";
import useStage from '../../hooks/stage-store.hook';
export const HomePage: FC = () => {  
    const navigate = useNavigate();

    const {setStep} = useStage();

  const handleButtonClick = (page:string) => {
    setStep(page);
      navigate("/Prueba_Tecnica_Front/"+page);
  };
  return (
    <div className="w-full">
      <div className="px-[16px] md:px-[5%] pb-[24px] md:pb-[0px] block md:flex h-full">
        <div className=" w-[100%] md:w-[50%] py-[24px] md:py-[60px] flex flex-col gap-[12px]">
          <div className="flex flex-col gap-[1px]">
            <p className="font-bold text-[#3C6090] text-[4.444vw] md:text-[1.25vw]">
              #1 on ecommerce tools
            </p>
            <h1 className="font-bold text-[#191C20] text-[15vw] md:text-[4.219vw]">
              Optimice la gestión de productos sin esfuerzo
            </h1>
            <p className="text-[#191C20] text-[4.444vw] md:text-[1.25vw]">
              Optimice su cadena de suministro con OrderTrack, la herramienta
              definitiva para una gestión eficiente de productos y pedidos.
            </p>
          </div>
          <button className="w-[140px] py-[10px] bg-[#3C6090] text-[4.444vw] md:text-[1.25vw] text-white font-bold rounded-lg" onClick={()=>handleButtonClick('products')}>
            Productos
          </button>
        </div>
        <div
          className="w-[100%] md:h-auto md:mx-10 md:my-10 md:w-[50%] flex justify-center items-center bg-cover bg-center rounded-lg h-[400px]"
          style={{
            backgroundImage:
              "url('https://d1muf25xaso8hp.cloudfront.net/https://dcd03715478de5e275023800fc42e909.cdn.bubble.io/f1731695533533x707362331777554600/AI-Generated-Image.png?&w=1024&h=1024&fit=crop&crop=entropy')",
          }}
        ></div>
      </div>
      <div className="bg-[#3C6090] py-[36px] flex flex-col items-center px-[16px]">
        <p className="text-white text-[6.667vw] md:text-[1.875vw] font-bold text-center">
          La solución #1 para una gestión de catálogos perfecta
        </p>
        <p className="text-white text-[4.444vw] md:text-[1.25vw] text-center">
          Como lo reconocen los minoristas líderes de la industria
        </p>
        <HomeImages />
      </div>
      <div className="bg-[#D8E3F8] py-[36px] flex flex-col items-center px-[16px] gap-[12px]">
        <p className="text-black text-[6.667vw] md:text-[3.125vw] font-bold text-center">
          Optimice la gestión de sus productos
        </p>
        <p className="text-black text-[4.444vw] md:text-[1.25vw] text-center">
          Descubra formas eficientes de organizar y realizar un seguimiento de
          todo su inventario de productos sin problemas.
        </p>
        <img
          src="https://d1muf25xaso8hp.cloudfront.net/https://dcd03715478de5e275023800fc42e909.cdn.bubble.io/f1731695527020x677886509285470800/AI-Generated-Image.png?&w=1185.6&h=832&fit=crop&crop=entropy"
          alt="six"
          className="w-[753px] rounded my-[20px]"
        />
        <button className="w-[140px] py-[10px] bg-[#3C6090] text-[4.444vw] md:text-[1.25vw] text-white font-bold rounded-lg" 
        onClick={()=>handleButtonClick('orders')}>
          Pedidos
        </button>
      </div>
      <div className="bg-[F9F9F9] py-[36px] flex flex-col items-center px-[40px] gap-[12px]">
        <p className="text-black text-[6.667vw] md:text-[3.125vw] font-bold text-center">
          Historias de éxito de clientes
        </p>
        <p className="text-black text-[4.444vw] md:text-[1.25vw] text-center">
          Vea cómo los líderes de la industria optimizan con IA.
        </p>
        <div className="flex flex-col md:flex-row md:px-[48px] gap-[16px]">
          <img
            src="https://d1muf25xaso8hp.cloudfront.net/https://dcd03715478de5e275023800fc42e909.cdn.bubble.io/f1731695546948x345553433998036000/AI-Generated-Image.png?&w=1024&h=1024&fit=crop&crop=entropy"
            alt="seven"
            className="md:w-[360px] rounded "
          />
          <div className="flex items-start justify-center md:pr-[16px] flex-col gap-[24px]">
            <h6 className="md:px-[24px] text-[5.556vw] md:text-[1.563vw] text-[#191C20]">
              "Como alguien que administra un vasto catálogo de productos, ¡esta
              herramienta ha cambiado completamente las reglas del juego!
              Agiliza mi flujo de trabajo, realizar un seguimiento de los
              pedidos se vuelve sencillo y finalmente puedo concentrarme en
              hacer crecer el negocio. Ojalá lo hubiera descubierto antes , es
              realmente indispensable para mis operaciones diarias".
            </h6>
            <p className="md:px-[24px] text-[4.444vw] md:text-[1.25vw] text-[#191C20]">
              Jordan Lee, especialista en inventarios de WareSync
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#3C6090] py-[50px] flex flex-col items-center px-[16px] gap-[24px]">
        <p className="text-white text-[6.667vw] md:text-[1.875vw] font-bold text-center">
        Suscríbete a nuestras actualizaciones
        </p>
        <p className="text-white text-[4.444vw] md:text-[1.25vw] text-center">
        Manténgase informado sobre nuestras últimas innovaciones en gestión de catálogos y procesamiento de pedidos.
        </p>
      </div>
    </div>
  );
};
