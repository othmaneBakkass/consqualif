import { NextIntlClientProvider } from "next-intl";
import { GlobalStoreContextProvider } from "@/lib/store/context";
import { Children } from "../types/common";
import { getMessages } from "next-intl/server";
import { slidesDataProvider } from "@/components/features/projects-slider/data";

export async function GlobalProviders({ children }: Children) {
	const messages = await getMessages();
	const data = await slidesDataProvider();
	return (
		<>
			<NextIntlClientProvider messages={messages}>
				<GlobalStoreContextProvider data={data}>
					{children}
				</GlobalStoreContextProvider>
			</NextIntlClientProvider>
		</>
	);
}
