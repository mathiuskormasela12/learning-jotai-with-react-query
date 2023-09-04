// ========== Counter Store
// import all packages
import { atom } from 'jotai'

// Define global state
export const counterStore = atom<number>(0)

// Define customes state
export const trippleCounterStore = atom((get) => get(counterStore) * 3)
