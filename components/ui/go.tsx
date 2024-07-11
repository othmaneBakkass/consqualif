import { Children, ClassName } from "@/lib/types/common";
import Link, { LinkProps } from "next/link";

export function Go({ children, ...props }: LinkProps & Children & ClassName) {
	return (
		<>
			<Link {...props} className={props.className} prefetch={false}>
				{children}
			</Link>
		</>
	);
}
