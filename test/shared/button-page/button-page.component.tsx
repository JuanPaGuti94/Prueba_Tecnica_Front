import { FC } from 'react'

type InputPageProps = {
    title: string;
    onClick?: () => void;
  };

export const ButtonPage: FC<InputPageProps> = ({title,onClick}) => {
  return (
    <div >
        <button onClick={onClick}>
        <p>{title} </p>
        </button>
    </div>
  )
}