import Button from '../components/Button';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-blue-900 bg-blue-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-500">
              Welcome
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-blue-900 sm:text-4xl">
              Welcome to Zandra's Fish Meme Gallery
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-blue-600 sm:text-base">
              Dive into the internet's most bizarre, hilarious, and utterly confusing aquatic humor. Explore our carefully curated collection of the finest fish memes.
            </p>
            <div className="mt-6">
              <Button to="/about" variant="primary">
                Dive Deeper
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-blue-300 bg-white p-6 shadow-xl">
            <div className="flex items-center justify-center overflow-hidden rounded-[1.25rem] bg-blue-100 aspect-video">
              <img src="https://preview.redd.it/id-please-ik-its-a-meme-im-not-joking-v0-pveese881gna1.jpg?width=640&crop=smart&auto=webp&s=1a15a94743cc9f1469fd6027ab61558132197576" alt="Fish meme" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-blue-900 bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-500">
            Meme Stats
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-blue-900">
            Our Aquatic Impact
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl border-2 border-blue-900 bg-blue-50 p-5 shadow-sm hover:shadow-md transition">
            <p className="text-2xl font-bold text-blue-900">1M+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-500">
              Laughs
            </p>
          </div>

          <div className="rounded-3xl border-2 border-blue-900 bg-blue-50 p-5 shadow-sm hover:shadow-md transition">
            <p className="text-2xl font-bold text-blue-900">08</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-500">
              Oceans
            </p>
          </div>

          <div className="rounded-3xl border-2 border-blue-900 bg-blue-50 p-5 shadow-sm hover:shadow-md transition">
            <p className="text-2xl font-bold text-blue-900">24/7</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-500">
              Meming
            </p>
          </div>

          <div className="rounded-3xl border-2 border-blue-900 bg-blue-50 p-5 shadow-sm hover:shadow-md transition">
            <p className="text-2xl font-bold text-blue-900">04</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-500">
              Species
            </p>
          </div>
        </div>
      </section>
    
    <section className="border-y-2 border-blue-900 bg-blue-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-500">
            Featured Memes
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-blue-900">
            Hall of Fame
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">

          <article className="rounded-3xl border-2 border-blue-900 bg-white p-4 shadow-lg hover:-translate-y-1 transition duration-300">
            <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] bg-blue-100">
              <img src="https://a.pinatafarm.com/2560x1694/8d6cd7b51e/travis-scott-fish-8ac83dc829b62e94f4ee66ed86da793f-meme.jpeg" alt="Travis Scott Fish" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-blue-900">
              The Sicko Mode Fish
            </h3>
            <p className="mt-3 text-sm leading-6 text-blue-600">
              Straight up! This fish knows how to bring the hype to the underwater concert.
            </p>
            <Button className="mt-4" variant="primary">
              View More
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-blue-900 bg-white p-4 shadow-lg hover:-translate-y-1 transition duration-300">
            <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] bg-blue-100">
              <img src="https://media.tenor.com/1GznYBOTdtgAAAAe/ugly-fish.png" alt="Ugly Fish" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-blue-900">
              The Derp Fish
            </h3>
            <p className="mt-3 text-sm leading-6 text-blue-600">
              Beauty is in the eye of the beholder, and this beholder needs glasses.
            </p>
            <Button className="mt-4" variant="primary">
              View More
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-blue-900 bg-white p-4 shadow-lg hover:-translate-y-1 transition duration-300">
            <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] bg-blue-100">
              <img src="https://i.kym-cdn.com/editorials/icons/mobile/000/014/715/fih-meme-explainer.jpg" alt="Staring Fish" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-blue-900">
              The Staring Champion
            </h3>
            <p className="mt-3 text-sm leading-6 text-blue-600">
              He sees you. He knows what you did. And he's judging you silently.
            </p>
            <Button className="mt-4" variant="primary">
              View More
            </Button>
          </article>
        </div>
      </section>
    </div>
  );
}

export default HomePage;