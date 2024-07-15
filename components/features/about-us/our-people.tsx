"use client";
import { motion } from "framer-motion";
import team from "@/public/team.jpg";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function OurPeople() {
	const t = useTranslations("home.about_us.our_people");

	const variants = {
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1],
			},
		},
		exit: {
			opacity: 0,
			y: 24,
			transition: {
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	};
	return (
		<motion.div
			whileInView={"animate"}
			viewport={{ once: true, margin: "-50px" }}
			variants={variants}
			exit={"exit"}
			initial={"exit"}
			className="w-full relative py-24 px-2 lg:px-16 opacity-0 translate-y-6"
		>
			<div className=" w-full flex flex-col gap-y-4 lg:flex-row  max-w-[900px] mx-auto  p-4 rounded-xl bg-indigo-200 text-indigo-950">
				<div>
					<h4 className="text-sm xs:text-base mt-4 sm:mt-0  lg:text-lg font-medium capitalize">
						{t("sub_headline")}
					</h4>
					<h3 className="text-sm xs:text-xl  sm:text-2xl lg:text-4xl font-medium capitalize mt-2">
						{t("headline")}
					</h3>
					<div className="space-y-3 mt-3 sm:max-w-xl w-full">
						<p>{t("p_one")}</p>
						<p>{t("p_two")}</p>
					</div>
				</div>

				<Image
					src={team}
					alt="construction team working"
					className="object-cover object-top w-full lg:w-[348px] h-[450px] rounded-sm shadow-md shadow-indigo-400/40 lg:translate-y-16 lg:translate-x-16"
				/>
			</div>
		</motion.div>
	);
}
