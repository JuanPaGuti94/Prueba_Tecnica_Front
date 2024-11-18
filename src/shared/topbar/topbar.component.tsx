import { FC, useState } from 'react';
import { UserProfile } from './user-profile/user-profile.component';
import { ProfileIcon } from './profile-icon/profile-icon.component';
import { DropdownMenu } from './dropdown-menu/dropdown-menu.component';
import { logOutIcon } from '../../assets';
import { ButtonPage } from '../button-page/button-page.component';
import { useNavigate } from "react-router-dom";
import useStage from '../../hooks/stage-store.hook';
import useScreenSize from '../../hooks/useScreenSize.hook';

export const TopBar: FC = () => {
  const { setStep } = useStage();
  const navigate = useNavigate();
  const { width } = useScreenSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const handlerLogout = () => {};
  const handleButtonClick = (page: string) => {
    setStep(page);
    if (page === 'home') navigate('/');
    else navigate("/" + page);
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev); 
  };

  return (
    <div>
      <div className={`border-b-2 w-[100%] px-4 border-[#F7F1F1] h-[65px] flex items-center justify-between md:px-10`}>
        {width > 768 &&
          <div className="flex gap-[12px]">
            <img
              src="https://d1muf25xaso8hp.cloudfront.net/https://dcd03715478de5e275023800fc42e909.cdn.bubble.io/f1731695514842x936712205183281900/AI-Generated-Image.png?&w=1024&h=1024&fit=crop&crop=entropy"
              alt="icon"
              className="w-[32px] h-[32px] rounded-full"
            />
            <p className="text-[24px]">OrderTrack</p>
          </div>}
        <div className="h-[65px] w-full flex items-center justify-between md:justify-end">
          {width <= 768 && ( 
            <button onClick={toggleMenu} className="md:hidden">
              <span className="material-icons">Menu</span> 
            </button>
          )}
{isMenuOpen && width <= 768 && ( 
  <div className='w-full h-screen absolute bg-[#3C6090] bg-opacity-70 shadow-lg rounded-md z-10 top-0 left-0 flex justify-center items-center'>
    <div className='w-[80%] bg-white rounded-lg shadow-md p-6 flex flex-col items-center'>
      <div className='w-full flex items-center justify-between mb-4'>
        <img
          src="https://d1muf25xaso8hp.cloudfront.net/https://dcd03715478de5e275023800fc42e909.cdn.bubble.io/f1731695514842x936712205183281900/AI-Generated-Image.png?&w=1024&h=1024&fit=crop&crop=entropy"
          alt="icon"
          className="w-[40px] h-[40px] rounded-full"
        />
        <button onClick={() => setIsMenuOpen(false)} className='text-red-500 font-bold'>
          Cerrar
        </button>
      </div>

      <div className='flex flex-col space-y-4'>
        <ButtonPage title={'Home'} onClick={() => handleButtonClick('home')} />
        <ButtonPage title={'Productos'} onClick={() => handleButtonClick('products')} />
        <ButtonPage title={'Pedidos'} onClick={() => handleButtonClick('orders')} />
      </div>
    </div>
  </div>
)}
          {width > 768 && (
            <div className='flex gap-10 pr-10 '>
              <ButtonPage title={'Home'} onClick={() => handleButtonClick('home')} />
              <ButtonPage title={'Productos'} onClick={() => handleButtonClick('products')} />
              <ButtonPage title={'Pedidos'} onClick={() => handleButtonClick('orders')} />
            </div>
          )}
          <div className="flex w-auto gap-[0.0625rem] lg:border-l pl-4 pr-4">
            <div className="flex gap-4 items-center">
              <UserProfile name={'Juan'} role={'customer'} />
              <ProfileIcon initials={'J'} />
            </div>
            <DropdownMenu
              options={[
                {
                  icon: logOutIcon,
                  label: 'Cerrar sesión',
                  action: () => handlerLogout(),
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};