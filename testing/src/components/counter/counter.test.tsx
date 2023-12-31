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
    const countButton = screen.getByRole('button',{
        name:'Increment'
    });

    await user.click(countButton)
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('1')
});

test('render a count of 2 after clickin counter btn twice', async()=>{
    user.setup();
    render(<Counter />);
    const countButton = screen.getByRole('button',{
        name:'Increment'
    });

    await user.click(countButton)
    await user.click(countButton)
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('2')
})

test('renders a count of 10 after clicking button" Set"', async ()=>{
user.setup()
render(<Counter/>);
const amountInput = screen.getByRole('spinbutton');
await user.type(amountInput, "10");

expect(amountInput).toHaveValue(10);

const buttonSet = screen.getByRole('button',{
    name: 'Set'
});

await user.click(buttonSet);
const countElement = screen.getByRole('heading');
expect(countElement).toHaveTextContent("10")
})

test('elements are focused in the right order', async()=>{
    user.setup();
    render(<Counter />)
    const amountInput = screen.getByRole('spinbutton');
    const setButton = screen.getByRole('button',{ name:'Set'});
    const incrementBtn = screen.getByRole('button',{ name:'Increment'});

    await user.tab()
    expect(incrementBtn).toHaveFocus();

    await user.tab()
    expect(amountInput).toHaveFocus();

    await user.tab();
    expect(setButton).toHaveFocus()
})

});

 