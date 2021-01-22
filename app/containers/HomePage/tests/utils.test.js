import { updateArray } from '../utils';

describe('updateArray', () => {
  it('should return a new array for a provided old array and an id of object to be deleted ', () => {
    expect(
      updateArray(
        [
          { id: 0, text: 'test1' },
          { id: 1, text: 'test2' },
          { id: 2, text: 'test3' },
        ],
        2,
      ),
    ).toEqual([{ id: 0, text: 'test1' }, { id: 1, text: 'test2' }]);

    expect(
      updateArray(
        [
          { id: 0, text: 'test1' },
          { id: 1, text: 'test2' },
          { id: 2, text: 'test3' },
        ],
        1,
      ),
    ).toEqual([{ id: 0, text: 'test1' }, { id: 1, text: 'test3' }]);

    expect(
      updateArray(
        [
          { id: 0, text: 'test1' },
          { id: 1, text: 'test2' },
          { id: 2, text: 'test3' },
        ],
        0,
      ),
    ).toEqual([{ id: 0, text: 'test2' }, { id: 1, text: 'test3' }]);
  });
});
