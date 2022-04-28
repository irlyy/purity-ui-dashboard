import { useState, useEffect } from "react";
const axios = require('axios');

export const useFetchCoingeckoData = (coinId) => {
    const [price, setPrice] = useState(null);
    const [image, setImage] = useState(null);
    const [percentage, setPercentage] = useState(null);

    const [marketCap, setMarketCap] = useState(null);
    const [totalVolume, setTotalVolume] = useState(null);
    const [marketCapChange, setMarketCapChange] = useState(null);
    const [circulatingSupply, setCirculatingSupply] = useState(null);
    const [ath, setAth] = useState(null);

    useEffect(() => {
        axios
            .get('https://api.coingecko.com/api/v3/coins/' + coinId)
            .then(function (response) {
                setPrice(response.data.market_data.current_price.usd);
                setImage(response.data.image.small);
                setPercentage(response.data.market_data.price_change_percentage_24h_in_currency.usd);

                setMarketCap(response.data.market_data.market_cap.usd);
                setTotalVolume(response.data.market_data.total_volume.usd);
                setMarketCapChange(response.data.market_data.market_cap_change_percentage_24h);
                setCirculatingSupply(response.data.market_data.circulating_supply);
                setAth(response.data.market_data.ath.usd);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [coinId]);

    return { price, image, percentage, marketCap, totalVolume, marketCapChange, circulatingSupply, ath };
}

// export const useFetchCoingeckoTrending = () => {
//     const [id, setId] = useState(null);
//     const [name, setName] = useState(null);
//     const [symbol, setSymbol] = useState(null);

//     const [marketCapRank, setMarketCapRank] = useState(null);
//     const [image, setImage] = useState(null);

//     useEffect(() => {
//         axios
//             .get('https://api.coingecko.com/api/v3/search/trending')
//             .then(function (response) {
//                 response.data.coins.forEach(item => {
//                     setId(item.item.id);
//                     console.log(id);
//                 })
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     }, []);

//     return { id, name, symbol, marketCapRank, image };
// }