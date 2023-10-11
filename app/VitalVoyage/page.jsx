"use client";
import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/legacy/image";
import FixedButon from "@/components/FixedButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";


import LineAnime from "@/components/LineAnime";
//img
import Cure from "@/public/img/Cure.png";
import Cure1 from "@/public/img/Cure1.png";
import Cure2 from "@/public/img/Cure2.png";
export default function Page() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	
	const handleBack = () => {
		window.location.href = "/";
	};
	return (
		<>
			<main className="overflow-hidden">
				<FixedButon onClick={handleBack}>
					<FontAwesomeIcon
						icon={faChevronLeft}
						className="text-black pr-10"
					/>
				</FixedButon>
				<div className="relative h-screen w-screen  gap-4 p-10 flex justify-center items-center flex-col mb-10 overflow-hidden">
					<div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
						<motion.div
							initial={{ scale: 1 }}
							animate={{ scale: 1.6 }}
							transition={{ ease: "circOut", duration: 1 }}
							className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0">
							<Image
								src={Cure}
								alt="VisionDx"
								layout="fill"
								objectFit="cover"
								placeholder="blur"
							/>
						</motion.div>
					</div>
					<div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none bg-gray-100 bg-opacity-50 md:bg-transparent md:pt-0">
						<h1 className="md:bg-white bg-transparent lg:bg-transparent bg-opacity-50 md-px-0 text-black text-5xl md:text-8xl font-bold">
						    VitalVoyage
						</h1>
						<LineAnime />
						<p className="title text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5 ">
						    VitalVoyage is your one-stop shop for comprehensive information on cardiovascular and diabetes disorders.{" "}
							<span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
								{" "}
								Dive deep into the realm of heart health, from prevention to treatment,
							</span>
						    and discover the most recent medical breakthroughs and lifestyle options.
						</p>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, ease: "circOut" }}
							onClick={() => {
								window.scrollTo({
									top: 1000,
									behavior: "smooth",
								});
							}}
							className="mb-3">
							<Button variation="primary">Scroll Down</Button>
						</motion.div>
					</div>
				</div>
				<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
					<div className="flex justify-center items-center flex-col my-5 self-start ">
						<div className="bg-gray-700 w-28 h-1 rounded-full mb-3 self-start"></div>
						<div className="bg-gray-700 w-28 h-1 rounded-full translate-x-12"></div>
						<h1 className="text-3xl font-bold mt-3">Navigating to a Healthier Heart and Life with Diabetes</h1>
					</div>
				</div>
				<div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
					<div className="flex justify-center items-start flex-col mb-5 ">
						<div className="images relative w-full  aspect-square">
							<div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
								<motion.div
									initial={{ opacity: 0, scale: 0.5, x: 100 }}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									className="w-full h-full">
									<Image
										src={Cure}
										alt="VisionDx"
										layout="fill"
										objectFit="cover"
										placeholder="blur"
									/>
								</motion.div>
							</div>
							<div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
								<motion.div
									initial={{
										opacity: 0,
										scale: 0.5,
										x: -100,
									}}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									transition={{ delay: 0.3 }}
									className="w-full h-full">
									<Image
										src={Cure1}
										alt="VisionDx"
										layout="fill"
										objectFit="cover"
										placeholder="blur"
									/>
								</motion.div>
							</div>
							<div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
								<motion.div
									initial={{
										opacity: 0,
										scale: 0.5,
										x: -100,
									}}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									transition={{
										delay: 0.5,
									}}
									className="w-full h-full">
									<Image
										src={Cure2}
										alt="Alvalens"
										layout="fill"
										objectFit="cover"
										placeholder="blur"
									/>
								</motion.div>
							</div>
						</div>
					</div>
					<motion.div
						className="flex justify-center items-start flex-col mb-5 md:px-10"
						initial={{
							opacity: 0,
							x: 200,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.5,

							type: "spring",
						}}>
						<h2 className="text-2xl font-bold tracking-wider mb-3">
						    VisionDX, we provide you with a comprehensive guide that takes you on a journey through the intricacies of heart health and diabetes care. Our mission is to empower you with the latest information, breakthroughs, and lifestyle choices to enhance your well-being and reduce your risk of heart disease and diabetes.		
						</h2>
						<p className="text-gray-600 text-justify title text-lg">
						    we explore both heart health and diabetes management comprehensively.  
							<span className="text-black font-medium">
								{" "}
								we emphasise the significance of  
							</span>{" "}
							    preventive and advocate for a heart-healthy lifestyle.
							<span className="text-black font-medium">
								{" "}
								We provide advice for implementing 
							</span>{" "}
							    heart-healthy lifestyle modifications,							
							<span className="text-black font-medium">
							    such as exercise regimes, dietary alterations, and stress management approaches. 
							</span>{" "}
							    We offer dietary guidelines, as well as diabetic-							<span className="text-black font-medium">
							</span>{" "}
							    friendly meal planning and recipes,
							<span className="text-black font-medium">
								{" "}
								to help you on your way to  
							</span>{" "}
							    achieving stable blood sugar levels.						
							</p>
					</motion.div>
				</div>
				<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
					<div className="flex justify-center items-center flex-col my-5 self-start ">
						<motion.div
							className="bg-gray-700 w-28 h-1 rounded-full mb-3 self-start"
							initial={{
								opacity: 0,
								x: -100,
							}}
							whileInView={{
								opacity: 1,
								x: 0,
							}}
							transition={{
								delay: 0.5,

								type: "spring",
							}}>
						</motion.div>
						<motion.div
							className="bg-gray-700 w-28 h-1 rounded-full"
							initial={{
								opacity: 0,
								x: 200,
							}}
							whileInView={{
								opacity: 1,
								x: -50,
							}}
							transition={{
								delay: 0.5,

								type: "spring",
							}}>
						</motion.div>
						<motion.h1
							className="text-3xl font-bold mt-3"
							initial={{
								opacity: 0,
								x: -200,
							}}
							whileInView={{
								opacity: 1,
								x: 0,
							}}
							transition={{
								delay: 0.7,

								type: "spring",
							}}>
							Unveiling Heart & Diabetes Wisdom
						</motion.h1>
					</div>
				</div>
				<div className="w-screen mx-auto container gap-10 p-10 grid grid-cols-1 md:grid-cols-2 my-10 ">
					<motion.div
						className="flex justify-center items-start flex-col mb-5 "
						initial={{
							opacity: 0,
							x: -200,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.5,
							type: "spring",
						}}>
						<h2 className="text-2xl font-bold mb-3">
						    Cardiovascular diseases | WHO | Treatment
						</h2>
						<p className="pl-3 text-gray-500  relative text-justify">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							Making lifestyle changes is a crucial step in managing high blood pressure, which can include adopting a healthy, low-salt diet, achieving and maintaining a healthy weight, 
							engaging in regular physical activity, and quitting smoking. If you have high blood pressure, your doctor may also recommend medication to help control it, and your specific 
							blood pressure target may vary depending on your existing health conditions. If you have cardiovascular disease, diabetes, chronic kidney disease, or a high risk of cardiovascular 
							issues, your goal is typically to maintain blood pressure levels below 130/80. For most individuals, the general target is to have blood pressure readings below 140/90. There 
							are several types of commonly prescribed blood pressure medications, including ACE inhibitors (like enalapril and lisinopril), Angiotensin-2 receptor blockers (ARBs like losartan 
							and telmisartan), Calcium channel blockers (such as amlodipine and felodipine), and Diuretics (like hydrochlorothiazide and chlorthalidone), each working to lower blood pressure 
							through different mechanisms. Your doctor will recommend the most suitable treatment plan based on your unique health profile.
						</p>
					</motion.div>
					<motion.div
						className="flex justify-center items-start flex-col mb-5 "
						initial={{
							opacity: 0,
							x: 200,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.5,
							type: "spring",
						}}>
						<h2 className="text-2xl font-bold mb-3">
						    Diabetes | WHO | Treatment
						</h2>
						<p className="pl-3 text-gray-500 relative text-justify">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							Early diagnosis of diabetes can be achieved through relatively affordable blood glucose testing, which is vital for timely intervention. Individuals with type 1 diabetes 
							depend on insulin injections for their survival. Maintaining a healthy lifestyle is paramount in managing diabetes effectively. For those with type 2 diabetes, medications 
							may be necessary to regulate blood sugar levels, including options like metformin, sulfonylureas, and sodium-glucose co-transporters type 2 (SGLT-2) inhibitors, which can 
							include insulin injections. In addition to blood sugar control, many individuals with diabetes require medications to manage blood pressure and statins to mitigate the risk 
							of complications. Further medical attention may be required to address diabetes-related effects, such as foot care for ulcers, screening and treatment for kidney disease, 
							and regular eye exams to detect and manage retinopathy, which can lead to blindness.
						</p>
					</motion.div>
					<motion.div
						className="flex justify-center items-start flex-col mb-5 "
						initial={{
							opacity: 0,
							x: -200,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.5,
							type: "spring",
						}}>
						<h3 className="text-2xl font-bold mb-3">
						    Cardiovascular diseases | WHO Response
						</h3>
						<p className="pl-3 text-gray-500  relative text-justify">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							The World Health Organization (WHO) plays a pivotal role in addressing hypertension as a significant public health concern globally. In 2021, WHO issued updated guidelines 
							for pharmacological treatment of hypertension in adults, offering evidence-based recommendations for treatment initiation, follow-up intervals, target blood pressure goals, 
							and defining the healthcare system roles in initiating treatment. To bolster governments' efforts in preventing and managing cardiovascular diseases, WHO, in collaboration 
							with the United States Centers for Disease Control and Prevention (U.S. CDC), launched the Global Hearts Initiative in 2016, featuring the HEARTS technical package with 
							modules encompassing lifestyle counseling, treatment protocols, access to essential medicines and technology, risk-based management, team-based care, and monitoring systems. 
							A pivotal partnership with Resolve to Save Lives, along with contributions from various organizations, has enabled the implementation of the Global Hearts Initiative in 31 
							low- and middle-income countries since 2017. These initiatives have successfully placed 7.5 million individuals on protocol-based hypertension treatment through person-centered 
							models of care, demonstrating the feasibility and effectiveness of standardized hypertension control programs on a global scale.
						</p>
					</motion.div>
					<motion.div
						className="flex justify-center items-start flex-col mb-5 "
						initial={{
							opacity: 0,
							x: 200,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.5,
							type: "spring",
						}}>
						<h3 className="text-2xl font-bold mb-3">
						    Diabetes | WHO Response
						</h3>
						<p className="pl-3 text-gray-500  relative text-justify">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							WHO is dedicated to promoting and facilitating effective measures for the surveillance, prevention, and control of diabetes and its associated complications, particularly 
							in low- and middle-income countries. This commitment is realized through various initiatives, including the provision of scientific guidelines for the prevention of major 
							noncommunicable diseases, including diabetes, the development of norms and standards for diabetes diagnosis and care, raising global awareness on World Diabetes Day 
							(observed on 14 November each year), and conducting surveillance of diabetes and its risk factors. In April 2021, WHO launched the Global Diabetes Compact, a comprehensive 
							global initiative aimed at achieving lasting improvements in diabetes prevention and care, with a particular emphasis on supporting low- and middle-income nations. Additionally, 
							in May 2021, the World Health Assembly adopted a Resolution focused on strengthening the prevention and control of diabetes, and in May 2022, it endorsed five global diabetes 
							coverage and treatment targets to be accomplished by 2030, marking significant milestones in the global fight against diabetes.
						</p>
					</motion.div>
				</div>
			</main>
		</>
	);
}
