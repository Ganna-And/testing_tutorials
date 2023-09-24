import {getByRole, render, screen} from '@testing-library/react'
import Application from "./application";

describe('application', ()=>{
    test('rendres correctly', ()=>{
        render(<Application/>);

        const pageHeading = screen.getByRole('heading',{
            level: 1
        });

        const sectionHeading = screen.getByRole('heading', {
            level: 2
        })
        expect(sectionHeading).toBeInTheDocument();


        expect(pageHeading).toBeInTheDocument();
        const nameElement = screen.getByRole('textbox', {
            name: 'Name',
        });

        const nameElement2 = screen.getByLabelText('Name',{
            selector:'input'
        });
        expect(nameElement2).toBeInTheDocument();

        const termsElement2 = screen.getByLabelText('I accept the terms and conditions');
        expect(termsElement2).toBeInTheDocument()

        expect(nameElement).toBeInTheDocument();

        const bioElement = screen.getByRole('textbox',{
            name: 'Bio',
        })

        expect(bioElement).toBeInTheDocument();

        const jobLocation = screen.getByRole('combobox');
        expect(jobLocation).toBeInTheDocument();

        const termsElement = screen.getByRole('checkbox');
        expect(termsElement).toBeInTheDocument();

        const submitBtn = screen.getByRole('button');
        expect(submitBtn).toBeInTheDocument()
    })
})