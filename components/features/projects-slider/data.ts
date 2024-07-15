import { slides } from "@/lib/store/slices";
import ImageOne from "@/public/project01-2.jpg";
import ImageTwo from "@/public/project01.jpg";
import ImageThree from "@/public/project03.jpg";
import ImageFour from "@/public/project04.jpg";
import { getTranslations } from "next-intl/server";

export async function slidesDataProvider() {
	const t = await getTranslations("home.projects");

	const projectsKeys = [
		"project_one",
		"project_two",
		"project_three",
		"project_four",
	];
	const featuresKeys = ["one", "two", "three", "four"];

	const images = [ImageOne, ImageTwo, ImageThree, ImageFour];
	const projects = projectsKeys.map((key, i) => {
		const title = t(key + ".title");
		const features = featuresKeys.map((k) => {
			return {
				title: t(`${key}.features.${k}.title`),
				content: t(`${key}.features.${k}.content`),
			};
		});
		return {
			id: i + 1,
			index: i + 1,
			image: images[i],
			title,
			features,
			highlights: {
				sector: t(`${key}.highlights.sector`),
				industry: t(`${key}.highlights.industry`),
				client: t(`${key}.highlights.client`),
			},
		} satisfies slides[0];
	});

	return projects;
}
