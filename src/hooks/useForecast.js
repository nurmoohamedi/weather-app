import {useState} from "react";
import axios from "axios";
import getCurrentDayForecast from "../utilities/getCurrentDayForecast";
import getCurrentDayDetailedForecast from "../utilities/getCurrentDayDetailedForecast";
import getUpcomingDaysForecast from "../utilities/getUpcomingDaysForecast";

const BASE_URL = 'https://www.metaweather.com/api/location';
const CROSS_DOMAIN = 'https://cors-anywhere.herokuapp.com';
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const useForecast = () => {

    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [forecast, setForecast] = useState(null);

    const getId = async location => {
        const {data} = await axios(`${REQUEST_URL}/search`, {params: {query: location}});

        if (!data || data.length === 0) {
            setIsError("There's no such location!");
            setIsLoading(false);
            return;
        }

        return data[0];
    }

    const getData = async woeid => {

        const { data } = await axios(`${REQUEST_URL}/${woeid}`)

        if (!data || data.length === 0) {
            setIsError("Something went wrong!");
            setIsLoading(false);
            return;
        }

        return data;
    }

    const gatherForecastData = (data) => {
        const currentDay = getCurrentDayForecast(data.consolidated_weather[0], data.title);
        const currentDayDetails = getCurrentDayDetailedForecast(data.consolidated_weather[0]);
        const upcomingDays = getUpcomingDaysForecast(data.consolidated_weather);

        setForecast({ currentDay, currentDayDetails, upcomingDays });
        setIsLoading(false);
    }

    const submitRequest = async location => {
        if (typeof location === "undefined" || location === null)
            return;

        setIsLoading(true);
        setIsError(false);

        const responseId = await getId(location);
        if (!responseId?.woeid) return;

        const responseData = await getData(responseId.woeid);
        if (!responseData) return;

        gatherForecastData(responseData);
    }

    return {
        isError, isLoading, forecast, submitRequest
    }
}

export default useForecast;