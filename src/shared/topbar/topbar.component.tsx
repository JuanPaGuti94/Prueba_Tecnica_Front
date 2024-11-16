import { FC } from 'react';
import { UserProfile } from './user-profile/user-profile.component';
import { ProfileIcon } from './profile-icon/profile-icon.component';
import { DropdownMenu } from './dropdown-menu/dropdown-menu.component'  ;
import { logOutIcon } from '@/assets';
import { ButtonPage } from '../button-page/button-page.component';
import useScreenSize from '@/hooks/useScreenSize.hook';
import { useNavigate } from "react-router-dom";
import useStage from '@/hooks/stage-store.hook';

export const  TopBar: FC = () => {
  const {setStep} = useStage();
  const navigate = useNavigate();
  const { width } = useScreenSize();
  const handlerLogout = () => {};
  const handleButtonClick = (page:string) => {
    setStep(page);
    if(page === 'home') navigate('/')
      else navigate("/"+page);
  };
  return (
    <div>
      <div className={`border-b-2 border-[#F7F1F1] h-[65px] flex items-center justify-end md:justify-between md:px-10 `}>
        {width > 768 && <p className=' text-[24px]'>OrderTrack</p>}
      <div className=" h-[65px] flex items-center justify-end">
        {
          width > 768 && (        
          <div className='flex gap-10 pr-10 '>
            <ButtonPage title={'Home'}  onClick={()=>handleButtonClick('home')} />
            <ButtonPage title={'Productos'}  onClick={()=>handleButtonClick('products')} />
            <ButtonPage title={'Pedidos'}  onClick={()=>handleButtonClick('orders')} />
            <ButtonPage title={'Catalogo'}  onClick={()=>handleButtonClick('catalog')} />
          </div>)
        }

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
