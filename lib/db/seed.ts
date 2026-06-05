import { db } from "./client";
import { jobs } from "./schema";

const sampleJobs = [
  {
    jobTitle: "Senior Full Stack Developer",
    jobShortDescription:
      "Join our development team to build cutting-edge web applications using modern technologies. Work on exciting projects for international clients and grow your career in a supportive environment.",
    jobType: "full_time",
    location: "Dhaka, Bangladesh",
    isRemote: true,
    requiredSkills: [
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "AWS",
      "Docker",
    ],
    qualifications: [
      "5+ years of full-stack development experience",
      "Strong proficiency in React and Node.js",
      "Experience with cloud platforms (AWS/Azure/GCP)",
      "Excellent problem-solving skills",
    ],
    requirements: [
      "Design and implement scalable web applications",
      "Collaborate with cross-functional teams",
      "Write clean, maintainable code",
      "Mentor junior developers",
      "Participate in code reviews",
    ],
    salaryMin: 60000,
    salaryMax: 90000,
    salaryCurrency: "USD",
    companyName: "Absouts",
    status: "published" as const,
    postedAt: new Date(),
  },
  {
    jobTitle: "Cloud Accountant",
    jobShortDescription:
      "Provide virtual accounting services to US and UK clients. Work with modern cloud accounting platforms and be part of a professional accounting team.",
    jobType: "full_time",
    location: "Remote",
    isRemote: true,
    requiredSkills: [
      "QuickBooks Online",
      "Xero",
      "Excel",
      "Financial Reporting",
      "Tax Preparation",
    ],
    qualifications: [
      "Bachelor's degree in Accounting or Finance",
      "3+ years of accounting experience",
      "Proficiency in QuickBooks and Xero",
      "Strong attention to detail",
      "Excellent communication skills",
    ],
    requirements: [
      "Manage bookkeeping for multiple clients",
      "Prepare financial statements and reports",
      "Handle accounts payable and receivable",
      "Assist with tax preparation",
      "Communicate with clients regularly",
    ],
    salaryMin: 30000,
    salaryMax: 45000,
    salaryCurrency: "USD",
    companyName: "Absouts",
    status: "published" as const,
    postedAt: new Date(),
  },
  {
    jobTitle: "Business Development Executive",
    jobShortDescription:
      "Drive business growth by identifying new opportunities and building relationships with potential clients across global markets. Be the face of Absouts to prospective clients.",
    jobType: "full_time",
    location: "Dhaka, Bangladesh",
    isRemote: false,
    requiredSkills: [
      "Sales",
      "Client Relationship Management",
      "CRM Software",
      "Lead Generation",
      "Presentation Skills",
    ],
    qualifications: [
      "3+ years in B2B sales or business development",
      "Proven track record of meeting sales targets",
      "Experience with CRM systems",
      "Excellent communication and negotiation skills",
      "Understanding of BPO/software services",
    ],
    requirements: [
      "Identify and pursue new business opportunities",
      "Build and maintain client relationships",
      "Conduct product presentations and demos",
      "Negotiate contracts and close deals",
      "Collaborate with delivery teams",
      "Maintain accurate sales records in CRM",
    ],
    salaryMin: 25000,
    salaryMax: 40000,
    salaryCurrency: "USD",
    companyName: "Absouts",
    status: "published" as const,
    postedAt: new Date(),
  },
  {
    jobTitle: "UI/UX Designer",
    jobShortDescription:
      "Create beautiful and intuitive user interfaces for web and mobile applications. Work closely with developers and product managers to deliver exceptional user experiences.",
    jobType: "full_time",
    location: "Remote",
    isRemote: true,
    requiredSkills: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "User Research",
      "Prototyping",
      "Wireframing",
    ],
    qualifications: [
      "3+ years of UI/UX design experience",
      "Strong portfolio demonstrating design skills",
      "Proficiency in design tools (Figma, Adobe XD)",
      "Understanding of design systems",
      "Knowledge of HTML/CSS basics",
    ],
    requirements: [
      "Design user interfaces for web and mobile apps",
      "Create wireframes and prototypes",
      "Conduct user research and testing",
      "Collaborate with developers and stakeholders",
      "Maintain design system consistency",
      "Present design concepts to clients",
    ],
    salaryMin: 35000,
    salaryMax: 55000,
    salaryCurrency: "USD",
    companyName: "Absouts",
    status: "published" as const,
    postedAt: new Date(),
  },
  {
    jobTitle: "DevOps Engineer",
    jobShortDescription:
      "Build and maintain our infrastructure and deployment pipelines. Help our development teams ship faster and more reliably with modern DevOps practices.",
    jobType: "full_time",
    location: "Dhaka, Bangladesh",
    isRemote: true,
    requiredSkills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Linux",
      "Terraform",
      "Jenkins",
    ],
    qualifications: [
      "4+ years of DevOps/SRE experience",
      "Strong knowledge of AWS or Azure",
      "Experience with containerization (Docker/Kubernetes)",
      "Proficiency in scripting (Bash/Python)",
      "Understanding of CI/CD pipelines",
    ],
    requirements: [
      "Manage cloud infrastructure on AWS/Azure",
      "Build and maintain CI/CD pipelines",
      "Implement monitoring and alerting",
      "Optimize application performance",
      "Ensure system security and compliance",
      "Automate operational tasks",
    ],
    salaryMin: 50000,
    salaryMax: 75000,
    salaryCurrency: "USD",
    companyName: "Absouts",
    status: "published" as const,
    postedAt: new Date(),
  },
];

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL environment variable is not set");
    process.exit(1);
  }

  try {
    await db.insert(jobs).values(sampleJobs);
    console.log(`Seeded ${sampleJobs.length} jobs`);
  } catch (error) {
    console.error("Failed to seed jobs:", error);
    process.exit(1);
  }
}

main();
