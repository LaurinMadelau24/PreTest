'use client';

import Img  from '@/components/Img/anime.jpg'

const Page = () => {
  return (
    <>
      <div className="bg-cover bg-center bg-[url('../components/Img/anime.jpg')]">
        <div className="relative isolate px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-10 sm:py-12 lg:py-24">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
            <div className="text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-300 sm:text-6xl">Welcome ON Site MyAnime</h1>
              <p className="mt-6 text-lg leading-8 text-gray-400">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
              <div className="mt-5 flex items-center justify-center gap-x-6">
                <a href="/popular"className="rounded-md bg-slate-900 
                px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
                >Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
