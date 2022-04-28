import { render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import SignInBody from '../components/signin/sign_in_body';
import {LoginProvider} from '../contexts/loginContext';
import {LanguageProvider} from '../contexts/language';



describe('Sign Im Components' ,() =>{
    let initContact:[]=[];
    it('renders component',()=>{
        const onSubmit= jest.fn();
        const {container} = render(<LanguageProvider><LoginProvider><SignInBody onSubmit={onSubmit} initialContacts={initContact}/></LoginProvider></LanguageProvider>)
        expect(container).toBeTruthy()
    });
    it('sign in' , () =>{
        
            const onSubmit= jest.fn();
            const {getByPlaceholderText,getByTestId} = render(<LanguageProvider><LoginProvider><SignInBody onSubmit={onSubmit} initialContacts={initContact}/></LoginProvider></LanguageProvider>)
            const submitButton = getByTestId('submit-button');
            fireEvent.change(getByPlaceholderText(/email or phone number/i),{target:{value:'morosanuiustin@gmail.com'}})
            fireEvent.change(getByPlaceholderText(/password/i),{target:{value:'123'}});
            fireEvent.click(submitButton);
            expect(onSubmit).toHaveBeenCalledTimes(0)
            
    })
    
})