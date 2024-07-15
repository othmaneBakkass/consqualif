import { cn } from "@/lib/utils";

export function Indicators({
	numberOfSlides,
	currentSlideId,
	setCurrentSlideId,
}: {
	numberOfSlides: number;
	currentSlideId: number;
	setCurrentSlideId: (id: number) => void;
}) {
	return (
		<div className="flex py-4 sm:py-0 items-center justify-start gap-x-7 col-[1/3] row-[6/7] sm:row-[5/6] sm:col-[1/2]">
			{Array.from(new Array(numberOfSlides)).map((el, index) => (
				<button
					key={index}
					className={cn(
						"rounded-full",
						index + 1 === currentSlideId
							? "bg-primary h-3 w-6"
							: "bg-gray-700 size-3 "
					)}
					onClick={() => setCurrentSlideId(index + 1)}
					aria-label={`click to move to slide number ${index + 1}`}
				></button>
			))}
		</div>
	);
}
