import { FC } from "react";
import { UserProfileProps } from "../types";

export const UserProfile: FC<UserProfileProps> = ({
    name,
    role,
}) => {
    return (
        <div className="flex flex-col items-end">
            <span className="text-[14px]">
                Hola, <span className="font-semibold">{name}</span>
            </span>
            <span className="text-[12px] text-[#4F6168]">{role}</span>
        </div>
    )
}
