import Image from 'next/image';
import Link from 'next/link';

const AnimeList = ({ api }) => {
  return (
    <>
      <div className="px-5 pb-4">
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-6">
        {api.data?.map((anime,index) => {
          return(
            <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer text-slate-400 hover:text-cyan-600 transition-all"
            key={index}
            >
            <Image src={anime.images.webp.image_url} alt="" width={200} height={200} className="w-full md:max-h-96 md:min-h-80 sm:max-h-80 sm:min-h-96  shadow-xl rounded-t-md" />
            <h3 className="font-bold md:text-md sm:text-sm text-center pt-2 rounded-b-md">{anime.title}</h3>
          </Link>
          )
        })}
        
        </div>
      </div>
    </>
  );
};

export default AnimeList;
