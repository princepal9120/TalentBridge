import React from 'react';


   const listings= [
      {
        "title": "Software Engineer",
        "company": "Acme Inc.",
        "location": "Bengaluru, India",
        "description": "Join our dynamic team and help us build innovative software solutions."
      },
      {
        "title": "Frontend Developer",
        "company": "Tech Innovators",
        "location": "Hyderabad, India",
        "description": "Looking for a creative developer to build user-centric web applications with cutting-edge technologies."
      },
      {
        "title": "Backend Developer",
        "company": "DataLogic",
        "location": "Pune, India",
        "description": "Design and implement robust backend services to support scalable and secure data processing systems."
      },
      {
        "title": "Full Stack Developer",
        "company": "WebWizards",
        "location": "Chennai, India",
        "description": "Seeking a talented full stack developer with experience in React, Node.js, and MongoDB to build engaging web apps."
      },
      {
        "title": "Data Scientist",
        "company": "AI Ventures",
        "location": "Mumbai, India",
        "description": "Work with a team of AI experts to analyze complex data and develop machine learning models for cutting-edge solutions."
      },
      {
        "title": "DevOps Engineer",
        "company": "CloudMasters",
        "location": "Delhi, India",
        "description": "Help streamline our deployment pipelines and ensure the smooth operation of our cloud infrastructure."
      },
      {
        "title": "Mobile App Developer",
        "company": "AppCrafters",
        "location": "Kolkata, India",
        "description": "Develop innovative mobile applications for Android and iOS with a focus on performance and user experience."
      },
      {
        "title": "UI/UX Designer",
        "company": "DesignHub",
        "location": "Ahmedabad, India",
        "description": "Create visually stunning and user-friendly interfaces for web and mobile applications, enhancing user engagement."
      }
    ]
  
  
const JobListingSection = () => {
  return (
    <section className="w-full py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Job Openings</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Browse through a wide range of job opportunities and find the perfect fit for your skills and
              experience.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {listings.map((job, index) => (
        <div
          key={index}
          className="bg-background rounded-lg p-6 shadow-md hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
          <p className="text-muted-foreground">{job.company}</p>
          <p className="text-muted-foreground">{job.location}</p>
          <p className="text-muted-foreground mt-2">{job.description}</p>
        </div>
      ))}
        </div>
      </div>
    </section>
  );
};

export default JobListingSection;
