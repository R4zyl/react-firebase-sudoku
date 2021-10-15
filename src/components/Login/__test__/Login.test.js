import { render, screen, fireEvent } from '@testing-library/react';
import { Login } from '../Login';

//const mockedFunction = jest.fn()

describe('Login', () => {
    test('email input is visible to the user', () => {
        render(<Login />);
        const inputElement = screen.getByPlaceholderText(/Email/i);
        expect(inputElement).toBeVisible();
      });
  test('should render email input element', () => {
    render(<Login />);
    const inputElement = screen.getByPlaceholderText(/Email/i);
    expect(inputElement).toBeInTheDocument();
  });
  test('should be able to type in email input', async () => {
    render(<Login />);
    const inputElement = screen.getByPlaceholderText(/Email/i);
    fireEvent.change(inputElement, { target: { value: 'example@gmail.com' } });
    expect(inputElement.value).toBe('example@gmail.com');
  });
  test('password input is visible to the user', () => {
    render(<Login />);
    const inputElement = screen.getByPlaceholderText(/Password/i);
    expect(inputElement).toBeVisible();
  });
  test('should render password input element', () => {
    render(<Login />);
    const inputElement = screen.getByPlaceholderText(/Password/i);
    expect(inputElement).toBeInTheDocument();
  });
  test('should be able to type in password input', async () => {
    render(<Login />);
    const inputElement = screen.getByPlaceholderText(/Password/i);
    fireEvent.change(inputElement, { target: { value: 'examplepass' } });
    expect(inputElement.value).toBe('examplepass');
  });
  test('submit Button gets rendered with the correct text',  () => {
    render(<Login />);
    const submitElement = screen.getByTestId('0001');
    expect(submitElement).toBeInTheDocument();
  });
  test('submit Button is visible to the user',  () => {
    render(<Login />);
    const submitElement = screen.getByTestId('0001');
    expect(submitElement).toBeVisible();
  });
  test('log in title is visible to the user', () => {
    render(<Login />);
    const titleElement = screen.getByRole("heading");
    expect(titleElement).toBeVisible();
  });
  test('log in title text is correct', () => {
    render(<Login />);
    const titleElement = screen.getByRole("heading");
    expect(titleElement.textContent).toBe('Bejelentkezés');
  });
});
