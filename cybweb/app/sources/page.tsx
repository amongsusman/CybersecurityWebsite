import Image from "next/image";
import NavBar from "../components/NavBar";
import InfoCard from "../components/InfoCard";

export default function SocialEngineering() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-r from-blue-300 to-blue-600 font-serif">
      {/* Navbar */}
      <NavBar/>

      {/* Main content */}
      <section className="flex flex-col items-center justify-center flex-grow px-6 py-16">
        <div className="w-full max-w-5xl">
          <InfoCard
            title="Sources"
            description=""
            bullets={[
              "Cyber.org: provided me with most of the knowledge I used to create this website",
              "Ibm.com: provided me with some extra information on social engineering",
              "Mass.gov: provided me with a useful list of some potential threats that I explained more on in the corresponding part of the website"
            ]}
            imageSrc="/images/illustrasjoner_kildehenvisning_500x450.png"
            caption="Source: Sok & Skriv"
          />
        </div>
      </section>
    </main>
  );
}
