import cn from "@/utils/cn";
import * as React from "react";

interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	customRef?: React.Ref<HTMLDivElement>;
	noMaxWidth?: boolean;
	className?: string;
	children: React.ReactNode;
	height:
		| "full"
		| "screen"
		| "dvh"
		| "minScreen"
		| "minFull"
		| "maxScreen"
		| "maxFull"
		| "custom";
	flex?:
		| "row-center"
		| "row-start"
		| "row-end"
		| "col-center"
		| "col-start"
		| "col-end";
}

const Container: React.FunctionComponent<IContainerProps> = ({
	noMaxWidth,
	children,
	height,
	className,
	flex = "col-start",
	customRef,
	...rest
}) => {
	return (
		<section
			ref={customRef}
			{...rest}
			className={cn(
				"container mx-auto px-5 w-full flex",
				!noMaxWidth && "max-w-7xl",
				height === "full" && "h-full",
				height === "screen" && "h-dvh",
				height === "dvh" && "h-dvh",
				height === "minScreen" && "min-h-dvh",
				height === "minFull" && "min-h-full",
				height === "maxScreen" && "max-h-dvh",
				height === "maxFull" && "max-h-full",
				// flex
				flex === "row-center" && "flex-row justify-center items-center",
				flex === "row-start" && "flex-row justify-start items-center",
				flex === "row-end" && "flex-row justify-end items-center",
				flex === "col-center" && "flex-col justify-center items-center",
				flex === "col-start" && "flex-col justify-start items-center",
				flex === "col-end" && "flex-col justify-end items-center",

				className,
			)}
		>
			{children}
		</section>
	);
};

export default Container;
