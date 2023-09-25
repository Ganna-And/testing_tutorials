import { render, screen } from "@testing-library/react";
import Skills from "./skills";

describe('Skills', ()=>{
    const skills = ['HTML', 'CSS', 'JavaScript'];

    test('renders correctly',()=>{
        render(<Skills skills={skills}/>)
        const listElement = screen.getByRole('list')
        expect(listElement).toBeInTheDocument()
    })
    test('renders a list of skills',()=>{
       render(<Skills skills={skills}/>)
       const listItemElements = screen.getAllByRole('listitem');
       expect(listItemElements).toHaveLength(skills.length)
    })

    test('renders login button',()=>{
        render(<Skills skills={skills}/>)
        const loginBtn = screen.getByRole("button", {
            name:'Login'
        })

        expect(loginBtn).toBeInTheDocument()
    })

    test('Start learning btn is not rendered', ()=>{
        render(<Skills skills={skills} />);
        const startLearningBtn = screen.queryByRole('button', {
            name: 'Start Learning'
        })

        expect(startLearningBtn).not.toBeInTheDocument()
    })
})