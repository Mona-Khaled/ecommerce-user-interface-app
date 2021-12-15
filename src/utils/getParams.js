/**
 *  getParams for extracting "category id" and "type" parameters from URL 
 *  URL:  href={`/${category.slug}?cid=${category._id}&type=${category.type}`}>
 */
export default (query) => {
    if (query) {
        const queryString = query.split("?")[1];
        if (queryString.length > 0) {
            const params = queryString.split("&");
            const paramsObj = {};
            params.forEach(param => {
                const keyValue = param.split("=");
                paramsObj[keyValue[0]] = keyValue[1];
                /**
                 * Now params are stored as key value pairs: 
                 * cid = ${category._id}  
                 * type = ${category.type}
                 */
            });
            return paramsObj;
        }
    }
    return {};
}


