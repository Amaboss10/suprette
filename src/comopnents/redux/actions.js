import axios from "axios"
import { toast } from "react-toastify"
import { ADD_PRODUCT, DELETE_PRODUCT, FAIL_REQUEST, GET_PRODUCT_LIST, GET_PRODUCT_OBJ, MAKE_REQUEST, UPDATE_PRODUCT } from "./actionsTypes"

export const makeRequest = () => {
    return {
        type: MAKE_REQUEST
    }
}

export const failRequest = (err) => {
    return {
        type: FAIL_REQUEST,
        payload: err
    }
}

export const getProductListe = (data) => {
    return {
        type: GET_PRODUCT_LIST,
        payload: data
    }
}
export const deleteProduct = () => {
    return {
        type: DELETE_PRODUCT,

    }
}
export const addProduct = () => {
    return {
        type: ADD_PRODUCT,

    }
}
export const updateProduct = () => {
    return {
        type: UPDATE_PRODUCT,

    }
}
export const getProductObj = (data) => {
    return {
        type: GET_PRODUCT_OBJ,
        payload: data
    }
}
export const FetchProductList = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        //    setTimeout(() =>{
        axios.get('http://localhost:9000/produits')
            .then(res => {
                const productlist = res.data
                dispatch(getProductListe(productlist))
            })
            .catch(err => {
                dispatch(failRequest(err.message))
            })
        //    },2000)
    }
}

export const removeProduct = (id) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.delete('http://localhost:9000/produits/' + id)
            .then(res => {
                dispatch(deleteProduct())
            })
            .catch(err => {
                dispatch(failRequest(err.message))
            })
    }
}

export const functionAddProduct = (data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.post('http://localhost:9000/produits', data)
            .then(res => {
                dispatch(addProduct())
                toast.success('produit ajouter avec success')
            })
            .catch(err => {
                dispatch(failRequest(err.message))
            })
    }
}

export const functionUpdateProduct = (data, id) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.put('http://localhost:9000/produits/' + id, data)
            .then(res => {
                dispatch(updateProduct())
                toast.success('produit est modifier avec success')
            })
            .catch(err => {
                dispatch(failRequest(err.message))
            })
    }
}

export const FetchProductObj = (id) => {
    return (dispatch) => {
        dispatch(makeRequest());
        //    setTimeout(() =>{
        axios.get('http://localhost:9000/produits/' + id)
            .then(res => {
                const productlist = res.data
                dispatch(getProductObj(productlist))
            })
            .catch(err => {
                dispatch(failRequest(err.message))
            })
        //    },2000)
    }
}