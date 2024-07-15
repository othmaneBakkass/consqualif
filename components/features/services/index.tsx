"use client";
import { TextStagger } from "@/components/ui/text-stagger";
import { motion, stagger, useAnimate, useInView } from "framer-motion";

import ImageTwo from "@/public/project01.jpg";
import flooring from "@/public/flooring.jpg";
import modeling from "@/public/modeling.jpg";
import planing from "@/public/planing.jpg";
import sink from "@/public/sink.jpg";
import Image, { StaticImageData } from "next/image";
import { HTMLAttributes, useEffect } from "react";
import { ClassName } from "@/lib/types/common";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

function Card({
	title,
	content,
	src,
	className,
	...props
}: {
	title: string;
	content: string;
	src: StaticImageData;
} & ClassName &
	HTMLAttributes<HTMLDivElement>) {
	return (
		<>
			<div
				{...props}
				data-card
				className={cn(
					"relative w-full rounded-sm max-w-[703px] overflow-hidden lg:max-w-[348px] h-[460px] flex flex-col gap-y-2 justify-end p-3 isolate items-start",
					className
				)}
			>
				<div
					aria-hidden
					className="absolute bg-gradient-to-t from-neutral-950 to-neutral-900/60 inset-0 -z-10 w-full h-full "
				></div>
				<Image
					src={src}
					alt="new renovated Kitchen"
					fill
					className="object-cover -z-20 "
					sizes="348px"
				/>
				<h3 className="text-xl font-bold text-stone-50">{title}</h3>
				<p className=" text-sm sm:text-base text-indigo-50 min-h-32">
					{content}
				</p>
			</div>
		</>
	);
}

export function Services() {
	const t = useTranslations("home.services");
	const [scope, animate] = useAnimate();
	const isInView = useInView(scope, {
		once: true,
		margin: "-50px",
	});
	useEffect(() => {
		if (isInView) {
			animate([
				[
					"div[data-card]",
					{
						opacity: [0, 1],
						y: [8, 0],
					},
					{
						duration: 0.5,
						ease: [0.16, 1, 0.3, 1],
						delay: stagger(0.1),
					},
				],
			]);
		}
	}, [isInView]);
	return (
		<section
			id="services"
			className="w-full bg-gray-950 py-24 sm:py-48 px-3 sm:px-8 lg:px-16 rounded-b-xl sm:rounded-b-3xl"
		>
			<h2 className="text-3xl xs:text-4xl sm:text-6xl text-center font-bold text-primary">
				<TextStagger text={t("headline")} />
			</h2>
			<div
				ref={scope}
				className="w-full max-w-[1108px] gap-8 mx-auto mt-32 flex flex-wrap justify-center xl:justify-start items-center"
			>
				<Card
					className="opacity-0 translate-y-2"
					src={planing}
					title={t("design_permits_approvals.title")}
					content={t("design_permits_approvals.content")}
				/>
				<Card
					className="opacity-0 translate-y-2"
					src={ImageTwo}
					title={t("renovations.title")}
					content={t("renovations.content")}
				/>
				<Card
					className="opacity-0 translate-y-2"
					src={modeling}
					title={t("remodeling_extensions.title")}
					content={t("remodeling_extensions.content")}
				/>
				<Card
					className="opacity-0 translate-y-2"
					src={sink}
					title={t("plumbing_electricity.title")}
					content={t("plumbing_electricity.content")}
				/>
				<Card
					className="opacity-0 translate-y-2"
					src={flooring}
					title={t("flooring.title")}
					content={t("flooring.content")}
				/>
			</div>
		</section>
	);
}
