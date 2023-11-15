async function userList() {
    let data = await fetch('https://dummyjson.com/users?limit=200')
    data = await data.json();
    return data.users;
}

export default async function Page() {
    let users = await userList();
    // console.log(users);

    return (
        <div>
            <h5>User name list</h5>
            {users.map((item) => (
                <div><h2>Name: {item.firstName} {item.lastName} </h2></div>
            ))}
        </div>
    )
}