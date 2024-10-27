import { fetchData } from './service.js'; 
import { populateDropdown } from './service.js'; 
import { getSelectedCurrencies } from './service.js'; 
import { useSelectedCurrencies } from './service.js'; 
import { formatDateToLocal }  from './utils.js';

import { getUTCDayInput }  from './utils.js';
import { getUTCWeekInput }  from './utils.js';
import { getUTCMonthInput }  from './utils.js';
import { fetchTimeSeriesData } from './service.js';
import { updateFlag } from './service.js';
// import { displayChart } from './service.js';


const minutesBtn = document.getElementById('minutes');
const hourBtn = document.getElementById('hour');
const dayBtn = document.getElementById('day');
const weekBtn = document.getElementById('week');
const monthBtn = document.getElementById('month');
const firstCurrency = document.getElementById('firstCurrency');
const secondCurrency = document.getElementById('secondCurrency');
const dropdowns = document.querySelectorAll('.dropDown');  


firstCurrency.addEventListener('change', function(){
    useSelectedCurrencies();
    const selectedCurrency = firstCurrency.value;
    updateFlag('firstCurrencyFlag', selectedCurrency);
})
secondCurrency.addEventListener('change', function(){
    useSelectedCurrencies();
    const selectedCurrency = secondCurrency.value;
    updateFlag('secondCurrencyFlag', selectedCurrency);

})


minutesBtn.addEventListener('click', () => {
   
    let currencyPair = useSelectedCurrencies();
    console.log(currencyPair);
     let endDate = new Date();
     let startDate = new Date(endDate.getTime() - 15 * 60 * 1000)
     const formattedEndDate = formatDateToLocal(endDate);
    const formattedStartDate = formatDateToLocal(startDate);
     fetchTimeSeriesData(currencyPair, formattedStartDate, formattedEndDate,  'minute', 1);
});


hourBtn.addEventListener('click', () => {
    let currencyPair = useSelectedCurrencies();
    
    let endDate = new Date();
    let startDate = new Date(endDate.getTime() - 60 * 60 * 1000); // 1 hour ago

    const formattedEndDate = formatDateToLocal(endDate);
    const formattedStartDate = formatDateToLocal(startDate);

    fetchTimeSeriesData(currencyPair, formattedStartDate, formattedEndDate, 'minute', 5);
});


dayBtn.addEventListener('click', () => {
    let currencyPair = useSelectedCurrencies();

    // Get the current date
    let now = new Date();
    console.log(now);
    // Set the end date to today (start of today)
    const endDate = now // Today at 00:00

    // Set the start date to yesterday (start of yesterday)
    const startDate = new Date(endDate); // Copy the end date
    startDate.setDate(startDate.getUTCDate() - 1); // Go back one day
    console.log("TESTING : --------------", startDate);

    // Format the dates to local time
    let formattedStartDate = formatDateToLocal(startDate);
    let formattedEndDate = formatDateToLocal(endDate);

    console.log("Start Date: ", formattedStartDate); // Debugging log
    console.log("End Date: ", formattedEndDate); // Debugging log

    // Fetch time series data
    fetchTimeSeriesData(currencyPair, formattedStartDate  , formattedEndDate, 'hourly', 5);
});



weekBtn.addEventListener('click', () => {
    let currencyPair = useSelectedCurrencies();

    let endDate = new Date(); // Current date and time
    let startDate = new Date(endDate.getTime() - 7 * 24 * 60 * 60 * 1000); // 7 days ago

    const formattedEndDate = formatDateToLocal(endDate);
    const formattedStartDate = formatDateToLocal(startDate);

    fetchTimeSeriesData(currencyPair, formattedStartDate, formattedEndDate, 'daily', 1);
});


monthBtn.addEventListener('click', async () => {
    const currencyPair = useSelectedCurrencies(); 

    let endDate = new Date(); // Current date and time
    let startDate = new Date(endDate.getTime() - 30 * 24 * 60 * 60 * 1000); // 30 days ago

    const formattedEndDate = formatDateToLocal(endDate);
    const formattedStartDate = formatDateToLocal(startDate);

    fetchTimeSeriesData(currencyPair, formattedStartDate, formattedEndDate, 'daily', 1);
});



fetchData();


