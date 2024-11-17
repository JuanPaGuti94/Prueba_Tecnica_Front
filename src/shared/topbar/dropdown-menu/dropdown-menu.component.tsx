import { iconChevronUpBlack, iconChevronDownBlack } from './../../../assets';
import { FC, useState } from 'react';
import { DropdownMenuProps } from '../types';

export const DropdownMenu: FC<DropdownMenuProps> = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative flex items-center text-[12px]">
            <div
                className="w-[3rem] h-[3rem] py-[0.5rem] px-[0.3125rem] cursor-pointer flex items-center justify-center"
                onClick={() => setIsOpen(!isOpen)}
                role='button'
            >
                {isOpen ? (
                    <img
                        src={iconChevronUpBlack}
                        alt="icon chevron up"
                        className="block"
                    />
                ) : (
                    <img
                        src={iconChevronDownBlack}
                        alt="icon chevron down"
                        className="block"
                    />
                )}
            </div>
            {isOpen && (
                <div className="absolute right-[-12%] md:right-[-16px] top-20 md:top-8 mt-8 w-[180px] lg:w-56 bg-white border border-gray-300 rounded-md shadow-lg z-50">
                    <ul >
                        {options.map((option, index) => (
                            <li
                                key={index}
                                onClick={() => {
                                    option.action();
                                    setIsOpen(false);
                                }}
                                className="p-[8px] lg:px-3 lg:py-2 text-[#161D1F] hover:bg-gray-200 cursor-pointer flex items-center gap-1"
                            >
                                <div className="p-1">
                                    <img src={option.icon} className="w-7 h-7" />
                                </div>
                                <span className="text-[14px] lg:text-base">
                                    {option.label}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};