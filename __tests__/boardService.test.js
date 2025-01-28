const { create } = require('../src/services/boardService')
const { default: BoardModel } = require('../src/models/board')

test('should create a board', async () => {
    const mockBoard = {
        title: 'test'
    }

    jest.spyOn(BoardModel, 'create')
        .mockImplementationOnce(() => Promise.resolve({
            _id: 'test',
            title: 'test'
        }))
    
    const res = await create(mockBoard);

    expect(res).toHaveProperty('title', mockBoard.title);
    expect(res).toHaveProperty('_id');
});