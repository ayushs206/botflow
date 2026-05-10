import { db } from '../db/manager.js'

export const UniqueID = () => {
    const uniqueId = Math.random().toString(36).substr(2, 9);
    if (db[uniqueId]) {
        return UniqueID();
    } else {
        return uniqueId;
    }
}

export const sanitizeUserId = (value) => {
    if (!value) return null;

    const match = value.match(/^<@!?(\d+)>$/);
    if (match) return match[1];

    if (/^\d+$/.test(value)) return value;

    return null;
}

