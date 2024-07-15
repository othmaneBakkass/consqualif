"use client";

import { useContext } from "react";
import { useStore } from "zustand";
import { GlobalStoreContext } from "./context";

export const useProjectsSlider = () => {
	const store = useContext(GlobalStoreContext);

	if (!store) {
		throw new Error(
			"useProjectsSlider must be a descendent of GlobalStoreContextProvider"
		);
	}

	return useStore(store, (state) => ({
		slides: state.slides,
		currentSlideId: state.currentSlideId,
		setCurrentSlideId: state.setCurrentSlideId,
	}));
};
