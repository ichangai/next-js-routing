import Link from 'next/link'

import { useRouter } from 'next/router'

function Home(){
  const router = useRouter()
  const handleClick = () => {
    alert('Placing your order')
    router.push('/product')
  }

  return(
    <>
    <h1>Home Page</h1>
    <Link href="/blog">
    <a>Blog</a>
    </Link>
    <Link href="/product">
      Products
    </Link>
    <button onClick={handleClick}>
      Place Order
    </button>
    </>
  )
}

export default Home