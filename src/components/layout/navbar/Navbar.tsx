// @flow
import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { themes } from '@/utils/constants';
import { useAuth } from '@/components/auth/hooks/useAuth';
import { useCart } from '@/components/cart/hooks/useCart';
import { useRouter } from 'next/router';
import { createCart } from '@/components/shoppingCart/api/createCart';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

type Props = {};

export function Navbar(props: Props) {
    const router = useRouter();
    const { theme, setTheme } = useTheme();
    const { session, signIn, signOut } = useAuth();

    // const { dispatch} = useCart();
    //
    // const addToCart =() => {
    //     dispatch({ type: 'addProduct', payload: product});
    //     dispatch({ type: 'openMenu'});
    // };

    return (
        <>
            <div className="navbar bg-base-100 shadow-md w-full px-8 flex justify-between">
                <div className="navbar-start flex justify-start">
                    <a className="btn btn-ghost normal-case text-xl text-red-600">
                        iBAZAR
                    </a>
                    {/* search inptut*/}
                    <div className="form-control max-h-8 ">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered"
                        />
                    </div>
                    {/*<div className='navbar-start hidden md:flex  md:flex-1 lg:w-0'>*/}
                    {/*    {session && session?.user?.image && (*/}
                    {/*        <>*/}
                    {/*            <img*/}
                    {/*                src={session.user.image} className='w-10 h-10 rounded-full' alt='profile'*/}
                    {/*            />*/}
                    {/*            <button*/}
                    {/*                onClick={() => signOut()}*/}
                    {/*                className='ml-6 whitespace-nowrap inline-flex items-center justify-center px-4*/}
                    {/*            py-2 btn btn-sm btn-outline'*/}
                    {/*            >Sign out</button>*/}
                    {/*        </>*/}
                    {/*    )}*/}
                    {/*</div>*/}
                </div>

                {/*Navbar Items*/}
                <div className="navbar-center z-10 font-bold font-mono">
                    <ul className="menu menu-horizontal gap-4 md:px-1 lg:px-3">
                        <li tabIndex={0}>
                            <a>
                                Outfit
                                <svg
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                </svg>
                            </a>
                            <ul className="p-2 bg-base-100 font-bold">
                                <li className="-my-4 rounded-sm">
                                    <a>
                                        <p> Men&nbsp;</p>
                                        <span>
                                            <svg
                                                className="fill-current"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M8.59,12.58L13.17,17.17L8.59,21.75L10,23.17L16,17.17L10,11.17L8.59,12.58Z" />
                                            </svg>
                                        </span>
                                        <ul className="menu w-56 text-sm hover:text-accent-focus  rounded-sm">
                                            <li className="hover-bordered">
                                                <div onClick={()=> router.push('/product/Converse Low')}>&nbsp;Shoes</div>
                                            </li>
                                            <li className="hover-bordered">
                                                <div onClick={()=> router.push('/product/Men Top')}>&nbsp;Top</div>
                                            </li>
                                        </ul>
                                    </a>
                                </li>
                                <div className="divider divider-vertical"></div>
                                <li className="-my-4 ronded-sm">
                                    <a className="flex justify-between">
                                        <span>Women</span>
                                        <span>
                                            <svg
                                                className="fill-current"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M8.59,12.58L13.17,17.17L8.59,21.75L10,23.17L16,17.17L10,11.17L8.59,12.58Z" />
                                            </svg>
                                        </span>
                                        <ul className="menu  w-56  text-sm hover:text-accent-focus rounded-sm">
                                            <li className="hover-bordered">
                                                <div onClick={()=> router.push('/product/Converse Plat')}>Shoes</div>
                                            </li>
                                            <li className="hover-bordered">
                                                <div onClick={()=> router.push('/product/Leggings')}>Leggings</div>
                                            </li>
                                            <li className="hover-bordered">
                                                <div onClick={()=> router.push('/product/Yuga')}>Yuga</div>
                                            </li>
                                        </ul>
                                    </a>
                                </li>
                                <div className="divider divider-vertical"></div>
                                <li className="-my-4 rounded-sm">
                                    <a>
                                        <span> Shoes </span>
                                        <span>
                                            <svg
                                                className="fill-current"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M8.59,12.58L13.17,17.17L8.59,21.75L10,23.17L16,17.17L10,11.17L8.59,12.58Z" />
                                            </svg>
                                        </span>
                                        <ul className="menu  w-56  text-sm hover:text-accent-focus rounded-sm">
                                            <li className="hover-bordered">
                                                <div onClick={()=> router.push('/product/Nike Women')}>Nike</div>
                                            </li>
                                            <li className="hover-bordered">
                                                <div onClick={()=> router.push('/product/Converse Top')}>Converse</div>
                                            </li>
                                            <li className="hover-bordered">
                                                <div onClick={()=> router.push('/product/Addidas')}>Addidas</div>
                                            </li>
                                        </ul>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li tabIndex={0}>
                            <a>
                                Tech
                                <svg
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                </svg>
                            </a>
                            <ul className="p-2 bg-base-100">
                                <li>
                                    <a
                                        onClick={() =>
                                            router.push('/product/Msi GamingPc')
                                        }
                                    >
                                        Gaming PC
                                    </a>
                                </li>
                                <li>
                                    <a onClick={()=> router.push('/product/Msi Monitor')}>Monitor</a>
                                </li>
                                <li>
                                    <a>
                                        <span> Laptop </span>
                                        <span>
                                            <svg
                                                className="fill-current"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M8.59,12.58L13.17,17.17L8.59,21.75L10,23.17L16,17.17L10,11.17L8.59,12.58Z" />
                                            </svg>
                                        </span>
                                        <ul className="menu  w-56 hover:text-accent text-sm hover:text-accent-focus rounded-sm">
                                            <li className="hover-bordered">
                                                <div onClick={()=> router.push('/product/Msi Laptop')}>Msi</div>
                                            </li>
                                            <li className="hover-bordered">
                                                <div onClick={()=> router.push('/product/Asus Laptop')}>Asus</div>
                                            </li>
                                        </ul>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li tabIndex={0}>
                            <a 
                                onClick={() => router.push('/api/product/Perfume')}
                            >
                                Perfume
                                <svg
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                </svg>
                            </a>
                            <ul
                                className="p-2 bg-base-100"
                                onClick={() => router.push('/api/product/Perfume')}
                            >
                                <li>
                                    <a>Men</a>
                                </li>
                                <li>
                                    <a>Women</a>
                                </li>
                                <li>
                                    <a>Men & Women</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                {/*// the custom themes*/}
                <div className="navbar-end font-bold font-mono">
                    <div className="flex-none">
                        <ul className="menu menu-horizontal">
                            <li tabIndex={0}>
                                <a>
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                                        ></path>
                                    </svg>
                                    <p>Theme</p>
                                    <svg
                                        className="fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                    </svg>
                                </a>
                                <ul className="z-50 w-full bg-base-100">
                                    {themes.map((theme, index) => (
                                        <li
                                            key={index}
                                            onClick={() =>
                                                setTheme(
                                                    theme.name.toLowerCase()
                                                )
                                            }
                                        >
                                            <a>{theme.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </div>
                    {/* here the wish List */}
                    <div
                        onClick={()=> router.push('/WishList')}
                    >

                        <AiOutlineHeart className='h-8 w-8'  color='red' />
                    </div>
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle"
                        >
                            <div className="indicator red">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-7 w-7"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    color='red'
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                                <span className="badge badge-sm indicator-item">
                                    8
                                </span>
                            </div>
                        </label>
                        <div
                            tabIndex={0}
                            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                        >
                            <div className="card-body">
                                <span className="font-bold text-lg">
                                    8 Items
                                </span>
                                <span className="text-info">
                                    Subtotal: $234
                                </span>
                                <div className="card-actions">
                                    <button
                                        className="btn btn-primary btn-block"
                                        onClick={() => router.push('/products')}
                                    >
                                        View cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img src="/profile.gif" alt="profile" />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li 
                            // //? the code to create a cart for user 
                            // onClick={createCart}
                            >
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li onClick={() => router.push('/outfit')}>
                                <a>Outfits</a>
                            </li>
                            <li onClick={() => signOut()}>
                                <a>Sign Out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
