import { environment } from '../../environments/environment';
import { Categories } from '../category-list/categories';

export default class Util {
    static getCategoryByUrl(url: string): Categories {
        const { apiServer, apiPrefix } = environment;
        const path = apiServer + apiPrefix;;
        const regex = new RegExp('(https?:/' + path + '/)(.[^/]*)');
        const category = url.match(regex);
        return Categories[category[2]] || null;
    }

    static isValidCategoryString(category: string) {
        return Object.values(Categories).includes(category);
    }
}
