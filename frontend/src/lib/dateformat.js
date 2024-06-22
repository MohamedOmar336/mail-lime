export const convertIsoToNormal = (isoDate)=>{
    // Create a Date object from the ISO 8601 formatted date
    const dateObject = new Date(isoDate);
  
    // Format the date to a normal format
    const normalFormat = dateObject.toISOString().slice(0, 19).replace("T", " ");
  
    return normalFormat;
}


export const formatDateTimeString =  (year, month, day, hours, minutes, seconds)=>{
    return `${day.toString().padStart(2, "0")}-${month.toString().padStart(2, "0")}-${year} ${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }
  