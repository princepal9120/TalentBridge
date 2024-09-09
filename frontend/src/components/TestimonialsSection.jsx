import React from "react";
import { Avatar } from "./ui/avatar";

const reviews=[
  {
    "name": "Amit Sharma",
    "position": "Software Engineer",
    "company": "Tech Solutions",
    "review": "I found my dream job through this platform. The job search process was seamless and the team was incredibly helpful.",
    "avatar": "/amit-sharma.jpg"
  },
  {
    "name": "Sneha Patel",
    "position": "Product Manager",
    "company": "Innovatech",
    "review": "The job listings were well-curated and helped me land a role that perfectly matched my skills.",
    "avatar": "/sneha-patel.jpg"
  },
  {
    "name": "Rahul Verma",
    "position": "Data Scientist",
    "company": "Data Insights",
    "review": "The platform's AI-driven recommendations made my job search much easier. Highly recommend!",
    "avatar": "/rahul-verma.jpg"
  },
  {
    "name": "Priya Nair",
    "position": "UI/UX Designer",
    "company": "Creative Studios",
    "review": "I enjoyed using this platform for my job search. The design is intuitive and user-friendly.",
    "avatar": "/priya-nair.jpg"
  },
  {
    "name": "Vikram Deshmukh",
    "position": "DevOps Engineer",
    "company": "Cloud Masters",
    "review": "Found multiple job offers thanks to this platform! Easy to navigate and well-designed.",
    "avatar": "/vikram-deshmukh.jpg"
  },
  {
    "name": "Pooja Reddy",
    "position": "Frontend Developer",
    "company": "Web Innovators",
    "review": "A smooth experience from start to finish. I would recommend this platform to anyone seeking tech roles.",
    "avatar": "/pooja-reddy.jpg"
  }
]


const TestimonialsSection = () => {
  return (
    <section className="w-full py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              What Our Users Say
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from satisfied users who have found their dream jobs through
              our platform.
            </p>
          </div>
        </div>
        <div className="relative mt-12 overflow-hidden">
          <div className="flex animate-marquee space-x-8">
            {reviews.map((review, index) => (
        <div
          key={index}
          className="bg-background rounded-lg p-6 shadow-md w-[300px] shrink-0"
        >
          <blockquote className="text-muted-foreground">
            "{review.review}"
          </blockquote>
          <div className="flex items-center mt-4">
            <Avatar src={review.avatar} alt={review.name} fallback={review.name[0]} />
            <div className="ml-4">
              <p className="font-bold text-foreground">{review.name}</p>
              <p className="text-muted-foreground">
                {review.position}, {review.company}
              </p>
            </div>
          </div>
        </div>
      ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-muted to-transparent" />
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-muted to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
