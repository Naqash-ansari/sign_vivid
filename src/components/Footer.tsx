import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-400 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">

        <div className="rounded bg-white px-3 py-2">
          <Image
            src="/nlogo.webp"
            alt="Sign Vivid"
            width={190}
            height={80}
            className="h-12 w-auto object-contain"
          />
        </div>

        <p className="text-xs text-center">
          DESIGN &nbsp;|&nbsp; PRINT &nbsp;|&nbsp; SIGN
        </p>

        <p className="text-xs">
          © {new Date().getFullYear()} Sign Vivid Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
