export default function page() {
    return (
<div>
    <h1>user page</h1>

</div>
    )
}


// Next.js has a generateMetadata function that is used to define our application metadata (e.g. meta and link tags inside HTML head element) for improved SEO
// for every page we have to write a separate generateMetadata function which returns page title and description.
export function generateMetadata() {
    return {
        title: 'user page title',
        description: 'user page description'
    }
}