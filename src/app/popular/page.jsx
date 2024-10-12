'use client';

import React, { useEffect, useState } from 'react';
import Pagination from '@/components/Utilities/Pagination';
import HeaderMenu from '@/components/Utilities/HeaderMenu';
import AnimeList from '@/components/AnimeList';
import { getAnime } from '@/libs/api-libs';



const Page = () => {
  const [page, setpage] = useState(1);
  const [TopAnime, SetTopAnime] = useState([1]);

  const FetchData = async () => {
    // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`);
    // const data = await response.json();
    const getPopular = await getAnime("top/anime",`page=${page}`)

    SetTopAnime(getPopular);
  };

  useEffect(() => {
    FetchData();
  }, [page]);

  return (
    <>
    <HeaderMenu title={`Latest Updated #${page}`} />
    <AnimeList api={TopAnime} />
    {/* {TopAnime.pagination && TopAnime.pagination.last_visible_page ? ( */}
      <Pagination 
      page={page} 
      lastPage={TopAnime.pagination?.last_visible_page} 
      setPage={setpage}
      />
    {/* ) : (
      null
    )} */}
  </>
  );
};

export default Page;
