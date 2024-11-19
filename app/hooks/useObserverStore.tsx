import { create } from 'zustand'

interface ObserverType {
    inView: boolean;
}

export const useObserverStore = create<ObserverType>(() => ({
    inView: true,
}))