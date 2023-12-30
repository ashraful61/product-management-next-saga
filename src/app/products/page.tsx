'use client'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/getProducts";
import { createProduct } from "../../redux/actions/createProduct";
import Product from '../../components/Product';
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    name: string
    description: string
    price: number
    status: string
}

const Products = () => {

    const dispatch = useDispatch();
    const products = useSelector((state: any) => state.products.data);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<Inputs>();

    const onProductSubmit: SubmitHandler<Inputs> = (data) => {

        console.log(data);
        dispatch(createProduct(data));
        reset()

    }

    console.log(watch("name"));

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    console.log(products);

    return (
        <div className="p-8">
            <div>Total: {products.length}</div>
            <div className="my-5">
                <form onSubmit={handleSubmit(onProductSubmit)} className="max-w-md">
                    {/* register your input into the hook by invoking the "register" function */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <input
                            type="text"
                            defaultValue=""
                            placeholder="Product name"
                            {...register("name", { required: true })}
                            className="appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.name && <span className="text-red-500 text-xs">Name is required</span>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                        <input
                            type="number"
                            defaultValue=""
                            placeholder="Product price"
                            {...register("price", { required: true })}
                            className="appearance-none border-black border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.price && <span className="text-red-500 text-xs">Price is required</span>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Status</label>
                        <select
                            className="appearance-none border-black border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            defaultValue=""
                            {...register("status", { required: true })}
                        >
                            <option value="" disabled hidden>
                                Select Status
                            </option>
                            <option value="in-stock">In stock</option>
                            <option value="out-of-stock">Out of stock</option>
                            <option value="discontinued">Discontinued</option>
                        </select>
                        {errors.status && <span className="text-red-500 text-xs">Product status is required</span>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                        <input
                            type="text"
                            defaultValue=""
                            placeholder="Enter your product name"
                            {...register("description")}
                            className="appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </form>

            </div>
            {
                products.map((product: any) => <Product key={product._id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;