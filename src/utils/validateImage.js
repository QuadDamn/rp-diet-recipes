const validateImage = (imageFilePath, imageFile) => {
    return new Promise((resolve, reject) => {
        const regex = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.png|.gif)$");

        if (regex.test(imageFilePath.toLowerCase())) {
            const reader = new FileReader();
            reader.readAsDataURL(imageFile);
            reader.onload = async (e) => {
                let img = new Image();

                img.onload = async () => {
                    if (img.width < 650) {
                        resolve({error: 'Please upload an image that is at least 650px in width.'});
                    } else {
                        return resolve({url: img.src});
                    }
                };

                img.src = e.target.result;
            }
        } else {
            resolve({error: 'Please select a valid file type.  We only support JPEG/JPG, PNG, and GIF files.'});
        }
    });
};

export default validateImage;