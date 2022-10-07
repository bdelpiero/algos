import evaluatePostfix from '../exercise11'

describe('evaluatePostfix', () => {
  it('should take a postfix expression, evaluate it and return its value', () => {
    const expression1 = '( ( 2 3 * ) ( 24 30 / ) + )'
    expect(evaluatePostfix(expression1)).toBe(6.8)

    const expression2 = '( ( 2 * ( 3 + 24 ) ) / 30 )'
    expect(evaluatePostfix(expression2)).toBe(1.8)

    const expression3 = '( 2 * ( 3 + ( 24 / 30 ) ) )'
    expect(evaluatePostfix(expression3)).toBe(7.6)
  })
})
