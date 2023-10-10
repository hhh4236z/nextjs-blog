export default function Product({ product }) {
  return (
    <div>
      <h1>
        {product.uid.join('-')}
      </h1>
    </div>
  )
}

// xx/product/1/2/3
// xx/product/a/b
export function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          // same as [...uid]
          uid: ['1', '2', '3']
        }
      },
      {
        params: {
          uid: ['a', 'b']
        }
      }
    ],
    fallback: false
  }
}

export function getStaticProps({ params }) {
  return {
    props: {
      product: {
        uid: params.uid
      }
    }
  }
}