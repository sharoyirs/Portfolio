import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { IoMdClose } from "react-icons/io";

const About = () => {
	const lines = [
		{ id: 1, text: "> Rakhman.currentLocation", className: "" },
		{ id: 2, text: '"Bergen, Norway"', className: "text-macYellow" },
		{ id: 3, text: "", className: "" },
		{ id: 4, text: "> Rakhman.contactInfo", className: "" },
		{
			id: 5,
			text: `[<a href="mailto:rakhmanirs@yahoo.no" class="text-macYellow">Rakhmanirs@yahoo.no</a>, <a target="_blank" href="https://www.linkedin.com/in/rakhman-ismailov" class="text-macYellow">LinkedIn</a>, <a target="_blank" href="https://github.com/sharoyirs" class="text-macYellow">Github</a>]`,
			className: "text-macYellow mac-links",
			isHTML: true,
		},
		{ id: 6, text: "", className: "" },
		{ id: 7, text: "> Rakhman.resume", className: "" },
		{
			id: 8,
			text: `"<a target="blank" href="/pdf/Said-Rakhman_Ismailov - CV 2023.pdf" className="text-macYellow">RakhmanCV.pdf</a>"`,
			className: "text-macYellow mac-links",
			isHTML: true,
		},
		{ id: 9, text: "", className: "" },
		{ id: 10, text: "> Rakhman.interests", className: "" },
		{
			id: 11,
			text: `["Coding", "Weightlifting", "Brazilian Jiu Jitsu"]`,
			className: "text-macYellow",
		},
		{ id: 12, text: "", className: "" },
		{ id: 13, text: "> Rakhman.education", className: "" },
		{
			id: 14,
			text: `"Computer engineering, Western Norway University of Applied Sciences, Bergen"`,
			className: "text-macYellow",
		},
		{ id: 15, text: "", className: "" },
		{ id: 16, text: "> Rakhman.skills", className: "" },
		{
			id: 17,
			text: `["Sass", "JavaScript", "Python", "React", "Node", "Express", "git"]`,
			className: "text-macYellow",
		},
		{ id: 18, text: "", className: "" },
		{ id: 19, text: ">", className: "" },
	];

	const [currentLine, setCurrentLine] = useState(0);

	useEffect(() => {
		if (currentLine < lines.length) {
			const timeout = setTimeout(() => {
				setCurrentLine(currentLine + 1);
			}, 1500); 
			return () => clearTimeout(timeout);
		}
	}, [currentLine, lines.length]);

	return (
		<div
			id="about"
			className="flex justify-center flex-col items-center bg-shade pt-5 pb-14">
			<h1 className="text-white text-4xl">About <span className="text-lightBlue">Me</span></h1>
			<div className="bg-mainColor h-[450px] w-[800px] mt-8 rounded-md flex flex-col ">
				<div className="bg-macGray rounded-t-md h-5 flex gap-2 items-center pl-3">
					<div className="circle bg-red-500" >
					</div>
					<div className="circle bg-yellow-500"></div>
					<div className="circle bg-green-500"></div>
				</div>
				<div className="mt-3 ml-10 text-white">
					{lines.slice(0, currentLine).map((line) => (
						<div key={line.id} className="mac-lines">
							<span className="text-macNumber">{line.id}</span>
							{line.isHTML ? (
								<p
									className={line.className}
									dangerouslySetInnerHTML={{ __html: line.text }}
								/>
							) : (
								<p className={line.className}>
									<Typewriter
										words={[line.text]}
										loop={1}
										cursor={false}
										cursorStyle="|"
										typeSpeed={40}
										deleteSpeed={50}
										delaySpeed={0}
									/>
								</p>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default About;
