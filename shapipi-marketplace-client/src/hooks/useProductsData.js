import { useEffect } from "react";
import { useState } from "react";

const useProductsData = initialvalue => {
    var [data, setData] = useState([initialvalue]);
    useEffect(() => {
        productsData();
    }, []);
    const productsData = async () => {
        try {
            const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
            const jsonData = await response.json();
            setData(jsonData);
            console.log(jsonData)
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return data;
}

export default useProductsData;