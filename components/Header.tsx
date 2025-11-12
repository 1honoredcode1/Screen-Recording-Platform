import { ICONS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import DropdownList from "./DropdownList";

export const Header = ({ subHeader, title, userImg }: SharedHeaderProps) => {
  return (
    <header className="header">
      <section className="header-container">
        <figure className="details">
          {userImg && (
            <Image
              src={userImg}
              alt="user"
              width={66}
              height={66}
              className="rounded-full"
            />
          )}
          <article>
            <p>{subHeader}</p>
            <h1>{title}</h1>
          </article>
        </figure>
        <aside>
          <Link href="/upload">
            <Image
              src="/assets/icons/upload.svg"
              alt="upload"
              width={16}
              height={16}
            />
            <span>Upload a video</span>
          </Link>
          <button className="primary-btn">
            <Image
              src="/assets/icons/record.svg"
              alt="record"
              width={16}
              height={16}
            />
            <span>Record a Video</span>
          </button>
        </aside>
      </section>
      <section className="search-filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search for videos, tags, folders..."
          />
          <Image
            src="/assets/icons/search.svg"
            alt="search"
            width={16}
            height={16}
          />
        </div>
        <DropdownList />
      </section>
    </header>
  );
};
