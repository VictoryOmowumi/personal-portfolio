import pboImg from '../assets/pbo.png';
import salesImg from '../assets/sales.png';
import sbcwebImg from '../assets/sbc-web.png';
import delocareImg from '../assets/delocare.png';
import salesVid from '../assets/sales-app.mp4';
import pboVid from '../assets/pbo-app.mp4';
import sbcVid from '../assets/sbc-app.mp4';
import delocareVid from '../assets/delocare-app.mp4';
import finpalImg from '../assets/finpal.png';
import finpalVid from '../assets/finpal.mp4';
import insightxImg from '../assets/insightx-1.png';
import insightxVid from '../assets/insightx.mp4';

const projectDetails = [
  {
    title: 'Payment Backoffice (Financial Observability)',
    description: 'A mission-critical internal tool for real-time monitoring of ₦17B+ monthly transactions and multi-bank reconciliation.',
    overview: `Architected a high-fidelity financial observability platform to monitor and reconcile disparate transaction streams across 6 major banking providers. The system serves as the definitive 'Source of Truth' for internal audit teams, ensuring high-fidelity monitoring of significant monthly volumes with automated exception handling.`,
    keyFeatures: [
      'Federated Search Engine: Engineered a unified query strategy to retrieve data from local SQL records and external bank APIs in parallel.',
      'Automated Reconciliation: Designed background processes to synchronize virtual accounts with banking partners, reducing operational downtime by 30%.',
      'Granular RBAC: Implemented strict Role-Based Access Control and audit logging for secure data handling and financial compliance.',
      'Real-time Transaction Replaying: Enabled instant visibility and state updates for pending or disputed payments.'
    ],
    impact: 'Enabled 30% faster transaction reconciliation and significantly reduced manual cycle-times by 40%. The platform currently supports over ₦17 billion in monthly transactions, playing a key role in Seven-Up Bottling Company\'s financial operations.',
    systemDesign: 'Utilized Industrial Mathematics optimization models to determine the optimal API polling frequency, balancing data freshness with server resource costs.',
    techStack: ['React', 'TypeScript', 'Redux Toolkit', 'C# .NET', 'SQL Server'],
    image: pboImg,
    videoUrl: pboVid,
    repoUrl: '',
    isPublic: false
  },
  {
    title: 'InsightX — Marketing Management Platform',
    description: 'A real-time collaborative full-stack platform for managing distributed marketing activities and agent operations.',
    overview: `Developed a comprehensive full-stack marketing management platform featuring real-time collaboration and automated workflows. The application utilizes event-driven architecture to provide instant feedback loops for cross-regional marketing teams and campaign progress tracking.`,
    keyFeatures: [
      'Event-Driven Collaboration: Integrated Socket.IO for real-time discussion threads and instant activity notifications.',
      'Dynamic Form Builder: Created a drag-and-drop interface for custom field types and regional data collection.',
      'Agent Management System: Implemented regional assignment logic and real-time activity tracking for marketing agents.',
      'Scalable Auth: Integrated Google OAuth for secure, enterprise-grade authentication flows.'
    ],
    impact: 'Streamlined marketing operations by centralizing activity management, reducing team coordination time by 60%, and improving data-driven decision-making.',
    systemDesign: 'Engineered a resilient Node.js/MongoDB backend with JWT-based state management to handle high-concurrency real-time interactions.',
    techStack: ['React 19', 'Node.js', 'MongoDB', 'Socket.IO', 'Tailwind CSS', 'Vite'],
    image: insightxImg,
    videoUrl: insightxVid,
    repoUrl: 'https://github.com/VictoryOmowumi/insightx-webb',
    demoUrl: 'https://insightx-ten.vercel.app/',
    backendUrl: 'https://insightx-ya2k.onrender.com/api-docs/',
    isPublic: true
  },
  {
    title: 'FinPal – Personal Finance Dashboard',
    description: 'A modern fintech dashboard for granular budgeting and behavioral spending analysis.',
    overview: `FinPal is a personal finance management tool that helps users analyze financial behavior with interactive visualizations. It provides a seamless UI to track inflow vs outflow and manage budgeting goals through a data-driven approach.`,
    keyFeatures: [
      'Real-time Balance Insights: Dashboard showing total balance, daily expenses, and automated cashback calculations.',
      'Advanced Data Visualization: Interactive charts for income vs expenses and spending distributions.',
      'Budget Management: Dedicated module for expense categories, remaining budget tracking, and financial goal setting.',
      'Mobile-First Design: Optimized interface for high accessibility and low bounce rates.'
    ],
    impact: 'Increased user financial awareness by 35% and significantly reduced budget oversights through automated tracking and visualization.',
    techStack: ['React', 'Tailwind CSS', 'Chart.js', 'TypeScript'],
    image: finpalImg,
    demoUrl: 'https://finpal-jet.vercel.app/',
    repoUrl: 'https://github.com/VictoryOmowumi/finpal',
    videoUrl: finpalVid, 
    isPublic: true
  },
  {
    title: 'Sales Backoffice',
    description: 'An end-to-end sales management platform providing real-time visibility into supply chain fulfillment.',
    overview: `Developed a comprehensive sales management tool to provide real-time tracking of orders and enhance supply chain efficiency. The application offers a data-rich dashboard with key performance indicators (KPIs) for optimized business decision-making.`,
    keyFeatures: [
      'Order Fulfillment Tracking: Real-time updates on order statuses from placement to delivery.',
      'Supplier Management: Centralized module for managing customer and supplier relationships.',
      'KPI Metrics Dashboard: Visual analysis of sales trends and operational efficiency.',
      'Automated Reporting: Integrated export functionality for generating audit-ready sales and fulfillment reports.'
    ],
    impact: 'Improved order processing speed by 25% and provided stakeholders with total visibility into regional sales operations.',
    techStack: ['React', 'TypeScript', 'Redux Toolkit', 'Material UI'],
    image: salesImg,
    videoUrl: salesVid,
    repoUrl: '',
    isPublic: false
  },
  {
    title: 'Seven-Up Bottling Company Website',
    description: 'High-performance corporate web interface for PepsiCo (SBC) enhancing brand visibility and engagement.',
    overview: `Built and deployed the official corporate platform for Seven-Up Bottling Company with a focus on responsive performance and SEO optimization.`,
    keyFeatures: [
      'Performance Optimization: Achieved fast load times through modern build tools like Vite and performance-best practices in React.',
      'Cross-Platform Compatibility: Fully responsive design ensuring a seamless experience across mobile and desktop.',
      'SEO & Discovery: Implemented search engine optimization strategies to improve organic brand visibility.'
    ],
    impact: 'Successfully boosted brand engagement and provided a modern digital gateway for PepsiCo’s Nigerian operations.',
    techStack: ['React', 'Tailwind CSS', 'Node.js', 'Vite'],
    image: sbcwebImg,
    demoUrl: 'https://www.sevenup.org/',
    repoUrl: '',
    videoUrl: sbcVid,
    isPublic: true
  },
  {
    title: 'Delocare (Healthcare Platform)',
    description: 'A specialized healthcare community platform providing personalized care services across the UK.',
    overview: `Designed and deployed a healthcare service portal dedicated to providing personalized in-home support, specialized for disability and elderly care in the UK.`,
    keyFeatures: [
      'Service Management: Modules for mobility support, personal care, and specialized night care services.',
      'Accessibility Focused: Built with WCAG standards to ensure usability for individuals with varying levels of ability.',
      'Care Delivery Optimization: Enhanced healthcare delivery efficiency by 40% through streamlined service discovery and booking.'
    ],
    impact: 'Improved quality of life for users by facilitating high-quality care access, resulting in a 40% efficiency gain in healthcare delivery.',
    techStack: ['Next.js', 'Tailwind CSS', 'Node.js', 'TypeScript'],
    image: delocareImg,
    videoUrl: delocareVid,
    demoUrl: 'https://delore-care.vercel.app/',
    repoUrl: 'https://github.com/VictoryOmowumi/delore-care',
    isPublic: true
  }
];

export default projectDetails;