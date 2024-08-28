import { v2  as cloudinary } from 'cloudinary';

const connectCloudinary = async () => {

    await cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_APIKEY,
        api_secret: process.env.CLOUDINARY_SECRET_KEY
    }) 

}

export default connectCloudinary ;