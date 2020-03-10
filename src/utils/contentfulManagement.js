import {createClient} from 'contentful-management';

const client = createClient({
  accessToken: process.env.REACT_APP_CONTENTFUL_MANAGEMENT_API_TOKEN
});

export async function createEntry(contentType, data, imageData) {
    const localeObject = addLocaleToObjectData(data);

    try {
        const space = await client.getSpace(process.env.REACT_APP_CONTENTFUL_SPACE);
        const environment = await space.getEnvironment('master');

        // Only want to upload an image if the content type is a recipe.  No other content type needs an image upload at this time.
        // The profile picture upload for a user goes to Auth0.
        if (contentType === 'recipe') {
            const assetData = await assestUploadAndCreate(contentType, 'Image', data.title, imageData);

            // The asset has now been uploaded and created at this point.
            // Now we need to link it with the new entry we are creating below.
            localeObject.fields.mainImage = {};
            localeObject.fields.mainImage['en-US'] = {
                sys: {
                    type: "Link",
                    linkType: "Asset",
                    id: assetData.sys.id
                }
            }
        }

        const entry = await environment.createEntry(contentType, localeObject);
        await entry.publish();
    
        const noLocaleEntry = removeLocaleFromObjectData(entry);

        console.log(noLocaleEntry);

        return noLocaleEntry;
    } catch (error) {
        throw error.message;
    }
}

export async function assestUploadAndCreate(contentType, assetType, subjectName, assetData) {
    const space = await client.getSpace(process.env.REACT_APP_CONTENTFUL_SPACE);
    const environment = await space.getEnvironment('master');

    const contentTypeSentenceCase = toSentenceCase(contentType);

    const uploadedAsset = await environment.createAssetFromFiles({
        fields: {
            title: {
                'en-US': `${assetType} for ${contentTypeSentenceCase} '${subjectName}'`,
            },
            description: {
                'en-US': `${assetType} for ${contentTypeSentenceCase} '${subjectName}'`,
            },
            file: {
                'en-US': {
                    contentType: `image/${assetData.originalData.type}`,
                    fileName: assetData.originalData.name,
                    file: assetData.originalData
                }
            }
        }
    });;

    const processedUploadedAsset = await uploadedAsset.processForAllLocales();
    await processedUploadedAsset.publish();

    return processedUploadedAsset;
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

function removeLocaleFromObjectData(data) {
    const noLocaleObject = {
        ...data,
        fields: {}
    }

    for (let [key] of Object.entries(data.fields)) {
        noLocaleObject.fields[key] = data.fields[key]['en-US'];
    }

    return noLocaleObject;
}

function toSentenceCase(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
