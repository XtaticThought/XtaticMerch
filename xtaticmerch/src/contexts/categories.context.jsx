import {createContext, useState, useEffect} from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';

//remove after updating the store with correct items
import SHOP_DATA from '../shop-data.js';
 
export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    //Remove after updating the store with the correct items
    useEffect(()=>{
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        };
        
        getCategoriesMap();
    }, []);


    const value = {categoriesMap}; 
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    );
};