import { StaticImageData } from "next/image";
import { StateCreator } from "zustand";
import ImageOne from "@/public/project01-2.jpg";

export type GlobalStore = ProjectsSliderStore;

type RegisterSlice<slice extends Object> = StateCreator<
	GlobalStore,
	[["zustand/devtools", never]],
	[],
	slice
>;

export type slides = Array<{
	id: number;
	index: number;
	image: StaticImageData;
	features: {
		title: string;
		content: string;
	}[];
	title: string;
	highlights: {
		sector: string;
		industry: string;
		client: string;
	};
}>;

export type ProjectsSliderStore = {
	slides: slides;
	currentSlideId: number;
	setCurrentSlideId: (id: number) => void;
	setSlides: (slides: slides) => void;
};

type ProjectsSliderSlice = RegisterSlice<ProjectsSliderStore>;

const data = [
	{
		id: 1,
		index: 1,
		image: ImageOne,
		features: [
			{
				title: "",
				content: "",
			},
		],
		title: "",
		highlights: {
			sector: "",
			industry: "",
			client: "",
		},
	},
];

export const projectsSliderStore: ProjectsSliderSlice = (set) => {
	return {
		slides: data,
		currentSlideId: data[0].id,
		setCurrentSlideId(id) {
			set(() => ({ currentSlideId: id }));
		},
		setSlides(slides) {
			set(() => ({ slides: slides }));
		},
	};
};
