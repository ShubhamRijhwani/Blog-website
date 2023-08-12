import { useState, useEffect } from "react";

const useFetch = (url) => {    /* This is custom hook. starts with use. Now we can use this fetch logic anywhere. */
    
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true); /*This useState is created for time taken to fetch data from API , In our case its very quick because we are fetching from same sysem */
    const [error, setError] = useState(null)    
    
    
    useEffect(() => {
        setTimeout(() => { /*Settimeout is used to delay the fetch command to make it realistic*/
            fetch(url)  /*promise*/
                .then(res => {                    /*Using Then function*/
                    if(!res.ok) {
                        throw Error('could not fetch the data for that resource')  /*ok is the property of response which is either true or false that depends on the location of error */
                    }
                    return res.json()
                })
                .then((data) => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                })
        }, 1000);
    }, [url]);

    return { data, isPending, error }
}

export default useFetch