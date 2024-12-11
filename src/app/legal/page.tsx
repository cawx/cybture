import React from "react";

export default function page() {
  return (
    <section className="p-4 w-full mx-auto max-w-[850px] pt-12">
      <h2 className="text-3xl font-medium mb-2">Legal information</h2>
      <div className="flex flex-col gap-y-5 text-white/80 pt-4">
        <p>
          The commands provided on this page are intended for educational
          purposes and legal use only, such as in Capture The Flag (CTF)
          competitions or authorized penetration testing environments.
          Unauthorized scanning or attacking of systems without explicit
          permission is illegal and can lead to severe consequences.
        </p>
        <p>
          Im not responsible for any misuse or illegal activities conducted with
          the commands or information provided. Use responsibly and ethically.
          🤓
        </p>
      </div>
    </section>
  );
}
