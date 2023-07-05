import axios from "axios";
import { fetchAllEvents, createEvent, changeEventStatus, getOneEventByTitle, getEventsByCategory } from "../helpers/AdminHelper";

const services = {};

export const allEventServices = {
    getEvents: async (title, size, page) => {
        try {
            const result = await fetchAllEvents( title, size, page )
            return { items: result.items, totalPages: result.totalPages, totalElements: result.totalElements, isNextPageAvailable: result.isNextPageAvailable, success: true }
        } catch (error) {
            return { items: [], success: false }
        }
    },

    getEventByTitle: async (event) => {
        try {
            const result = await getOneEventByTitle({ event });
            return { data: result, success: true };

        } catch (error) {
            console.error({ error });
            return { data: '', success: false };
        }
    },

    getEventsByCategory: async (category) => {
        try {
            const result = await getEventsByCategory({ category });
            return { data: result, success: true }
        } catch (error) {
            return { data: '', success: false }
        }
    },

    createEvent: async ( title, image, date, hour, place, address, category ) => {
        try {
            const result = await createEvent({ title, image, date, hour, place, address, category });
            return { data: result, success: true };

        } catch (error) {
            console.error({ error });
            return { data: '', success: false };
        }
    },

    updateEvent: async ( title, image, date, hour, place, address, category ) => {
        try {
            const result = await createEvent({ title, image, date, hour, place, address, category });
            return { data: result, success: true };

        } catch (error) {
            console.error({ error });
            return { data: '', success: false };
        }
    },

    changeStatus: async (id) => {
        try {
            const result = await changeEventStatus(id);
            return { data: result, success: true };

        } catch (error) {
            console.error({ error });
            return { data: '', success: false };
        }
    },
}

export default services;