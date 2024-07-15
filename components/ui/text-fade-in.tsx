"use client";
import { Children, ClassName } from "@/lib/types/common";
import { useAnimate, stagger } from "framer-motion";
import { useEffect } from "react";

export function TextFadeIn({
	children,
	duration,
	delay,
	className,
}: {
	duration?: number;
	delay?: number;
} & Children &
	ClassName) {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		animate([
			[
				scope.current.children,
				{
					opacity: [0, 1],
					scale: [1.1, 1],
				},
				{
					duration: duration ?? 0.4,

					delay: stagger(delay ?? 0),
					ease: [0.65, 0, 0.35, 1],
				},
			],
		]);
	}, []);

	return (
		<span className={className} ref={scope}>
			{children}
		</span>
	);
}

export const TextFadeInDefaultStyles = "opacity-0 scale-[1.1]";
