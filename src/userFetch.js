import { useState, useEffect } from 'react';

const useFetch = (url) =>{

    
    const [data, setData] = useState(null)

    //Applying Loading messsage for delay in fetching API
    const [isPending, setisPending] = useState(true);

    //creating a useState for the error message 
    const [error, setError] = useState(null);


    //renders everytime a state is changed, specific rendering can be achieved with dependency array 
    useEffect(() => {
        const abortCont = new AbortController();

        //simulating a real delay from an actual server
       setTimeout(() => {

        //the abortCont stops the fecth from updating hence stopping the error
        fetch(url, { signal: abortCont.signal })
        //the .then makes it async and the res is the resolve after the data has been sucessfully fetched 
            .then(res => {
                //error message is condition with resolve being okay .ok = true in the console.
                if(!res.ok){
                    throw Error('could not fetch the data for that resource')
                }
                //parses the data from json to js
                return res.json()
            })
            //data fetched above is then given out as a function now in javascript format.
            .then((data) => {
                //setBlogs() assigns the web page the value of data in db.json
                setData(data)
                //once we have the data isPending is set to false
                setisPending(false);
                setError(null);
            })

            //fetch error message
            .catch(err => {
                if(err.name === 'AbortError'){
                    console.log('Fetch Aborted');
                }
                else{
                    setError(err.message);
                    setisPending(false);
                }
            })
       }, 500);

       return () => abortCont.abort();
    },[url]);

    return {data, isPending, error}
}

export default useFetch;