import { render, screen } from "@testing-library/react"
import Greed from "../components/greed/greed"

describe('Greet', ()=>{
   test('is rendering correctly',()=>{
    render(<Greed />);
    const textElement = screen.getByText('Hello')
    expect(textElement).toBeInTheDocument()
})

})
describe('Nested', ()=>{
    test('renders with the name', ()=>{
    render(<Greed name='Vishman' />)
    const textElement = screen.getByText("Hello Vishman")
    expect(textElement).toBeInTheDocument()
    
}) 
})