import Product from './product'
import custom from './custom.module.css'

async function itemList() {
    let data = await fetch("https://dummyjson.com/products")
    data = await data.json();
    return data.products
}

export default async function Page() {
    let products = await itemList();
    return (
        <div>
            {/* global css applied globally to the application and css module is applied specific to the component
            css module will enable with only .module.css extension */}
            <h2 className={custom.main}>Call API in server component/Item list</h2>
            {products.map((item) => (
                <div>
                    <h3>Name: {item.title}</h3>
                    <Product price={item.price}/>
                </div>
            ))}
        </div>
    )

}
