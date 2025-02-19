import mongose from 'mongoose'

export function DbConnectivity() {
    try {
        mongose.connect(process.env.MONGO_URL)
            .then((e) => {
                console.log("Database Connected.");
            })
            .catch((e) => {
                console.log("Database Is Not Connected.", e);
            })
    } catch (error) {
        console.log("Error at Connecting Database.");
    }
}


