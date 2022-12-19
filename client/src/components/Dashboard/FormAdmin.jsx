import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { newUsers, getAllUsers } from '../../Redux/actions/index';
import Card from '../Cards/Card'

export default function FormAdmin() {

    const dispatch = useDispatch();

    const products = useSelector(state => state.users)

    const history = useHistory()

    const [errors, setErrors] = useState({})
    const [section, setSection] = useState(1);


    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        isAdmin: "",
        isBan: "",
        address: "",
        phone: "",
        createdAt: "",


    })


    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value.replaceAll(/^\s+/g, "").replaceAll(/\s+/g, " ")
        })

    }


    function handleSubmit(e) {
        e.preventDefault();

        if (Object.keys(errors).length === 0 && input.name.length) {
            dispatch(newUsers(input));
            dispatch(getAllUsers());
            alert("Ceated successfuly!");
            setInput({
                name: "",
                email: "",
                password: "",
                isAdmin: "",
                isBan: "",
                address: "",
                phone: "",
                createdAt: "",

            })
        }
    }

    return (
        <div class=''>
            <Link to='/' class="bg-blue-700 m-2 rounded p-2 "

            // <Link to='/' class=" text-white p-24  bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
            >
                <button>Return Home</button>
            </Link>

            <div class=''>
                <div class='flex justify-center p-10'>
                    <h2>Create User</h2>
                </div>
                <form onSubmit={(e) => handleSubmit(e)} class="">

                    <section class="mx-40">
                        {/* <section class="flex flex-wrap -mx-1 mb-1"> */}

                        <div class=" ">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">Name</label>
                            <input
                                type="string"
                                value={input.name}
                                name="name"
                                onChange={(e) => handleChange(e)}
                                style={input.name.length ? errors.name ? { borderColor: '#e74c3c' } : { borderColor: '#2ecc71' } : {}}
                                autocomplete="off"
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-2 mb-2 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"

                            />

                        </div>
                        <div>
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">email</label>
                            <input
                                type="string"
                                value={input.email}
                                name="email"
                                onChange={(e) => handleChange(e)}
                                style={input.email.length ? errors.email ? { borderColor: '#e74c3c' } :
                                    { borderColor: '#2ecc71' } : {}}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-2 mb-2 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"

                            />
                        </div>
                        <div>
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">password</label>
                            <input
                                type="string"
                                value={input.password}
                                name="password"
                                onChange={(e) => handleChange(e)}
                                style={input.password.length ? errors.password ? { borderColor: '#e74c3c' } :
                                    { borderColor: '#2ecc71' } : {}}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-2 mb-2 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"

                            />
                        </div>
                        <div>
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">isAdmin</label>
                            <input
                                type="boolean"
                                value={input.isAdmin}
                                name="isAdmin"
                                onChange={(e) => handleChange(e)}
                                style={input.isAdmin.length ? errors.rating ? { borderColor: '#e74c3c' } :
                                    { borderColor: '#2ecc71' } : {}}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-2 mb-2 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"

                            />
                            <div>
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">isBan</label>
                                <input
                                    type="boolean"
                                    value={input.isBan}
                                    name="isBan"
                                    onChange={(e) => handleChange(e)}
                                    style={input.isBan.length ? errors.isBan ? { borderColor: '#e74c3c' } :
                                        { borderColor: '#2ecc71' } : {}}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-2 mb-2 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"

                                />
                            </div>
                            <div>
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">address</label>
                                <input
                                    type="string"
                                    value={input.address}
                                    name="address"
                                    onChange={(e) => handleChange(e)}
                                    style={input.address.length ? errors.address ? { borderColor: '#e74c3c' } :
                                        { borderColor: '#2ecc71' } : {}}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-2 mb-2 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"

                                />
                            </div>
                            <div>
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">phone</label>
                                <input
                                    type="string"
                                    value={input.phone}
                                    name="phone"
                                    onChange={(e) => handleChange(e)}
                                    style={input.phone.length ? errors.phone ? { borderColor: '#e74c3c' } :
                                        { borderColor: '#2ecc71' } : {}}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-2 mb-2 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"

                                />
                            </div>
                            <div>
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">createdAt</label>
                                <input
                                    type="number"
                                    value={input.createdAt}
                                    name="createdAt"
                                    onChange={(e) => handleChange(e)}
                                    style={input.createdAt.length ? errors.createdAt ? { borderColor: '#e74c3c' } :
                                        { borderColor: '#2ecc71' } : {}}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-2 mb-2 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"

                                />
                            </div>

                        </div>

                    </section>
                    <button class="bg-slate-500 m-2 rounded p-2 mt-10 bg-red-700"type="submit">Crear User</button>
                </form>
            </div>


            {/* <div class='flex'>
                <div class='mx-60'>
                    <Card />
                </div>

            </div> */}
        </div>
    )
}