import Image from "next/image";
import NavBar from "../components/NavBar";
import InfoCard from "../components/InfoCard";

export default function Phishing() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-r from-blue-300 to-blue-600 font-serif">
      {/* Navbar */}
      <NavBar/>

      {/* Main content */}
      <section className="flex flex-col items-center justify-center flex-grow px-6 py-16">
        <div className="w-full max-w-5xl">
          <InfoCard
            title="What is phishing?"
            description="Phishing is the usage of fake emails or websites intended to lure victims into providing personal or confidential information. Some facts about phishing include the following:"
            bullets={[
              "Phishing is used in the majority of cyber attacks.",
              "Phishing is one of the top 4 biggest threats in the digital world.",
              "Phishing doesn't include malware / malicious code: it is just as simple as an email sent to you.",
            ]}
            imageSrc="/images/10-tips-to-prevent-phishing.png"
            caption="Source: Splashtop"
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center flex-grow px-6 py-16">
        <div className="w-full max-w-5xl">
          <InfoCard
            title="How can you detect if an email is an example of phishing?"
            description="Phishing emails can sometimes look real, but there are often small details that are noticeable, which can tell you if it is fake or not:"
            bullets={[
              "Mispellings or Incorrect Grammar: You havee an unpaid balacne of $400.",
              "Urgency: Do this within 24 hours or your account will be closed!",
              "Malicious Links: http://amazoon123-1239626r612na.com",
            ]}
            imageSrc="/images/Phish Image for Web Article 2_0.avif"
            caption="Source: University of Colorado"
          />
        </div>
      </section>
    </main>
  );
}
