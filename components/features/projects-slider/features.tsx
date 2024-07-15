"use client";
import { motion } from "framer-motion";

export function ProjectFeatureContainer({
	data,
}: {
	data: {
		title: string;
		content: string;
	}[];
	currentSlideId: number;
}) {
	return (
		<motion.div className="col-[1/3] sm:col-[1/4] bg-gray-950 sm:p-2 isolate z-20 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none row-[4/5] flex flex-col sm:grid sm:grid-cols-2 sm:gap-x-4 w-full lg:gap-x-0 lg:row-[4/5] lg:col-[1/3] my-5 sm:mt-5 lg:flex lg:flex-col lg:items-start lg:justify-start gap-y-8">
			{data.map((el, index) => (
				<ProjectFeature
					index={index}
					key={`${el.title}-${el.content}`}
					title={el.title}
					content={el.content}
				/>
			))}
		</motion.div>
	);
}

function ProjectFeature({
	title,
	content,
	index,
}: {
	title: string;
	content: string;
	index: number;
}) {
	const variants = {
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.1 * index,
			},
		},
		exit: {
			opacity: 0,
			y: 8,
			transition: {
				delay: 0.1 * index,
			},
		},
	};
	return (
		<motion.div
			whileInView="animate"
			viewport={{ once: true }}
			variants={variants}
			animate={"animate"}
			exit={"exit"}
			initial={"exit"}
			className="p-2 lg:bg-gray-950/30 rounded-lg  lg:max-w-96 lg:backdrop-blur-md z-20"
		>
			<h3 className=" text-sm sm:text-base mb-1 font-bold capitalize text-stone-50">
				{title}
			</h3>
			<p className=" text-sm sm:text-base text-indigo-50">{content}</p>
		</motion.div>
	);
}
