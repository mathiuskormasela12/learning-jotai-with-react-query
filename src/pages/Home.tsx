// ========== Home
// import all packages
import React from 'react'
import { useAtom } from 'jotai'
import { counterStore, trippleCounterStore } from '../store'

export const Home: React.FC = () => {
  const [counter, setCounter] = useAtom(counterStore)
  const [trippleCounter] = useAtom(trippleCounterStore)

  const handleIncrement = (): void => { setCounter((currentCounter) => currentCounter + 1) }

  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl mt-8 text-slate-800'>Global State {trippleCounter}</h1>
      <button
        type='submit'
        className='bg-sky-500 text-white rounded-md mt-4 px-5 py-2'
        onClick={handleIncrement}
      >
        Counter {counter}
      </button>
    </div>
  )
}
