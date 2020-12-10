import React from 'react';
import {create} from 'react-test-renderer';
import Paginator from '../Components/Common/Paginator/Paginator.jsx';

describe('Paginator component', () => {
    test('buttons in portion should be 6', () => {
const component = create(<Paginator totalItemsCount={12} pageSize={2} portionSize={6} />);
const root = component.root;
let buttons = root.findAllByType('button');
expect(buttons.length).toBe(6)
    });
});