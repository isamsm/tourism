import locations from './Locations'
import Pagination from './Pagination'

import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react';

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

    test('if returns all when inputs are empty', () => {
        const stateInput = ''
        const cityInput = ''

        const result = locations.filter((location) =>
            location.state.includes(stateInput) &&
            location.city.includes(cityInput)
        )

        expect(result.length).toBeGreaterThan(0)
    })

    test('if returns nothing when one value exists in array but the other doesnt', () => {
        const stateInput = 'Rio'
        const cityInput = 'Oi'

        const result = locations.filter((location) =>
            location.state.includes(stateInput) &&
            location.city.includes(cityInput)
        )

        expect(result).toHaveLength(0)
    })

    test('if combined search works', () => {
        const result = locations.filter((location) =>
            location.state.includes('Rio') &&
            location.city.includes('Rio')
        )

        expect(result.length).toBeGreaterThan(0)
    })

    test('if pagination is rendering correct number of buttons', () => {
        const mockCallback = jest.fn
        
        render(
            <Pagination 
                totalLocations={5}
                perPage={2}
                setCurrentPage={mockCallback}
                currentPage={1}
            />
        )

        const buttons = screen.queryAllByRole('button')
        expect(buttons).toHaveLength(3)
    })

    test('if there are no pages if locations is an empty array', () => {
        const mockCallback = jest.fn

        const locations = []
        
        render(
            <Pagination 
                totalLocations={locations.length}
                perPage={2}
                setCurrentPage={mockCallback}
                currentPage={1}
            />
        )

        const buttons = screen.queryAllByRole('button', { hidden: true })
        expect(buttons).toHaveLength(0)
    })
})