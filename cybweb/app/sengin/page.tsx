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
            title="What is social engineering?"
            description="Social engineering is the process of manipulating humans solely using psychology. The people who are manipulating the victims often act as authority figures, use fear, or pose as a trusted person in the victim's life, making the victim more likely to fall for the trap. Here are some common types of social engineering:"
            bullets={[
              "Pretexting: impersonating someone and rushing the victim with an emergency",
              "Piggybacking: using someone else's kindness/gullibility to get into a restricted area",
              "Scareware: using messages that scare the victim into thinking they have to install something/pay",
            ]}
            imageSrc="/images/66cecaf44426dff270ea3953_Social_engineering__25281_2529.webp"
            caption="Source: Hoxhunt"
          />
        </div>
      </section>
    </main>
  );
}
