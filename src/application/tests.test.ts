import locations from '../application/Locations'

import '@testing-library/jest-dom'

describe('tests tourism application', () => {
    test('locations is not an empty array', () => {
        expect(locations.length).toBeGreaterThan(0)
    })

    test('return empty array if searched state is not on the array', () => {
        expect(locations.filter((location) => location.state.includes('Acré'))).toEqual([])
    })

    test('return empty array if searched city is not on the array', () => {
        expect(locations.filter((location) => location.city.includes('Paraibuna'))).toEqual([])
    })

    test('return corresponding itens in array if searched state is included', () => {
        const arr = locations.filter((location) => location.state.includes('Rio de Janeiro'))

        expect(arr.length).toBeGreaterThan(0)
    })

    test('return corresponding itens in array if searched city is included', () => {
        const arr = locations.filter((location) => location.city.includes('Rio de Janeiro'))

        expect(arr.length).toBeGreaterThan(0)
    })

    test('if state is case insensitive', () => {
        const arr = locations.filter((location) => location.state.toLowerCase().includes('rio de janeiro'))

        expect(arr.length).toBeGreaterThan(0)
    })

    test('if city is case insensitive', () => {
        const arr = locations.filter((location) => location.state.toLowerCase().includes('rio de janeiro'))

        expect(arr.length).toBeGreaterThan(0)
    })

     test('if state accepts parcial search', () => {
        const arr = locations.filter((location) => location.state.includes('Rio'))
        
        expect(arr.length).toBeGreaterThan(0)
    })

    test('if city accepts parcial search', () => {
        const arr = locations.filter((location) => location.city.includes('Rio'))
        
        expect(arr.length).toBeGreaterThan(0)
    })

    test('if combined search works', () => {
        const result = locations.filter((location) =>
            location.state.includes('Rio') &&
            location.city.includes('Rio')
        )

        expect(result.length).toBeGreaterThan(0)
    })
})