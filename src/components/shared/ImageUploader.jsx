// Adaptation of https://github.com/JakeHartnell/react-images-upload.
// Didn't need support for multiple images; just needed to allow the user to upload one image.
// Also the code base was out of date, so updated it to use hooks and is now a functional component.

import React, {useState, useRef} from 'react';
import FlipMove from 'react-flip-move';
import {Grid, Button} from "@material-ui/core";

const styles = {
    display: "flex",
    alignItems: "left",
    // justifyContent: "center",
    flexWrap: "wrap",
    width: "100%"
};

const ERROR = {
    NOT_SUPPORTED_EXTENSION: 'NOT_SUPPORTED_EXTENSION',
    FILESIZE_TOO_LARGE: 'FILESIZE_TOO_LARGE'
};

const ImageUploader = ({setMainImage, imgExtension, maxFileSize, buttonText, withIcon, fileSizeError, fileTypeError}) => {

    const [imageUploadSettings, setImageUploadSettings] = useState({
        picture: '',
        file: '',
        fileErrors: []
    });

    let inputEl = useRef(null);


    const hasExtension = (fileName) => {
        const pattern = '(' + imgExtension.join('|').replace(/\./g, '\\.') + ')$';
        return new RegExp(pattern, 'i').test(fileName);
    };

    const onDropFile = async (e) => {
        const imageFile = e.target.files[0];
        const imageFileErrors = [];

        let fileError = {
            name: imageFile.name,
        };

        // Check for file extension
        if (!hasExtension(imageFile.name)) {
            fileError = Object.assign(fileError, {
                name: imageFile.name,
                type: ERROR.NOT_SUPPORTED_EXTENSION
            });
            imageFileErrors.push(fileError);
        }

        // Check for file size
        if (imageFile.size > maxFileSize) {
            fileError = Object.assign(fileError, {
                name: imageFile.name,
                type: ERROR.FILESIZE_TOO_LARGE
            });
            imageFileErrors.push(fileError);
        }

        const fileData = await readFile(imageFile);

        setImageUploadSettings({
            picture: fileData.dataURL,
            file: fileData.file,
            fileErrors: imageFileErrors
        });

        setMainImage(fileData.dataURL);
    };

    const onUploadClick = (e) => {
        e.target.value = null;
    };

    // Read a file and return a promise that when resolved gives the file itself and the data URL
    const readFile = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            // Read the image via FileReader API and save image result in state.
            reader.onload = (e) => {
                // Add the file name to the data URL
                let dataURL = e.target.result;
                dataURL = dataURL.replace(";base64", `;name=${file.name};base64`);
                resolve({file, dataURL});
            };

            reader.readAsDataURL(file);
        });
    };

    // Removing the uploaded image by resetting the state back to initial state.
    const removeImage = () => {
        setImageUploadSettings({
            picture: '',
            file: '',
            fileErrors: []
        })
    };

    const triggerFileUpload = () => {
        inputEl.click();
    };

    // Check if any errors && render
    const renderErrors = () => {
        return imageUploadSettings.fileErrors.map((fileError, index) => {
            return (
                <div className='errorMessage' key={index}>
                    * {fileError.name} {fileError.type === ERROR.FILESIZE_TOO_LARGE ? fileSizeError : fileTypeError}
                </div>
            );
        });
    };

    const renderPreview = () => {
        return (
            <div className="uploadPicturesWrapper">
                <FlipMove enterAnimation="fade" leaveAnimation="fade" style={styles}>
                    <div className="uploadPictureContainer">
                        <div className="deleteImage" onClick={() => removeImage()}>X</div>
                        <img src={imageUploadSettings.picture} className="uploadPicture" alt="preview"/>
                    </div>
                </FlipMove>
            </div>
        );
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <div className="fileUploader">

                    {!imageUploadSettings.picture && (
                        <div className="fileContainer">
                            <div className="errorsContainer">
                                {renderErrors()}
                            </div>
                            <Button
                                variant="contained"
                                color="primary"
                                type="button"
                                onClick={triggerFileUpload}
                            >
                                {buttonText}
                            </Button>
                            <input
                                type="file"
                                name="image-upload"
                                ref={input => inputEl = input}
                                onChange={onDropFile}
                                onClick={onUploadClick}
                                accept="image/*"
                            />
                        </div>
                    )}

                    {imageUploadSettings.picture && (
                        <div className="fileContainer">
                            {renderPreview()}
                        </div>
                    )}
                </div>
            </Grid>
        </Grid>
    )
};

export default ImageUploader;
