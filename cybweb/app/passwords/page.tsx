import Image from "next/image";
import NavBar from "../components/NavBar";
import InfoCard from "../components/InfoCard";

export default function Passwords() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-r from-blue-300 to-blue-600 font-serif">
      {/* Navbar */}
      <NavBar/>

      {/* Main content */}
      <section className="flex flex-col items-center justify-center flex-grow px-6 py-16">
        <div className="w-full max-w-5xl">
          <InfoCard
            title="What are passwords and how can they be guessed?"
            description="A password is simply a combination of characters and numbers. To guess this combination, hackers have a few methods:"
            bullets={[
              "Brute Force: using software to automate the process of guessing every single combination",
              "Bad Password: if a user makes a bad password, a hacker can easily guess it with knowledge of the user (ex: birthday, name, etc.).",
              "Dictionary Attack: a hacker can use a dictionary of common words in passwords to see if your password is common, too.",
            ]}
            imageSrc="/images/newpassword.png"
            caption="Source: University of Tennessee Health Science Center"
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center flex-grow px-6 py-16">
        <div className="w-full max-w-5xl">
          <InfoCard
            title="How can you make a secure password?"
            description="Strong passwords have certain attributes that make them strong. Here are a few tips to know when making a password:"
            bullets={[
              "No Personal Info: don't use any personal information like family names, birthdates, etc, that hackers can find out",
              "Unique: make sure your passwords are different across websites to ensure safety for each of your accounts",
              "Use Special Characters: adding special characters like ! or - can significantly increase the time it takes for a hacker to brute force your password",
            ]}
            imageSrc="/images/2025+Hive+Systems+Password+Table.webp"
            caption="Source: Hive Systems"
          />
        </div>
      </section>
    </main>
  );
}
