export const navItems = [
	{ name: "Projects", link: "#projects" },
	{ name: "Experiences", link: "#experience" },
	{ name: "Certifications", link: "#certifications" },
	{ name: "Publications", link: "#publication" },
	{ name: "Education", link: "#education" },
	{ name: "Contact", link: "#contact" },
];

export type Tech = { name: string; icon?: string };

export const myTechStack: Tech[] = [
  { name: "Python", icon: "assets/tech/python.svg" },
  { name: "PowerBI", icon: "assets/tech/powerbi.svg" },
  { name: "Tableau Public", icon: "assets/tech/tableau.svg" },
  { name: "TensorFlow", icon: "assets/tech/tensorflow.svg" },
  { name: "Scikit-learn", icon: "assets/tech/scikitlearn.svg" },
  { name: "Gradio", icon: "assets/tech/gradio.svg" },
  { name: "Streamlit", icon: "assets/tech/streamlit.svg" },
  { name: "Seaborn", icon: "assets/tech/seaborn.svg" },
  { name: "Pytorch", icon: "assets/tech/pytorch.svg" },
  { name: "Matplotlib", icon: "assets/tech/matplotlib.svg" },
  { name: "Matlab", icon: "assets/tech/matlab.svg" },
  { name: "OpenCV", icon: "assets/tech/opencv.svg" },
  { name: "Pandas", icon: "assets/tech/pandas.svg" },
  { name: "NumPy", icon: "assets/tech/numpy.svg" },
  { name: "Git", icon: "assets/tech/git.svg" },
  { name: "GitHub", icon: "assets/tech/github.svg" },
  { name: "CorelDraw", icon: "assets/tech/coreldraw.svg" },
  { name: "Adobe Photoshop", icon: "assets/tech/photoshop.svg" },
  { name: "Premier Pro", icon: "assets/tech/premiere.svg" },
  { name: "After Effects", icon: "assets/tech/aftereffects.svg" },
  { name: "Adobe Illustrator", icon: "assets/tech/illustrator.svg" },
  { name: "Canva", icon: "assets/tech/canva.svg" },
  { name: "Figma", icon: "assets/tech/figma.svg" },
  { name: "Microsoft Office", icon: "assets/tech/office.svg" },
  { name: "MS Excel", icon: "assets/tech/excel.svg" },
  { name: "HTML", icon: "assets/tech/html.svg" },
  { name: "CSS", icon: "assets/tech/css.svg" },
  { name: "VS Code", icon: "assets/tech/vscode.svg" },
  { name: "Antigravity", icon: "assets/tech/antigravity.svg" },
  { name: "JavaScript", icon: "assets/tech/javascript.svg" },
];

export const projects = [
	{
		id: 1,
		title: "Automated Text Summarization using T5 Algorithm",
		description:
			"This work aims to bridge this gap by developing an automated text summarization system that leverages EasyOCR for text extraction and Hugging Face Transformers for generating summaries.",
		className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
		titleClassName: "justify-end",
		img: "https://i.pinimg.com/originals/be/f4/1a/bef41a7d5a877841bbf7d8f9f0d42f14.gif",
		github: "https://github.com/JatinGola8040/Automated-Text-Summarization.git",
		link: "#hero",
		techs: ["Python", "TensorFlow", "EasyOCR", "HuggingFace", "T5", "Gradio"],
	},
	{
		id: 2,
		title: "Gender & Age Detection using OpenCV in Python",
		description:
			"'Age and Gender Detection Using OpenCV in Python,' revolutionizes industries by leveraging computer vision. Integrating OpenCV, Python, and a Caffe model, we aim for precise analyses with diverse applications, from user experiences to security protocols",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		titleClassName: "justify-center",
		img: "https://i.pinimg.com/originals/84/f6/d1/84f6d14f1f88d34d3956150d19060d3a.gif",
		github: "https://github.com/JatinGola8040/Gender-Age-Detection",
		link: "#hero",
		techs: ["Python", "ANN", "DNN", "OpenCV", "Caffe", "Gradio"],
	},
	{
		id: 3,
		title: "Intrusion Detection System using Machine Learning Algorithms",
		description:
			"This project aims to develop an Intrusion Detection System (IDS) using machine learning algorithms to enhance network security. By analyzing network traffic patterns and identifying anomalies, the IDS will provide real-time detection of potential threats, ensuring the integrity and confidentiality of data.",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		titleClassName: "justify-center",
		img: "https://i.pinimg.com/originals/54/b5/24/54b52468335fd6eb935e330eb3197b25.gif",
		github: "#hero",
		link: "#hero",
		techs: ["Python", "Scikit-learn", "Pandas", "Numpy", "Tableau"],
	},
	{
		id: 4,
		title: "Gender Detection using Speech Analysis",
		description:
			"The primary objective of this project is to develop a robust model capable of classifying gender from voice recordings. By utilizing state-of-the-art machine learning algorithms and feature extraction techniques, the project aims to explore the potential of voice-based analysis in various applications, from personalized user experiences to assistive technologies.",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		titleClassName: "justify-center",
		img: "https://i.pinimg.com/736x/c7/de/01/c7de016c811fa5fae9d7120402f27645.jpg",
		github: "https://github.com/JatinGola8040/Gender-Detection-Speech-Analysis.git",
		link: "#hero",
		techs:["Python", "TensorFlow", "pyaudio", "librosa", "Pandas", "Gradio"]
		
	},
	{
		id: 5,
		title: "CivicSphere: Legal Agentic AI Model",
		description:
			"This project showcases the power of Agentic AI to make legal knowledge accessible and reliable for the general public. By grounding every response in authoritative statutory texts, it goes beyond generic chatbots to deliver trustworthy and transparent legal information. Serving as a robust foundation for future growth, this assistant empowers citizens to better understand their rights and obligations within India’s complex legal landscape.",
		className: "lg:col-span-3 md:col-span-3 md:row-span-1",
		titleClassName: "justify-center",
		img: "https://i.pinimg.com/736x/09/2e/25/092e252b5562c7e5eb576215c6d9db8d.jpg",
		github: "#hero",
		link: "#hero",
		techs: ["Python", "OpenRouter", "Streamlit", "API", "CSS"],
	},
];

export const workExperience = [
	{
		id: 1,
		company: "CSRBOX",
		title: "Apprenticeship",
		desc: "Developed a Legal Agentic AI Model with user friendly chat-based interface that provides personalized easy-to-understand advice in real time, empowering users to take informed civic or legal action with confidence.",
		className: "md:col-span-2",
		location: "Remote",
		period: "July 2025 - August 2025",
		skills: [
			"Python",
			"Streamlit",
			"OpenRouter API",
			"Agentic AI",
			"Prompt Engineering",
		],
	},
	{
		id: 2,
		company: "Christ University",
		title: "Presenter",
		desc: "Presented research paper: 'An integrated approach for image text extraction and summarization using EasyOCR and Simple T5 algorithm' at International Conference on Smart Cyber-Physical Systems (ICSCPS-2024)",
		className: "md:col-span-2",
		location: "On-Site",
		period: "Sep 2024",
		skills: [
			"Python",
			"Artificial Intelligence",
			"Machine Learning",
			"Deep Learning",
			"T5 Transformer"
		],
	},
	{
		id: 3,
		company: "ShapeMySkills Pvt. Ltd.",
		title: "Apprenticeship",
		desc: "Completed training in the field of Advance Data Science Using Python and developed a comprehensive understanding of data analysis, machine learning algorithms, and statistical modeling techniques.",
		className: "md:col-span-2",
		location: "On-Site",
		period: "July 2023 - Aug 2023",
		skills: [
			"Python",
			"Machine Learning",
			"Tableau",
			"Matplotlib",
			"Seaborn",
			"NumPy",
			"Pandas",
			"Scikit-learn",

		],
	},
	{
		id: 4,
		company: "RJWADA",
		title: "Graphic Designer - Intern",
		desc: "Worked as a Graphic Designer Intern, where I created visually appealing designs for various projects, including social media graphics, marketing materials, and branding elements.",
		className: "md:col-span-2",
		location: "Hybrid",
		period: "Nov 2022 - Feb 2023",
		skills: [
			"CorelDraw",
			"Adobe Photoshop",
			"Adobe Illustrator",
			"Canva",	
		],
	},
	{
		id: 5,
		company: "Hi College",
		title: "Graphic Designer - Intern",
		desc: "Worked as a Graphic Designer Intern, where I developed creative designs for study materials, website graphics, enhancing the visual appeal and user engagement of educational resources.",
		className: "md:col-span-2",
		location: "Remote",
		period: "Aug 2023 - Sep 2023",
		skills: [
			"CorelDraw",
			"Adobe Photoshop",
			"Adobe Illustrator",
			"Canva",	
		],
	},
	{
		id: 6,
		company: "Enactus IITM",
		title: "Director",
		desc: "As the Director of Enactus IITM, I led a team of passionate Graphic Designers, Video Editors to create impactful designs and videos for various projects, enhancing the organization's visual communication and outreach.",
		className: "md:col-span-2",
		location: "On-Site",
		period: "July 2022 - Oct 2023",
		skills: [
			"CorelDraw",
			"Adobe Photoshop",
			"Adobe Illustrator",
			"Premier Pro",
			"After Effects",
			"Canva",	
		],
	},
];

export const socialMedia = [
	{
		id: 1,
		img: "assets/git.svg",
		link: "https://github.com/JatinGola8040",
	},
	{
		id: 2,
		img: "assets/linkedin.svg",
		link: "https://www.linkedin.com/in/jatin-gola/",
	},
	{
		id: 3,
		img: "assets/insta.svg",
		link: "https://www.instagram.com/grafix.cdr/",
	},
	{
		id: 3,
		img: "assets/email.svg",
		link: "mailto:jatingola8040@gmail.com",
	},
];

export const certifications = [
  {
    id: 1,
    title: "Developer Job Simulation",
	issue: "Accenture",
    description: "Certification demonstrating practical skills in software development, including coding, debugging, and problem-solving.",
    img: "assets/certificates/developer.jpg"
  },
  {
    id: 2,
    title: "Power BI Job Simulation",
	issue: "PwC Switzerland",
    description: "Certification in Power BI, showcasing proficiency in data visualization, business intelligence, and analytics.",
    img: "assets/certificates/powerbi.jpg"
  },
  {
    id: 3,
    title: "Supervised Machine Learning: Regression and Classification ",
	issue: "Deeplearning.AI",
    description: "Certification in supervised machine learning techniques, focusing on regression and classification algorithms.",
    img: "assets/certificates/sml.jpg"
  },
  {
    id: 4,
    title: "Advanced Learning Algorithms",
	issue: "DeepLearning.AI",
    description: "Certification in advanced learning algorithms, covering topics such as neural networks, deep learning, and reinforcement learning.",
    img: "assets/certificates/advancelearning.jpg"
  },
  {
    id: 5,
    title: "Getting Started with Artificial Intelligence",
	issue: "IBM SkillsBuild",
    description: "Certification in foundational concepts of artificial intelligence, including machine learning, natural language processing, and prompt engineering.",
    img: "assets/certificates/ai-ibm.jpg"
  },
  {
    id: 6,
    title: "From Learner to Builder: Become an AI Agent Architect",
	issue: "IBM SkillsBuild",
    description: "Certification in AI agent architecture, focusing on building intelligent agents using AI technologies.",
    img: "assets/certificates/aiagent-ibm.jpg"
  },
  {
    id: 7,
    title: "SQL Basic",
	issue: "HackerRank",
    description: "Certification in SQL basics, covering fundamental concepts of database management and querying.",
    img: "assets/certificates/sqlbasic.jpg"
  },
  {
    id: 8,
    title: "Advance Data Science using Python",
	issue: "ShapeMySkills",
    description: "Succesfully completed summer training in Advance Data Science using Python, covering advanced topics in data analysis, machine learning, and data visualization.",
    img: "assets/certificates/summer.png"
  },
{
    id: 9,
    title: "Graphic Designer - Intern",
	issue: "Hi College",
    description: "Certification in Graphic Design, showcasing skills in visual communication, design principles, and software proficiency.",
    img: "assets/certificates/hicollege.png"
  }
];

export const publications = [
  {
  id: 1,
	title: "An integrated approach for image text extraction & summarization using EasyOCR and Simple T5 algorithm",
  	coAuthors: [{ name: "Harsha Priya", link: "https://www.linkedin.com/in/harsha-priya09/" }, { name: "Prof. Dr. Sudhir K Sharma", link: "https://www.linkedin.com/in/dr-sudhir-kumar-sharma/" }],
  	description: "This work aims to bridge this gap by developing an automated text summarization system that leverages EasyOCR for text extraction and Hugging Face Transformers for generating summaries.",
  	publication: "Springer",
  	publicationDate: "July 2025",
	url : "https://doi.org/10.1007/978-981-96-2182-8_34",
	},
	{
  id: 2,
	title: "Enhancing IoT Security and Efficiency: The Synergistic Integration of 5G Technology and Blockchain",
  	coAuthors: [{ name: "Harsha Priya", link: "https://www.linkedin.com/in/harsha-priya09/" }, { name: "Ms. Anjaly Chauhan", link: "" }],
  	description: "Under the guidance of Professor Ms. Anjaly Chauhan, examined how blockchain and 5G technologies can enhance IoT security frameworks. The research explores the integration of decentralized security protocols and advanced network capabilities to address security challenges in IoT networks. By leveraging blockchain's integrity and 5G's real-time processing capabilities, the study aims to improve system performance, resilience, and security in interconnected ecosystems. This comprehensive review of academic literature highlights the potential for these technologies to work together to build a more secure IoT infrastructure.",
  	publication: "International Conference on Advances in Computational Intelligence and Applications (ICACIA 2024)",
  	publicationDate: "Jun 2024",
	url : "https://link.springer.com/chapter/10.1007/978-981-99-1130-2_3",
	},
	{
  id: 3,
	title: "Semantics-Aware Malware Detection: A Survey",
  	coAuthors: [{ name: "Rishit Luthra", link: "https://www.linkedin.com/in/rishitluthra/" }, { name: "Prof. Dr. Durgesh Nandini", link: "https://www.linkedin.com/in/dr-durgesh-nandini-b80aab247/" }],
  	description: "This research paper introduces a semantics-aware approach to malware detection that focuses on understanding the instruction-level behavior of programs, rather than relying on traditional signature or behavior-based methods. Motivated by the growing complexity of polymorphic and metamorphic malware, the study draws from formal semantics and software verification techniques to develop a more resilient detection mechanism. The approach is shown to be effective even against heavily obfuscated or transformed code, offering a promising direction for improving malware defense systems.",
  	publication: "International Conference on Advances in Computational Intelligence and Applications (ICACIA 2024)",
  	publicationDate: "Jun 2024",
	url : "https://link.springer.com/chapter/10.1007/978-981-99-1130-2_3",
	}

];

export const education = [
  {
    id: 1,
    school: "Vivekananda Institute of Professional Studies",
    degree: "Masters of Computer Applications",
    fieldOfStudy: "Computer Science",
    grades: "8.3 CGPA",
    period: "2025 - Present",
    location: "Pitampura, New Delhi",
  },
  {
    id: 2,
    school: "Institute of Information Technology & Management",
    degree: "Bachelors of Computer Applications",
    fieldOfStudy: "Artificial Intelligence",
    grades: "8.5 CGPA",
    period: "2021 - 2024",
    location: "Janakpuri, New Delhi",
  },
	{
    id: 3,
    school: "Dwarka International School",
    degree: "Higher Secondary (XII)",
    fieldOfStudy: "Science + CS",
    grades: "72%",
    period: "2020 - 2021",
    location: "Dwarka, New Delhi",
},
  {
    id: 4,
    school: "Dwarka International School",
    degree: "Secondary (X)",
    fieldOfStudy: " ",
    grades: "73%",
    period: "2018 - 2019",
    location: "Dwarka, New Delhi",
  }
];

export const skills = [
	"Python",
	"Machine Learning",
	"Deep Learning",
	"TensorFlow",
	"PyTorch",
];
