// @flow
import  React, {SetStateAction} from 'react';
import {Transition, Dialog} from '@headlessui/react'
import {useCart} from "@/components/cart/hooks/useCart";
import { XIcon } from "@heroicons/react/outline";
import {useMutation} from "react-query";
import {useCheckout} from "@/components/cart/hooks/useCheckout";
import {Fragment} from "react";
import {CartItems} from "@/components/cart/CartItems";

type Props = {

};

export default function Checkout(props: Props) {
    const {state: { totalPrice, products, isOpen }, dispatch} = useCart();

    const { mutate } = useCheckout();

    const handleOpenMenu = () => dispatch({ type: 'openMenu'});
    const handleCloseMenu = () => dispatch({type: 'closeMenu'});

    const handleCheckout = () => mutate(products);

    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 overflow-hidden"
                onClose={handleOpenMenu}
            >
                <div className="absolute inset-0 overflow-hidden">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <div className="w-screen max-w-md">
                                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                                    <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                                        <div className="flex items-start justify-between">
                                            <Dialog.Title className="text-lg font-medium text-gray-900">
                                                Shopping Cart
                                            </Dialog.Title>
                                            <div className="ml-3 h-7 flex items-center">
                                                <button
                                                    type="button"
                                                    className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                    onClick={handleCloseMenu}
                                                >
                                                    <span className="sr-only">Close</span>
                                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                                    {/*<button className='px-4 py-2 btn btn-error'>X</button>*/}
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mt-8 flow-root">
                                            <CartItems products={products} />
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <p>Total:</p>
                                            <p>$ {totalPrice }</p>
                                        </div>

                                        <div className="mt-6">
                                            {products.length > 0 ? (
                                                <button
                                                    type='button'
                                                    onClick={handleCheckout}
                                                    className="btn btn-primary w-full flex justify-center items-center px-6 py-3  rounded-md shadow-sm text-base font-medium"
                                                >
                                                    Checkout
                                                </button>
                                            ) : null}
                                        </div>

                                        <div className='mt-6 flex justify-center text-center text-sm'>
                                            <p>
                                                or
                                                <button
                                                    type='button'
                                                    className="btn btn-outline w-full flex justify-center items-center px-6 py-3  rounded-md shadow-sm text-base font-medium"
                                                    onClick={handleCloseMenu}
                                                >
                                                    Continue Shopping
                                                    <span aria-hidden="true"> &rarr;</span>
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};