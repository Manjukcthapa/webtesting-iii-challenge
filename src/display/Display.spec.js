import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';
import renderer from 'react-test-renderer';


it('render without crashing', () => {
    render(<Display />)
});


describe('display function tests', () => {
    test('displays if gate is open/closed and if it is locked/unlocked', () => {
        const { getByText } = render(<Display locked={true} closed={true} />);
        getByText('Locked');
        getByText('Closed');
    });
    
    test('displays if gate is open/closed and if it is locked/unlocked', () => {
        const { getByText } = render(<Display locked={false} closed={false} />);
        getByText('Open');
        getByText('Unlocked');
    });
 

    test('display if closed props is true and open', () => {
        const { getByText } = render(<Display closed={true} />);
        getByText('Closed');
        getByText('Open');
    })
}) 
