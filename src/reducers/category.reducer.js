/******************************** State Management ***********************************/
import { categoryConstants } from "../actions/constants";

const initState = {
    categories: [],
    loading: false,
    error: null
};

const buildNewCategories = (parentId, categories, category) => {
    let myCategories = [];
    // Incase the added category is a parent itself... then chilldren array will be emty []
    if (parentId == undefined) {
        return [
            ...categories,           // previous categories 
            {
                _id: category._id,    // the new added category object
                name: category.name,
                slug: category.slug,
                children: []
            }
        ];
    }
    for (let cat of categories) {

        if (cat._id == parentId) {// ex: comparing the Mobile id "parent"  with the parentId "of the new added category ex: samsung"
            myCategories.push({
                ...cat,
                children: cat.children ? buildNewCategories(parentId, [...cat.children, {
                    _id: category._id,
                    name: category.name,
                    slug: category.slug,
                    parentId: category.parentId,
                    children: category.children
                }], category) : []
            });
        } else {
            myCategories.push({
                ...cat,
                children: cat.children ? buildNewCategories(parentId, cat.children, category) : []
            });
        }
    }
    return myCategories;
}

export default (state = initState, action) => {
    switch (action.type) {

        case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
            state = {
                ...state,
                categories: action.payload.categories
            }
            break;
        case categoryConstants.ADD_NEW_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case categoryConstants.ADD_NEW_CATEGORY_SUCCESS:
            const category = action.payload.category;
            const updateCategories = buildNewCategories(category.parentId, state.categories, category);
            console.log(updateCategories);
            state = {
                ...state,
                categories: updateCategories,
                loading: false
            }
            break;
        case categoryConstants.ADD_NEW_CATEGORY_FAILURE:
            state = {
                ...initState
            }
            break;
    }
    return state;
}

