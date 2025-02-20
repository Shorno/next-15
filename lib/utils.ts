import {clsx, type ClassValue} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}


export function convertToObject<T>(value: T): T {
    return JSON.parse(JSON.stringify(value))
}

//format number with decimal

export function formatNumber(number: number): string {
    const [integer, decimal] = number.toString().split(".");
    return decimal ? `${integer}.${decimal.padEnd(2, '0')}` : `${integer}.00`;
}