import AnimeList from '@/components/AnimeList';
import Header from '@/components/AnimeList/Header';
import Link from 'next/link';

const Page = async ({params}) => {
    const {Value} = params
    const decodeValue = decodeURI(Value)
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodeValue}`);

  const searchAnime = await response.json();
  console.log(searchAnime);

  return (
    <>
     <section>
        <Header title={`Search For ${decodeValue}...`}/>
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
