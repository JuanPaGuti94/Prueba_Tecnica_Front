import React from "react";
import { render, screen } from "@testing-library/react";
import { Notification } from "../../../src/shared/notification/notification.component";
import { it, expect, describe } from 'vitest';
describe('Notification Component', () => {
  it('should render success notification with correct styles', () => {
    render(
      <Notification
        type="success"
        message={{ title: 'Success', body: 'This is a success message' }}
        onClose={() => {}}
      />
    );

    const notification = screen.getByText('Success').parentElement?.parentElement;
    expect(notification).toHaveStyle('background-color: #3C6090');
  });

  it('should render warning notification with correct styles', () => {
    render(
      <Notification
        type="warning"
        message={{ title: 'Warning', body: 'This is a warning message' }}
        onClose={() => {}}
      />
    );

    const notification = screen.getByText('Warning').parentElement?.parentElement;
    expect(notification).toHaveStyle('background-color: #b12c2c');
  });

  it('should render danger notification with correct styles', () => {
    render(
      <Notification
        type="danger"
        message={{ title: 'Danger', body: 'This is a danger message' }}
        onClose={() => {}}
      />
    );

    const notification = screen.getByText('Danger').parentElement?.parentElement;
    expect(notification).toHaveStyle('background-color: #b12c2c');
  });

  it('should render default notification with correct styles when type is undefined', () => {
    render(
      <Notification
        message={{ title: 'Default', body: 'This is a default message' }}
        onClose={() => { } } type={"Default"}      />
    );

    const notification = screen.getByText('Default').parentElement?.parentElement;
    expect(notification).toHaveStyle('background-color: #3C6090');
  });
});