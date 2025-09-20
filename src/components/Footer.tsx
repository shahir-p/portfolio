import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary to-muted/30">
      <div className="py-6 text-center text-sm text-muted-foreground">
        <div className="max-w-6xl mx-auto px-6 flex justify-center items-center text-white">
          <span>© {currentYear} muhammadshahirp. All rights reserved.</span>
        </div>
      </div>
    </footer>

  );
};

export default Footer;