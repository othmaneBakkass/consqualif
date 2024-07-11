import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Languages } from "lucide-react";

export function LanguageDropDown() {
	return (
		<div>
			<Select>
				<SelectTrigger className="w-fit gap-x-2 border-border">
					<Languages size={18} />
				</SelectTrigger>
				<SelectContent className="bg-stone-200">
					<SelectItem value="en">english - anglais</SelectItem>
					<SelectItem value="fr">french - français</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
}
