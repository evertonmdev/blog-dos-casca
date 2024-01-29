"use client";
import { ThemeProvider as NextThemeProvider } from "next-themes";

interface IThemeProviderProps {
	children: React.ReactNode;
}
export const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
	return <NextThemeProvider defaultTheme="black">{children}</NextThemeProvider>;
};
