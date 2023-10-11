"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/legacy/image";
import FixedButon from "@/components/FixedButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";


import LineAnime from "@/components/LineAnime";
import Input from "@/components/Input";
import SingleLine from "@/components/SingleLine";
//img
import Check from "@/public/img/Check.png";
import Check1 from "@/public/img/Check1.png";
import Check2 from "@/public/img/Check2.png";
export default function Page() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleBack = () => {
		window.location.href = "/";
	};
	const [formDataDiabetic, setFormDataDiabetic] = useState({
		Pregnancies: '',
		Glucose: '',
		BloodPressure: '',
		SkinThickness: '',
		Insulin: '',
		bmi: '',
		DiabetesPedigreeFunction: '',
		Age: '',
	  });
	
	const [formDataHeart, setFormDataHeart] = useState({
		age: '',
		sex: '',
		cp: '',
		trestbps: '',
		chol: '',
		fbs: '',
		restecg: '',
		thalach: '',
		exang: '',
		oldpeak: '',
		slope: '',
		ca: '',
		thal: '',
	  });
	
	  const [diabeticResult, setDiabeticResult] = useState('');
	  const [heartResult, setHeartResult] = useState('');
	  const [isLoading, setIsLoading] = useState(false);
	  const [error, setError] = useState('');
	
	  const handleDiabeticChange = (e) => {
		const { name, value } = e.target;
		setFormDataDiabetic({
		  ...formDataDiabetic,
		  [name]: value,
		});
	  };
	
	  const handleHeartChange = (e) => {
		const { name, value } = e.target;
		setFormDataHeart({
		  ...formDataHeart,
		  [name]: value,
		});
	  };

	  const handleHeartSubmit = () => {
		setIsLoading(true);
		fetch('http://127.0.0.1:8080/api/predict_heart_disease', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(formDataHeart),
		})
		  .then((response) => response.json())
		  .then((data) => {
			setHeartResult(data.message);
			setIsLoading(false);
		  })
		  .catch((error) => {
			console.error('Fetch error:', error);
			setError('An error occurred while fetching data.');
			setIsLoading(false);
		  });
	  };	
	
	  const handleDiabeticSubmit = () => {
		setIsLoading(true);
		fetch('http://127.0.0.1:8080/api/predict_diabetes', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(formDataDiabetic),
		})
		  .then((response) => response.json())
		  .then((data) => {
			setDiabeticResult(data.message);
			setIsLoading(false);
		  })
		  .catch((error) => {
			console.error('Fetch error:', error);
			setError('An error occurred while fetching data.');
			setIsLoading(false);
		  });
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
								src={Check}
								alt="VisionDx"
								layout="fill"
								objectFit="cover"
								placeholder="blur"
							/>
						</motion.div>
					</div>
					<div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none bg-gray-100 bg-opacity-50 md:bg-transparent md:pt-0">
						<h1 className="md:bg-white bg-transparent lg:bg-transparent bg-opacity-50 md-px-0 text-black text-5xl md:text-8xl font-bold">
						    MediSync
						</h1>
						<LineAnime />
						<p className="title text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5 ">
						    MediSync is your personal health investigator. 
							<span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
								{" "}
								Enter your required details to take control of your health.
							</span>
							Whether you're worried about heart disease or diabetes.
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
						<h1 className="text-3xl font-bold mt-3">Check here , Is your health is excellent ?</h1>
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
										src={Check}
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
										src={Check1}
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
										src={Check2}
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
						    The "Symptom Analyzer" on MediSync acts as your personal health detective,
						</h2>
						<p className="text-gray-600 text-justify title text-lg">
						    allowing you to take charge of your health by inputting symptoms
							<span className="text-black font-medium">
								{" "}
								connected to diabetes or heart problems.
							</span>{" "}
							This clever technology thoroughly analyses the data presented,
							<span className="text-black font-medium">
								{" "}
								assisting you in identifying potential red flags.
							</span>{" "}
							You can focus on diabetic symptoms such as thirst, exhaustion, or weight fluctuations in the{" "}
							<span className="text-black font-medium">
							"Diabetic Dilemmas" section, and our powerful algorithms will offer insights and potential risk factors,
							</span>{" "}
							emphasising the need of early detection for effective care.{" "}
							<span className="text-black font-medium">
							Similarly, "Heart Health Insights" allows you to track symptoms such as chest pain, palpitations, or shortness of breath, with the system
							</span>{" "}
							advising you on potential heart problems and emphasising
							<span className="text-black font-medium">
								{" "}
								the life-saving importance 
							</span>{" "}
							of early symptom recognition.
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
							Examine Your Health
						</motion.h1>
					</div>
				</div>
				<div className="w-screen mx-auto container gap-10 p-10 grid grid-cols-1 md:grid-cols-2 my-10 ">
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
						    Heart
						</h2>
						<p className="pl-3 text-gray-500 relative text-justify">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							Heart health is of paramount importance, as it directly impacts our overall well-being. A proactive approach to heart health involves adopting a healthy lifestyle that 
							includes balanced nutrition, regular exercise, stress management, and avoiding harmful habits like smoking and excessive alcohol consumption. By prioritizing prevention 
							and early detection through routine check-ups and screenings, individuals can significantly reduce the risk of heart problems. Common conditions such as high blood pressure, 
							high cholesterol, and heart disease can often be effectively managed with medical intervention and lifestyle changes. Education, support, and ongoing research contribute to 
							better outcomes, ensuring that when health issues arise, there is hope and a path to recovery and vitality.
						</p>
						<h2 className="text-2xl font-bold mb-3">
						    Normal range for each of the Health Parameters
						</h2>
						<p className="pl-3 text-gray-500 relative text-justify font-bold">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							Age: How many years young are you?
						</p>
						<p className="pl-3 text-gray-500 relative text-justify font-bold">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							Sex: It's a binary variable (1 for male, 0 for female).
						</p>
						<p className="pl-3 text-gray-500 relative text-justify font-bold">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							Chest Pain (cp): No specific normal range, as it represents different types of chest pain (0 to 3).
						</p>
						<p className="pl-3 text-gray-500 relative text-justify font-bold">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							Resting Blood Pressure (trestbps): Normal range is typically around 90/60 mm Hg to 120/80 mm Hg.
						</p>
						<p className="pl-3 text-gray-500 relative text-justify font-bold">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							Cholesterol (chol): Normal range is typically below 200 mg/dL.
						</p>
						<p className="pl-3 text-gray-500 relative text-justify font-bold">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							Fasting Blood Sugar (fbs): Normal range is typically below 100 mg/dL.
						</p>
						<p className="pl-3 text-gray-500 relative text-justify font-bold">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							Resting Electrocardiographic Results (restecg): No specific normal range, as it represents different results (0 to 2).
						</p>
						<p className="pl-3 text-gray-500 relative text-justify font-bold">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							Maximum Heart Rate Achieved (thalach): Normal range is typically around 60 to 100 beats per minute.
						</p>
						<p className="pl-3 text-gray-500 relative text-justify font-bold">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							Exercise-Induced Angina (exang): No normal range, as it's a binary variable (1 for yes, 0 for no).
						</p>
						<p className="pl-3 text-gray-500 relative text-justify font-bold">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							ST Depression Induced by Exercise Relative to Rest (oldpeak): No specific normal range, as it varies.
						</p>
						<p className="pl-3 text-gray-500 relative text-justify font-bold">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							Slope of the Peak Exercise ST Segment (slope): No specific normal range, as it represents different slopes (0 to 2).
						</p>
						<p className="pl-3 text-gray-500 relative text-justify font-bold">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							Number of Major Vessels Colored by Fluoroscopy (ca): No specific normal range, as it varies (0 to 3).
						</p>
						<p className="pl-3 text-gray-500 relative text-justify font-bold">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							Thallium Stress Test Result (thal): No specific normal range, as it represents different results (0 to 3).
						</p>
						<p className="pl-3 text-gray-500 relative text-justify font-bold">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							Target (target): No specific normal range, as it's a binary variable (1 for presence of heart disease, 0 for no heart disease).
						</p>
					</motion.div>
					<motion.div
						className="flex justify-center items-start flex-col mb-5"
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
						}}
						>
						<h2 className="text-2xl font-bold mb-3">
							Heart | Analyze Your Heart
						</h2>
						<div className="pl-3 text-gray-500 relative text-justify">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
								<div className="max-w-md mx-auto p-6">
								<h1 className="text-3xl mb-6">Heart Predictor</h1>
								<form>
									<div className="mb-4">
									<Input
										label="age"
										name="age"
										value={formDataHeart.age}
										onChange={handleHeartChange}
									/>
									</div>
									<div className="mb-4">
									<Input
										label="sex"
										name="sex"
										value={formDataHeart.sex}
										onChange={handleHeartChange}
									/>
									</div>
									<div className="mb-4">
									<Input
										label="cp"
										name="cp"
										value={formDataHeart.cp}
										onChange={handleHeartChange}
									/>
									</div>
									<div className="mb-4">
									<Input
										label="trestbps"
										name="trestbps"
										value={formDataHeart.trestbps}
										onChange={handleHeartChange}
									/>
									</div>
									<div className="mb-4">
									<Input
										label="chol"
										name="chol"
										value={formDataHeart.chol}
										onChange={handleHeartChange}
									/>
									</div>
									<div className="mb-4">
									<Input
										label="fbs"
										name="fbs"
										value={formDataHeart.fbs}
										onChange={handleHeartChange}
									/>
									</div>
									<div className="mb-4">
									<Input
										label="restecg"
										name="restecg"
										value={formDataHeart.restecg}
										onChange={handleHeartChange}
									/>
									</div>
									<div className="mb-4">
									<Input
										label="thalach"
										name="thalach"
										value={formDataHeart.thalach}
										onChange={handleHeartChange}
									/>
									</div>
									<div className="mb-4">
									<Input
										label="exang"
										name="exang"
										value={formDataHeart.exang}
										onChange={handleHeartChange}
									/>
									</div>
									<div className="mb-4">
									<Input
										label="oldpeak"
										name="oldpeak"
										value={formDataHeart.oldpeak}
										onChange={handleHeartChange}
									/>
									</div>
									<div className="mb-4">
									<Input
										label="slope"
										name="slope"
										value={formDataHeart.slope}
										onChange={handleHeartChange}
									/>
									</div>
									<div className="mb-4">
									<Input
										label="ca"
										name="ca"
										value={formDataHeart.ca}
										onChange={handleHeartChange}
									/>
									</div>
									<div className="mb-4">
									<Input
										label="thal"
										name="thal"
										value={formDataHeart.thal}
										onChange={handleHeartChange}
									/>
									</div>
									<div className="mb-6">
									<Button
										type="button"
										onClick={handleHeartSubmit}
										variation="primary"
									>
										Check Heart
									</Button>
							        </div>
							    </form>
								{isLoading ? (
									<p>Loading...</p>
								) : (
									<div>
									<p className="text-lg font-semibold">Result:</p>
									<p>{heartResult}</p>
									</div>
								)}
							    </div>
					    </div>
					</motion.div>
					<motion.div
						className="flex justify-center items-start flex-col mb-5"
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
						}}
						>
						<h2 className="text-2xl font-bold mb-3">
							Diabetes | Analyze Your Diabetes
						</h2>
						<div className="pl-3 text-gray-500 relative text-justify">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
								<div className="max-w-md mx-auto p-6">
								<h1 className="text-3xl mb-6">Diabetes Predictor</h1>
								<form>
									<div className="mb-4">
									<Input
										label="Pregnancies"
										name="Pregnancies"
										value={formDataDiabetic.Pregnancies}
										onChange={handleDiabeticChange}
									/>
									</div>
									<div className="mb-4">
									<Input
										label="Glucose"
										name="Glucose"
										value={formDataDiabetic.Glucose}
										onChange={handleDiabeticChange}
									/>
									</div>
									<div className="mb-4">
									<Input
										label="Blood Pressure"
										name="BloodPressure"
										value={formDataDiabetic.BloodPressure}
										onChange={handleDiabeticChange}
									/>
									</div>
									<div className="mb-4">
									<Input
										label="Skin Thickness"
										name="SkinThickness"
										value={formDataDiabetic.SkinThickness}
										onChange={handleDiabeticChange}
									/>
									</div>
									<div className="mb-4">
									<Input
										label="Insulin"
										name="Insulin"
										value={formDataDiabetic.Insulin}
										onChange={handleDiabeticChange}
									/>
									</div>
									<div className="mb-4">
									<Input
										label="bmi"
										name="bmi"
										value={formDataDiabetic.bmi}
										onChange={handleDiabeticChange}
									/>
									</div>
									<div className="mb-4">
									<Input
										label="Diabetes Pedigree Function"
										name="DiabetesPedigreeFunction"
										value={formDataDiabetic.DiabetesPedigreeFunction}
										onChange={handleDiabeticChange}
									/>
									</div>
									<div className="mb-4">
									<Input
										label="Age"
										name="Age"
										value={formDataDiabetic.Age}
										onChange={handleDiabeticChange}
									/>
									</div>
									<div className="mb-6">
									<Button
										type="button"
										onClick={handleDiabeticSubmit}
										variation="primary"
									>
										Check Diabetes
									</Button>
							        </div>
							    </form>
								{isLoading ? (
									<p>Loading...</p>
								) : (
									<div>
									<p className="text-lg font-semibold">Result:</p>
									<p>{diabeticResult}</p>
									</div>
								)}
							    </div>
					    </div>
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
						    Dibetic
						</h2>
						<p className="pl-3 text-gray-500 relative text-justify">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							Diabetes is a chronic condition characterized by impaired glucose metabolism, leading to high blood sugar levels. It comes in two main types: Type 1, often diagnosed in 
							youth, requires insulin therapy, and Type 2, associated with lifestyle factors and managed diet, exercise, and sometimes medication. Common symptoms 
							include excessive thirst, frequent urination, and fatigue. Managing diabetes involves a balanced diet, regular physical activity, and close monitoring of blood sugar levels.
						</p>
						<div>
							<h2 className="text-2xl font-bold mb-3">
								Normal range for each of the Health Parameters
							</h2>
							<p className="pl-3 text-gray-500 relative text-justify font-bold">
								<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
								Pregnancies: The number of pregnancies varies widely among individuals.
							</p>
							<p className="pl-3 text-gray-500 relative text-justify font-bold">
								<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
								Glucose: Normal fasting blood glucose levels are typically between 70 and 100 milligrams per deciliter (mg/dL).
							</p>
							<p className="pl-3 text-gray-500 relative text-justify font-bold">
								<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
								Blood Pressure: Normal blood pressure is usually around 120/80 millimeters of mercury (mm Hg).
							</p>
							<p className="pl-3 text-gray-500 relative text-justify font-bold">
								<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
								Skin Thickness: There isn't a specific normal range for skin thickness as it's not a common medical measurement.
							</p>
							<p className="pl-3 text-gray-500 relative text-justify font-bold">
								<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
								Insulin: Normal fasting insulin levels typically range from 2 to 25 microinternational units per milliliter (µIU/mL).
							</p>
							<p className="pl-3 text-gray-500 relative text-justify font-bold">
								<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
								BMI (Body Mass Index): A normal BMI is considered to be between 18.5 and 24.9.
							</p>
							<p className="pl-3 text-gray-500 relative text-justify font-bold">
								<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
								Diabetes Pedigree Function: There isn't a specific normal range for this value, as it's a computed function rather than a direct measurement.
							</p>
							<p className="pl-3 text-gray-500 relative text-justify font-bold">
								<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
								Age: How many years young are you?
							</p>
							<p className="pl-3 text-gray-500 relative text-justify font-bold">
								<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
								Outcome: This binary variable indicates whether an individual has diabetes (1) or not (0).
							</p>
						</div>
					</motion.div>
				</div>
			</main>
		</>
	);
}
