import moment from "moment";


export const  dateTime = (dateString: string) => {
    let localDate=moment.utc(dateString).local();
    return[localDate.format("hh:mm A"),localDate.format(" DD/MM")];
  }