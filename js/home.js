import { BASE_URL } from "./main.js";

const featuredListing = document.querySelector('featured-listing');
const ratedListing = document.querySelector('rated-listing');

async function getShovelers(){
    try {
        let response = await axios({
            method: 'get',
            url: BASE_URL + 'shovler?q=&order=id&order_type=ASC',
        })
        if(featuredListing) featuredListing.getShovelers(response.data);
        if(ratedListing) ratedListing.getShovelers(response.data);

    } catch (error) {
        console.log(error);
    }
}

getShovelers();