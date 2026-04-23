import banner from '../images/banner.png'
import plant from '../images/plant.svg'
import map from '../images/map.svg'
import sad from '../images/sad.svg'
import { useState } from 'react'
import Pagination from './Pagination'
import locations from './Locations'

const App = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const perPage = 2

  const [filteredLocs, setFilteredLocs] = useState(locations)

  const lastIndex = currentPage * perPage
  const firstIndex = lastIndex - perPage
  const currentLocations = filteredLocs.slice(firstIndex, lastIndex)

  const stateInput = document.getElementById('state')

  const [city, setCity] = useState('')
  const [stateEl, setStateEl] = useState('')

  stateInput?.addEventListener('click', () => {
    setCity('')
    setCurrentPage(1)
  })

  const filterLocs = (e: any) => {
    const value = e.currentTarget.value
    const isState = e.currentTarget.id === 'state'

    const newState = isState ? value : stateEl
    const newCity = !isState ? value : city

    if (isState) {
      setStateEl(value)
    } else {
      setCity(value)
    }

    if(newState === '') {
      setFilteredLocs(locations)

      return
    }

    console.log(locations.filter((location) => location.state.toLowerCase().includes('rio de janeiro')))
    
    const filtered = locations.filter((location) => {
      const matchState = location.state.toLowerCase().includes(newState.toLowerCase())
      const matchCity = location.city.toLowerCase().includes(newCity.toLowerCase())

      return matchState && matchCity
    })

    setFilteredLocs(filtered)
  }

  return (
   <div className='flex lg:flex-row flex-col bg-bgBlue text-textBlue'>
      <div className='lg:w-2/5'>
        <img src={ banner } alt='Banner' className='lg:h-auto h-[280px] w-full' />
      </div>
      <div className='flex flex-col justify-center lg:py-0 py-8 lg:px-10 px-5 relative lg:w-3/5'>
        <img width={60} height={60} src={ plant } alt='Icone de planta' className='top-3 right-3 absolute lg:h-[60px] lg:w-[60px] w-10 h-10' />
        <h1 className='lg:text-4xl text-2xl font-semibold max-w-[420px]'> BUSCADOR DE PONTOS TURISTICOS </h1>
        <form className='lg:pt-10 pt-4 flex gap-4 w-full'>
          <div className='flex flex-col w-1/2'>
            <label htmlFor='state' className='lg:text-lg text-base font-semibold pb-1'> ESTADO </label>
            <input value={stateEl} onInput={(e) => filterLocs(e)} id='state' placeholder='estado' className='w-full px-3 py-1 flex justify-center items-center italic font-light bg-transparent border-2 border-textBlue rounded-lg text-textBlue placeholder:text-textBlue' />
          </div>
          <div className='flex flex-col w-1/2'>
            <label htmlFor='state' className='lg:text-lg text-base font-semibold pb-1'> CIDADE </label>
            <input value={city} onInput={(e) => filterLocs(e)} id='city' placeholder='cidade' className='w-full px-3 py-1 flex justify-center items-center italic font-light bg-transparent border-2 border-textBlue rounded-lg text-textBlue placeholder:text-textBlue disabled:bg-gray-200' disabled={stateEl === '' ? true : false} />
          </div>
        </form>
        <div id='locations' className='lg:pt-10 pt-5 flex flex-col lg:gap-5 gap-4'>
          {currentLocations.length > 0 ?
            currentLocations.map(location => (
              <div data-state={location.state} data-city={location.city} className='p-4 bg-bgBlueDarker flex lg:flex-row flex-col gap-4 lg:items-center relative'>
                <img width={164} height={164} src={ location.img } alt='Banner' className='lg:w-[164px] lg:h-[164px] h-[200px] w-full object-cover rounded-sm' />
                <div>
                  <h3 className='lg:text-lg text-base font-semibold pb-1'> { location.name } </h3>
                  <h4 className='text-base font-light italic'> { location.city } - { location.state } </h4>
                </div>
                <a rel="noreferrer" target='_blank' href={ location.map }>
                  <img src={ map } alt='Icone de planta' className='top-0 right-1 absolute swing' />
                </a>
              </div>
            ))
          :
            <div className='mx-auto flex flex-col items-center lg:gap-4 gap-3'>
              <p className='lg:text-2xl text-lg font-light'> Nenhum resultado encontrado  </p>
              <img src={ sad } alt='Icone carinha triste' width={60} height={60} />
            </div>
          }
          <Pagination totalLocations={filteredLocs.length} perPage={perPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </div>
      </div>
   </div>
  );
}

export default App;
