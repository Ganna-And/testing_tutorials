import { render, screen } from "@testing-library/react"
import Greed from "./greed"

describe('Greet', ()=>{
   test('is rendering correctly',()=>{
    render(<Greed />);
    const textElement = screen.getByText(/Hello/)
    expect(textElement).toBeInTheDocument()
})

})
