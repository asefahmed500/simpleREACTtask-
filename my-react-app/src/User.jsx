import { useEffect, useState } from "react"

export default function User() {

    const [user, SetUser] = useState()

    useEffect(() => { 
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then(data =>SetUser(data))
    }, [])
    return (
        <div>
            {/* <h3>Users: {user.length}</h3> */}

        </div>
    )
}