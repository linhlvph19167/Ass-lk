import React, { useEffect, useState } from 'react'
import {useNavigate, useParams } from 'react-router-dom'

const UpdateProductPage = (props) => {
    const navigate = useNavigate();
    const { id } = useParams();
    // console.log(props.products);
    const [product, setProduct] = useState({});
    const [inputValue, setInputValue] = useState({});
    useEffect(() => {
        const currentProduct = props.products.find(product => product.id == id);
        console.log(currentProduct);
        setProduct(currentProduct);
    }, [props])

    const onHandleChange = (e) => {
        const {name, value} = e.target;
        // console.log(name, value);
        setInputValue({...inputValue, [name]:value});
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        // console.log(inputValue);
        const updateProduct = {...product, ...inputValue};
        // console.log(updateProduct);
        props.onUpdate(updateProduct);
        navigate('/admin/products')
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" defaultValue={product?.name} name="name" onChange={onHandleChange} />
                <input type="number" defaultValue={product?.price} name="price" onChange={onHandleChange} />
                <button type="submit">Update Product</button>
            </form>
        </div>
    )
}

export default UpdateProductPage