import axios from "axios";
let API_URL = "http://localhost:8080/api";
export async function callApi(endpoint, method = 'GET', body) {
    try {
        return await axios({
            method,
            url: `${API_URL}/${endpoint}`,
            data: body,
        });
    } catch (e) {
        console.log(e);
    }
}

export function GET_ALL_PRODUCTS(endpoint) {
    return callApi(endpoint, "GET");
}

export function GET_LATEST_PRODUCTS(endpoint) {
    return callApi(endpoint + "/latest", "GET");
}

export function GET_NEW_ARRIVALS(endpoint) {
    return callApi(endpoint + "/new-arrivals", "GET");
}

export function GET_TRENDING_PRODUCTS(endpoint) {
    return callApi(endpoint + "/trending", "GET");
}
export function GET_TOP_RATED_PRODUCTS(endpoint) {
    return callApi(endpoint + "/top-rated", "GET");
}
export function GET_BEST_SELLER_PRODUCTS(endpoint) {
    return callApi(endpoint + "/best-seller", "GET");
}
export function GET_DEAL_PAY_PRODUCTS(endpoint) {
    return callApi(endpoint + "/deal-pay", "GET");
}

export function GET_PRODUCT_ID(endpoint, id) {
    return callApi(endpoint + "/" + id, "GET");
}

export function POST_ADD_PRODUCT(endpoint, data) {
    return callApi(endpoint, "POST", data);
}

export function PUT_EDIT_PRODUCT(endpoint, data) {
    return callApi(endpoint, "PUT", data);
}

export function DELETE_PRODUCT_ID(endpoint) {
    return callApi(endpoint, "DELETE");
}

export function GET_ALL_CATEGORIES(endpoint) {
    return callApi(endpoint, "GET");
}
export function GET_ALL_SLIDERS(endpoint){
    return callApi(endpoint,"GET");}