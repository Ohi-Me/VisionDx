"use client";
import ReactFullpage from "@fullpage/react-fullpage";
import Image from "next/legacy/image";
import "../globals.css";
import { motion } from "framer-motion";
import Link from "next/link";

// components
import Button from "@/components/Button";
import LineAnime from "@/components/LineAnime";
//img
import Heart from "@/public/img/heart.png";
import Problem from "@/public/img/Cure1.png"
import Check from "@/public/img/Check.png";
import Cure from "@/public/img/Cure.png";
import Contact from "@/public/img/Contact.png"
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";

const MyPage = () => {
	const fullpageOptions = {
		anchors: ["Home", "Navigate", "MediSync", "VitalVoyage" , "GetinTouch"],
		scrollingSpeed: 1000,
		licenseKey: "gplv3-license",
		menu: "#SideBar",
		lockAnchors: false,
		
	};

	return (
		<div>
			<ReactFullpage
				render={({ state, fullpageApi }) => (
					<ReactFullpage.Wrapper>
						<div className="section">
							<div className="mx-auto container grid grid-cols-1 md:grid-cols-3 gap-4 p-10 overflow-hidden">
								<motion.div
									className="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start"
									initial={{ x: -100, opacity: 0 }}
									whileInView={{ x: 0, opacity: 1 }}
									transition={{
										type: "spring",
									}}>
									<div className="block md:hidden col-span-1 mx-auto my-10">
										<div className="bg-slate-500 rounded-full h-60 w-60 grayscale hover:grayscale-0">
											<Image
												src={Heart}
												width={500}
												height={500}
												className="rounded-full w-full h-full object-cover "
												alt="VisionDx"
												placeholder="blur"
											/>
										</div>
									</div>
									<motion.h3
										className="uppercase text-xl mb-3 font-normal text tracking-[.5rem] text-gray-500"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.2,
											type: "spring",
										}}>
										VisionDx
									</motion.h3>
									<motion.h1
										className="text-black text-5xl md:text-8xl font-bold my-2 md:my-5"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.3,
											type: "spring",
										}}>
										Your Lighthouse
									</motion.h1>
									<motion.p
										className="title text-md  md:text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem]"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.4,
											type: "spring",
										}}>
										Enter the illuminating world of VisionDX, where we serve as your guiding light through the intricacies of healthcare. With a vast array of precisely curated articles, research findings, and in-depth analysis. Discover disease intricacies, discover new treatments, and embark on an informed decision-making journey, all at your fingertips.
									</motion.p>
									<motion.div
										className="buttons flex flex-row justify-center items-center space-x-4 mt-10"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.5,
											type: "spring",
										}}>
										<Button variation="primary">
											Learn More
										</Button>
										<Button variation="secondary">
											<a href="#GetinTouch">Get In Touch</a>
										</Button>
									</motion.div>
								</motion.div>
								<motion.div
									className="hidden md:flex col-span-1 mx-auto justify-center items-center "
									initial={{ x: 100, opacity: 0 }}
									whileInView={{ x: 0, opacity: 1 }}
									transition={{
										delay: 0.7,
										type: "spring",
									}}>
									<div className="rounded-full h-auto w-auto  lg:px-12 grayscale hover:grayscale-0">
										<Image
											src={Heart}
											width={400}
											height={550}
											placeholder="blur"
											alt="VisionDx"
											className="rounded-full w-full h-full object-cover"
										/>
									</div>
								</motion.div>
							</div>
						</div>
						<div className="section">
							<div className="mx-auto container grid grid-cols-1 md:grid-cols-3 gap-4 p-10 overflow-hidden">
								<motion.div
									className="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start"
									initial={{ x: -100, opacity: 0 }}
									whileInView={{ x: 0, opacity: 1 }}
									transition={{
										type: "spring",
									}}>
									<div className="block md:hidden col-span-1 mx-auto my-10">
										<div className="bg-slate-500 rounded-full h-60 w-60 grayscale hover:grayscale-0">
											<Image
												src={Problem}
												width={500}
												height={500}
												className="rounded-full w-full h-full object-cover "
												alt="VisionDx"
												placeholder="blur"
											/>
										</div>
									</div>
									<motion.h3
										className="uppercase text-xl mb-3 font-normal text tracking-[.5rem] text-gray-500"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.2,
											type: "spring",
										}}>
										VisionDx
									</motion.h3>
									<motion.h1
										className="text-black text-5xl md:text-8xl font-bold my-2 md:my-5"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.1,
											type: "spring",
										}}>
										Explore VisionDX
									</motion.h1>
									<motion.p
										className="title text-md  md:text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem]"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.2,
											type: "spring",
										}}>
										Discover the essence of VisionDX as we provide you with an in-depth understanding of our application&apos;s purpose, features, and benefits.
									</motion.p>
									<motion.div
										className="buttons flex flex-row justify-center items-center space-x-4 mt-10"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.5,
											type: "spring",
										}}>
										<Button variation="primary">
											<Link href="/Navigate">
												Learn More
											</Link>
										</Button>
									</motion.div>
								</motion.div>
								<motion.div
									className="hidden md:flex col-span-1 mx-auto justify-center items-center "
									initial={{ x: 100, opacity: 0 }}
									whileInView={{ x: 0, opacity: 1 }}
									transition={{
										delay: 0.7,
										type: "spring",
									}}>
									<div className="rounded-full h-auto w-auto  lg:px-12 grayscale hover:grayscale-0">
										<Image
											src={Problem}
											width={400}
											height={550}
											placeholder="blur"
											alt="VisionDx"
											className="rounded-full w-full h-full object-cover"
										/>
									</div>
								</motion.div>
							</div>
						</div>
						<div className="section">
							<div className="mx-auto container grid grid-cols-1 md:grid-cols-3 gap-4 p-10 overflow-hidden">
								<motion.div
									className="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start"
									initial={{ x: -100, opacity: 0 }}
									whileInView={{ x: 0, opacity: 1 }}
									transition={{
										type: "spring",
									}}>
									<div className="block md:hidden col-span-1 mx-auto my-10">
										<div className="bg-slate-500 rounded-full h-60 w-60 grayscale hover:grayscale-0">
											<Image
												src={Cure}
												width={500}
												height={500}
												className="rounded-full w-full h-full object-cover "
												alt="VisionDx"
												placeholder="blur"
											/>
										</div>
									</div>
									<motion.h3
										className="uppercase text-xl mb-3 font-normal text tracking-[.5rem] text-gray-500"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.2,
											type: "spring",
										}}>
										VisionDx
									</motion.h3>
									<motion.h1
										className="text-black text-5xl md:text-8xl font-bold my-2 md:my-5"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.1,
											type: "spring",
										}}>
										Wellness Analysis
									</motion.h1>
									<motion.p
										className="title  text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.2,
											type: "spring",
										}}>
										Through MediSync, start your journey to better health. Here, we provide you with a tailored analysis of your health risk. We&apos;ll provide you
										{" "}
										<span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
										{" "}
										Important information about your risk of developing diabetes or heart disease with just a few simple inputs, enabling you to take preventive measures for better health.
										</span>
									</motion.p>
									<motion.div
										className="buttons flex flex-row justify-center items-center space-x-4 mt-10"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.5,
											type: "spring",
										}}>
										<Button variation="primary">
											<Link href="/MediSync">
												Learn More
											</Link>
										</Button>
									</motion.div>
								</motion.div>
								<motion.div
									className="hidden md:flex col-span-1 mx-auto justify-center items-center "
									initial={{ x: 100, opacity: 0 }}
									whileInView={{ x: 0, opacity: 1 }}
									transition={{
										delay: 0.7,
										type: "spring",
									}}>
									<div className="rounded-full h-auto w-auto  lg:px-12 grayscale hover:grayscale-0">
										<Image
											src={Check}
											width={400}
											height={550}
											placeholder="blur"
											alt="VisionDx"
											className="rounded-full w-full h-full object-cover"
										/>
									</div>
								</motion.div>
							</div>
						</div>
						<div className="section">
							<div className="mx-auto container grid grid-cols-1 md:grid-cols-3 gap-4 p-10 overflow-hidden">
								<motion.div
									className="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start"
									initial={{ x: -100, opacity: 0 }}
									whileInView={{ x: 0, opacity: 1 }}
									transition={{
										type: "spring",
									}}>
									<div className="block md:hidden col-span-1 mx-auto my-10">
										<div className="bg-slate-500 rounded-full h-60 w-60 grayscale hover:grayscale-0">
											<Image
												src={Problem}
												width={500}
												height={500}
												className="rounded-full w-full h-full object-cover "
												alt="VisionDx"
												placeholder="blur"
											/>
										</div>
									</div>
									<motion.h3
										className="uppercase text-xl mb-3 font-normal text tracking-[.5rem] text-gray-500"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.2,
											type: "spring",
										}}>
										VisionDx
									</motion.h3>
									<motion.h1
										className="text-black text-5xl md:text-8xl font-bold my-2 md:my-5"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.1,
											type: "spring",
										}}>
										Pathways to Wellness
									</motion.h1>
									<motion.p
										className="title text-md  md:text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem]"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.2,
											type: "spring",
										}}>
										Your health and wellbeing are our top priorities at VitalVoyage. This area gives you the tools you need to take charge of your health journey, including actionable insights, extensive resources, and steadfast support. Develop your knowledge and make wise decisions for a life that is full of vitality.
									</motion.p>
									<motion.div
										className="buttons flex flex-row justify-center items-center space-x-4 mt-10"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.5,
											type: "spring",
										}}>
										<Button variation="primary">
											<Link href="/VitalVoyage">
												Learn More
											</Link>
										</Button>
									</motion.div>
								</motion.div>
								<motion.div
									className="hidden md:flex col-span-1 mx-auto justify-center items-center "
									initial={{ x: 100, opacity: 0 }}
									whileInView={{ x: 0, opacity: 1 }}
									transition={{
										delay: 0.7,
										type: "spring",
									}}>
									<div className="rounded-full h-auto w-auto  lg:px-12 grayscale hover:grayscale-0">
										<Image
											src={Problem}
											width={400}
											height={550}
											placeholder="blur"
											alt="VisionDx"
											className="rounded-full w-full h-full object-cover"
										/>
									</div>
								</motion.div>
							</div>
						</div>
						<div className="section">
							<div className="mx-auto container grid grid-cols-1 md:grid-cols-3 gap-4 p-10 overflow-hidden">
								<motion.div
									className="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start"
									initial={{ x: -100, opacity: 0 }}
									whileInView={{ x: 0, opacity: 1 }}
									transition={{
										type: "spring",
									}}>
									<div className="block md:hidden col-span-1 mx-auto my-10">
										<div className="bg-slate-500 rounded-full h-60 w-60 grayscale hover:grayscale-0">
											<Image
												src={Problem}
												width={500}
												height={500}
												className="rounded-full w-full h-full object-cover "
												alt="VisionDx"
												placeholder="blur"
											/>
										</div>
									</div>
									<motion.h3
										className="uppercase text-xl mb-3 font-normal text tracking-[.5rem] text-gray-500"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.2,
											type: "spring",
										}}>
										VisionDx
									</motion.h3>
									<motion.h1
										className="bg-white lg:bg-transparent bg-opacity-50 px-3 md-px-0 text-black text-5xl md:text-8xl font-bold mb-3"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.1,
											type: "spring",
										}}>
										Reach out
									</motion.h1>
									<LineAnime />
									<motion.p
										className="title  text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.2,
											type: "spring",
										}}>
										We&apos;re here to assist you.
										{" "}
										<span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
										{" "}
										If you have any questions, feedback, or need assistance, don&apos;t hesitate to reach out.
            							</span>
									</motion.p>
									<div className="flex justify-center items-center space-x-4">
										<motion.a
											href="mailto:rohitaryan0613@gmail.com?subject=Hello&body=Hello Alvalens,"
											className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
											initial={{ y: 40, opacity: 0 }}
											whileInView={{ y: 0, opacity: 1 }}
											transition={{
												y: { delay: 0.1 },
												opacity: { delay: 0.2 },
											}}>
											<FontAwesomeIcon
												icon={faMapMarker}
												className="text-3xl"
											/>
										</motion.a>
										<motion.a
											href="https://github.com/Ohi-Me"
											target="_blank"
											rel="noopener noreferrer"
											className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
											initial={{ opacity: 0, y: 40 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{
												y: { delay: 0.2 },
												opacity: { delay: 0.3 },
											}}>
											<FontAwesomeIcon
												icon={faGithub}
												className="text-3xl"
											/>
										</motion.a>
									</div>
								</motion.div>
								<motion.div
									className="hidden md:flex col-span-1 mx-auto justify-center items-center "
									initial={{ x: 100, opacity: 0 }}
									whileInView={{ x: 0, opacity: 1 }}
									transition={{
										delay: 0.7,
										type: "spring",
									}}>
									<div className="rounded-full h-auto w-auto  lg:px-12 grayscale hover:grayscale-0">
										<Image
											src={Contact}
											width={400}
											height={550}
											placeholder="blur"
											alt="VisionDx"
											className="rounded-full w-full h-full object-cover"
										/>
									</div>
								</motion.div>
							</div>
						</div>
					</ReactFullpage.Wrapper>
				)}
				{...fullpageOptions}
			/>
		</div>
	);
};

export default MyPage;
