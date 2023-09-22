import { render, screen } from "@testing-library/react"
import Greed from "./greed"

test('greet is rendering correctly',()=>{
    render(<Greed />);
    const textElement = screen.getByText('Hello')
    expect(textElement).toBeInTheDocument()
});

test('greet renders with the name', ()=>{
    render(<Greed name='Vishman' />)
    const textElement = screen.getByText("Hello Vishman")
    expect(textElement).toBeInTheDocument()
    
})