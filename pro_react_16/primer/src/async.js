import { sumValues } from "./sum";

export function asyncAdd(values) {
    setTimeout(() => {
        let total = sumValues(values);
        console.log(`Async Total: ${total}`);
        return total;
    }, 500);
}

export function asyncAddPromise(values) {
    return new Promise(callback =>
        setTimeout(() => {
            let total = sumValues(values);
            console.log(`Async Total: ${total}`);
            callback(total);
        }, 500));
}