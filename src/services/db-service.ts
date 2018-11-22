export default class SwapiService {
    private apiBase = 'http://localhost:3000';

    public getResource = async (url: string) => {
        const res = await fetch(`${this.apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, receives ${res.status}`);
        }

        const body = await res.json();
        return body;
    };

    public getAllItems = async () => {
        const res = await this.getResource(`/items/`);
        return res;
    };

    public getItem = async (id: number) => {
        const item = await this.getResource(`/items/${id}/`);
        return item;
    };

    public getAllSlides = async () => {
        const res = await this.getResource(`/slides/`);
        return res;
    };
}