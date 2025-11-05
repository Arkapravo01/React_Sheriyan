import Card from "./components/Card";
const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://pngimg.com/uploads/amazon/amazon_PNG11.png",
      companyName: "Amazon",
      datePosted: "5 days ago",
      designation: "Senior UI/UX Designer",
      tag1: "Part Time",
      tag2: "Senior Level",
      payRate: "$120/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://www.freepnglogos.com/uploads/google-logo-png/web-google-logo-png-1.png",
      companyName: "Google",
      datePosted: "2 weeks ago",
      designation: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      payRate: "$95/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://pngimg.com/uploads/meta/meta_PNG15.png",
      companyName: "Meta",
      datePosted: "10 days ago",
      designation: "Product Designer",
      tag1: "Full Time",
      tag2: "Mid Level",
      payRate: "$110/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://pngimg.com/uploads/microsoft/microsoft_PNG13.png",
      companyName: "Microsoft",
      datePosted: "3 days ago",
      designation: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payRate: "$140/hr",
      location: "Pune, India",
    },
    {
      brandLogo: "https://pngimg.com/uploads/netflix/netflix_PNG22.png",
      companyName: "Netflix",
      datePosted: "1 week ago",
      designation: "Backend Developer",
      tag1: "Part Time",
      tag2: "Mid Level",
      payRate: "$105/hr",
      location: "Remote",
    },
    {
      brandLogo:
        "https://pngimg.com/uploads/apple_logo/apple_logo_PNG19670.png",
      companyName: "Apple",
      datePosted: "4 days ago",
      designation: "iOS Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      payRate: "$100/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://seeklogo.com/images/O/openai-logo-8B9BC7C0F0-seeklogo.com.png",
      companyName: "OpenAI",
      datePosted: "6 days ago",
      designation: "AI Research Intern",
      tag1: "Part Time",
      tag2: "Junior Level",
      payRate: "$85/hr",
      location: "Remote",
    },
    {
      brandLogo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG20.png",
      companyName: "Tesla",
      datePosted: "3 weeks ago",
      designation: "Data Analyst",
      tag1: "Full Time",
      tag2: "Mid Level",
      payRate: "$90/hr",
      location: "Delhi, India",
    },
    {
      brandLogo: "https://pngimg.com/uploads/nvidia/nvidia_PNG9.png",
      companyName: "NVIDIA",
      datePosted: "2 days ago",
      designation: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payRate: "$160/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://pngimg.com/uploads/spotify/spotify_PNG7.png",
      companyName: "Spotify",
      datePosted: "9 days ago",
      designation: "UI Engineer",
      tag1: "Part Time",
      tag2: "Mid Level",
      payRate: "$95/hr",
      location: "Remote",
    },
  ];

  return (
    <div className="parent">
      {/* <Card /> */}
      {jobOpenings.map((elem, idx) => {
        return (
          <div key={idx}>
            <Card
              key={idx}
              company={elem.companyName}
              post={elem.designation}
              brandLogo={elem.brandLogo}
              tag1={elem.tag1}
              tag2={elem.tag2}
              payRate={elem.payRate}
              location={elem.location}
              datePosted={elem.da}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
