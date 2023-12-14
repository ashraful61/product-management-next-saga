'use client'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/getProducts";
import Product from '../../components/Product'

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: any) => state.products.data)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    console.log(products);
    return (
        <div className="p-8">
            {
                products.map((product: any) => <Product key={product._id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;