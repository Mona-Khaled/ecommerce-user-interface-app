import React from "react";
import Layout from "../../components/Layout";
import getParams from "../../utils/getParams";
import ClothingAndAccessories from "./ClothingAndAccessories";
import ProductPage from "./ProductPage";
import ProductStore from "./ProductStore";
import "./style.css";

/**
 * @author
 * @function ProductListPage
 **/

const ProductListPage = (props) => {
    const renderProduct = () => {
        console.log(props);
        /**
         *   props.location.search --> 
         *   {`/${category.slug}?cid=${category._id}&type=${category.type}`}  
        **/
        const params = getParams(props.location.search);
        let content = null;
        switch (params.type) {
            case "store":
                content = <ProductStore {...props} />;
                break;
            case "page":
                content = <ProductPage {...props} />;
                break;
            default:
                content = <ClothingAndAccessories {...props} />;
        }
        return content;
    };

    return <Layout>{renderProduct()}</Layout>;
};

export default ProductListPage;


/**
 * extracting 'match' from props .. print props for more clarification
 * match has a params attribute, and params has the slug attribute and
 * that's what we need.
 */

/* map function can be used for array only, and productsByPrice is an object
not array, so we will use Object.keys which will return array with the list of keys
keys are ==> 'under5k, under10k, ....' */