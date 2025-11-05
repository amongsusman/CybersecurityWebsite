import Image from "next/image";
import NavBar from "../components/NavBar";
import InfoCard from "../components/InfoCard";

export default function Authentication() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-r from-blue-300 to-blue-600 font-serif">
      {/* Navbar */}
      <NavBar />

      {/* Main content */}
      <section className="flex flex-col items-center justify-center flex-grow px-6 py-16">
        <div className="w-full max-w-5xl">
          <InfoCard
            title="What are the different kinds of authentication?"
            description="There are multiple methods of proving that you should be allowed into a private area/website. These methods include what you have, what you know, and what you are."
            bullets={[
              "What You Have: The person trying to authenticate has a physical/digital proof that they should be allowed in (ex: a Smart card with a chip, a digital certificate for a website).",
              "What You Know: The person trying to authenticate has specific knowledge of something, proving they should be allowed in (ex: a password only they know, their aunt's name).",
              "What You Are: The person trying to authenticate has a unique, biological characteristic (ex: a fingerprint or an eye scan).",
            ]}
            imageSrc="/images/Authentication_Factors.webp"
            caption="Source: Descope"
          />
        </div>
      </section>
    </main>
  );
}
