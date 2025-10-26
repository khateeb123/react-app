import { useEffect, useState } from "react"

export default function NewsCard({name, deadline}) {

    const [number , setNumber] = useState(0);
    const [users , setUsers] = useState([])

    useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
     .then((res) => res.json())
      .then((data) => setUsers(data));

    })

    return (
        <>
        <h1>Headline</h1>
        <p>Mr. {name} decided to finish Next.js by {deadline}</p>
        <button onClick={() => setNumber(number => number + 1)}>number is {number}</button>
        <p>{users.map((u)=> {
            return (
                <div>
{u.name}
                </div>
            )
        })}</p>
        </>
    )
}