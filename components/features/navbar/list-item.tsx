import { cn } from "@/lib/utils";
import { ClassName } from "@/lib/types/common";
import { Go } from "@/components/ui/go";

export function NavbarListItem({
	href,
	content,
	className,
}: ClassName & { content: string; href: string }) {
	return (
		<li
			className={cn(
				"capitalize text-stone-50 text-4xl md:text-sm md:h-fit md:text-foreground h-full font-bold md:font-medium overflow-hidden list-none isolate  opacity-0 md:opacity-100  hover:cursor-pointer duration-300 transition-colors  hover:bg-primary md:hover:bg-transparent  w-full md:w-max translate-y-2 md:translate-y-0",
				className
			)}
		>
			<Go
				href={href}
				className="focus:text-primary transition-transform duration-700 md:duration-300 text-ease w-full md:w-max h-full px-3 md:p-0 group flex hover:rotate-x-90 md:hover:rotate-x-0 relative justify-start transform-style-3d md:transform-style-flat items-center "
			>
				<p className=" transition-transform-opacity group-hover:text-neutral-950 duration-500 md:duration-300 ">
					{content}
				</p>
			</Go>
		</li>
	);
}
