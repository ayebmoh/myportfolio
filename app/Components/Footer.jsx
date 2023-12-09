import Image from "next/image";

const Footer = () => {
    return (
      <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
        <div className="container p-12 flex justify-between">
          <span className="text-muted">
            <Image className="" alt="Flogo" src="/images/logo.png" width={120} height={130} />
          </span>
          <p className="text-slate-700">Copyright &#169;2023; Designed by Mohamed</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;