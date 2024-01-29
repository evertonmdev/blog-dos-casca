"use client";
import cn from "@/utils/cn";
import { motion } from "framer-motion";
import * as React from "react";

type IOrderAnimateContentsProps = {
	contents: {
		delay: number;
		content: React.ReactNode;
	}[];
	className?: string;
};

const OrderAnimateContents: React.FunctionComponent<
	IOrderAnimateContentsProps
> = ({ contents, className }) => {
	return (
		<div className={cn(className)}>
			{contents.map((item, index) => (
				<motion.div
					key={`item_${item.delay}_${index}`}
					initial={{ opacity: 0 }}
					viewport={{
						once: true,
					}}
					whileInView={{ opacity: 1 }}
					transition={{ delay: item.delay * index }}
				>
					{item.content}
				</motion.div>
			))}
		</div>
	);
};

export default OrderAnimateContents;
