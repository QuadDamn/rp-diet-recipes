const contentful = require("contentful");

const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_MANAGEMENT_API_TOKEN
});

export async function getEntriesByContentType(contentType) {
    try {
        return await client.getEntries({
            content_type: contentType
        });
    } catch (error) {
        throw error.message;
    }
}

export async function getEntry(id) {
    try {
        return await client.getEntry(id);
    } catch (error) {
        throw error.message;
    }
}