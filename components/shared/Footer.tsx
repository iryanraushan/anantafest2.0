import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            width={130}
            height={38}
            alt="logo"
          />
        </Link>
        <p>&#169; 2024 Ananta2.0 All right reserved </p>
      </div>
    </footer>
  );
};

export default Footer;
