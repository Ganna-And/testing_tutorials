import { getByRole, render, screen } from "@testing-library/react";
import Counter from "./counter";
import user from '@testing-library/user-event'

describe('Counter', () => {
  test('REndering correctly',()=>{
    render(<Counter />)
    const countElement = screen.getByRole('heading');
    expect(countElement).toBeInTheDocument();

    const countButton = screen.getByRole('button', {
        name: 'Increment'
    });
    expect(countButton).toBeInTheDocument()

  });

test('Renders initioal value 0',()=>{
    render(<Counter/>)
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('0')
})

test('renders a count of 1 after clicking increment button',async ()=>{
    user.setup();
    render(<Counter />);
    const countButton = screen.getByRole('button');

    await user.click(countButton)
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('1')
});

test('render a count of 2 after clickin counter btn twice', async()=>{
    user.setup();
    render(<Counter />);
    const countButton = screen.getByRole('button');

    await user.click(countButton)
    await user.click(countButton)
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('2')
})

})

