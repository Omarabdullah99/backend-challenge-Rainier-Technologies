import jwt from "jsonwebtoken";
export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
      return next(res.status(401).send({ message: "You are not authenticated!", success: false}));
    }
  
    jwt.verify(token, "jsonwebtoken", (err, user) => {
      if (err) return next(res.status(401).send({ message: "You are not authenticated!", success: false}));
      req.user = user;
      next();
    });
  };

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        return next( res
            .status(200)
            .send({ message: "You are not admin", success: false }));
      }
    });
  };