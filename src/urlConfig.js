//Base URL
export const api = 'http://localhost:2000/api';


export const generatePublicUrl = (fileName) => {
    return `http://localhost:2000/public/${fileName}`;
}

export const generateUrl = (fileName) => {
    return `http://localhost:2000${fileName}`;
}