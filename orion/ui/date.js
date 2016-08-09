import moment from "moment";

/*
Returns date as a string
- Up to 12 hours, it returns X hours ago. Or X hours Y minutes ago, etc.
- Up to 48 hours, it returns Y days ago.
- After that, it returns the exact date + time.

Ommits time after a certain point.
 */
export function humanize_day(date) {
    date = moment(date);

    // Within 6 hours
    if (date > moment().subtract(22, 'hours')) {
        return moment(date).fromNow();   // a few seconds ago... a minute ago ... X minutes ago ... an hour ago ... X hours ago ...
    }

    // Within two days ago
    if (date > moment().subtract(72, 'hours')) {
        return moment(date).calendar();  // 2 days ago
    }

    // Within this week
    if (date > moment().startOf('week')) {
        moment(date).format("dddd, h:mm:ss a");  // "Sunday, 3:25:50 pm"
    }

    // Within this year
    if (date > moment().startOf('year')) {
        return moment(date).format("MMMM Do YYYY"); // "February 14th"
    }

    // Full format
    return moment(date).format("MMMM Do YYYY"); // "February 14th, 2010"
}

/*

  Always prints time.
*/
export function humanize_time(date) {
    date = moment(date);

    // Within 6 hours
    if (date > moment().subtract(48, 'hours')) {
        moment(date).calendar();    // Today at 12:20 pm ... Yesterday at 12:20 pm
    }

    // Within this week
    if (date > moment().startOf('week')) {
        moment(date).format("dddd, h:mm:ss a");  // "Sunday, 3:25:50 pm"
    }

    // Within this year
    if (date > moment().startOf('year')) {
        return moment(date).format("MMMM Do YYYY, h:mm:ss a"); // "February 14th, 3:25:50 pm"
    }

    // Full format
    return moment(date).format("MMMM Do YYYY, h:mm:ss a");  // February 14th 2010, 3:25:50 pm"
}