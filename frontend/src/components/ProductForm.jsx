import React, { useState } from 'react'
import { useEffect } from 'react';
import { addProduct } from "../context/ProductApi";
import { getCategories } from '../context/CategoryContext';
import { FaCloudUploadAlt } from "react-icons/fa";
import uploadImage from '../utils/UploadImage';
import Loading from '../components/Loading';
import { MdDelete } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { getSubCategories } from '../context/SubCategoryContext';
// import ViewImage from '../components/ViewImage';
// import { useSelector } from 'react-redux'
import AddFieldComponent from './AddFieldComponent';
// import Axios from '../utils/Axios';
// import SummaryApi from '../common/SummaryApi';
// import AxiosToastError from '../utils/AxiosToastError';
// import successAlert from '../utils/SuccessAlert';


const UploadProduct = ({ onProductAdded }) => {

    const [categories, setCategories] = useState([]);
    const [allSubCategory, setAllSubCategory] = useState([])
    const [selectCategory, setSelectCategory] = useState("")
    const [selectSubCategory, setSelectSubCategory] = useState("")
    const [openAddField, setOpenAddField] = useState(false)
    const [fieldName, setFieldName] = useState("")
    const [imageLoading, setImageLoading] = useState(false)
    const [ViewImageURL, setViewImageURL] = useState("")

    const [data, setData] = useState({
        name: "",
        image: [],
        category: [],
        subCategory: [],
        unit: "",
        features: [],
        stock: "",
        price: "",
        discount: "",
        description: "",
        more_details: {},
    })

    console.log("Data", data)

    // handle submit function 

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addProduct(data);
        onProductAdded();
        setData({
            name: "",
            image: [],
            category: [{}],
            subCategory: [],
            unit: "",
            features: [],
            stock: "",
            price: "",
            discount: "",
            description: "",
            more_details: {},
        });
    };

    // fetch categories from api


    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const fetchedCategories = await getCategories();
                setCategories(fetchedCategories);


            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        fetchCategories();
    }, []);

    // fetch subcategories from api

    useEffect(() => {
        const fetchSubCategories = async () => {
            try {
                const fetchedSubCategories = await getSubCategories();
                setAllSubCategory(fetchedSubCategories);
                console.log("Subcategories:", fetchedSubCategories.data.data);
            } catch (error) {
                console.error("Error fetching subcategories:", error);
            }
        };
        fetchSubCategories();
    }, []);

    // handle change function for input fields


    const handleChange = (e) => {
        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }


    // handle upload image function


    const handleUploadImage = async (e) => {
        const file = e.target.files[0]

        if (!file) {
            return
        }
        setImageLoading(true)
        const response = await uploadImage(file)
        console.log(response)
        const { data: ImageResponse } = response
        console.log("ImageResponse", ImageResponse)
        const imageUrl = ImageResponse.secure_url


        setData((preve) => {
            return {
                ...preve,
                image: [...preve.image, imageUrl]
            }
        })
        setImageLoading(false)

    }

    const handleDeleteImage = async (index) => {
        data.image.splice(index, 1)
        setData((preve) => {
            return {
                ...preve
            }
        })
    }



    // handle remove category and subcategory function


    const handleRemoveCategory = async (index) => {
        data.category.splice(index, 1)
        setData((preve) => {
            return {
                ...preve
            }
        })
    }

    // handle remove subcategory function

    const handleRemoveSubCategory = async (index) => {
        data.subCategory.splice(index, 1)
        setData((preve) => {
            return {
                ...preve
            }
        })
    }



    // handle add field function


    const handleAddField = () => {
        setData((preve) => {
            return {
                ...preve,
                more_details: {
                    ...preve.more_details,
                    [fieldName]: ""
                }
            }
        })
        setFieldName("")
        setOpenAddField(false)
    }


    // handle feature change function

    const handleFeatureChange = (e, index) => {
        const newFeatures = [...data.features];
        newFeatures[index] = e.target.value;
        setData({ ...data, features: newFeatures });
    };

    const addFeature = () => {
        setData({ ...data, features: [...data.features, ""] });
    };

    const removeFeature = (index) => {
        const newFeatures = data.features.filter((_, i) => i !== index);
        setData({ ...data, features: newFeatures });
    };




    return (
        <section className=''>
            <div className='p-2   bg-white shadow-md flex items-center justify-between'>
                <h2 className='font-semibold'>Upload Product</h2>
            </div>
            <div className='grid p-3'>
                <form className='grid gap-4' onSubmit={handleSubmit}>
                    {/* 
                    // handle name function */}

                    <div className='grid gap-1'>
                        <label htmlFor='name' className='font-medium'>Name</label>
                        <input
                            id='name'
                            type='text'
                            placeholder='Enter product name'
                            name='name'
                            value={data.name}
                            onChange={handleChange}
                            required
                            className='bg-blue-50 p-2 outline-none border focus-within:border-primary-200 rounded'
                        />
                    </div>

                    {/* // handle description function */}


                    <div className='grid gap-1'>
                        <label htmlFor='description' className='font-medium'>Description</label>
                        <textarea
                            id='description'
                            type='text'
                            placeholder='Enter product description'
                            name='description'
                            value={data.description}
                            onChange={handleChange}
                            required
                            multiple
                            rows={3}
                            className='bg-blue-50 p-2 outline-none border focus-within:border-primary-200 rounded resize-none'
                        />
                    </div>

                    {/* // handle image function */}


                    <div>
                        <p className='font-medium'>Image</p>
                        <div>
                            <label htmlFor='productImage' className='bg-blue-50 h-24 border rounded flex justify-center items-center cursor-pointer'>
                                <div className='text-center flex justify-center items-center flex-col'>
                                    {
                                        imageLoading ? <Loading /> : (
                                            <>
                                                <FaCloudUploadAlt size={35} />
                                                <p>Upload Image</p>
                                            </>
                                        )
                                    }
                                </div>
                                <input
                                    type='file'
                                    id='productImage'
                                    className='hidden'
                                    accept='image/*'
                                    onChange={handleUploadImage}
                                />
                            </label>


                            {/**display uploded image*/}


                            <div className='flex flex-wrap gap-4'>
                                {
                                    data.image.map((img, index) => {
                                        return (
                                            <div key={img + index} className='h-20 mt-1 w-20 min-w-20 bg-blue-50 border relative group'>
                                                <img
                                                    src={img}
                                                    alt={img}
                                                    className='w-full h-full object-scale-down cursor-pointer'
                                                    onClick={() => setViewImageURL(img)}
                                                />
                                                <div onClick={() => handleDeleteImage(index)} className='absolute bottom-0 right-0 p-1 bg-red-600 hover:bg-red-600 rounded text-white hidden group-hover:block cursor-pointer'>
                                                    <MdDelete />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                    </div>
                    <div className='grid gap-1'>

                        {/* // handle category function */}


                        <label className='font-medium'>Category</label>
                        <div>
                            <select
                                className='bg-blue-50 border w-full p-2 rounded'
                                value={selectCategory}
                                onChange={(e) => {
                                    const value = e.target.value
                                    const category = categories.data?.data.find(el => el._id === value)

                                    setData((preve) => {
                                        return {
                                            ...preve,
                                            category: [...preve.category, category._id],
                                        }
                                    })
                                    setSelectCategory("")
                                }}
                            >
                                <option value={""}>Select Category</option>
                                {
                                    categories.data?.data.map((c, index) => {
                                        return (
                                            <option key={index} value={c?._id}>{c.name}</option>
                                        )
                                    })
                                }
                            </select>
                            <div className='flex flex-wrap gap-3'>
                                {
                                    data.category.map((c, index) => {
                                        return (
                                            <div key={c._id + index + "productsection"} className='text-sm flex items-center gap-1 bg-blue-50 mt-2'>
                                                <p>{c.name}</p>
                                                <div className='hover:text-red-500 cursor-pointer' onClick={() => handleRemoveCategory(index)}>
                                                    <IoClose size={20} />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='grid gap-1'>

                        {/* // handle subcategory function */}


                        <label className='font-medium'>Sub Category</label>
                        <div>
                            <select
                                className='bg-blue-50 border w-full p-2 rounded'
                                value={selectSubCategory}
                                onChange={(e) => {
                                    const value = e.target.value
                                    console.log("Value", value)
                                    const subCategory = allSubCategory?.data?.data.find(el => el._id === value)

                                    setData((preve) => {
                                        return {
                                            ...preve,
                                            subCategory: [...preve.subCategory, subCategory._id],
                                        }
                                    })
                                    setSelectSubCategory("")
                                }}
                            >
                                <option value={""} className='text-neutral-600'>Select Sub Category</option>
                                {
                                    allSubCategory?.data?.data.map((c, index) => {
                                        return (
                                            <option value={c?._id}>{c.name}</option>
                                        )
                                    })
                                }
                            </select>
                            <div className='flex flex-wrap gap-3'>
                                {
                                    data.subCategory.map((c, index) => {
                                        return (
                                            <div key={c._id + index + "productsection"} className='text-sm flex items-center gap-1 bg-blue-50 mt-2'>
                                                <p>{c.name}</p>
                                                <div className='hover:text-red-500 cursor-pointer' onClick={() => handleRemoveSubCategory(index)}>
                                                    <IoClose size={20} />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    {/* // handle unit function */}

                    <div className='grid gap-1'>
                        <label htmlFor='unit' className='font-medium'>Unit</label>
                        <input
                            id='unit'
                            type='text'
                            placeholder='Enter product unit'
                            name='unit'
                            value={data.unit}
                            onChange={handleChange}
                            required
                            className='bg-blue-50 p-2 outline-none border focus-within:border-primary-200 rounded'
                        />
                    </div>


                    {/* // handle stock function */}

                    <div className='grid gap-1'>
                        <label htmlFor='stock' className='font-medium'>Number of Stock</label>
                        <input
                            id='stock'
                            type='number'
                            placeholder='Enter product stock'
                            name='stock'
                            value={data.stock}
                            onChange={handleChange}
                            required
                            className='bg-blue-50 p-2 outline-none border focus-within:border-primary-200 rounded'
                        />
                    </div>


                    {/* // handle price function */}

                    <div className='grid gap-1'>
                        <label htmlFor='price' className='font-medium'>Price</label>
                        <input
                            id='price'
                            type='number'
                            placeholder='Enter product price'
                            name='price'
                            value={data.price}
                            onChange={handleChange}
                            required
                            className='bg-blue-50 p-2 outline-none border focus-within:border-primary-200 rounded'
                        />
                    </div>

                    {/* // handle discount function */}

                    <div className='grid gap-1'>
                        <label htmlFor='discount' className='font-medium'>Discount</label>
                        <input
                            id='discount'
                            type='number'
                            placeholder='Enter product discount'
                            name='discount'
                            value={data.discount}
                            onChange={handleChange}
                            required
                            className='bg-blue-50 p-2 outline-none border focus-within:border-primary-200 rounded'
                        />
                    </div>


                    {/* // handle features function */}


                    {data.features.map((feature, index) => (
                        <div key={index} className="mb-2">
                            <input
                                type="text"
                                placeholder={`Feature ${index + 1}`}
                                className="border p-2 w-full mb-2"
                                value={feature}
                                onChange={(e) => handleFeatureChange(e, index)}
                            />
                            <button type="button" onClick={() => removeFeature(index)} className="bg-red-500 text-white px-2 py-1 rounded">Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={addFeature} className="bg-green-500 text-white px-4 py-2 rounded mb-2">Add Feature</button>


                    {/**add more field**/}


                    {
                        Object?.keys(data?.more_details)?.map((k, index) => {
                            return (
                                <div className='grid gap-1'>
                                    <label htmlFor={k} className='font-medium'>{k}</label>
                                    <input
                                        id={k}
                                        type='text'
                                        value={data?.more_details[k]}
                                        onChange={(e) => {
                                            const value = e.target.value
                                            setData((preve) => {
                                                return {
                                                    ...preve,
                                                    more_details: {
                                                        ...preve.more_details,
                                                        [k]: value
                                                    }
                                                }
                                            })
                                        }}
                                        required
                                        className='bg-blue-50 p-2 outline-none border focus-within:border-primary-200 rounded'
                                    />
                                </div>
                            )
                        })
                    }

                    <div onClick={() => setOpenAddField(true)} className=' hover:bg-primary-200 bg-white py-1 px-3 w-32 text-center font-semibold border border-primary-200 hover:text-neutral-900 cursor-pointer rounded'>
                        Add Fields
                    </div>

                    <button
                        className='bg-primary-100 hover:bg-primary-200 py-2 rounded font-semibold'
                    >
                        Submit
                    </button>
                </form>
            </div>

            {
                ViewImageURL && (
                    <ViewImage url={ViewImageURL} close={() => setViewImageURL("")} />
                )
            }

            {
                openAddField && (
                    <AddFieldComponent
                        value={fieldName}
                        onChange={(e) => setFieldName(e.target.value)}
                        submit={handleAddField}
                        close={() => setOpenAddField(false)}
                    />
                )
            }
        </section>
    )
}

export default UploadProduct
