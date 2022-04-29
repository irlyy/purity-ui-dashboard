import { lineChartOptions } from "variables/charts";
const axios = require('axios');

export const getChartData = async () => {
    const chartData = Array(2).fill(null);
    var start = new Date();
    start.setDate(start.getDate() - 30);
    const end = Date.now();

    const categoriesArray = Array().fill(null);
    //bitcoin
    const bitcoinPriceArray = await useFetchHistoryPrice('bitcoin', start.getTime(), end);
    console.log(bitcoinPriceArray);
    const bitcoinPrices = Array().fill(null);
    for (let i = 0; i < bitcoinPriceArray.length; ++i) {
        bitcoinPrices[i] = Number(bitcoinPriceArray[i].priceUsd).toPrecision(4);
        categoriesArray[i] = String(bitcoinPriceArray[i].date).substring(5,10);
    }
    chartData[0] = { name: "Bitcoin", data: bitcoinPrices };

    //ethereum
    const ethereumPriceArray = await useFetchHistoryPrice('ethereum', start.getTime(), end);
    const ethereumPrices = Array().fill(null);
    for (let i = 0; i < ethereumPriceArray.length; ++i) {
        ethereumPrices[i] = Number(ethereumPriceArray[i].priceUsd).toPrecision(4);
    }
    chartData[1] = { name: "Ethereum", data: ethereumPrices };

    lineChartOptions.xaxis.categories = categoriesArray;
    return { data: chartData, options: lineChartOptions };
}

const useFetchHistoryPrice = async (coinId, start, end) => {
    //1650819661000 1651819661000
    const coincap = await axios.get('https://api.coincap.io/v2/assets/' + coinId + '/history?interval=d1&start=' + start + '&end=' + end)
    // console.log(coincap);  
    return coincap.data.data;
}