export function HighLights({
	data,
	sector,
	industry,
	client,
}: {
	data: {
		sector: string;
		industry: string;
		client: string;
	};
	sector: string;
	industry: string;
	client: string;
	currentSlideId: number;
}) {
	return (
		<div className="col-[1/3] sm:col-[3/4] row-[5/6] bg-primary z-20 flex gap-x-3  sm:gap-x-8 px-4 sm:px-7 pb-2 justify-between sm:justify-start items-center">
			<div>
				<p>{sector}</p>
				<p className="font-medium">{data.sector}</p>
			</div>
			<div>
				<p>{industry}</p>
				<p className="font-medium">{data.industry}</p>
			</div>
			<div>
				<p>{client}</p>
				<p className="font-medium">{data.client}</p>
			</div>
		</div>
	);
}
