import {getLetterMatchCount} from './'

describe('getLetterMatchCount',()=>{

    const secretWord = 'party'

    test('returns correct count when there are no matching letters',() => {
        const number = getLetterMatchCount('bones',secretWord)
        expect(number).toBe(0)
    })

    test('returns correct count when there are 3 matching letters',() => {
        const number = getLetterMatchCount('train',secretWord)
        expect(number).toBe(3)
    })

    test('returns correct count when there are duplicated letters',() => {
        const number = getLetterMatchCount('parka',secretWord)
        expect(number).toBe(3)
    })
})
