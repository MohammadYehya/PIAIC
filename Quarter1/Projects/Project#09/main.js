import date from 'date-and-time';
import { clear } from 'console';
let now = new Date();
let sec = 3, min = 0, hrs = 0;
let timetobe = date.addSeconds(now, sec);
timetobe = date.addMinutes(timetobe, min);
timetobe = date.addHours(timetobe, hrs);
let waitsec = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};
let pad = (num) => {
    let val = Math.trunc(num);
    return val.toString().padStart(2, '0');
};
let val = date.subtract(timetobe, now);
while (val.toHours() || val.toMinutes() || val.toSeconds()) {
    val = date.subtract(timetobe, now);
    await waitsec(1000).then(() => { now = date.addMilliseconds(now, 1000); });
    clear();
    console.log(pad((val.toHours()) % 24) + ':' + pad((val.toMinutes()) % 60) + ':' + pad((val.toSeconds()) % 60));
}
