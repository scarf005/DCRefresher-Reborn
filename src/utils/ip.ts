import * as storage from "./storage";
import { Nullable } from "./types";

let ipData: Record<string, string>;

storage.get<string>("refresher.database.ip").then((data) => {
    ipData = data;
    console.log(ipData);
});

export const ISPData = (ip: string): ISPInfo => {
    return {
        name: ipData[ip],
        color: "#6495ed"
    };
};

export const format = (data: ISPInfo): Nullable<string> => {
    const { name } = data;
    return name ?? null;
};
