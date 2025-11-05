import Image from "next/image";
import NavBar from "../components/NavBar";
import InfoCard from "../components/InfoCard";

export default function DataStates() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-r from-blue-300 to-blue-600 font-serif">
      {/* Navbar */}
      <NavBar />

      {/* Main content */}
      <section className="flex flex-col items-center justify-center flex-grow px-6 py-16">
        <div className="w-full max-w-5xl">
          <InfoCard
            title="What are the data states?"
            description="The three states of data (at rest, in transit, in use) are fundamental in protecting the components of the CIA Triad. By knowing which state the data is in, appropriate cybersecurity measures can be taken to protect the data."
            bullets={[
              "At Rest: The data is stored somewhere (ex: usernames/passwords stored in files, databases, etc).",
              "In Transit: The data is being sent across systems/networks (ex: an API key being emailed from one person to another).",
              "In Use: The data is currently being accessed, processed, or manipulated by a user (ex: a bus's location at a school that an admin needs to know to help students).",
            ]}
            imageSrc="/images/three-states-of-data-1638x801.png"
            caption="Source: Sealpath"
          />
        </div>
      </section>
    </main>
  );
}
