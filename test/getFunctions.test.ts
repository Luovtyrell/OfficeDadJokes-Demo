import { getJoke } from "../src/APIs/getFunctions.ts"

describe('getJoke', () => {
  test('It returns a joke object', async () => {
    const joke = await getJoke()
    expect(joke).toHaveProperty('id')
    expect(joke).toHaveProperty('joke')
    expect(joke).toHaveProperty('status')
  })
})