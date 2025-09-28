const uploadImage = async (file) => {
    const CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME_CLOUDINARY; // Ensure this is defined
    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`; // Use "image/upload"

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default"); // Check if correct in Cloudinary settings

    try {
        const response = await fetch(url, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Cloudinary error:", errorData);
            return null;
        }

        const data = await response.json();
        console.log("Uploaded Image URL:", data.secure_url);
        return data.secure_url;
    } catch (error) {
        console.error("Upload failed:", error);
        return null;
    }
};

export default uploadImage;
