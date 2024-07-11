"use client";

import { useEffect, useRef } from "react";

export const useHydrate = () => {
	const firstRender = useRef(false);

	useEffect(() => {
		firstRender.current = true;
	}, []);

	return firstRender.current;
};
