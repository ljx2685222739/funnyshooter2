import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black bg-opacity-50 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Funny Shooter 2. All rights reserved.</p>
    </footer>
  );
};

export default Footer;