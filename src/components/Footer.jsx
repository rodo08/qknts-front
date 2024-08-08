const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-logo-pink  py-4">
      <div className="container mx-auto text-center">
        <p className="text-gray-800">
          © {currentYear} <strong>Quick Notes</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
