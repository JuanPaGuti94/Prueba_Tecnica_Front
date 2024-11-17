import React from 'react';
import { render, screen } from '@testing-library/react';
import { RootProvider } from '../../src/providers/root.provider';
import { vi, it, expect, describe } from 'vitest';

vi.mock('@react-keycloak/web', () => ({
    ReactKeycloakProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('RootProvider Component', () => {
    it('renders without crashing', () => {
        const TestChild = () => <div data-testid="test-child">Test Child</div>;
        render(
            <RootProvider>
                <TestChild />
            </RootProvider>
        );
        expect(screen.getByTestId('test-child')).toBeInTheDocument();
    });
});