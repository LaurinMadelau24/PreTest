import AnimeList from '@/components/AnimeList';
import Header from '@/components/AnimeList/Header';
import LandingPage from '@/components/LandingPage';
import Link from 'next/link';
import { getAnime, GetAnimeRecommended, reproduce } from '@/libs/api-libs';

const Page = async () => {
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`);
  // const TopAnime = await response.json();
  // console.log(TopAnime);

  
  const updated=5
  let AnimeUpdated = await GetAnimeRecommended("recommendations/anime","entry")
  AnimeUpdated = reproduce(AnimeUpdated,5)

  const popular=10
  const TopAnimePopular = await getAnime("top/anime",`limit=${popular}`)

  let RecommendedAnime = await GetAnimeRecommended("recommendations/anime","entry")
  RecommendedAnime = reproduce(RecommendedAnime,5)
  // console.log (RecommendedAnime)


  return (
    <>
     <section>
        {/* <Header title="Latest Updated" linkTitle="Show All" linkHref="/popular" /> */}
        <LandingPage/>
      </section>
    

     <section>
        <Header title="Latest Updated" linkTitle="Show All" linkHref="/popular" />
        <AnimeList api={AnimeUpdated} />
      </section>

      <section>
        <Header title="Recommended" />
        <AnimeList api={RecommendedAnime} />
      </section>

      <section>
        <Header title="Top Popular" />
        <AnimeList api={TopAnimePopular} />
      </section>
    </>
  );
};

export default Page;
