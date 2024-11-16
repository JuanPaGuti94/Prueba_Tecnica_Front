export type UserProfileProps = {
    name: string | undefined;
    role: string | undefined;
};

export type ProfileIconProps = {
    initials: string;
};

export type DropdownMenuProps = {
    options: { icon: string; label: string; action: () => void }[];
};

export const roleTranslationMap: { [key: string]: string } = {
    commercial: 'Comercial',
    admission: 'Admisión',
    administrative: 'Administrador',
};