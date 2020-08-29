import { environment } from '../../environments/environment';
import { Categories } from '../category-list/categories';

export default class Util {
    static getCategoryByUrl(url: string): Categories {
        const { apiServer, apiPrefix } = environment;
        const regex = new RegExp('(https?://' + apiServer + '/' + apiPrefix + '/)(.[^/]*)');
        const category = url.match(regex);
        return Categories[category[2]] || null;
    }

    static isValidCategoryString(category: string): boolean {
        return Object.values(Categories).includes(category);
    }

    static getBaseUrl(): string {
        const { apiProtocol, apiServer, apiPrefix } = environment;
        return `${apiProtocol}://${apiServer}/${apiPrefix}`;
    }
}
