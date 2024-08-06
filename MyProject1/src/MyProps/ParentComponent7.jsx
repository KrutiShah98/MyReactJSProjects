import React from 'react'
import ChildComponent7 from './ChildComponent7';

export default function ParentComponent7() {
    const products = [
        { id: 1, name: "aaa", subject: "Node" },
        { id: 2, name: "bbb", subject: "Node js" },
        { id: 3, name: "ccc", subject: "android" },

    ];
    return (
        <div>
            <ChildComponent7 products={products} />
        </div>
    )
}
