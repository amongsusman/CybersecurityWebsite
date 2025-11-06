import Image from "next/image";
import NavBar from "../components/NavBar";
import InfoCard from "../components/InfoCard";

export default function PotentialThreats() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-r from-blue-300 to-blue-600 font-serif">
      {/* Navbar */}
      <NavBar/>

      {/* Main content */}
      <section className="flex flex-col items-center justify-center flex-grow px-6 py-16">
        <div className="w-full max-w-5xl">
          <InfoCard
            title="What are potential threats of cybersecurity attacks/not having good cybersecurity?"
            description="Better to be safe than sorry! It is important to have good cybersecurity practices to ensure that none of the following happens to you:"
            bullets={[
              "Exposed Information: a hacker can leak your usernames/passwords they are easy to guess/brute force or use them to impersonate you in your account",
              "Problems with Accessibility: if you don't take the right measures to make your data always accessible to authorized users, a hacker can DoS or DDoS the machine/service that lets people access this data",
              "Malware/Worms/Viruses: being unaware of malicious links or suspicious files can make you an easy target for hackers to use phishing to get you to download malware",
            ]}
            imageSrc="/images/Top+10+Cyber+Security+Threats+1.webp"
            caption="Source: Sprintzeal.com"
          />
        </div>
      </section>
    </main>
  );
}
