"use client";
import { AnimatePresence } from "framer-motion";
import { useProjectsSlider } from "@/lib/store/selectors";
import { ProjectFeatureContainer } from "./features";
import { HighLights } from "./highlights";
import { Indicators } from "./indicators";
import { Img } from "./img";
import { useTranslations } from "next-intl";

export function ProjectsSlider() {
	const { slides, currentSlideId, setCurrentSlideId } = useProjectsSlider();
	const t = useTranslations("home.slider");
	const data = slides.find((slide) => slide.id === currentSlideId) ?? slides[0];

	return (
		<section
			id="projects"
			className="w-full grid grid-cols-[1fr,1fr] sm:grid-cols-[1.5fr,1fr,2fr] grid-rows-[50px,50px,180px,1fr,100px,auto] sm:grid-rows-[50px,50px,180px,1fr,100px] lg:grid-rows-[80px,120px,70px,1fr,100px] bg-gray-950 mt-16 pt-16 sm:pt-28 rounded-t-xl sm:rounded-t-3xl px-3 sm:px-8 lg:px-16 "
		>
			<div className="col-[1/3] sm:col-[1/3] row-[2/4] flex flex-col justify-end items-start z-20 pl-2 pb-2 lg:pb-0 lg:pl-0">
				<p className="text-stone-50 capitalize font-bold text-sm">
					{t("recent_projects")}
				</p>
				<h2 className="text-primary capitalize font-extrabold text-3xl sm:text-5xl lg:text-6xl mt-2 lg:leading-[1.16]">
					{data.title}
				</h2>
			</div>
			<div className="col-[2/3] row-[1/2] sm:col-[3/4] sm:row-[2/3] z-20 pr-2 lg:pr-0 justify-self-end">
				<p className="text-2xl  sm:text-3xl font-semibold tabular-nums text-stone-50 mt-2">
					0{slides.length}/0<span>{data.index}</span>
				</p>
			</div>
			<AnimatePresence mode={"wait"}>
				<ProjectFeatureContainer
					key={currentSlideId}
					data={data.features}
					currentSlideId={currentSlideId}
				/>
			</AnimatePresence>

			<AnimatePresence mode={"wait"}>
				<Img key={currentSlideId} src={data.image} />
			</AnimatePresence>

			<HighLights
				client={t("client")}
				industry={t("industry")}
				sector={t("sector")}
				data={data.highlights}
				currentSlideId={currentSlideId}
			/>
			<Indicators
				currentSlideId={currentSlideId}
				numberOfSlides={slides.length}
				setCurrentSlideId={setCurrentSlideId}
			/>
		</section>
	);
}
