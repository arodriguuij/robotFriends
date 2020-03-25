import * as actions from './actions';
import * as types from './constants'

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

describe('setSearchField', () => {
    it('should create an action to search robots', () => {
        const text = 'woo'
        const epectedAction = {
            type: types.CHANGE_SEARCH_FIELD,
            payload: text
        }
        expect(actions.setSearchField(text)).toEqual(epectedAction)
    })
})


describe('requestRobots', () => {
    it('handles requesting robots API', () => {
        const store = mockStore();
        store.dispatch(actions.requestRobots())
        const action = store.getActions()
        expect(action[0].type).toEqual(types.REQUEST_ROBOTS_PENDING)
    })
})
