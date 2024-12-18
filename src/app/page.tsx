// pages/index.js

import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Head>
        <title>Team Appreciation</title>
      </Head>

      <main className="max-w-2xl text-center">
        <h1 className="text-2xl font-bold mb-8">Team Appreciation Messages</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">Alaba</h2>
          <p className="mt-4">
            To Vincent (hon), expressing my deepest appreciation for leading our team and for providing a safe place
            not just for me but to this capstone itself. Thank you for pushing us to always achieve the best — to Dale,
            thank you for always being the kindness to the team, your calm presence greatly helped in the success of
            our project. And to Jai, I thank you also for your insights, for being the clown of the team, you made us
            laugh in the simplest way possible. To my team, I could not think of a better team to do this project with.
            Always and forever grateful for the journey we had. Till our next project together!
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">Labuguen</h2>
          <p className="mt-4">
            To Gladys (hon), thank you for being the voice of our Capstone Research, lending clarity and confidence to
            our work. To Dale and Jaixen, thank you for your unwavering effort and for being the wings that carried
            this project forward. To our adviser and Panelist, your guidance and support were invaluable in shaping
            the success of this project. To our friends, thank you for your encouragement and for being a constant
            source of inspiration. Together, we made it happen!
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">Ramos</h2>
          <p className="mt-4">
            First and foremost, I would like to express my heartfelt gratitude to God for His continuous guidance all
            throughout our journey in this project. Our prayers and efforts alongside His presence became instrumental
            in helping us navigate challenges and achieve our goals. I would also like to express my gratitude to our
            adviser, Sir Revin Mamitag and Ma’am Adorna Rosana, for their guidance and patience in helping us achieve
            our success in this project. I am deeply thankful for their patience, time, and thoughtful feedback, which
            motivated us to strive for this achievement. I would also like to extend my appreciation to my family and
            friends for their unwavering belief and constant encouragement. A special thanks to Rey and to the rest of
            our team for providing the resources and opportunities that helped us grow and learn. Their patience in
            leading us and becoming a huge part of achieving the success of this project. This accomplishment would
            not have been possible without the collective effort and support we received along the way. Lastly, I am
            truly grateful for the experiences and lessons gained, which have provided insight both personally and
            professionally.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Yaneza</h2>
          <p className="mt-4">
            I would like to thank everyone who helped me finish this capstone. I want to express my gratitude to my
            family for their unwavering support, which has given me strength along the way. I am immensely
            appreciative of my teachers and adviser for their leadership and insightful advice, which have greatly
            influenced the course and accomplishment of our work. I want to express my gratitude to my friends and
            classmates for their support, encouragement, and criticism, which helped to make the process memorable and
            enriching. Without the combined help of everyone in my immediate vicinity, I could not have achieved this
            milestone.
          </p>
        </section>
      </main>
    </div>
  );
}
