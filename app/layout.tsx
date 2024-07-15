import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalProviders } from "@/lib/providers/global";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ConsQualif | home",
	description:
		"Welcome to ConsQualif - a trusted name in the construction industry. With a passion for transforming spaces and an unwavering commitment to quality, we are your go-to partner for all your renovation needs.",
};

export default function RootLayout({
	children,
	params: { locale },
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	return (
		<html lang={locale} className="dark">
			<body className={inter.className}>
				<GlobalProviders>{children}</GlobalProviders>
			</body>
		</html>
	);
}
