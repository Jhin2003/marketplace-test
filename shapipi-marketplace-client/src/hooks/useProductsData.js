import { useEffect } from "react";
import { useState } from "react";

const useProductsData = (dataInitialValue, isloadingInitialValue) => {

    var [data, setData] = useState(dataInitialValue);
    const [isLoading, setIsLoading] = useState(isloadingInitialValue);
    useEffect(() => {
        productsData();
    }, []);
    const productsData = async () => {
        try {
            const response = await fetch("http://Localhost:3000/miguel.jpg");
            const jsonData = await response.blob();
            const imageUrl = URL.createObjectURL(jsonData);
            setData(imageUrl)


        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);

        }
    }
    return [data, isLoading];
}




/*const useProductsData = (dataInitialValue, isloadingInitialValue) => {

    var [data, setData] = useState(dataInitialValue);
    const [isLoading, setIsLoading] = useState(isloadingInitialValue);
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
        } finally {
            setIsLoading(false);
        }
    }
    return [data, isLoading];
}*/

export default useProductsData;