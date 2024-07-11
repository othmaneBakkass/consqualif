import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ConsQualif | home",
	description:
		"Welcome to ConsQualif - a trusted name in the construction industry. With a passion for transforming spaces and an unwavering commitment to quality, we are your go-to partner for all your renovation needs.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
