import Image from "next/image";
import NavBar from "../components/NavBar";
import InfoCard from "../components/InfoCard";

export default function Triad() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-r from-blue-300 to-blue-600 font-serif">
      {/* Navbar */}
      <NavBar />

      {/* Main content */}
      <section className="flex flex-col items-center justify-center flex-grow px-6 py-16">
        <div className="w-full max-w-5xl">
          <InfoCard
            title="What is the CIA Triad?"
            description="CIA is an acronym that stands for Confidentiality, Integrity, and Availability. These three parts are foundational in keeping data private, un-modified, and accessible to users."
            bullets={[
              "Confidentiality: The data is not revealed to unauthorized users (ex: military plans are revealed to unauthorized people).",
              "Integrity: The data is secure and is not modified or corrupted by users who aren't supposed to (ex: message intercepted and changed when sent from one person to another).",
              "Availability: The data is accessible to authorized users (ex: protected against DoS).",
            ]}
            imageSrc="/images/Cia-triad.png"
            caption="Source: negg Blog"
          />
        </div>
      </section>
    </main>
  );
}
