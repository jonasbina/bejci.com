
export default async (_, res) => {
    const maxPhoto = 1000
    const page = 1 + Math.floor(Math.random() * maxPhoto)
    
    const auth = "Client-ID " + process.env.UNSPLASH_ACCESS_KEY

    const resX = await fetch(
        `https://api.unsplash.com/search/photos?query=bull&orientation=landscape&per_page=1&page=${page}`,
        {
            headers: {
                Authorization: auth,
            },
        }
    );
    const responseJson = await resX.json()
    const results = responseJson.results

    res.setHeader('Cache-Control', 'public, max-age=120');
    return res.status(200).json(results[0])
};