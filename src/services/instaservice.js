export default class InstaService {
    constructor() {
        //basic api address
        this._apiBase = 'http://localhost:3000/';
    }

    getResource = async (url) => {

        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok){
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        // returns Promise
        return res.json();
    }

    getAllPosts = async () => {
        const res = await this.getResource('posts/');
        console.log(res);
        return res;
    }

    getAllUsers = async () => {
        const res = await this.getResource('posts/');
        const userArr = res.map(this._transformUsers);
        console.log('userArr', userArr);
        return userArr;
    }

    _transformUsers = (user) => {
        return {
            name: user.name,
            photo: user.photo,
            id: user.id,
            alt: user.alt
        }
    }

    getAllPhotos = async () => {
        const res = await this.getResource('posts/');
        return res.map(this._transformPosts);
    }

    _transformPosts = (post) => {
        return {
            src: post.src, 
            alt: post.alt,
            id: post.id
        }
    }
}