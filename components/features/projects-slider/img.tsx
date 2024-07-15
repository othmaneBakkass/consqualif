"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

export function Img({ src }: { src: StaticImageData }) {
	const variants = {
		animate: {
			clipPath: "inset(0 0 0% 0)",
		},
		exit: {
			clipPath: "inset(0 0 100% 0)",
		},
	};
	return (
		<motion.div
			initial={"exit"}
			animate={"animate"}
			exit={"exit"}
			variants={variants}
			whileInView="animate"
			viewport={{ once: true }}
			className="col-[1/3] sm:col-[1/4] lg:col-[2/4] row-[1/4] lg:row-[3/6] relative"
		>
			<div
				aria-hidden
				className="absolute bg-neutral-900/75 z-10 w-full h-full lg:hidden"
			></div>

			<Image
				src={src}
				alt="new renovated Kitchen"
				fill
				className="object-cover overflow-hidden"
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 912px, 33vw"
			/>
		</motion.div>
	);
}
