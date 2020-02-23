const contentful = require("contentful");

const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_DELIVERY_API_TOKEN
});

export async function getEntriesByContentType(contentType) {
    try {
        return await client.getEntries({
            content_type: contentType
        });
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export async function getEntry(id) {
    try {
        return await client.getEntry(id);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}