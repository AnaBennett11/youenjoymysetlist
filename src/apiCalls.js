const getAllShows = () => {
    return (
        fetch(`https://api.phish.net/v5/shows/artist/phish.json?order_by=showdate&apikey=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error();
                }
            })
    )
}
const getShowByDate = () => {
    return (
        fetch(`https://api.phish.net/v5/setlists/showdate/1998-10-30.json?apikey=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error();
                }
            })
    )
}


export { getAllShows, getShowByDate } 






// const fetchData = async () => {
//     try {
//         const response = await fetch(`https://api.phish.net/v5/shows/artist/phish.json?order_by=showdate&apikey=${process.env.REACT_APP_API_KEY}`);
//         const json = await response.json();
//         return json;
//     } catch (error) {
//         console.log("error", error);
//     }
// };

// export { fetchData };








