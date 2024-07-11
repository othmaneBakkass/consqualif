"use client";
import Image from "next/image";

import Logo from "@/public/consqualif_logo_dark.svg";
import { ListContainer } from "./list";
import { useState } from "react";
import { Menu } from "lucide-react";
import { LanguageDropDown } from "./language";

export function Navbar() {
	const [show, setShow] = useState(false);

	return (
		<header className="w-full py-2">
			<nav className="w-full gap-x-3 max-w-[calc(100%-20px)] md:max-w-[90%] 2xl:max-w-5xl xl:max-w-4xl relative flex justify-between items-center mx-auto">
				<Image alt="ConsQualif logo" src={Logo} />

				<ListContainer show={show} setShow={setShow} />
				<button
					className="group ml-auto md:hidden"
					onClick={() => setShow(true)}
				>
					<Menu className="group-hover:text-primary" />
				</button>
				<LanguageDropDown />
			</nav>
		</header>
	);
}
