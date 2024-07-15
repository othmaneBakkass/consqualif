import Image from "next/image";
import Logo from "@/public/consqualif_logo_dark.svg";

export function Footer() {
	return (
		<div>
			<footer className="relative overflow-hidden bg-neutral-900">
				<div className="relative z-10">
					<div className="w-full max-w-5xl px-5 xl:px-0 py-3 mx-auto">
						<div className="inline-flex items-center">
							<Image alt="ConsQualif logo" src={Logo} />

							<div className="border-s border-neutral-700 ps-5 ms-5">
								<p className="text-sm text-neutral-400">
									{new Date().getFullYear()} ConsQualif Co.
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
