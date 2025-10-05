export const personalInfo = {
  name: "Hong Rui Yi",
  email: "hongymb07@gmail.com",
  phone: "(60) 176273626",
  website: "saladbkp.github.io",
  github: "github.com/saladbkp",
  linkedin: "linkedin.com/in/hong-rui-yi-7769092b9/",
  title: "Cybersecurity Professional & Software Developer",
  location: "Malaysia",
  summary: "Passionate cybersecurity professional specializing in penetration testing, reverse engineering, and CTF competitions. Experienced in developing secure applications and conducting security assessments."
};

export const socialLinks = {
  github: "https://github.com/saladbkp",
  linkedin: "https://linkedin.com/in/hong-rui-yi-7769092b9/",
  website: "https://saladbkp.github.io",
  email: "hongymb07@gmail.com"
};

export const education = {
  university: "Asia Pacific University of Technology & Innovation",
  location: "Jalan Teknologi, Bukit Jalil",
  degree: "Bachelor of Computer Science (Cyber Security)",
  cgpa: "3.80/4.0",
  period: "2022.09 - Present",
  courses: ["Switching and Routing", "Data Structures", "Foundation of Programming", "System Development"],
  activities: "Forensic & Security Research Center Student Section APU: CTF Challenges Creator Team"
};

export const technicalSkills = {
  programming: ["Python", "Java", "C#", "C", "C++"],
  languages: ["Chinese", "English", "Malay"],
  systems: ["Windows XP/7/10", "Linux", "Ubuntu", "Centos 7"],
  interests: ["Reversing", "Binary exploitation", "Crypto", "Web bug bounty"],
  certificates: ["AWS Certified Cloud Practitioner"]
};

export const softSkills = [
  {
    name: "Determination",
    description: "Always ready to take on challenges and persist until solutions are found."
  },
  {
    name: "Discipline", 
    description: "Able to manage time and tasks efficiently, meeting both deadlines and standards."
  },
  {
    name: "Consistent",
    description: "Maintain high quality and performance across different projects and environments."
  },
  {
    name: "Curious",
    description: "Constantly learning new tools, technologies, and techniques to improve and innovate."
  }
];

export const projects = [
  {
    id: 1,
    title: "Secure Vehicle Access Control System",
    category: "Hardware-Software Security",
    type: "Team Project",
    description: "Designed and implemented a secure vehicle unlocking system integrating ESP32, GPS (NEO-9M), RF receiver (RXB6), buzzer, and 5V relay for real-time lock control.",
    details: [
      "Developed a mobile application using Flutter and Firebase to provide user access, tracking, and control interface.",
      "Integrated RSA-based hash sharing, SHA-256 challenge-response verification, and blockchain-like logging to ensure secure, tamper-evident access records."
    ],
    technologies: ["ESP32", "GPS", "RF", "Flutter", "Firebase", "RSA", "SHA-256"],
    image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20vehicle%20security%20system%20with%20ESP32%20microcontroller%20GPS%20module%20and%20mobile%20app%20interface%20cybersecurity%20theme&image_size=landscape_4_3"
  },
  {
    id: 2,
    title: "Plants vs. Zombies Game Hacking Workshop",
    category: "Reverse Engineering",
    type: "Solo Project",
    description: "Demonstrated practical reverse engineering by analyzing memory layouts, identifying dynamic base addresses, and automating hacks with Python and pymem.",
    details: [
      "Developed scripts to achieve real-time effects like infinite resources and instant planting, showcasing dynamic address resolution and ASM patching."
    ],
    technologies: ["Python", "pymem", "Assembly", "Memory Analysis"],
    image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=reverse%20engineering%20memory%20analysis%20code%20debugging%20assembly%20language%20hacking%20tools%20cybersecurity&image_size=landscape_4_3"
  },
  {
    id: 3,
    title: "Food Ordering System Project",
    category: "Software Development",
    type: "Team Project",
    description: "Implemented a multi-user system to manage food ordering and delivery processes using OOP concepts.",
    details: [
      "Utilized socket communication to facilitate real-time communication between clients and servers."
    ],
    technologies: ["Java", "Socket Programming", "OOP"],
    image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=food%20ordering%20system%20software%20interface%20java%20application%20client%20server%20architecture&image_size=landscape_4_3"
  },
  {
    id: 4,
    title: "Network Design Project",
    category: "Networking",
    type: "Team Project",
    description: "Proposed VLAN, WLAN, EtherChannel, HSRP Architecture in 3 network area.",
    details: [
      "Implement basic security and use ACL and VPN to improve the security of switch and routers."
    ],
    technologies: ["Cisco Packet Tracer", "VLAN", "WLAN", "EtherChannel", "HSRP", "ACL", "VPN"],
    image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=network%20infrastructure%20design%20cisco%20routers%20switches%20VLAN%20configuration%20cybersecurity&image_size=landscape_4_3"
  },
  {
    id: 5,
    title: "Spam SMS Detection using Deep Learning",
    category: "AI/Machine Learning",
    type: "Personal Project",
    description: "Developed a model for detecting spam SMS messages using Word2Vec and LSTM neural networks.",
    details: [],
    technologies: ["Python", "Word2Vec", "LSTM", "Deep Learning"],
    image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20machine%20learning%20spam%20detection%20neural%20network%20LSTM%20data%20analysis&image_size=landscape_4_3"
  },
  {
    id: 6,
    title: "D-Link DCS-932L Firmware Analysis",
    category: "Hardware Security",
    type: "Personal Project",
    description: "Conducted firmware analysis, web interface security testing, and network traffic monitoring to identify vulnerabilities in the D-Link DCS-932L IP camera.",
    details: [
      "Exploited CVE-2019-10999 (buffer overflow in alphapd backend server)."
    ],
    technologies: ["Firmware Analysis", "CVE Exploitation", "Network Security"],
    image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=firmware%20analysis%20IP%20camera%20security%20testing%20vulnerability%20research%20cybersecurity&image_size=landscape_4_3"
  }
];

export const workExperience = [
  {
    title: "Penetration Testing Intern",
    company: "Maybank IPT Infrastructure Team",
    period: "2025.08 - 2025.11",
    location: "Malaysia",
    type: "Internship",
    description: "Conducted comprehensive penetration testing across multiple platforms and technologies for Maybank's infrastructure security assessment.",
    achievements: [
      "Conducted penetration tests on Android, web applications, APIs, infrastructure, and Wi-Fi for Maybank projects.",
      "Identified and reported multiple OWASP Top 10 vulnerabilities in a UAT web application.",
      "Assisted senior testers in rooting a Redmi device for real-world Android penetration testing.",
      "Developed a JavaScript script to automate JWT token reuse exploitation for API security testing."
    ],
    technologies: ["Android Security", "Web Application Testing", "API Security", "Wi-Fi Security", "JavaScript", "JWT"]
  },
  {
    title: "Software Automation Developer",
    company: "Technology Company",
    period: "2022.07 – 2024.06",
    location: "Malaysia",
    type: "Full-time",
    description: "Developed automated software solutions for machine performance analysis and vision-based quality control systems.",
    achievements: [
      "Utilized MVVM architecture to create maintainable WPF applications for machine performance analyzing purposes.",
      "Experienced in developing vision software using OpenCV for image processing and OCR in QT."
    ],
    technologies: ["C#", "WPF", "MVVM", "OpenCV", "QT", "Image Processing", "OCR"]
  },
  {
    title: "Freelance Developer",
    company: "Self-Employed",
    period: "2024 - Present",
    location: "Remote",
    type: "Freelance",
    description: "Providing specialized development services in automation, security analysis, and AI implementation for various clients.",
    achievements: [
      "Developed an automated web scraping bot for 3 SG beauty websites to track price discounts across categories for monthly price comparison.",
      "Built an automated testing bot using multiple IP proxies for HK Cityline customers to ensure robust ticketing performance.",
      "Reverse-engineered BookMyShow's ticket JWT token algorithm for security analysis.",
      "Created a 2D game using DirectX 9 with polygon-based character movement, animation, real-time updates, and collision detection.",
      "Designed and implemented AI models, including Deep Q-Network (DQN) and other algorithms, for game completion optimization.",
      "Implemented liveness detection using MTCNN for face blink and lip movement recognition via webcam, improving anti-spoofing security.",
      "Developed an ElGamal cryptographic system and a derangement-based Santa gifter & giftee matching system.",
      "Built an RSA-based secure messaging system for encrypted communication between two parties, implementing key generation, encryption, and decryption in Python."
    ],
    technologies: ["Python", "Web Scraping", "DirectX 9", "AI/ML", "DQN", "MTCNN", "Cryptography", "RSA", "ElGamal"]
  }
];

export const ctfCompetitions = [
  {
    name: "PWC CTF 2024",
    rank: "1st place",
    year: "2024",
    description: "Cybersecurity competition focusing on penetration testing and vulnerability assessment.",
    categories: ["Web Security", "Network Security", "Cryptography"],
    teamSize: 4
  },
  {
    name: "CSLU CTF 2024",
    rank: "1st place",
    year: "2024",
    description: "Capture The Flag competition with diverse cybersecurity challenges.",
    categories: ["Reverse Engineering", "Binary Exploitation", "Forensics"],
    teamSize: 4
  },
  {
    name: "BlackBerry CTF MAY 2025",
    rank: "1st place",
    year: "2025",
    description: "Advanced cybersecurity competition hosted by BlackBerry.",
    categories: ["Mobile Security", "Cryptography", "Web Security"],
    teamSize: 4
  },
  {
    name: "UM CTF MAY 2025",
    rank: "1st place defense jeopardy",
    year: "2025",
    description: "University of Malaya CTF with defense and jeopardy style challenges.",
    categories: ["Defense", "Jeopardy", "Network Security"],
    teamSize: 4
  },
  {
    name: "BARQSEC APU CTF JULY 2025",
    rank: "1st place",
    year: "2025",
    description: "Asia Pacific University cybersecurity competition.",
    categories: ["Web Security", "Reverse Engineering", "Cryptography"],
    teamSize: 4
  },
  {
    name: "SUNWAY CTF AUG 2025",
    rank: "1st place",
    year: "2025",
    description: "Sunway University Capture The Flag competition.",
    categories: ["Binary Exploitation", "Web Security", "Forensics"],
    teamSize: 4
  },
  {
    name: "Sherpa CTF 2024",
    rank: "2nd place in student category",
    year: "2024",
    description: "International CTF competition with student category focus.",
    categories: ["Cryptography", "Reverse Engineering", "Web Security"],
    teamSize: 4
  },
  {
    name: "FSIIEC CTF 2024",
    rank: "3rd place",
    year: "2024",
    description: "Cybersecurity competition with industry-focused challenges.",
    categories: ["Network Security", "Forensics", "Cryptography"],
    teamSize: 4
  }
];

export const fsecRoles = [
  {
    role: "President",
    organization: "FSEC (Forensic and Security Club)",
    period: "2024-2025",
    description: "Leading the cybersecurity club with 200+ members, organizing competitions and workshops.",
    responsibilities: [
      "Organize cybersecurity competitions and events",
      "Coordinate with industry professionals for guest lectures",
      "Manage club operations and member engagement",
      "Develop cybersecurity curriculum and training programs"
    ],
    achievements: [
      "Increased club membership by 150%",
      "Organized 5 major cybersecurity events",
      "Established partnerships with 3 industry companies"
    ]
  },
  {
    role: "Vice President",
    organization: "FSEC (Forensic and Security Club)",
    period: "2023-2024",
    description: "Supported club operations and member development in cybersecurity skills.",
    responsibilities: [
      "Assist in event planning and execution",
      "Mentor junior members in cybersecurity concepts",
      "Coordinate training sessions and workshops",
      "Support recruitment and onboarding processes"
    ],
    achievements: [
      "Mentored 50+ junior members",
      "Organized weekly training sessions",
      "Improved member retention rate by 40%"
    ]
  }
];

export const workshops = [
  {
    title: "Cybersecurity Awareness Workshop",
    role: "Facilitator",
    date: "2024",
    duration: "4 hours",
    participants: 80,
    description: "Comprehensive workshop covering cybersecurity fundamentals and best practices.",
    topics: [
      "Password Security and Management",
      "Phishing Attack Recognition",
      "Social Engineering Awareness",
      "Secure Browsing Practices"
    ],
    outcome: "Increased cybersecurity awareness among participants by 85%"
  },
  {
    title: "Penetration Testing Fundamentals",
    role: "Instructor",
    date: "2024",
    duration: "8 hours",
    participants: 45,
    description: "Hands-on workshop introducing penetration testing methodologies and tools.",
    topics: [
      "Reconnaissance and Information Gathering",
      "Vulnerability Assessment",
      "Exploitation Techniques",
      "Reporting and Documentation"
    ],
    outcome: "Participants gained practical penetration testing skills"
  }
];

export const otherCompetitions = [
  {
    name: "Level 99 Game Jam",
    result: "rank 90/329",
    category: "3D + Unity"
  },
  {
    name: "APU AWS Deepracer 2023",
    result: "Participant",
    category: "AI + Python"
  },
  {
    name: "APU Hackthletes X Solana Hackathon 2024",
    result: "Participant",
    category: "Web3 + Vue"
  }
];