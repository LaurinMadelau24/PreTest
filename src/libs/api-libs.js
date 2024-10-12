export const getAnime= async(resource,query) =>{
    const getData = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
    const anime = await getData.json()

    return anime
}

export const GetAnimeRecommended = async(resource, objectProperty)=>{
    const getData = await getAnime (resource)
    
    return getData.data?.flatMap(item=>item[objectProperty])
}

export const reproduce = (data, gap) => {
    const first = ~~(Math.random() * (data.length- gap)+ 1)
    const last = first + gap

    const getData = {
        data: data.slice(first,last)
    }
    return getData
}