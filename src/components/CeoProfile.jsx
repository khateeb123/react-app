import { useEffect, useState } from "react"

export default function CeoProfile({founder, coFounder}) {

    const [people, setPeople] = useState([]);

    const [count , setCount] = useState(0);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=> {

            if(!res.ok){
                throw new Error("no response something went wrong");
                
            }
            return res.json()

        })
        .then(data => setPeople(data))
        .catch(err=> console.log("error " + err))

    const intervalID =   setInterval( () => setCount( (count)=> count+2),1000);

      return(() => clearInterval(intervalID)) 

        


    },[]);


    return (
        <div>
            <h2>00:00:{count}</h2>
            <h3>Founder:{founder}</h3>
            <h3>Co-founder: {coFounder}</h3>
            

            <p>
                this is the world first company that never ever founded by some one instead it was 
                an accident. we were creating a community to help others but suddenly it emerged into
                a full scale company . many other companies following our success rules and tips
            </p>
            <h4>People who Joind us</h4>

            {people.map((person => <div key={person.id}>Mr. {person.name}</div> ))}
            
        </div>
    )
    
}