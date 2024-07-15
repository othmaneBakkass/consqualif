"use client";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
} from "@/components/ui/select";
import { Languages } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export function LanguageDropDown() {
	const router = useRouter();
	const path = usePathname();
	return (
		<div>
			<Select
				onValueChange={(v) => {
					router.push("/" + v);
					router.refresh();
				}}
				defaultValue={path}
			>
				<SelectTrigger className="w-fit gap-x-2 border-none bg-stone-200">
					<Languages size={16} />
				</SelectTrigger>
				<SelectContent className="bg-stone-200 border-none">
					<SelectItem value="en">english - anglais</SelectItem>
					<SelectItem value="fr">french - français</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
}
