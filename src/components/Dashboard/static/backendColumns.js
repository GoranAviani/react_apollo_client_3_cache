import uuid from "uuid/v4";

const backendColumns = {
    [uuid()]: {
        name: "Requested",
        items: itemsFromBackend
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