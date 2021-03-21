
export default async (_, res) => {
    const auth = "Client-ID " + process.env.UNSPLASH_ACCESS_KEY
    const resX = await fetch(
        `https://api.unsplash.com/photos/random?query=bull&count=1&orientation=landscape`,
        {
            headers: {
                Authorization: auth,
                'Cache-Control': 'public, max-age=3600'
            },
        }
    );
    const responseJson = await resX.json()
    console.log(responseJson[0])

    res.setHeader('Cache-Control', 'public, max-age=3600');
    return res.status(200).json({
        xoxo: responseJson[0].urls.full
    })
};