import { createInvolved, deleteInvolved, getAllInvolved, getInvolvedById } from "../helpers/AdminHelper"


const services = {}

export const allInvolvedServices = {
    getAllInvolved: async (filters = {}) => {
        const { size = 10, page = 0 } = filters
        try {
            const result = await getAllInvolved({ size, page })
            return { items: result.items.content, totalElements: result.totalElements, totalPages: result.totalPages, isNextPageAvailable: result.isNextPageAvailable, success: true }
        } catch (error) {
            return { items: [], success: false }
        }
    },
    getOneInvolvedById: async (id) => {
        //const { size = 10, page = 0, id } = filters
        try {
            const result = await getInvolvedById({ id })
            return { items: result.items.content, success: true }
        } catch (error) {
            return { items: [], success: false }
        }
    },
    createInvolved: async (id, involved, event) => {
        try {
            const result = await createInvolved({ id, involved, event });
            return { data: result, success: true };

        } catch (error) {
            console.error({ error });
            return { data: '', success: false };
        }
    },
    deleteInvolved: async (id) => {
        try {
            const result = await deleteInvolved(id);
            return { data: result, success: true };

        } catch (error) {
            console.error({ error });
            return { data: '', success: false };
        }
    },
}
