import uuid from "uuid/v4";
import backendData from "./backendData";

const backendColumns = {
    [uuid()]: {
        name: "Requested",
        items: backendData
    },
    [uuid()]: {
        name: "To do",
        items: []
    },
    [uuid()]: {
        name: "In Progress",
        items: []
    }
};

export default backendColumns;