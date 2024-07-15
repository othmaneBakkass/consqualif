import { Go } from "@/components/ui/go";
import {
	TextFadeIn,
	TextFadeInDefaultStyles,
} from "@/components/ui/text-fade-in";
import { cn } from "@/lib/utils";
import { MoveUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function Hero() {
	const t = await getTranslations("home");

	return (
		<section className="w-full flex flex-col justify-between  items-start max-w-[calc(100%-20px)] md:max-w-[90%] 2xl:max-w-5xl xl:max-w-4xl mx-auto mt-12">
			<p
				className={cn(
					"text-secondary capitalize font-medium text-sm xs:text-lg sm:text-xl",
					TextFadeInDefaultStyles
				)}
			>
				{t("sub_headline")}
			</p>
			<h1
				className={cn(
					"text-secondary capitalize font-extrabold text-3xl xs:text-4xl sm:text-6xl mt-2 sm:leading-[1.16]",
					TextFadeInDefaultStyles
				)}
			>
				{t("headline_part_one")} <br className="hidden sm:block" />
				{t("headline_part_two")}
			</h1>

			<Go
				className={cn(
					"relative group mt-2 inline-flex items-center gap-x-3 ",
					TextFadeInDefaultStyles
				)}
				href={"#contact_us"}
			>
				<p className="text-xl font-medium group-hover:text-secondary duration-200 ease-in ">
					{t("cta")}
				</p>
				<MoveUpRight
					size={18}
					className="group-hover:text-secondary duration-200 ease-in "
				/>
			</Go>
		</section>
	);
}
