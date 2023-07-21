import axios from "axios"
import { Folder, IResource } from ".."

export const appClient = axios.create({
    baseURL: `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}`,
    headers: {
        Authorization: `Basic ${Buffer.from(
            process.env.CLOUDINARY_API_KEY + ":" + process.env.CLOUDINARY_API_SECRET
            ).toString("base64")}`,
        },
    },
);

export const resources = async (): Promise<IResource> => {
    const response = await appClient.get<IResource>("/resources/image")
    return response.data
}


export const folders = async (): Promise<Folder> => {
    const response = await appClient.get<Folder>(`/folders/shoefactory`)
    return response.data
}

export const currentFolder = async () => {
    const response = await appClient.get(`/folders/samples`)
    return response.data
}

export async function search(options = {}): Promise<IResource> {
    const params: any = {
      ...options
    }
  
  
    const paramString = Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`).join('&');
  
    const results = await appClient.get(`/resources/search?${paramString}`, {
      headers: {
        Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
      }
    });
  
    return results.data;
  }