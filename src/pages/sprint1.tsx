import Head from "next/head";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>SciREN: Sprint Progress</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>SciREN-Net: Sprint Details</h1>
        <div className={styles.miniNav}>
          <Link href="/" className={styles.miniLink}>
            Home
          </Link>
          <Link
            href="/sprint1"
            className={styles.miniLink + " " + styles.sunderline}
          >
            Sprints
          </Link>
          <Link href="/tech" className={styles.miniLink}>
            Technical Details
          </Link>
          <Link href="/team" className={styles.miniLink}>
            The Team
          </Link>
          <Link
            href="https://github.com/pdthompson5/SciREN-Net"
            className={styles.miniLink}
          >
            Github Repo
          </Link>
        </div>
        <hr></hr>
        <h2 className={styles.sheader}>Sprint 1 Goals</h2>
        <ul>
          <li className={styles.sli}>
            Create V1 Database in MongoDB - Simple first database for users
          </li>
          <li className={styles.sli}>
            User Session Management - Includes sign-up, sign-in interfaces
          </li>
          <li className={styles.sli}>
            Profile Pages - Simple profile pages, view-only
          </li>
          <li className={styles.sli}>
            Development Environment - Setup of Next.js, MongoDB, and Vercel
          </li>
          <li className={styles.sli}>
            Lesson Plan Integration - Inclusion of lesson plans in database
          </li>
        </ul>
        <h2 className={styles.sheader}>Target Use Cases</h2>
        <p>
          Our goal for Sprint 1 is to create a simple, functional, and testable
          blueprint to expand upon. We wanted to allow users to simply sign-up,
          sign-in, and view their profile.
        </p>
        <h2 className={styles.sheader}>Sprint 2 Goals</h2>
        <ul>
          <li className={styles.sli}>
            Host Lesson Plans - Transfer of lesson plans from docuwiki to AWS
          </li>
          <li className={styles.sli}>
            Expand Profile Fields - Extend Profiles to include academic info
          </li>
          <li className={styles.sli}>
            Create Contact System - In-app contact system as mentioned in home
            page
          </li>
          <li className={styles.sli}>
            Ergonomic Experience - Improve site usability
          </li>
          <li className={styles.sli}>
            Profile Listing - Create a page that lists users
          </li>
        </ul>
        <h2 className={styles.sheader}>Target Use Cases</h2>
        <p>
          Our goal for Sprint 2 was to improve the skeleton with UX and
          searchability upgrades. It also signified the first steps into
          migrating the core of SciREN&apos;s platform with document storage.
        </p>
        <h2 className={styles.sheader}>Sprint 3 Goals</h2>
        <ul>
          <li className={styles.sli}>
            CRUD Lesson Plans - Allow users to create, read, update, and delete
            lesson plans
          </li>
          <li className={styles.sli}>
            Expand Profile Fields and Polish Page - Extend Profiles to include
            all academic info, and improve the page layout
          </li>
          <li className={styles.sli}>
            Administrative Dashboard - Add an executive control panel for the
            client to manage malicious site use
          </li>
          <li className={styles.sli}>
            Lesson Plan and Profile Discoverability - Add search and sorting
            pages for profiles and lessons
          </li>
          <li className={styles.sli}>
            Mobile-Friendly UX - Add view-port responsive CSS to scale for
            mobile browsers
          </li>
        </ul>
        <h2 className={styles.sheader}>Target Use Cases</h2>
        <p>
          Sprint 3 was our time to wrap up the major functionality of the site
          and polish the user experience. We ambitiously set out to add a new
          document storage system, which we ran out of time for; however, the
          user experience and profile systems were completed to a degree which
          we all take pride in.
        </p>
      </main>
    </>
  );
}
