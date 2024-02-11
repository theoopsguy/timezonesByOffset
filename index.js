import * as dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";
dayjs.extend(utc);
dayjs.extend(timezone);
import { timezones } from "./timezones.js";

const timezoneMap = {};

for (const tz of timezones) {
  const dateInTimezone = dayjs().utc().tz(tz).toDate();
  const offsetMinutes = dateInTimezone.getTimezoneOffset();
  const offsetString = offsetMinutes.toString();
  if (!timezoneMap[offsetString]) {
    timezoneMap[offsetString] = [tz];
  } else {
    timezoneMap[offsetString].push(tz);
  }
}

console.log(timezoneMap);

