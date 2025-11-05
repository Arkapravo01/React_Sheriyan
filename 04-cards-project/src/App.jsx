import Card from "./components/Card";
import User from "./components/User";
const App = () => {

  const jobOpeningss = [
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "5 days ago",
    designation: "Senior UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    payRate: "$120/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "2 weeks ago",
    designation: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payRate: "$95/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "10 days ago",
    designation: "Product Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payRate: "$110/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "3 days ago",
    designation: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payRate: "$140/hr",
    location: "Pune, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "1 week ago",
    designation: "Backend Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    payRate: "$105/hr",
    location: "Remote",
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "4 days ago",
    designation: "iOS Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payRate: "$100/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    companyName: "OpenAI",
    datePosted: "6 days ago",
    designation: "AI Research Intern",
    tag1: "Part Time",
    tag2: "Junior Level",
    payRate: "$85/hr",
    location: "Remote",
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "3 weeks ago",
    designation: "Data Analyst",
    tag1: "Full Time",
    tag2: "Mid Level",
    payRate: "$90/hr",
    location: "Delhi, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "2 days ago",
    designation: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payRate: "$160/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/spotify.com",
    companyName: "Spotify",
    datePosted: "9 days ago",
    designation: "UI Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    payRate: "$95/hr",
    location: "Remote",
  }
];

  return <div className="parent">{/* <Card /> */}
    {jobOpeningss.map((elem)=>{
      return <h1>{elem.payRate}</h1>
    })}
  </div>;
}; 

export default App;
