import { TextStagger } from "@/components/ui/text-stagger";
import { OurPeople } from "./our-people";
import { Process } from "./process";
import { getTranslations } from "next-intl/server";

export async function AboutUs() {
	const t = await getTranslations("home.about_us");

	return (
		<section
			id="about_us"
			className="w-full pt-24 sm:pt-48 px-3 sm:px-8 lg:px-16 "
		>
			<h2 className="text-2xl xs:text-4xl text-indigo-600 sm:text-5xl lg:text-6xl text-center font-bold ">
				<TextStagger text={t("headline")} />
			</h2>
			<div className="max-w-[calc(100%-20px)] xs:max-w-none mx-auto pt-8 sm:pt-16 lg:pt-24 flex  justify-center items-center flex-col">
				<h4 className="text-sm xs:text-base mt-4 sm:mt-0 text-center lg:text-lg font-medium capitalize">
					{t("mission.sub_headline")}
				</h4>
				<h3 className="text-sm xs:text-xl text-center sm:text-2xl lg:text-4xl font-medium capitalize mt-2">
					{t("mission.headline")}
				</h3>
				<p className=" xs:text-base mt-5 xs:max-w-[calc(100%-32px)]  sm:max-w-2xl w-full mx-auto text-center text-stone-800 xs:leading-7">
					{t("mission.content")}
				</p>
			</div>
			<OurPeople />
			<Process />
		</section>
	);
}
