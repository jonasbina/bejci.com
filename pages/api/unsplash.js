
export default async (_, res) => {
    const auth = "Client-ID " + process.env.UNSPLASH_ACCESS_KEY
    const resX = await fetch(
        `https://api.unsplash.com/photos/random?query=bull&count=1&orientation=landscape`,
        {
            headers: {
                Authorization: auth,
            },
        }
    );
    const responseJson = await resX.json()    

    res.setHeader('Cache-Control', 'public, max-age=3600');
    return res.status(200).json(responseJson[0])
};