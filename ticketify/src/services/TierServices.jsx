import { createTier, deleteTier, fetchAllTiers } from "../helpers/AdminHelper"


const services = {}

export const allTierServices = {
    getAllTiers: async (filters = {}) => {
        const { title = title, size = 10, page = 0 } = filters
        try {
            const result = await fetchAllTiers({ title, size, page })
            return { items: result.items, totalPages: result.totalPages, totalElements: result.totalElements, isNextPageAvailable: result.isNextPageAvailable, success: true }
        } catch (error) {
            return { items: [], success: false }
        }
    },

    createTier: async ( tier, price, capacity, event ) => {
        try {
            const result = await createTier({ tier, price, capacity, event });
            return { data: result, success: true };

        } catch (error) {
            console.error({ error });
            return { data: '', success: false };
        }
    },

    deleteTier: async (id) => {
        try {
            const result = await deleteTier(id);
            return { data: result, success: true };

        } catch (error) {
            console.error({ error });
            return { data: '', success: false };
        }
    },
}