import { useState } from "react";

export const UseState = () => {
    const [count, setCount]= useState(0);
    return(
        <section>
            <h6>count: </h6>
            <button onClick={()=>
                {
                    // setCount(count+1);
                    setCount(previousCount =>{
                        var num = previousCount + 1;
                        num = num*num;
                        return num

                    });
                }}>
                +
            </button>
            <p>{count}</p>
            <button
            onClick={() =>
                {setCount(prev =>{
                    prev = 0;
                    return prev
                })}
            }
            >Reset</button>

        </section>
    );
}