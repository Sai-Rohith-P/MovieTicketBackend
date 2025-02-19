import theaterdetailsmodel from "../Models/TheaterDetailsModel.js";


const theaterdetaisRoute = async (req, res) => {
    const theatersdetaisllist = await theaterdetailsmodel.find();
    // console.log("All theaters list here by new.");
    // console.log(theatersdetaisllist.length);
    res.json(theatersdetaisllist);
}

export default theaterdetaisRoute;