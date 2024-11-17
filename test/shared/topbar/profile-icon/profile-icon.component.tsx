import { FC } from 'react';
import { ProfileIconProps } from '../types';

export const ProfileIcon: FC<ProfileIconProps> = ({ initials }) => {
    return (
        <div className="w-[40px] h-[40px] flex justify-center items-center bg-[#E2E2E2] rounded-full text-[18px] font-bold">
            <span>{initials}</span>
        </div>
    );
};
