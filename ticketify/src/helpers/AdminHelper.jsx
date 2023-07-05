import axios from "axios";
import { getToken, getId } from '../context/AppContext'
export const BASE_URL = "http://ticketify-0764d0148323.herokuapp.com/";
export const CLOUD_NAME = 'duxqteogb'
export const UPLOAD_PRESET = 'jw3jwwpb'

// Event
export const fetchAllEvents = async ({ title, size, page }) => {
    const response = await axios.get(`${BASE_URL}events/all${title}`,
        {
            headers: {
                "Authorization": `Bearer ${getToken()}`
            },
            params: {
                size: size,
                page: page
            }
        });

    const postResponse = await response.data;

    return { items: postResponse.content, totalPages: postResponse.totalPages, totalElements: postResponse.totalElements, isNextPageAvailable: page + 1 < postResponse.totalPages }
};

export const getOneEventByTitle = async ({ event }) => {
    const formData = new FormData();
    formData.append("title", event);

    const response = await axios.get(`${BASE_URL}events/all`,
        {
            headers: {
                "Authorization": `Bearer ${getToken()}`
            },
            params: {
                title: event
            }
        })

    if (response.status === 200)
        return response.data.content;
};

export const getEventsByCategory = async ({ category }) => {
    const formData = new FormData();
    formData.append("id", category);

    const response = await axios.get(`${BASE_URL}events/category/${category}`,
        {
            headers: {
                "Authorization": `Bearer ${getToken()}`
            }
        })

    if (response.status === 200)
        return response.data;
};

export const createEvent = async ({ title, image, date, hour, place, address, category }) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);
    formData.append("date", date);
    formData.append("hour", hour);
    formData.append("place", place);
    formData.append("address", address);
    formData.append("category", category);

    const response = await axios.post(`${BASE_URL}events/save`, formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${getToken()}`
            }
        });
    console.log(response)

    if (response.status === 200)
        return response.data;
}

export const updateEvent = async ({ title, newTitle, image, date, hour, place, address, category }) => {
    const formData = new FormData();
    formData.append("newTitle", newTitle);
    formData.append("image", image);
    formData.append("date", date);
    formData.append("hour", hour);
    formData.append("place", place);
    formData.append("address", address);
    formData.append("category", category);

    const response = await axios.put(`${BASE_URL}events/update/${title}`, formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${getToken()}`

            }
        });

    return response.data;
}

export const changeEventStatus = async (id) => {
    const response = await axios.post(`${BASE_URL}events/switch/${id}`, null,
        {
            headers: {
                "Authorization": `Bearer ${getToken()}`
            }
        });

    return response.data;
}

// Category
export const fetchAllCategories = async ({ size, page }) => {
    const response = await axios.get(`${BASE_URL}categories/`,
        {
            headers: {
                "Authorization": `Bearer ${getToken()}`
            },
            params: {
                size: size,
                page: page
            }
        });

    const postResponse = await response.data;

    return { items: postResponse, isNextPageAvailable: page + 1 < postResponse.pages }
};

export const getOneCategory = async ({ id }) => {
    const response = await axios.get(`${BASE_URL}categories/${id}`,
        {
            headers: {
                "Authorization": `Bearer ${getToken()}`
            }
        })

    if (response.status === 200)
        return response.data;
};

export const getOneCategoryByName = async ({ categoryName }) => {
    const formData = new FormData();
    formData.append("categoryName", categoryName);

    const response = await axios.get(`${BASE_URL}categories/category/${categoryName}`,
        {
            headers: {
                "Authorization": `Bearer ${getToken()}`
            }
        })

    if (response.status === 200)
        return response.data;
};

export const createCategory = async ({ id, category }) => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("category", category);


    const response = await axios.post(`${BASE_URL}categories/save`, formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                "Authorization": `Bearer ${getToken()}`
            }
        });

    if (response.status === 200)
        return response.data;
    else {
        console.log(response)
    }
}


export const deleteCategory = async (id) => {
    const response = await axios.delete(`${BASE_URL}categories/delete/${id}`,
        {
            headers: {
                "Authorization": `Bearer ${getToken()}`
            }
        });

    return response.data;
}

// Role
export const getAllRoles = async () => {
    const response = await axios.get(`${BASE_URL}role/all`,
        {
            headers: {
                "Authorization": `Bearer ${getToken()}`
            }
        });

    const postResponse = await response.data;

    return { items: postResponse }
}

// UserRole
export const getAllUserRoles = async () => {
    const response = await axios.get(`${BASE_URL}user/userroles/all`,
        {
            headers: {
                "Authorization": `Bearer ${getToken()}`
            }
        });

    const postResponse = await response.data;

    return { items: postResponse }
}

// Tier
export const fetchAllTiers = async ({ tier, size, page }) => {
    const response = await axios.get(`${BASE_URL}tiers/`,
        {
            headers: {
                "Authorization": `Bearer ${getToken()}`
            },
            params: {
                size: size,
                page: page
            }
        });

    const postResponse = await response.data;

    return { items: postResponse, totalPages: postResponse.totalPages, totalElements: postResponse.totalElements, isNextPageAvailable: page + 1 < postResponse.totalPages }
}

export const createTier = async ({ tier, capacity, price, event }) => {
    const formData = new FormData();
    formData.append("tier", tier);
    formData.append("capacity", capacity);
    formData.append("price", price);
    formData.append("event", event);

    const response = await axios.post(`${BASE_URL}tiers/save`, formData,
        {
            headers: {
                //"Content-Type": "application/x-www-form-urlencoded",
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${getToken()}`
            }
        });

    if (response.status === 200)
        return response.data;
}

export const updateTier = async ({ id, tier, capacity, price, idEvent }) => {
    const formData = new FormData();
    formData.append("tier", tier);
    formData.append("capacity", capacity);
    formData.append("price", price);
    formData.append("event", idEvent);

    const response = await axios.put(`${BASE_URL}/save/${id}`, formData,
        {
            headers: {
                //"Content-Type": "application/x-www-form-urlencoded",
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${getToken()}`

            }
        });

    return response.data;
}

export const deleteTier = async (id) => {
    const response = await axios.delete(`${BASE_URL}tiers/delete/${id}`,
        {
            headers: {
                "Authorization": `Bearer ${getToken()}`
            }
        });

    return response.data;
}

// Involved
export const getAllInvolved = async ({ size, page }) => {
    const response = await axios.get(`${BASE_URL}involved/`,
        {
            headers: {
                "Authorization": `Bearer ${getToken()}`
            },
            params: {
                size: size,
                page: page
            }
        });

    const postResponse = await response.data;

    return { items: postResponse, totalElements: postResponse.totalElements, totalPages: postResponse.totalPages, isNextPageAvailable: page + 1 < postResponse.totalPages }
};

export const getInvolvedById = async ({ id }) => {
    const response = await axios.get(`${BASE_URL}involved/${id}`,
        {
            headers: {
                "Authorization": `Bearer ${getToken()}`
            },
        });

    const postResponse = await response.data;

    return { items: postResponse, totalElements: postResponse.totalElements, totalPages: postResponse.totalPages, isNextPageAvailable: page + 1 < postResponse.totalPages }
};

export const createInvolved = async ({ id, involved, event }) => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("involved", involved);
    formData.append("event", event);


    const response = await axios.post(`${BASE_URL}involved/save`, formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                "Authorization": `Bearer ${getToken()}`
            }
        });

    if (response.status === 200)
        return response.data;
    else {
        console.log(response)
    }
}

export const deleteInvolved = async (id) => {
    const response = await axios.delete(`${BASE_URL}involved/delete/${id}`,
        {
            headers: {
                "Authorization": `Bearer ${getToken()}`
            }
        });

    return response.data;
}

// Orders
export const getAllOrders = async ({ size, page }) => {
    const response = await axios.get(`${BASE_URL}order/all`,
        {
            headers: {
                "Authorization": `Bearer ${getToken()}`
            },
            params: {
                size: size,
                page: page
            }
        });

    const postResponse = await response.data;
    console.log(postResponse)

    return { items: postResponse, totalElements: postResponse.totalElements, totalPages: postResponse.totalPages, isNextPageAvailable: page + 1 < postResponse.totalPages }
};

export const getOneOrderById = async ({ id }) => {
    const formData = new FormData();
    formData.append("id", id);

    const response = await axios.get(`${BASE_URL}order/${id}`,
        {
            headers: {
                "Authorization": `Bearer ${getToken()}`
            },
        });
    console.log(response)

    if (response.status === 200)
        return response.data 
};