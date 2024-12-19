import { createClient } from "contentful";

const client = createClient({
space: process.env.CONTENTFUL_SPACE_ID,
environment: process.env.CONTENTFUL_ENVIRONMENT,
accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

client.getContentTypes().then((response) => {
console.log(response.items);
})
.catch(console.error);

