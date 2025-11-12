"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  const user = {};
  return (
    <header className="navbar">
      <nav>
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={32}
            height={32}
          />
          <h1>MemSnip</h1>
        </Link>
        {user && (
          <figure>
            <button
              type="button"
              onClick={() => router.push("/profile/210703")}
            >
              <Image
                src="/assets/images/dummy.jpg"
                alt="dummy"
                width={36}
                height={35}
                className="rounded-full aspect-square"
              />
            </button>
            <button className="cursor-pointer">
              <Image
                src="/assets/icons/logout.svg"
                alt="log-out"
                width={24}
                height={24}
                className="rotate-180"
              />
            </button>
          </figure>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
