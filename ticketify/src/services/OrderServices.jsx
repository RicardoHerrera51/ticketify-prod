import { getAllOrders, getOneOrderById } from "../helpers/AdminHelper";

const services = {};

export const allOrderServices = {
    getOrders: async (size, page) => {
        try {
            const result = await getAllOrders( size, page )
            return { items: result.items, totalPages: result.totalPages, totalElements: result.totalElements, isNextPageAvailable: result.isNextPageAvailable, success: true }
        } catch (error) {
            return { items: [], success: false }
        }
    },
    getOneById: async (id) => {
        try {
            const result = await getOneOrderById({ id })
            return { items: result.items, success: true }
        } catch (error) {
            return { items: [], success: false }
        }
    },
}