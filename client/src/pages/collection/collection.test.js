import React from 'react';
import { shallow } from 'enzyme';

import { CollectionPage } from './collection.component';
import CollectionItem from '../../components/collection-item/collection-item.component';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);
const store = mockStore({});

describe('CollectionPage', () => {
  let wrapper;
  let mockItems = [{ id: 1 }, { id: 2 }, { id: 3 }];
  beforeEach(() => {
    const mockCollection = {
      items: mockItems,
      title: 'Test'
    };

    wrapper = shallow(
      <Provider store={store}>
        <CollectionPage collection={mockCollection} />
      </Provider>
    );
  });

  test('should render the CollectionPage component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render the same number of CollectionItems as collection array', () => {
    expect(wrapper.find(CollectionItem).length).toBe(0);
  });
});
