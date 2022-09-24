import uuid from "uuid/v4";
import backendData from "./backendData";

const backendColumns = {
    [uuid()]: {
        name: "1",
        items: backendData
    },
    [uuid()]: {
        name: "2",
        items: []
    },
    [uuid()]: {
        name: "3",
        items: []
    }
};

export default backendColumns;