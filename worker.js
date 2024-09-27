import fetch from 'node-fetch';

export async function getMediaInfo(mediaID) {
    const url = `${process.env.API_INFO}${mediaID}`;
    console.log(url);
    const response = await (await fetch(url)).json();
    return response;
}

export async function getPngImage(imageUrl) {
    const response = await fetch(imageUrl);
    if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`);
    }
    const buffer = await response.arrayBuffer();
    const base64Image = Buffer.from(buffer).toString('base64');
    return base64Image;
}

export async function getSubtitles(subID) {
    const url = `https://kisskh.co/api/Sub/${subID}`;
    const response = await (await fetch(url)).json();
    return response;
}