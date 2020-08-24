import { environment } from '../../environments/environment';
import { Categories } from '../category-list/categories';

export default class Util {
    static getCategoryByUrl(url: string): Categories {
        const baseUrl = environment.apiServer + environment.apiPrefix;
        const regex = new RegExp('(?<=' + baseUrl + '/).[^/]*');
        const category = url.match(regex);
        return Categories[category[0]] || null;
    }

    static isValidCategoryString(category: string) {
        return Object.values(Categories).includes(category);
    }
}
