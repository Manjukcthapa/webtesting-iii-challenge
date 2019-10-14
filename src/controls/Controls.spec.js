// Test away!
import React from 'react';
import renderer from 'react-test-renderer';

import Controls from './Controls';

describe('<Controls />', () => {
    it('runs tests', () => {
    expect(true).toBe(true);
    });

    it('should match snapshot', () => {
    const tree = renderer.create(<Controls />);
    expect(tree.toJSON()).toMatchSnapshot();
});
});