import { render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';

describe('fetch api',()=>{
    it('fetches api',()=>{

        const testFetch = jest.fn(() => 
        Promise.resolve({
            json: () => Promise.resolve({ test: 100 }),
        })) as jest.Mock   
    })
    // const resp = {test:100}
    
    // return testFetch.then((data:{}) => expect(data).toEqual(resp))
   
})