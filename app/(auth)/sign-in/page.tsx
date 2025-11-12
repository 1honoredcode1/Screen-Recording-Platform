"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const handleSignIn = async () => {
    return await authClient.signIn.social({ provider: "google" });
  };
  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={32}
            height={32}
          />
          <h1>MemSnip</h1>
        </Link>
        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  src="/assets/icons/star.svg"
                  alt="star"
                  width={20}
                  height={20}
                  key={index}
                />
              ))}
            </figure>
            <p>
              MemSnip has transformed the way our team collaborates. The
              seamless screen recording and sharing features have boosted our
              productivity and made remote work a breeze.
            </p>
            <article>
              <Image
                src="/assets/images/jason.png"
                alt="jason"
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <h2>Klevis</h2>
                <p>Web Developer, HCP</p>
              </div>
            </article>
          </section>
        </div>
        <p>© {new Date().getFullYear()} MemSnip. All rights reserved.</p>
      </aside>
      <aside className="google-sign-in">
        <section>
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              alt="logo"
              width={42}
              height={42}
            />
            <h1>MemSnip</h1>
          </Link>
          <p>
            Sign in to your account to continue to <span>MemSnip </span>and
            create.
          </p>
          <button onClick={handleSignIn}>
            <Image
              src="/assets/icons/google.svg"
              alt="google"
              width={22}
              height={22}
            />
            <span>Sign in with Google</span>
          </button>
        </section>
      </aside>
      <div className="overlay" />
    </main>
  );
};

export default page;
