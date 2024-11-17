import React from 'react';
import { vi, it, expect, describe } from 'vitest';
import { DropdownMenu } from "../../../../src/shared/topbar/dropdown-menu/dropdown-menu.component";
import { fireEvent, render, screen } from "@testing-library/react";
import { DropdownMenuProps } from '../../../../src/interfaces/topbar.interface';

vi.mock('@/assets', () => ({
    iconChevronDown: 'mockIconChevronDown',
    iconChevronUp: 'mockIconChevronUp',
    iconChevronDownBlack: 'mockIconChevronDownBlack',
    iconChevronUpBlack: 'mockIconChevronUpBlack'
}));

describe('DropdownMenu', () => {
    const mockOptions: DropdownMenuProps['options'] = [
        {
            icon: 'mockIcon1',
            label: 'Option 1',
            action: vi.fn(),
        },
        {
            icon: 'mockIcon2',
            label: 'Option 2',
            action: vi.fn(),
        },
    ];
    it('should render the dropdown icon and toggle the menu on click', () => {
        render(<DropdownMenu options={mockOptions} />);
        expect(screen.getByAltText('icon chevron down')).toBeInTheDocument();
        fireEvent.click(screen.getByRole('button'));
        expect(screen.getByAltText('icon chevron up')).toBeInTheDocument();
        expect(screen.getByText('Option 1')).toBeInTheDocument();
        expect(screen.getByText('Option 2')).toBeInTheDocument();
    });
    it('should close the dropdown when an option is clicked', () => {
        render(<DropdownMenu options={mockOptions} />);
        fireEvent.click(screen.getByRole('button'));
        fireEvent.click(screen.getByText('Option 1'));
        expect(mockOptions[0].action).toHaveBeenCalled();
        expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
        expect(screen.queryByText('Option 2')).not.toBeInTheDocument();
    });
    it('should toggle the dropdown open and closed on click', () => {
        render(<DropdownMenu options={mockOptions} />);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(screen.getByText('Option 1')).toBeInTheDocument();
        fireEvent.click(button);
        expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
    });
});