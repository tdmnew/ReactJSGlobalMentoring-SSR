// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { useDispatch } from "react-redux";
import { sagaActions } from "../../Redux/Sagas/sagaActions.js";

export default (req, res) => {
    res.statusCode = 200;
    res.json({ name: "John Doe" });
};
