import axios from "axios";
import { 
  BASE_URL, createUser, fetchUser, fetchUserByEmail, 
  updatePassword, recuperatePassword, requestRecuperatePassword, 
  fetchAllEvents, fetchTicketByUser, generateTicketQR, fetchEventByName, saveTicketOrder, 
  getTicketQrByQr, requestTransaction, saveTransaction } from "../helpers/UserHelper";

export const loginFecth = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}user/auth/signin`, null, {
      params: {
        'email': email,
        'password': password
      },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    if (response.status === 200 || response.status === 401) {
      const data = {
        token: response.data.token,
        id: response.data.id,
        roleName: response.data.roleName || []
      };
      return data;
    } else {
      throw new Error('Invalid response status');
    }
  } catch (error) {
    console.log(error);
    throw new Error('Error in login');
  }
};

export const loginWithGoogleFecth = async (email) => {
  try {
    const response = await axios.post(`${BASE_URL}user/auth/google/signin`, null, {
      params: {
        'email': email,
      },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    console.log(response.data);

    if (response.status === 200) {
      const data = {
        token: response.data.token,
        id: response.data.id,
        roleName: response.data.roleName || []
      };
      return data;
    } else {
      throw new Error('Invalid response status');
    }
  } catch (error) {
    console.log(error);
    throw new Error('Error in login');
  }
};

export const getUser = async () => {
  try {
    const result = await fetchUser();
    return { user: result, success: true }
  } catch (error) {
    console.error(error);
    return { }
  }
}

export const getUserByEmail = async (email) => {
  try {
      const result = await fetchUserByEmail(email);
      return { user: result, success: true }
  } catch (error) {
      console.error(error);
      return { }
  }
}

export const saveUser = async (firstName, lastName, email, password) => {
  try {
      const result = await createUser(firstName, lastName, email, password);
      return { user: result, success: true }
  } catch (error) {
      console.error(error);
      return { }
  }
}

export const updateUserPassword = async (password, newPassword) => {
  try {
      const result = await updatePassword(password, newPassword);
      return { success: true }
  } catch (error) {
      console.error(error);
      return { }
  }
}

export const recuperateUserPassword = async (email, newPassword, code) => {
  try {
      const result = await recuperatePassword(email, newPassword, code);
      return { success: true }
  } catch (error) {
      console.error(error);
      return { }
  }
}

export const requestRecuperateUserPassword = async (email) => {
  try {
      const result = await requestRecuperatePassword(email);
      return { success: true }
  } catch (error) {
      console.error(error);
      return { }
  }
}

export const getEventByName = async (name) => {
  try {
    const result = await fetchEventByName(name);
    return { event: result, success: true }
  } catch (error) {
    console.error(error);
    return { }
  }
}

export const getEvents = async () => {
  try {
    const result = await fetchAllEvents(10, 0);
    return { items: result.content, success: true }
  } catch (error) {
    console.error(error);
    return { }
  }
}

export const getTicketsByUser = async () => {
  try {
    const result = await fetchTicketByUser();
    return { items: result, success: true }
  } catch (error) {
    console.error(error);
    return { }
  }
}

export const saveTicketQr = async (ticket) => {
  try {
    const result = await generateTicketQR(ticket);
    return { result: result, success: true }
  } catch (error) {
    console.error(error);
    return { }
  }
}

export const createTicketOrder = async (quantity, tier) => {
  try {
    const result = await saveTicketOrder(quantity, tier);
    return { result, success: true }
  } catch (error) {
    console.error(error);
    return { }
  }
}

export const saveTicketQrScanner = async (qrticket) => {
  try {
    const result = await getTicketQrByQr(qrticket);
    return { result: result, success: true }
  } catch (error) {
    console.error(error);
    return { }
  }
}

export const requestTransactionQr = async (userFrom, userTo, ticket) => {
  try {
    const result = await requestTransaction(userFrom, userTo, ticket);
    return { result, success: true }
  } catch (error) {
    console.error(error);
    return { }
  }
}

// saveTransaction
export const saveTransactionQr = async (code, emailTransfer) => {
  try {
    const result = await saveTransaction(code, emailTransfer);
    return { result, success: true }
  } catch (error) {
    console.error(error);
    return { }
  }
}