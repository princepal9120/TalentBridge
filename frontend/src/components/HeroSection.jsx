import React, { useState } from 'react'






const HeroSection = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-r from-primary to-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-5xl font-bold tracking-tighter text-primary-foreground sm:text-6xl xl:text-7xl">
                Find Your Dream Job
              </h1>
              <p className="max-w-[600px] text-primary-foreground md:text-xl">
                Explore a wide range of job opportunities and take the next step in your career.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                href="/browse-jobs"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Browse Jobs
              </a>
            </div>
          </div>
          {/* <img
            src="/placeholder.svg"
            width="550"
            height="550"
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
