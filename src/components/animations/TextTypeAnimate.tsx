"use client";
import { motion } from "framer-motion";
import * as React from "react";

interface ITextTypeAnimateProps {
	content: string;
	delay: number;
}

const TextTypeAnimate: React.FunctionComponent<ITextTypeAnimateProps> = ({
	content,
	delay,
}) => {
	return (
		<motion.code>
			{content.split("").map((char, index) => {
				return (
					<motion.span
						key={`char_${index}_${Date.now()}`}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: index * delay }}
					>
						{char}
					</motion.span>
				);
			})}
		</motion.code>
	);
};

export default TextTypeAnimate;
