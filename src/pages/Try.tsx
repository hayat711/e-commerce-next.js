import { addidasDb, converse_plat, leggings, low_top, men_top, nike_women, top_high, yuga } from '@/utils/outfit';
import { nike_men } from '@/utils/outfit/nike_men.db';
import { asus, mis_laptop, msi_monitor, msi_pc } from '@/utils/pc';
import { products } from '@/utils/pc/perfume';
import React, { useState } from 'react';

type Props = {};

const Try = (props: Props) => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    async function handleSubmit(event: any) {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/populate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    category: 'Msi GamingPc',
                    products: msi_pc,
                }),
            });

            if (!response.ok) {
                setSuccess(false);
            } else {
                setSuccess(true);
            }
        } catch (error) {
            console.error(error);

            setSuccess(false);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <div>
                <h1>Create Category and Products</h1>
                {loading && <p>Loading...</p>}
                {success && <p>Category and Products created successfully</p>}
                {error && <p>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <button className='btn btn-accent' type="submit">Create</button>
                </form>
            </div>
        </div>
    );
};

export default Try;
