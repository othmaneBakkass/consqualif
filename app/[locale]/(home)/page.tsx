import { AboutUs } from "@/components/features/about-us";
import { ContactUs } from "@/components/features/contact-us";
import { Hero } from "@/components/features/hero";
import { ProjectsSlider } from "@/components/features/projects-slider";
import { Services } from "@/components/features/services";
import { Testimonials } from "@/components/features/testimonials";
import { Footer } from "@/components/ui/footer";

export default function Home() {
	return (
		<main className=" min-h-screen ">
			<Hero />
			<ProjectsSlider />
			<Services />
			<AboutUs />
			<Testimonials />
			<ContactUs />
			<Footer />
		</main>
	);
}
