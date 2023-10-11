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
import Navigate from "@/public/img/Navigate.png";
import Navigate1 from "@/public/img/Navigate1.png";
import Navigate2 from "@/public/img/Navigate2.png";
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
								src={Navigate}
								alt="VisionDx"
								layout="fill"
								objectFit="cover"
								placeholder="blur"
							/>
						</motion.div>
					</div>
					<div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none bg-gray-100 bg-opacity-50 md:bg-transparent md:pt-0">
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
						<h1 className="text-3xl font-bold mt-3">Illuminating Your Path</h1>
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
										src={Navigate}
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
										src={Navigate1}
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
										src={Navigate2}
										alt="VisionDx"
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
						    Welcome to VisionDX, your dependable partner on your path to heart and diabetes wellness. We serve as your guiding light in a world where healthcare is more important than ever, providing real-life solutions and priceless data to empower you on your health path.
						</h2>
						<p className="text-gray-600 text-justify title text-lg">
						    VisionDX is your indispensable web app for a healthier life, 
							<span className="text-black font-medium">
								{" "}
								offering personalized insights
							</span>{" "}
							and
							<span className="text-black font-medium">
								{" "}
								data-driven solutions for heart and diabetic diseases.
							</span>{" "}
							With cutting-edge algorithms, we assess your unique risk factors, enabling early intervention and tailored lifestyle recommendations.{" "}
							<span className="text-black font-medium">
							We harness the power of robust analytics 
							</span>{" "}
							and predictive modeling to provide you with continuous learning and up-to-date information,{" "}
							<span className="text-black font-medium">
							ensuring your journey towards wellness is guided
							</span>{" "}
							by the latest scientific findings. Join us on this transformative path to a healthier, 
							<span className="text-black font-medium">
								{" "}
								happier you,
							</span>{" "}
							where your well-being is our unwavering mission.
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
							Your Health Odyssey
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
						    Cardiovascular diseases | WHO
						</h2>
						<p className="pl-3 text-gray-500  relative text-justify">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							Cardiovascular diseases (CVDs) stand as the world's leading cause of mortality, claiming approximately 17.9 million lives annually. This group encompasses various heart 
							and blood vessel disorders, such as coronary heart disease and cerebrovascular disease, with over 80% of CVD-related deaths attributed to heart attacks and strokes, striking 
							individuals under 70 prematurely. Unhealthy dietary choices, physical inactivity, tobacco use, and excessive alcohol consumption represent major behavioral risk factors for 
							heart disease and stroke, often manifesting as elevated blood pressure, glucose levels, lipids, and obesity. These intermediate risk factors can be identified in primary 
							care settings, signaling heightened risks of complications like heart failure. Effective measures to mitigate CVD risks include tobacco cessation, reduced salt intake, 
							increased consumption of fruits and vegetables, regular physical activity, and responsible alcohol use. Creating supportive environments for healthy choices through 
							public health policies is crucial for sustaining these behaviors. Additionally, early identification of high-risk individuals and ensuring their access to necessary 
							treatments in primary healthcare facilities can avert premature CVD-related deaths, emphasizing the importance of providing essential noncommunicable disease medications 
							and healthcare resources.
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
						    Diabetes | WHO
						</h2>
						<p className="pl-3 text-gray-500 relative text-justify">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							Diabetes, a chronic condition, results from insufficient insulin production by the pancreas or ineffective insulin utilization by the body, disrupting blood glucose regulation. 
							This often leads to hyperglycemia, characterized by elevated blood sugar levels, causing extensive damage to various body systems, notably the nerves and blood vessels. In 2014, 
							8.5% of adults aged 18 and above had diabetes, and by 2019, it directly accounted for 1.5 million deaths, with 48% occurring before the age of 70. An additional 460,000 kidney 
							disease-related deaths were linked to diabetes, contributing to around 20% of cardiovascular deaths. Over the years, there has been a 3% increase in age-standardized mortality 
							rates from diabetes, with a striking 13% rise in lower-middle-income countries. However, amidst these concerning statistics, there's a glimmer of hope: the probability of premature 
							death from any of the four primary noncommunicable diseases—including diabetes—between the ages of 30 and 70 decreased by 22% globally between 2000 and 2019.
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
						    Cardiovascular diseases | WHO | Facts
						</h3>
						<p className="pl-3 text-gray-500  relative text-justify">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							Cardiovascular diseases (CVDs) stand as a global health crisis, claiming the top spot as the leading cause of death worldwide. In 2019, an alarming 17.9 million lives 
							were lost to CVDs, accounting for a staggering 32% of all global fatalities, with a striking 85% attributed to heart attacks and strokes. These grim statistics are 
							especially pronounced in low- and middle-income countries, where over three quarters of CVD-related deaths occur. Notably, out of the 17 million premature deaths 
							(those under 70) caused by noncommunicable diseases in 2019, a concerning 38% were linked to CVDs. The silver lining lies in prevention, as most cardiovascular 
							diseases can be averted by addressing behavioral risk factors like tobacco use, unhealthy diets, obesity, physical inactivity, and harmful alcohol consumption. 
							Early detection is equally crucial, allowing for timely management through counseling and medication, underscoring the significance of proactive healthcare measures.
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
						    Diabetes | WHO | Facts
						</h3>
						<p className="pl-3 text-gray-500  relative text-justify">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							The global diabetes epidemic is a pressing concern, with the number of individuals affected skyrocketing from 108 million in 1980 to a staggering 422 million by 2014, 
							notably surging in low- and middle-income nations. This relentless increase carries dire consequences, as diabetes is a leading cause of severe health complications 
							including blindness, kidney failure, heart attacks, strokes, and lower limb amputations. Between 2000 and 2019, there was a concerning 3% rise in diabetes mortality 
							rates across different age groups. In 2019 alone, diabetes and related kidney disease led to an estimated 2 million deaths. Fortunately, there is hope in prevention 
							and management: adopting a healthy lifestyle encompassing a balanced diet, regular physical activity, maintaining a normal weight, and abstaining from tobacco use can 
							delay or prevent the onset of type 2 diabetes. Moreover, diabetes can be effectively treated and its complications mitigated through dietary measures, physical activity, 
							medication, and routine screening and treatment for associated complications.
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
						    Cardiovascular diseases | WHO | Symptoms
						</h3>
						<p className="pl-3 text-gray-500  relative text-justify">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							Hypertension, often referred to as high blood pressure, is often a silent condition, with most individuals experiencing no noticeable symptoms. However, extremely 
							elevated blood pressure levels can lead to symptoms such as severe headaches, chest pain, dizziness, breathing difficulties, nausea, vomiting, blurred vision, anxiety, 
							confusion, buzzing in the ears, nosebleeds, and abnormal heart rhythms. Regular monitoring of blood pressure is essential to diagnose hypertension, as it remains the 
							most reliable method to detect this condition. Left untreated, hypertension can result in severe health complications, including kidney disease, heart disease, and strokes. 
							While individuals can measure their own blood pressure using automated devices, a healthcare professional's evaluation is crucial for a comprehensive risk assessment and the 
							identification of associated conditions, emphasizing the importance of seeking immediate care if experiencing the symptoms mentioned above alongside high blood pressure.
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
						    Diabetes | WHO | Symptoms
						</h3>
						<p className="pl-3 text-gray-500  relative text-justify">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							Diabetes symptoms can manifest suddenly or, in the case of type 2 diabetes, develop gradually over several years. Common symptoms include excessive thirst, frequent 
							urination, blurred vision, fatigue, and unintended weight loss. Prolonged diabetes can result in severe complications, as it damages blood vessels in the heart, eyes, 
							kidneys, and nerves. Individuals with diabetes face an increased risk of health issues, including heart attacks, strokes, and kidney failure. Additionally, diabetes 
							can lead to permanent vision impairment due to damage to the eye's blood vessels. Nerve damage and poor blood circulation caused by diabetes often result in foot 
							problems, such as ulcers, which can escalate to the point of requiring amputation. Prompt diagnosis and effective diabetes management are essential to mitigate 
							these risks and ensure a healthier future.
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
						    Diabetes | WHO | Prevention
						</h3>
						<p className="pl-3 text-gray-500  relative text-justify">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							Lifestyle changes play a pivotal role in managing high blood pressure, benefiting anyone with hypertension. While some may still require medication, these modifications 
							are crucial for prevention and lowering elevated blood pressure. It's important to increase vegetable and fruit consumption, reduce sedentary behavior, engage in regular 
							physical activity such as walking, running, swimming, or strength-building exercises, aim for at least 150 minutes of moderate-intensity aerobic activity weekly, shed 
							excess weight if overweight or obese, adhere to prescribed medications, and maintain regular healthcare appointments. Conversely, it's advised to limit salt intake to 
							under 2 grams per day, avoid foods high in saturated or trans fats, abstain from smoking or tobacco use, and consume alcohol in moderation (1 drink daily for women, 2 for men). 
							These measures not only reduce hypertension but also mitigate the risk of heart attacks, strokes, kidney damage, and other associated health complications. Additionally, stress 
							management, regular blood pressure monitoring, prompt hypertension treatment, and the management of other medical conditions further contribute to lowering the risks 
							associated with high blood pressure.
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
						    Diabetes | WHO | Prevention
						</h3>
						<p className="pl-3 text-gray-500  relative text-justify">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							Preventing or delaying the onset of type 2 diabetes is primarily achieved through crucial lifestyle changes. To mitigate the risk of type 2 diabetes and its associated 
							complications, individuals should aim to maintain a healthy body weight, engage in regular physical activity with at least 30 minutes of moderate exercise each day, 
							adopt a balanced and nutritious diet while avoiding excessive sugar and saturated fats, and refrain from smoking tobacco. These fundamental lifestyle adjustments not 
							only reduce the likelihood of developing type 2 diabetes but also contribute to overall well-being and long-term health.
						</p>
					</motion.div>
				</div>
			</main>
		</>
	);
}
