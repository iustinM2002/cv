import { render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/first-page-components/first-page-components/Intro';
import {RegisterProvider} from '../contexts/registerContext';
import {LanguageProvider} from '../contexts/language'

describe('Home Component',()=>{
  it('render home component',()=>{
    const {container} = render(<LanguageProvider><RegisterProvider><Home/></RegisterProvider></LanguageProvider>);
    expect(container).toBeInTheDocument()
  });
 
  it('changes the language on select event',async () =>{
    // mocks and declarations
    const handleChange = jest.fn().mockImplementationOnce((sm) =>sm);
    const selectValue = 'Engleza';
    const a = handleChange({target:{value:selectValue}})
    const {getByTestId,getByRole} = render(<LanguageProvider><RegisterProvider><Home/></RegisterProvider></LanguageProvider>);
    const selectLang = getByTestId('change-lang-select') as HTMLSelectElement;
    const firstTitle = getByRole('heading', {  name: /unlimited movies, tv, shows, and more\./i})
    // fire events
    fireEvent.change(selectLang,a);
    // expects
    expect(handleChange).toHaveBeenCalledTimes(1)
    await expect(firstTitle).toHaveTextContent('Acces nelimitat la filme, seriale si multe altele')
    expect(selectLang).toBeTruthy();
  
  });   
})