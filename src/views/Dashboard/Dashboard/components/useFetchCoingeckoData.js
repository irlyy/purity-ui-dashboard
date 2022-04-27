import { useState, useEffect } from "react";
const axios = require('axios');

const useFetchCoingeckoData = (coinId) => {
    const [price, setPrice] = useState(null);
    const [image, setImage] = useState(null);
    const [percentage, setPercentage] = useState(null);

    useEffect(() => {
        axios
            .get('https://api.coingecko.com/api/v3/coins/' + coinId)
            .then(function (response) {
                setPrice(response.data.market_data.current_price.usd);
                setImage(response.data.image.small);
                setPercentage(response.data.market_data.price_change_percentage_24h_in_currency.usd);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [coinId]);

    return { price, image, percentage };
}

export default useFetchCoingeckoData;