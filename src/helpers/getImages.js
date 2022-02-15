export const getImages = async(category) => {
    const url = `https://api.unsplash.com/search/photos?query=${encodeURI(category)}&client_id=4UrZSXAPR5Dzh6hT0UzBOpeonCDJiyboyRiWbB-qjP0`;
    const resp = await fetch(url);
    const {results} = await resp.json();

    const images = results.map(img => {
      return {
          id: img.id,
          title: img.alt_description,
          url: img.urls.regular,
          city: img.tags[0].title
        }
      
    });

   return(images);
}
