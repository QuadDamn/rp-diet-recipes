
import {createClient} from 'contentful-management';

const client = createClient({
  accessToken: process.env.REACT_APP_CONTENTFUL_MANAGEMENT_API_TOKEN
});

export async function createEntry(contentType, data) {
    const localeObject = addLocaleToObjectData(data);

    try {
        const space = await client.getSpace(process.env.REACT_APP_CONTENTFUL_SPACE);
        const entry = await space.createEntry(contentType, localeObject);
        console.log(entry);
        return entry;
    } catch (error) {
        throw error.message;
    }
}

function addLocaleToObjectData(data) {
    const localeObject = {};
    localeObject['fields'] = {};

    for (let [key, value] of Object.entries(data)) {
        localeObject.fields[key] = {};
        localeObject.fields[key]['en-US'] = value;
    }

    return localeObject;
}