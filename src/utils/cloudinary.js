import { v2 as cloudinary } from "cloudinary";
import fs from 'fs/promises'; 

cloudinary.config({
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.API_KEY, 
        api_secret: process.env.API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    if (!localFilePath) {
        console.error("No file path provided.");
        return null;
    }

    try {
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });
        console.log("File Uploaded Successfully:", response.url);
        await fs.unlink(localFilePath)
        return response;
    } catch (error) {
        console.error("Error uploading file:", error);
        try {
            await fs.unlink(localFilePath);
            console.log("File deleted successfully after upload failure.");
        } catch (unlinkError) {
            console.error("Error deleting file:", unlinkError);
        }

        return null;
    }
};

export default uploadOnCloudinary;
