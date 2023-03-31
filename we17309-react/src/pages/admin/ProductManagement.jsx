import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ProductManagementPage = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(props.products)
    }, [props])
    const removeProduct = (id) => {
        props.onRemove(id)
    }

    // const person = {
    //     firstNmae: 'datlt',
    //     age: 20
    // }
    // person.status = 1;
    // person['address'] = 'ha noi';
    // console.log(person);
    // console.log(person['firstNmae']);

    return (
        <div>
            {/* <button><a href="/admin/products/add">Add New Product</a></button> */}
            <button><Link to={'/admin/products/add'}>Add New Product</Link></button>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((product, index) => {
                            return (<tr key={product.id}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>
                                    <button>Remove</button>
                                    <button>Update</button>
                                </td>
                            </tr>)
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default ProductManagementPage