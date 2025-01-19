import { create } from 'zustand';

const useStore = create((set) => ({
    appName: '',
    appDescription: '',
    interest: 'Technology',
    images: [],
    ageGroup: '12-18',

    setImages: (newImages) => set({ images: newImages }),
    resetImages: () => set({ images: [] }), // Reset images

    setAppName: (newAppName) => set((state) => {
        state.resetImages(); // Reset images when appName changes
        return { appName: newAppName };
    }),
    setAgeGroup: (newage) => set((state) => {
        state.resetImages(); // Reset images when appName changes
        return { ageGroup: newage };
    }),
    setAppDescription: (newAppDescription) => set((state) => {
        state.resetImages(); // Reset images when appDescription changes
        return { appDescription: newAppDescription };
    }),
    setInterest: (newInterest) => set((state) => {
        state.resetImages(); // Reset images when interest changes
        return { interest: newInterest };
    }),
}));

export default useStore;
