import { createCategory, deleteCategory, fetchAllCategories, getOneCategory, getOneCategoryByName } from "../helpers/AdminHelper";

const services = {};

export const allCategoryServices = {
    getAllCategories: async (filters = {}) => {
        const { title = title, size = 10, page = 0 } = filters
        try {
            const result = await fetchAllCategories({ title, size, page })
            return { items: result.items, isNextPageAvailable: result.isNextPageAvailable, success: true }
        } catch (error) {
            return { items: [], success: false }
        }
    },

    getCategory: async (id) => {
        try {
            const result = await getOneCategory({ id });
            return { data: result, success: true };

        } catch (error) {
            console.error({ error });
            return { data: '', success: false };
        }
    },

    getCategoryByName: async (categoryName) => {
        try {
            const result = await getOneCategoryByName({ categoryName });
            return { data: result, success: true };

        } catch (error) {
            console.error({ error });
            return { data: '', success: false };
        }
    },

    createCategory: async (id, category) => {
        try {
            const result = await createCategory({ id, category });
            return { data: result, success: true };

        } catch (error) {
            console.error({ error });
            return { data: '', success: false };
        }
    },

    deleteCategory: async (id) => {
        try {
            const result = await deleteCategory(id);
            return { data: result, success: true };

        } catch (error) {
            console.error({ error });
            return { data: '', success: false };
        }
    },
}

export default services;