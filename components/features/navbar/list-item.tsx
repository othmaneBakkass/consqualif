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
				"capitalize text-4xl md:text-sm md:h-fit text-foreground h-full font-bold md:font-medium overflow-hidden list-none isolate  opacity-0 md:opacity-100  hover:cursor-pointer duration-300 transition-colors  hover:bg-primary md:hover:bg-transparent  w-full md:w-max translate-y-2 md:translate-y-0",
				className
			)}
		>
			<Go
				href={href}
				className="focus:text-primary transition-transform duration-700 md:duration-300 text-ease w-full md:w-max h-full px-3 md:p-0 group flex hover:rotate-x-90 md:hover:rotate-x-0 relative justify-start transform-style-3d md:transform-style-flat items-center "
			>
				<p className=" transition-transform-opacity group-hover:text-accent-foreground duration-500 md:duration-300 text-ease md:ease-in md:group-hover:translate-y-0 md:group-hover:opacity-100 group-hover:-translate-y-full group-hover:opacity-0">
					{content}
				</p>
				<p className="md:hidden  absolute translate-y-[9px] group-hover:translate-y-[0px] transition-transform-opacity origin-[bottom_center] duration-700 text-ease group-hover:opacity-100 opacity-0 -rotate-x-90 text-stone-950">
					{content}
				</p>
			</Go>
		</li>
	);
}
