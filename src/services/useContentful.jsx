import { createClient } from "contentful";
import { TOKEN } from "./token";

const useContentful = () => {
  // The following data is copied from ContentFul platform "Settings -> API keys":
  // use of accessToken for content preview to receive also draft items
  const client = createClient({
    space: "gkpegdy872u1",
    accessToken: TOKEN,
    host: "preview.contentful.com",
  });

  const getRecipes = async (title) => {
    try {
      const entries = await client.getEntries({
        content_type: "recipe",
        select: "fields",
        order: "fields.title",
        // each line is a query option
        "fields.title[match]": title
        //"fields.categories.sys.id": category
      });

      return sanitizeEntries(entries);
    } catch (error) {
      console.log("Error fetching recipes: " + error);
    }
  }

  // helper function 
  const sanitizeEntries = (entries) => {
    const sanitizedEntries = entries.items.map((item) => {
      const image = item.fields.image.fields;

      return {
        ...item.fields,
        image
      };
    });
    return sanitizedEntries;
  }

  return { getRecipes };
};

export default useContentful;

// Example code from platform:
// const client = contentful.createClient({
//   space: 'gkpegdy872u1',
//   environment: 'master', // defaults to 'master' if not set
//   accessToken: 'kIkMfUwdndXQl9O_Ehc2bpDzOdyCMAydnfir6KbVrGk'
// })

// get specific entry:
// client.getEntry('7i5fyWcCWL4lQvVC9p3BY8')
//   .then((entry) => console.log(entry))
//   .catch(console.error)
