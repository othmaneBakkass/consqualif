"use client";
import { useAnimate, stagger, useInView } from "framer-motion";
import { useEffect } from "react";

export function TextStagger({ text }: { text: string }) {
	const words = text.split(" ");
	const [scope, animate] = useAnimate();
	const isInView = useInView(scope, {
		once: true,
	});
	useEffect(() => {
		if (isInView) {
			animate([
				[
					"span[data-char]",
					{
						opacity: [0, 1],
						y: [8, 0],
						x: ["-4px", 0],
					},
					{
						duration: 0.2,
						opacity: {
							duration: 1,
						},
						ease: [0.16, 1, 0.3, 1],
						delay: stagger(0.05),
					},
				],
			]);
		}
	}, [isInView]);

	return (
		<span ref={scope}>
			{words.map((word, i) => {
				const chars = Array.from(word);

				const letters = chars.map((char, i) => (
					<span
						key={char + i}
						aria-hidden
						data-char
						className="opacity-0 translate-y-2 -translate-x-1 inline-block"
					>
						{char}
					</span>
				));

				return (
					<span key={word + i} className="inline-block">
						{...letters}&nbsp;
					</span>
				);
			})}
			<span className="sr-only">{text}</span>
		</span>
	);
}
