import { createStore } from "zustand";
import { devtools } from "zustand/middleware";

import type {} from "@redux-devtools/extension"; // required for devtools typing

import { projectsSliderStore, GlobalStore } from "./slices";

export const globalStore = createStore<GlobalStore>()(
	devtools((...props) => ({
		...projectsSliderStore(...props),
	}))
);
