import React, {useState} from 'react';
import Cropper from 'react-easy-crop';
import getCroppedImage from "../../utils/getCroppedImage";

import {
    Slider,
    Dialog,
    Button,
    DialogTitle
} from '@material-ui/core';


const ImageEditor = ({mainImage, onClose, open, handleMainImageSave}) => {

    const cropperInitialValues = {
        height: 850,
        width: 650,
        showGrid: false,
        zoom: 1,
        croppedAreaPixels: null,
        crop: {
            x: 0,
            y: 0
        },
    };

    const [cropperSettings, setCropperSettings] = useState(cropperInitialValues);

    console.log(cropperSettings);

    const handleCropChange = (crop) => {
        setCropperSettings({
            ...cropperSettings,
            crop
        });
    };

    const handleZoomChange = (zoom) => {
        setCropperSettings({
            ...cropperSettings,
            zoom
        });
    };

    const handleCropComplete = (croppedArea, croppedAreaPixels) => {
        setCropperSettings({
            ...cropperSettings,
            croppedAreaPixels
        });
    };

    const handleSliderZoomChange = (zoom) => {
        setCropperSettings({
            ...cropperSettings,
            zoom
        })
    };



    return (
        <Dialog onClose={onClose} aria-labelledby="editing-recipe-image-dialog-title" open={open}>
            <DialogTitle id="editing-recipe-image-dialog-title">Editing Recipe Image</DialogTitle>

            <div className="crop-container">
                <Cropper
                    image={mainImage}
                    crop={cropperSettings.crop}
                    zoom={cropperSettings.zoom}
                    aspect={4 / 3}
                    onCropChange={handleCropChange}
                    onZoomChange={handleZoomChange}
                    onCropComplete={handleCropComplete}
                />
            </div>

            <div className="controls">
                <Slider
                    value={cropperSettings.zoom}
                    min={1}
                    max={3}
                    step={0.1}
                    onChange={(e, zoom) => handleSliderZoomChange(zoom)}
                />
            </div>

            <div className="f-row full">
                <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    className="button"
                    onClick={() => handleMainImageSave(cropperSettings.croppedAreaPixels)}
                >Save</Button>
                <Button
                    type="button"
                    variant="contained"
                    color="secondary"
                    className="button"
                    onClick={() => onClose()}
                >Cancel</Button>
            </div>
        </Dialog>
    );
};

export default ImageEditor;