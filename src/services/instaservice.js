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
        const users = res.map(item => {
            return (item.name, item.photo);
        })
        return users;
    }
}