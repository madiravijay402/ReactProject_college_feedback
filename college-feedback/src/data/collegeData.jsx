export const colleges = [
  {
    id: "sethu",
    name: "Sethu Institute of Technology",
    short: "SIT",
    location: "Kariapatti, Virudhunagar",
    established: "2000",
    emoji: "🏛️",
    accent: "indigo",
    image: "/sethu.webp",
    tagline: "Engineering Excellence in Southern Tamil Nadu",
    problems: [
      { area: "Infrastructure", icon: "🏫", problem: "Poor classroom maintenance, broken facilities, and unhygienic washrooms.", severity: "High" },
      { area: "Technology", icon: "📶", problem: "Slow WiFi, outdated computer labs, and non-functional projectors.", severity: "High" },
      { area: "Academics", icon: "📚", problem: "Outdated syllabus with minimal practical exposure and inconsistent teaching.", severity: "High" },
      { area: "Canteen", icon: "🍽️", problem: "Unhygienic food, limited menu, and overpriced meals.", severity: "Medium" },
      { area: "Administration", icon: "🕐", problem: "Slow complaint response and lack of transparency in decisions.", severity: "High" },
      { area: "Campus", icon: "🌿", problem: "Poor cleanliness, no green spaces, inadequate lighting.", severity: "Medium" },
      { area: "Placement", icon: "🎓", problem: "Few companies visit; no structured mock interview preparation.", severity: "High" },
    ],
    improvements: [
      { title: "Smart Classrooms", icon: "🖥️", priority: "Immediate", desc: "Install projectors, smart boards, and stable WiFi in every classroom." },
      { title: "Updated Curriculum", icon: "📖", priority: "Immediate", desc: "Industry-aligned syllabus with real-world projects and case studies." },
      { title: "Grievance Portal", icon: "📬", priority: "Short-term", desc: "Digital complaint system with tracking and status updates." },
      { title: "Better Canteen", icon: "🥗", priority: "Short-term", desc: "Subsidized, hygienic meals with varied dietary options." },
      { title: "Industry Tie-ups", icon: "🤝", priority: "Immediate", desc: "Internships, live projects, and regular guest lectures." },
    ],
    guidelines: {
      management: [
        "Conduct monthly feedback reviews",
        "Make decisions transparent within 24 hours",
        "Respond to complaints within 48 hours",
        "Publish quarterly progress reports",
      ],
      students: [
        "Submit constructive, specific feedback",
        "Participate in improvement committees",
        "Follow campus norms while raising issues",
        "Follow up on submitted complaints",
      ],
    },
  },
  {
    id: "saveetha-eng",
    name: "Saveetha School of Engineering",
    short: "SSE",
    location: "Chennai, Tamil Nadu",
    established: "2001",
    emoji: "🔬",
    accent: "emerald",
    image: "/saveethaschoolofengineering.jpg",
    tagline: "Pioneering Research & Innovation in Chennai",
    problems: [
      { area: "Research Facilities", icon: "🔬", problem: "Limited research labs and outdated equipment hinder student projects.", severity: "High" },
      { area: "Library", icon: "📚", problem: "Insufficient digital resources and outdated reference books.", severity: "Medium" },
      { area: "Transport", icon: "🚌", problem: "Irregular bus schedules causing frequent late arrivals.", severity: "Medium" },
      { area: "Hostel", icon: "🏠", problem: "Poor hostel maintenance and unreliable water supply.", severity: "High" },
      { area: "Faculty", icon: "👩‍🏫", problem: "High faculty turnover causing curriculum inconsistency.", severity: "High" },
      { area: "Sports", icon: "⚽", problem: "Neglected sports grounds and lack of equipment.", severity: "Medium" },
    ],
    improvements: [
      { title: "Modern Research Labs", icon: "🔬", priority: "Immediate", desc: "Fully equipped labs with latest instruments for every department." },
      { title: "Digital Library", icon: "📱", priority: "Short-term", desc: "24/7 access to e-journals, research papers, and digital textbooks." },
      { title: "Reliable Transport", icon: "🚌", priority: "Short-term", desc: "GPS-tracked buses with real-time schedules via mobile app." },
      { title: "Hostel Renovation", icon: "🏠", priority: "Immediate", desc: "Complete renovation of hostel blocks with modern amenities." },
      { title: "Faculty Retention", icon: "👩‍🏫", priority: "Long-term", desc: "Competitive pay and research incentives to retain quality faculty." },
    ],
    guidelines: {
      management: [
        "Maintain research equipment quarterly",
        "Provide transport schedule 30 days in advance",
        "Conduct hostel inspections monthly",
        "Offer faculty development programs",
      ],
      students: [
        "Use library resources responsibly",
        "Report transport issues via official channels",
        "Keep hostel premises clean",
        "Engage in research activities actively",
      ],
    },
  },
  {
    id: "saveetha-clg",
    name: "Saveetha Engineering College",
    short: "SEC",
    location: "Thandalam, Chennai",
    established: "2001",
    emoji: "⚙️",
    accent: "rose",
    image: "/saveethaengineeringcollege.jpg",
    tagline: "Shaping Future Engineers with Practical Wisdom",
    problems: [
      { area: "Workshops", icon: "⚙️", problem: "Workshop machinery is outdated and rarely functional for practical sessions.", severity: "High" },
      { area: "Internet", icon: "🌐", problem: "Campus internet speed is insufficient for modern digital learning needs.", severity: "High" },
      { area: "Parking", icon: "🚗", problem: "Inadequate parking space causing daily chaos and accidents.", severity: "Medium" },
      { area: "Mentoring", icon: "🧑‍🏫", problem: "No structured mentoring program for first-year students.", severity: "High" },
      { area: "Events", icon: "🎉", problem: "Very few technical events, hackathons, or inter-college fests.", severity: "Medium" },
      { area: "Medical", icon: "🏥", problem: "On-campus medical facility is understaffed and under-equipped.", severity: "High" },
    ],
    improvements: [
      { title: "Upgraded Workshops", icon: "⚙️", priority: "Immediate", desc: "Replace all outdated machinery with modern industry-standard equipment." },
      { title: "High-Speed Internet", icon: "🌐", priority: "Immediate", desc: "Campus-wide fiber optic internet with minimum 1Gbps speed." },
      { title: "Mentorship Program", icon: "🧑‍🏫", priority: "Short-term", desc: "Structured senior-junior mentoring for academic and career guidance." },
      { title: "Tech Fest & Hackathons", icon: "🎉", priority: "Short-term", desc: "Annual inter-college tech fest and monthly hackathons." },
      { title: "Medical Center", icon: "🏥", priority: "Immediate", desc: "Full-time doctor, nurse, and emergency care facility on campus." },
    ],
    guidelines: {
      management: [
        "Service workshop equipment every semester",
        "Hire full-time medical staff immediately",
        "Organize at least 4 technical events per year",
        "Launch mentorship program for all batches",
      ],
      students: [
        "Report equipment failures immediately",
        "Use parking zones as designated",
        "Volunteer in organizing college events",
        "Utilize mentorship program actively",
      ],
    },
  },
];

export const accentClasses = {
  indigo: {
    bg: "bg-indigo-600",
    hover: "hover:bg-indigo-700",
    text: "text-indigo-500",
    border: "border-indigo-500",
    hoverBorder: "hover:border-indigo-400",
  },
  emerald: {
    bg: "bg-emerald-600",
    hover: "hover:bg-emerald-700",
    text: "text-emerald-500",
    border: "border-emerald-500",
    hoverBorder: "hover:border-emerald-400",
  },
  rose: {
    bg: "bg-rose-600",
    hover: "hover:bg-rose-700",
    text: "text-rose-500",
    border: "border-rose-500",
    hoverBorder: "hover:border-rose-400",
  },
};

export const severityStyle = {
  High: "bg-red-100 text-red-700 border border-red-300 dark:bg-red-900/40 dark:text-red-300 dark:border-red-700",
  Medium: "bg-yellow-100 text-yellow-700 border border-yellow-300 dark:bg-yellow-900/40 dark:text-yellow-300 dark:border-yellow-700",
};

export const priorityDot = {
  Immediate: "bg-green-400",
  "Short-term": "bg-yellow-400",
  "Long-term": "bg-blue-400",
};

