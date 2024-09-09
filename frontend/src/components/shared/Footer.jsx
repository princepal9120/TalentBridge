import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-muted-foreground text-background p-6 md:py-12 w-full">
      <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        <div className="grid gap-1">
          <h3 className="font-semibold">Company</h3>
          <a href="#">About Us</a>
          <a href="#">Our Team</a>
          <a href="#">Careers</a>
          <a href="#">News</a>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Products</h3>
          <a href="#">Jobs</a>
          <a href="#">Internships</a>
          <a href="#">Part-time</a>
          <a href="#">Freelance</a>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Resources</h3>
          <a href="#">Blog</a>
          <a href="#">Community</a>
          <a href="#">Support</a>
          <a href="#">FAQs</a>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Legal</h3>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Contact</h3>
          <a href="#">Support</a>
          <a href="#">Sales</a>
          <a href="#">Press</a>
          <a href="#">Partnerships</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;