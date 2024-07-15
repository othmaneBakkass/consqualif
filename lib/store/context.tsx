"use client";
import { Children } from "@/lib/types/common";
import { createContext, useEffect, useRef } from "react";
import { globalStore } from "./store";
import { slides } from "./slices";

const getGlobalStore = () => globalStore;
type GlobalStoreApi = ReturnType<typeof getGlobalStore>;

export const GlobalStoreContext = createContext<GlobalStoreApi | undefined>(
	undefined
);

export const GlobalStoreContextProvider = ({
	children,
	data,
}: Children & { data: slides }) => {
	const storeRef = useRef<GlobalStoreApi>();
	if (!storeRef.current) {
		storeRef.current = globalStore;
	}

	useEffect(() => {
		globalStore.setState({
			slides: data,
			currentSlideId: data[0].id,
		});
	}, []);

	return (
		<GlobalStoreContext.Provider value={storeRef.current}>
			{children}
		</GlobalStoreContext.Provider>
	);
};
