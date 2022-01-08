import directoryReducer, { INITIAL_STATE } from './directoryReducer';

describe('directoryReducer', () => {
  test('should return initial state', () => {
    expect(directoryReducer(undefined, {})).toEqual(INITIAL_STATE);
  });
});
