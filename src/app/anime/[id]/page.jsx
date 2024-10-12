import React from 'react';
import { getAnime } from '@/libs/api-libs';
import Image from 'next/image';

const Page = async ({ params: { id } }) => {
  const anime = await getAnime(`anime/${id}`);
  console.log(anime);
  return (
    <>
      <div className="px-10 pt-4 pb-4">
        <div className="font-bold text-white text-xl">
          {anime.data.title}-{anime.data.year}
        </div>
        <div className="flex gap-2">
          <div className="text-white font-2xl">
          {anime.data.title_japanese}
          <p>{anime.data.episodes} Episode - Score:  {anime.data.score}</p>
          </div>
        </div>
        <div className="pt-4 flex sm:flex-nowrap flex-wrap gap-2 text-slate-400">
          <Image src={anime.data.images.webp.image_url} className="w-full rounded object-cover md:max-h-96 min-h-96 md:max-w-96 min-w-96 sm:max-w-60 min-w-60 sm:max-h-60 min-h-60" alt={anime.data.images.jpg.image_url} width={200} height={200} />
          <p className="text-justify text-md md:pl-4">{anime.data.synopsis}</p>
        </div>
      </div>
    </>
  );
};

export default Page;
