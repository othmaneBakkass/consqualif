"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function Process() {
	const t = useTranslations("home.about_us.process");

	const variants = {
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: [0.22, 1, 0.36, 1],
			},
		},
		exit: {
			opacity: 0,
			y: 24,
			transition: {
				duration: 0.5,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	};
	return (
		<motion.div
			whileInView={"animate"}
			viewport={{ once: true, margin: "-200px" }}
			variants={variants}
			exit={"exit"}
			initial={"exit"}
			className="w-full my-12  xs:max-w-[calc(100%-32px)] rounded-xl p-4 mx-auto bg-indigo-200 text-indigo-950  sm:max-w-[900px]"
		>
			<h4 className="text-sm xs:text-base mt-4 sm:mt-0  lg:text-lg font-medium capitalize">
				{t("sub_headline")}
			</h4>
			<h3 className="text-sm xs:text-lg  sm:text-xl lg:text-3xl font-medium capitalize mt-2">
				{t("headline")}
			</h3>
			<p className="mt-2 ">{t("content")}</p>
			<div className="w-full flex flex-col mt-5 relative gap-4 justify-center items-start pl-2">
				<div
					aria-hidden
					className="absolute size-1 py-6 flex flex-col justify-between h-full left-0 bg-indigo-300"
				></div>
				<Card title={t("steps.one.title")} content={t("steps.one.content")} />
				<Card title={t("steps.two.title")} content={t("steps.two.content")} />
				<Card
					title={t("steps.three.title")}
					content={t("steps.three.content")}
				/>
			</div>
		</motion.div>
	);
}

function Card({ title, content }: { title: string; content: string }) {
	return (
		<div className=" flex  flex-col justify-start items-start max-w-[480px] p-4">
			<h4 className=" relative  after:absolute after:bg-indigo-300 after:size-3 after:rounded-full  after:top-1/2 after:-translate-y-1/2 after:-left-7 text-indigo-700 text-sm xs:text-base mt-4 sm:mt-0  lg:text-lg font-medium capitalize text-start">
				{title}
			</h4>
			<p className=" mt-2">{content}</p>
		</div>
	);
}
