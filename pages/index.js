import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <div className="mx-auto mt-8 w-full max-w-5xl px-4">
      <header className="relative flex h-10 items-center justify-between">
        <div className="flex items-center space-x-7">
          <Bars3Icon className="h-5 w-5" />
          <MagnifyingGlassIcon className="h-5 w-5" />
        </div>
        <div className="absolute inset-x-0 flex justify-center">
          <svg
            width={65}
            height={40}
            viewBox="0 0 65 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx={20.5}
              cy={20}
              r={20}
              fill="#38BDF8"
              style={{
                mixBlendMode: "multiply",
              }}
            />
            <circle
              cx={44.5}
              cy={20}
              r={20}
              fill="#6EE7B7"
              style={{
                mixBlendMode: "multiply",
              }}
            />
          </svg>
        </div>
        <p className="text-sm font-semibold">Sign in</p>
      </header>

      <nav className="mx-auto mt-4 flex justify-between border-y py-5 text-sm font-semibold">
        <p>Business</p>
        <p>Design</p>
        <p>Culture</p>
        <p>Affairs</p>
        <p>Art</p>
        <p>Science</p>
        <p>Culture</p>
        <p>Sports</p>
      </nav>

      <main className="mt-16 pb-32">
        <ArticleCard article={article} />

        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {articles.map((article, i) => (
            <ArticleCard key={i} article={article} />
          ))}
        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-2">
          {articles.slice(0, 2).map((article, i) => (
            <ArticleCard key={i} article={article} />
          ))}
        </div>
      </main>
    </div>
  );
}

const articles = [
  {
    img: "/image-1.jpg",
    date: "October 13, 2022",
    title: "T-Mobile: Giving Voice to Employees With a Mobile Podcasting App",
    summary:
      "Discover how a small—but mighty—team from T-Mobile Human Resources was able to build on an existing content management platform and create an app that feels native to mobile devices.",
    author: {
      img: "/author-1.jpg",
      name: "Bob Lincoln",
      title: "Market Strategy",
    },
  },
  {
    img: "/image-2.jpg",
    date: "February 18, 2022",
    title: "Lorem ipsum dolor sit amet.",
    summary:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod debitis magnam quibusdam porro fugit non placeat voluptatibus labore dolore sed.",
    author: {
      img: "/author-2.jpg",
      name: "Bob Lincoln",
      title: "Market Strategy",
    },
  },
  {
    img: "/image-3.jpg",
    date: "June 26, 2022",
    title: "Lorem ipsum dolor sit amet consectetur.",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, reprehenderit dicta eveniet omnis ratione amet pariatur recusandae fugiat.",
    author: {
      img: "/author-3.jpg",
      name: "Bob Lincoln",
      title: "Market Strategy",
    },
  },
];

let article = {
  img: "/image-4.jpg",
  date: "October 13, 2022",
  title: "T-Mobile: Giving Voice to Employees With a Mobile Podcasting App",
  summary:
    "Discover how a small—but mighty—team from T-Mobile Human Resources was able to build on an existing content management platform and create an app that feels native to mobile devices.",
  author: {
    img: "/author-1.jpg",
    name: "Bob Lincoln",
    title: "Market Strategy",
  },
};

function ArticleCard({ article }) {
  return (
    <div className="@container">
      <div className="grid gap-8 @3xl:grid-cols-2">
        {/* <div className="aspect-square rounded-2xl bg-gray-600" /> */}
        <img
          src={article.img}
          className="aspect-[3/2] rounded-2xl object-cover @3xl:h-full @3xl:w-full"
        />
        <div>
          <div>
            <p className="text-sm font-semibold text-gray-600">
              {article.date}
            </p>
            <p className="mt-2 text-xl font-semibold @sm:text-2xl @sm:leading-9 @sm:tracking-tight @3xl:text-3xl">
              {article.title}
            </p>
            <p className="mt-3 text-gray-600 @sm:leading-7 @3xl:text-xl @3xl:leading-8">
              {article.summary}
            </p>
          </div>
          <div className="mt-5 flex items-center space-x-3 @sm:space-x-4 @3xl:mt-11 @3xl:space-x-5">
            {/* <div className="h-12 w-12 rounded-full bg-gray-200" /> */}
            <img
              src={article.author.img}
              className="h-6 w-6 rounded-full @sm:h-12 @sm:w-12"
            />
            <div className="flex @sm:flex-col">
              <p className="text-sm font-semibold @sm:leading-6">
                {article.author.name}
              </p>
              <span className="px-1.5 text-sm text-gray-600 @sm:hidden">
                &middot;
              </span>
              <p className="text-sm text-gray-600 @sm:leading-6">
                {article.author.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
