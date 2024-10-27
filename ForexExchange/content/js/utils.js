export function formatDateToLocal(date) {
    const year = date.getFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}-${hours}:${minutes}`;
}
 


export function getUTCMinutInput() {
    const now = new Date(); 
    const utcHours = now.getUTCHours();
    const utcMinutes = now.getUTCMinutes();
    const endDate = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), utcHours, utcMinutes));
    const startDate = new Date(endDate.getTime() - 15 * 60 * 1000); 
    const formatDateToUTC = (date) => {
        return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}-${String(date.getUTCDate()).padStart(2, '0')}-${String(date.getUTCHours()).padStart(2, '0')}:${String(date.getUTCMinutes()).padStart(2, '0')}`;
    };
    return {
        start_date: formatDateToUTC(startDate), 
        end_date: formatDateToUTC(endDate)     
    };
}



export function getUTCHourInput() {
    const endDate = new Date(); 
    const endHour = endDate.getUTCHours(); 
    const startHour = (endHour - 1 + 24) % 24; 
    const startDate = new Date(endDate); 
    startDate.setUTCHours(startHour); 
    return {
        startDate: startDate.toISOString().slice(0, 16), 
        endDate: endDate.toISOString().slice(0, 16)      
    };
}

export function getUTCDayInput() {
    const endDate = new Date(); 
    const endDay = endDate.getUTCDate(); 
    const startDate = new Date(endDate);
    startDate.setUTCDate(endDay - 1);
    return {
        startDate: startDate.toISOString().slice(0, 16), 
        endDate: endDate.toISOString().slice(0, 16)      
    };
}

export function getUTCWeekInput() {
    const endDate = new Date();
    const startDate = new Date(endDate - 7 * 24 * 60 * 60 * 1000);
    return { startDate: startDate.toISOString().slice(0, 16), endDate: endDate.toISOString().slice(0, 16) };
}


export function getUTCMonthInput() {
    const endDate = new Date(); 
    const startDate = new Date(endDate); 
    startDate.setUTCDate(endDate.getUTCDate() - 30); 

    const startMonth = startDate.getUTCMonth();
    const endMonth = endDate.getUTCMonth();

    return {
        start_date: startDate.toISOString().slice(0, 10), 
        end_date: endDate.toISOString().slice(0, 10)      
    };
}
