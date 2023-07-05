import { getAllRoles, getAllUserRoles } from "../helpers/AdminHelper"


const services = {}

export const allUserRolesServices = {
    getAllRoles: async () => {
        try {
            const result = await getAllRoles()
            return { items: result.items, success: true }
        } catch (error) {
            return { items: [], success: false }
        }
    },

    getAllUserRoles: async () => {
        try {
            const result = await getAllUserRoles()
            return { items: result.items, success: true }
        } catch (error) {
            return { items: [], success: false }
        }
    }
}