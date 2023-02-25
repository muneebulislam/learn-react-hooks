import { useEffect, useState } from "react";
 export const UseEffect = () => {
    console.log('rendered')
   const [resourceType, setResourceType]  = useState('posts');
   useEffect(()=>{console.log("resource type changed!");
return ()=>{
    console.log("any cleanup function")
}},[resourceType]);
    return (  
        <section>
            <button onClick={() => setResourceType('posts')}>Posts</button>
            <button onClick= {() => setResourceType('Users')}>Users</button>
            <button onClick= {() => setResourceType('comments')}>Comments</button>
            <p>Resource type is: {resourceType}</p>
        </section>
    );
}