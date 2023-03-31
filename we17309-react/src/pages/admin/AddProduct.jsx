import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProductPage = (props) => {
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState({})
    const onHandleChange = (e) => {
        // console.log(e.target.value);
        // setInputValue({ name: e.target.value });
        const name = e.target.name;
        const value = e.target.value;
        setInputValue({ ...inputValue, [name]: value });
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        // console.log(inputValue);
        props.onAdd(inputValue);
        navigate('/admin/products')
    }

    return (
        <form action="" onSubmit={onHandleSubmit}>
            <div>Add new product</div>
            <input type="text" onChange={onHandleChange} name='name' placeholder='Product Name' />
            <input type="number" onChange={onHandleChange} name='price' />
            <button type='submit'>Add new product</button>
        </form>
    )
}

export default AddProductPage