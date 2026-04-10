import Button from '../components/Button';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-blue-900 bg-blue-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border-2 border-blue-300 bg-white p-6 shadow-xl">
            <div className="flex items-center justify-center overflow-hidden rounded-[1.25rem] bg-blue-100 h-72">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTldYhKGseiC8SMsLFNOkdT0RZPI7tk3AOyCQ&s" alt="Funny Fish Profile" className="h-full w-full object-cover rounded-full border-4 border-blue-200" />
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-500">
              About Zandra
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-blue-900 sm:text-4xl">
              The internet's foremost authority on aquatic absurdity.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-blue-600 sm:text-base">
              Zandra started as a simple idea: what if we collected all the weirdest, funniest, and most unexplainable fish pictures on the internet and put them in one place? Today, we are proud to be the premier destination for fish-related humor.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/articles">Read Our Articles</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-blue-900 bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-500">
            Our Journey
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-blue-900">Milestones of Memery</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-blue-900 bg-blue-50 p-5">
            <p className="text-2xl font-bold text-blue-900">05</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-500">
              Years of Memes
            </p>
          </div>

          <div className="rounded-3xl border-2 border-blue-900 bg-blue-50 p-5">
            <p className="text-2xl font-bold text-blue-900">10k+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-500">
              Fish Pics
            </p>
          </div>

          <div className="rounded-3xl border-2 border-blue-900 bg-blue-50 p-5">
            <p className="text-2xl font-bold text-blue-900">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-500">
              Viral Hits
            </p>
          </div>

          <div className="rounded-3xl border-2 border-blue-900 bg-blue-50 p-5">
            <p className="text-2xl font-bold text-blue-900">1</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-500">
              Mission
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-blue-900 bg-blue-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-500">
              Core Values
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-blue-900">What makes a good fish meme?</h2>

            <div className="mt-6 space-y-4">
              <article className="rounded-3xl border-2 border-blue-900 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-900">The Expression</h3>
                <p className="mt-3 text-sm leading-6 text-blue-600">
                  It's all in the eyes. A truly great fish meme features an expression of either pure apathy or profound confusion.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-blue-900 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-900">The Context</h3>
                <p className="mt-3 text-sm leading-6 text-blue-600">
                  Why is the fish there? What is it thinking? The less sense it makes, the funnier it is.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-blue-900 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-900">The Quality</h3>
                <p className="mt-3 text-sm leading-6 text-blue-600">
                  Counter-intuitively, lower resolution often equals higher comedy when it comes to aquatic internet culture.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-blue-900 bg-white p-5 shadow-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-500 mb-5">
              Behind the Scenes
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[1.25rem] bg-blue-100">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQOB-bkJYBebHbKNpyqeLjLst_8V_9xDBkkw&s" alt="Behind scenes 1" className="h-full w-full object-cover" />
              </div>
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[1.25rem] bg-blue-100">
                <img src="https://media.tenor.com/1GznYBOTdtgAAAAe/ugly-fish.png" alt="Behind scenes 2" className="h-full w-full object-cover" />
              </div>
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[1.25rem] bg-blue-100">
                <img src="https://i.kym-cdn.com/editorials/icons/mobile/000/014/715/fih-meme-explainer.jpg" alt="Behind scenes 3" className="h-full w-full object-cover" />
              </div>
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[1.25rem] bg-blue-100">
                <img src="https://a.pinatafarm.com/2560x1694/8d6cd7b51e/travis-scott-fish-8ac83dc829b62e94f4ee66ed86da793f-meme.jpeg" alt="Behind scenes 4" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="mt-5 text-center">
              <Button>Join the Team</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;