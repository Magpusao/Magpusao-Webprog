import Button from '../components/Button';

const ArticlePage = () => {
  const article1Image = 'https://ychef.files.bbci.co.uk/1280x720/p0lgrs69.jpg';
  const article2Image = 'https://cdn.loveandlemons.com/wp-content/uploads/2023/06/iced-matcha-latte.jpg'; 
  const article3Image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqcidksiLXdDigwsERb0Gpe1ExLt1OFpEX8w&s';
  const article4Image = 'https://www.allrecipes.com/thmb/totJUia-TjrmF6VnYGHOM5hVjqQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/241759-matcha-green-tea-ice-cream-VAT-003-4x3-01closeup-692d327cc2174abb84b440568f61e29a.jpg';

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-green-600 bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-green-600">
          The Matcha Times
        </p>
        <h1 className="max-w-xl text-4xl font-extrabold leading-tight text-green-900 sm:text-5xl">
          Culinary Journalism at its Finest.
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-7 text-green-600 sm:text-base">
          Dive into our collection of feature articles, exploring the science, culture, and sheer deliciousness of matcha.
        </p>
        <div className="mt-6">
          <Button to="/">Return Home</Button>
        </div>
      </section>

      <section className="border-y-2 border-green-600 bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-green-600">
            Green Tea Features
          </p>
          <h2 className="mt-2 text-3xl font-bold text-green-900">Latest deep-dives into matcha culture</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-3xl border-2 border-green-600 bg-green-50 p-4 shadow-lg hover:shadow-xl transition">
            <div className="overflow-hidden rounded-[1.25rem] bg-green-100">
              <img
                src={article1Image}
                alt="Matcha Powder"
                className="aspect-square w-full object-cover"
              />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-green-600">
              Tea History
            </p>
            <h3 className="mt-2 text-xl font-semibold text-green-900">The Power of the Powder</h3>
            <p className="mt-3 text-sm leading-6 text-green-800">
              Why does this vibrant green powder resonate so deeply with modern cafe-goers? A study in flavor profiles.
            </p>
            <Button className="mt-4">Read Now</Button>
          </article>

          <article className="rounded-3xl border-2 border-green-600 bg-green-50 p-4 shadow-lg hover:shadow-xl transition">
            <div className="overflow-hidden rounded-[1.25rem] bg-green-100">
              <img
                src={article2Image}
                alt="Iced Matcha Latte"
                className="aspect-square w-full object-cover"
              />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-green-600">
              Cafe Culture
            </p>
            <h3 className="mt-2 text-xl font-semibold text-green-900">Evolution of the Latte</h3>
            <p className="mt-3 text-sm leading-6 text-green-800">
              Tracing the origins of this popular drink from a traditional ceremony to a global phenomenon.
            </p>
            <Button className="mt-4">Explore History</Button>
          </article>

          <article className="rounded-3xl border-2 border-green-600 bg-green-50 p-4 shadow-lg hover:shadow-xl transition">
            <div className="overflow-hidden rounded-[1.25rem] bg-green-100">
              <img
                src={article3Image}
                alt="Matcha Dessert"
                className="aspect-square w-full object-cover"
              />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-green-600">
              Culinary Arts
            </p>
            <h3 className="mt-2 text-xl font-semibold text-green-900">When Baking Meets Tea</h3>
            <p className="mt-3 text-sm leading-6 text-green-800">
              An exclusive look at how matcha is bridging the gap between pastry chefs and tea sommeliers.
            </p>
            <Button className="mt-4">View Crossover</Button>
          </article>

          <article className="rounded-3xl border-2 border-green-600 bg-green-50 p-4 shadow-lg hover:shadow-xl transition">
            <div className="overflow-hidden rounded-[1.25rem] bg-green-100">
              <img
                src={article4Image}
                alt="Matcha Ice Cream"
                className="aspect-square w-full object-cover"
              />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-green-600">
              Dessert Science
            </p>
            <h3 className="mt-2 text-xl font-semibold text-green-900">Is Matcha Ice Cream the Best?</h3>
            <p className="mt-3 text-sm leading-6 text-green-800">
              A sweet but insightful interview with experts on the perfect balance of bitterness and sweetness.
            </p>
            <Button className="mt-4">Find Out Why</Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;