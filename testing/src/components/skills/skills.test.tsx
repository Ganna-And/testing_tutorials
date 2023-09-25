import { render, screen } from "@testing-library/react";
import Skills from "./skills";
import { logRoles } from "@testing-library/react";

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

    test('Start learning button will eventually render', async ()=>{
       const view = render(<Skills skills={skills} />)
       /* screen.debug() */
        const startLearningBtn = await screen.findByRole('button',{
            name:'Start Learning'
        },{
            timeout: 2000
        })
      /*   screen.debug() */
       logRoles(view.container)
        expect(startLearningBtn).toBeInTheDocument()
    })
   
})