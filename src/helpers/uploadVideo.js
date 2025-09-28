const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME_CLOUDINARY}/auto/upload`;

const uploadVideo = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "shopmaster_product"); // Make sure the preset allows video uploads

    const dataResponse = await fetch(url, {
        method: "POST",
        body: formData
    });

    return dataResponse.json();
};

export default uploadVideo;
