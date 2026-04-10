import Button from '../components/Button';

const ArticlePage = () => {
  const article1Image = 'https://i.kym-cdn.com/editorials/icons/mobile/000/014/715/fih-meme-explainer.jpg';
  const article2Image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQOB-bkJYBebHbKNpyqeLjLst_8V_9xDBkkw&s'; 
  const article3Image = 'https://a.pinatafarm.com/2560x1694/8d6cd7b51e/travis-scott-fish-8ac83dc829b62e94f4ee66ed86da793f-meme.jpeg';
  const article4Image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTldYhKGseiC8SMsLFNOkdT0RZPI7tk3AOyCQ&s';

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-blue-600 bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-600">
          The Zandra Times
        </p>
        <h1 className="max-w-xl text-4xl font-extrabold leading-tight text-blue-900 sm:text-5xl">
          Aquatic Journalism at its Finest.
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-7 text-blue-600 sm:text-base">
          Dive into our collection of feature articles from the deep web, exploring the science, culture, and sheer absurdity of fish memes.
        </p>
        <div className="mt-6">
          <Button to="/">Return Home</Button>
        </div>
      </section>

      <section className="border-y-2 border-blue-600 bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-600">
            Deep Sea Features
          </p>
          <h2 className="mt-2 text-3xl font-bold text-blue-900">Latest deep-dives into meme culture</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-3xl border-2 border-blue-600 bg-blue-50 p-4 shadow-lg hover:shadow-xl transition">
            <div className="overflow-hidden rounded-[1.25rem] bg-blue-100">
              <img
                src={article1Image}
                alt="Staring Fish"
                className="aspect-square w-full object-cover"
              />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-600">
              Meme Psychology
            </p>
            <h3 className="mt-2 text-xl font-semibold text-blue-900">The Power of the Stare</h3>
            <p className="mt-3 text-sm leading-6 text-blue-800">
              Why does this fish's unblinking gaze resonate so deeply with modern internet users? A study in aquatic existentialism.
            </p>
            <Button className="mt-4">Read Now</Button>
          </article>

          <article className="rounded-3xl border-2 border-blue-600 bg-blue-50 p-4 shadow-lg hover:shadow-xl transition">
            <div className="overflow-hidden rounded-[1.25rem] bg-blue-100">
              <img
                src={article2Image}
                alt="Derp Fish"
                className="aspect-square w-full object-cover"
              />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-600">
              Internet History
            </p>
            <h3 className="mt-2 text-xl font-semibold text-blue-900">Evolution of the Derp</h3>
            <p className="mt-3 text-sm leading-6 text-blue-800">
              Tracing the origins of this peculiar image from a forgotten forum post to a global phenomenon.
            </p>
            <Button className="mt-4">Explore History</Button>
          </article>

          <article className="rounded-3xl border-2 border-blue-600 bg-blue-50 p-4 shadow-lg hover:shadow-xl transition">
            <div className="overflow-hidden rounded-[1.25rem] bg-blue-100">
              <img
                src={article3Image}
                alt="Travis Scott Fish"
                className="aspect-square w-full object-cover"
              />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-600">
              Pop Culture
            </p>
            <h3 className="mt-2 text-xl font-semibold text-blue-900">When Hip Hop Meets the Ocean</h3>
            <p className="mt-3 text-sm leading-6 text-blue-800">
              An exclusive look at how the 'Sicko Mode' fish bridged the gap between rap enthusiasts and marine biologists.
            </p>
            <Button className="mt-4">View Crossover</Button>
          </article>

          <article className="rounded-3xl border-2 border-blue-600 bg-blue-50 p-4 shadow-lg hover:shadow-xl transition">
            <div className="overflow-hidden rounded-[1.25rem] bg-blue-100">
              <img
                src={article4Image}
                alt="Grumpy Fish"
                className="aspect-square w-full object-cover"
              />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-600">
              Marine Biology
            </p>
            <h3 className="mt-2 text-xl font-semibold text-blue-900">Are Fishes Actually Mad at Us?</h3>
            <p className="mt-3 text-sm leading-6 text-blue-800">
              A humorous but insightful interview with experts on whether the grumpiness is real or just our projection.
            </p>
            <Button className="mt-4">Find Out Why</Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;