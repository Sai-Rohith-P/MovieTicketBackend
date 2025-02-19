import citiesmodel from "../Models/TheatersModel.js";


const theatersRoute = async (req, res) => {
    const theaterslist = await citiesmodel.find();
    // console.log("All theaters list");
    // console.log(theaterslist.length);
    res.json(theaterslist);
}

export default theatersRoute;