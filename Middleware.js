import jwt from 'jsonwebtoken';
const secretKey = "MovieTicketBookingOnlineByRohith";


const AuthMiddleware = (req, res, next) => {
    const AuthHeader = req.headers.authorization;
    // console.log(AuthHeader);
    if (!AuthHeader || !AuthHeader.startsWith("Bearer ")) {
        return res.status(401).json({ success: false, message: "Unauthorized! No token provided." });
    }
    const token = AuthHeader.split(" ")[1];
    // console.log(token);
    // console.log(token[0]);
    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        // console.log(decoded);
        next();
    } catch (e) {
        return res.status(403).json({ success: false, message: "Invalid token" });
    }

}
export default AuthMiddleware;

