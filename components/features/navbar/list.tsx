"use client";

import { X } from "lucide-react";
import { NavbarListItem } from "./list-item";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { stagger, useAnimate } from "framer-motion";
import { useHydrate } from "@/lib/hooks/first-render";
import { useMediaQuery } from "usehooks-ts";
export function ListContainer({
	show,
	setShow,
}: {
	show: boolean;
	setShow: Dispatch<SetStateAction<boolean>>;
}) {
	const [listScope, animate] = useAnimate();
	const [listItemsScope, listItemsAnimate] = useAnimate();
	const hasHydrated = useHydrate();
	const isTabletSizeOrLower = useMediaQuery("(max-width: 768px)");
	const [hasAnimationEffect, setHasAnimationEffect] = useState(false);

	function cleanupAnimationEffect() {
		listScope.current.style = "";
		listItemsScope.current
			.querySelectorAll("li")
			.forEach((el: HTMLUListElement) => el.setAttribute("style", ""));
	}
	async function openAnimation() {
		await animate([
			[
				listScope.current,
				{
					opacity: [0, 1],
					top: ["-100%", "0"],
				},
				{
					ease: [0.33, 1, 0.68, 1],
					duration: 0.5,
				},
			],
		]);
		await listItemsAnimate([
			[
				"li",
				{
					opacity: [0, 1],
					y: [8, 0],
				},
				{
					ease: [0.33, 1, 0.68, 1],
					duration: 0.3,
					delay: stagger(0.1),
				},
			],
		]);
		setHasAnimationEffect(true);
	}

	async function closeAnimation() {
		await listItemsAnimate([
			[
				"li",
				{
					opacity: [1, 0],
					y: [0, 8],
				},
				{
					ease: [0.33, 1, 0.68, 1],
					duration: 0.3,
				},
			],
		]);
		await animate([
			[
				listScope.current,
				{
					opacity: [1, 0],
					top: ["0", "-100%"],
				},
				{
					ease: [0.33, 1, 0.68, 1],
					duration: 0.3,
				},
			],
		]);
	}

	useEffect(() => {
		if (!hasHydrated) {
			return;
		}

		if (!isTabletSizeOrLower) {
			if (hasAnimationEffect) {
				setHasAnimationEffect(false);
				cleanupAnimationEffect();
				setShow(false);
			}
			return;
		}
		if (show) {
			openAnimation();
			setHasAnimationEffect(true);
			return;
		}
		if (hasAnimationEffect) {
			closeAnimation();
		}
	}, [show, hasHydrated, isTabletSizeOrLower, hasAnimationEffect]);

	return (
		<ul
			ref={listScope}
			className="flex flex-col md:flex-row z-50 md:z-0 py-4 px-4 md:px-0 md:py-0 rounded-sm md:bg-transparent justify-start md:justify-center opacity-0 md:opacity-100 items-start md:items-center w-screen h-screen fixed md:static md:w-fit md:h-fit md:top-0 -top-full left-0 bg-gray-900/80 backdrop-blur-sm"
		>
			<button
				onClick={() => setShow(false)}
				className="self-end p-2	group mb-1 rounded-md bg-gray-800/50 md:hidden"
			>
				<X className="size-4 text-gray-300 group-focus:text-red-300 group-hover:text-red-300" />
			</button>
			<ul
				ref={listItemsScope}
				className="h-full w-full md:w-fit md:gap-x-6 md:h-fit px-4 flex flex-col md:flex-row md:items-center justify-between py-4 items-start"
			>
				<NavbarListItem href="#" content="Home" />
				<NavbarListItem href="#" content="Projects" />
				<NavbarListItem href="#" content="Services" />
				<NavbarListItem href="#" content="Testimonials" />
				<NavbarListItem href="#" content="About us" />
				<NavbarListItem href="#" content="contact us" />
			</ul>
		</ul>
	);
}
