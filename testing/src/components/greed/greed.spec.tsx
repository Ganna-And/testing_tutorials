import { render, screen } from "@testing-library/react"
import Greed from "./greed"

describe('Greet', ()=>{
   it('is rendering correctly',()=>{
    render(<Greed />);
    const textElement = screen.getByText('Hello')
    expect(textElement).toBeInTheDocument()
})

})
describe('Nested', ()=>{
    it('renders with the name', ()=>{
    render(<Greed name='Vishman' />)
    const textElement = screen.getByText("Hello Vishman")
    expect(textElement).toBeInTheDocument()
    
}) 
})