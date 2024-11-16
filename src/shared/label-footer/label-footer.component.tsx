import useStage from '@/hooks/stage-store.hook';
import { FC } from 'react'

type InputPageProps = {
    title: string;
    text:string[];
  };

export const LabelPage: FC<InputPageProps> = ({title,text}) => {  
  const {step} = useStage();
  return (
    <div className={`${step === 'home' ? 'text-black ' : 'text-white '} px-10 flex flex-col gap-2  `}>
        <p className='text-[14px] font-bold'>{title}</p>
        <p className='text-[14px] '>{text[0]}</p>
        <p className='text-[14px] '>{text[1]}</p>
    </div>
  )
}