import React from 'react';
import { vi, it, expect, describe } from 'vitest';
import { render } from "@testing-library/react";
import { Front } from "../src/front";

vi.mock('../src/providers/root.provider.tsx', () => ({
  RootProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

vi.mock('../src/router/app.router.tsx', () => ({
  AppRouter: () => <div>AppRouter</div>,
}));

describe("Candidate BO Component", () => {
  it("renders without crashing", () => {
    const { container } = render(
        <Front />
    );
    expect(container).toBeDefined();
  });
});
