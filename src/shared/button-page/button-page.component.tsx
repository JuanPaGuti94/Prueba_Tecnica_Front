import { FC } from 'react'

type InputPageProps = {
    title: string;
    onClick?: () => void;
  };

export const ButtonPage: FC<InputPageProps> = ({title,onClick}) => {
  return (
    <div className='w-full'>
        <button className='w-full py-6 md:py-0 md:px-0 ' onClick={onClick}>
        <p>{title} </p>
        </button>
    </div>
  )
}