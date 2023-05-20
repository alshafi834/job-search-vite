import nextElementInList from '../../src/utils/nextElementInList'

describe('nextElementInList', () => {
  it('It locates element in list and returns next element', () => {
    const list = ['A', 'B', 'C', 'D', 'E']
    const value = 'C'
    const result = nextElementInList(list, value)
    expect(result).toBe('D')
  })

  describe('When element is at the end of the list', () => {
    it('locates next element at the start of the list', () => {
      const list = ['A', 'B', 'C', 'D', 'E']
      const value = 'E'
      const result = nextElementInList(list, value)
      expect(result).toBe('A')
    })
  })
})
