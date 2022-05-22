import Link from 'next/link'

function ProductList({ productId = 200 }) {
    return (
        <>
            <Link href="/">
            <button>Back Home</button>
            </Link>

            <Link href="/product/1">
            <h2>Product 1</h2>
            </Link>

            <Link href="/product/2">
            <h2>Product 2</h2>
            </Link>

            <Link href="/product/3">
            <h2>Product 3</h2>
            </Link>
            <Link href={`/product/${productId}`}>
                <h2>Product {productId}</h2>
            </Link>
        </>
    )
}

export default ProductList