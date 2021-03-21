import { toJson, createApi } from 'unsplash-js';

let unsplash;

export default async (_, res) => {
    if (!unsplash) {
    unsplash = createApi({
        accessKey: process.env.UNSPLASH_ACCESS_KEY,
    });
  }

  const result = await unsplash.photos.getRandom({
    count: 1,
    query: 'bull',
  },
  { headers: { 'Cache-Control': 'public, max-age=3600' } },
  ).then(result => {
    if (result.type === 'success') {
      const photo = result.response[0];
      unsplash.photos.trackDownload({
        downloadLocation: photo.links.download_location,
      });
    }
    return result;
  });

  const photo = result.response[0];
  res.setHeader('Cache-Control', 'public, max-age=3600');
  return res.status(200).json({
       url: photo.urls.regular,
       username: photo.user.username,
       userrealname: photo.user.name,
       userlink: photo.user.links.self,
       photolink: photo.links.self,
     })
};