import type { Metadata } from "next";
import { Raleway } from "next/font/google";

import { ThemeProvider } from "@/contexts/Themes";
import cn from "@/utils/cn";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Blog dos caça",
	description: "Blog dos mestres da noite",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className={cn(raleway.className, "subpixel-antialiased")} lang="en">
			<body>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
