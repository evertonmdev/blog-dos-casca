"use client";
import cn from "@/utils/cn";
import { themes } from "@/utils/themes";
import { AlignLeft, BellDot, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import * as React from "react";

const Header: React.FC = () => {
	const { setTheme, theme: AtTheme } = useTheme();
	const pathname = usePathname();

	const routes = [
		{
			name: "Casa",
			path: "/",
		},
		{
			name: "Blog",
			path: "/blog",
		},
		{
			name: "Chat",
			path: "/chat",
		},
	];
	return (
		<nav className="navbar w-full h-fit flex justify-between items-center fixed top-0 z-[99] backdrop-blur-sm">
			<div className="navbar-start">
				<div className="dropdown ">
					<button
						tabIndex={0}
						type="button"
						className="btn btn-ghost h-fit min-h-fit py-3 m-1 rounded-md "
					>
						<AlignLeft size={18} />
					</button>
					<ul className="dropdown-content z-[1] menu p-2 overflow-y-auto shadow bg-base-100 rounded-box w-52 flex-nowrap">
						<li>
							<details>
								<summary>Temas</summary>
								<ul className="overflow-y-auto max-h-[300px] ">
									{themes?.map((theme) => (
										<li key={theme} className="menu-title">
											<button
												type="button"
												className={cn(
													"btn btn-ghost min-h-0 h-fit py-2 rounded-md",
													theme === AtTheme && "active",
												)}
												onClick={() => setTheme(theme)}
											>
												{theme}
											</button>
										</li>
									))}
								</ul>
							</details>
						</li>
						<li>
							<details>
								<summary>Rotas</summary>
								<ul>
									{routes.map(({ name, path }) => (
										<li key={path} className="menu-title">
											<a
												href={path}
												className={cn(
													pathname === path && "active",
													"btn btn-ghost min-h-0 h-fit py-2 rounded-md",
												)}
											>
												{name}
											</a>
										</li>
									))}
								</ul>
							</details>
						</li>
					</ul>
				</div>
			</div>
			<a
				href="/"
				className="navbar-center btn-ghost btn rounded-lg min-h-0 h-fit py-2"
			>
				<h1 className="navbar-start font-bold text-lg w-fit ">Os Caça</h1>
			</a>
			<div className="navbar-end">
				<button
					className="btn btn-ghost  h-fit min-h-fit py-3 m-1 rounded-md "
					type="button"
				>
					<BellDot size={20} />
				</button>
			</div>
		</nav>
	);
};

export default Header;
