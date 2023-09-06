import axios from 'axios';


const getProductTask = async () => {
    try{
        const response = axios.get("https://dummyjson.com/products")
        return (await response).data;
        
    }
    catch (error) {
        console.log(error);
    }
}

export {getProductTask};