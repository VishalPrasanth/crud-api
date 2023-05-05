import  express  from "express";
import {createUsers,getUsers,getUser,deleteUser,patchUser} from "../controllers/users.js"



const router = express.Router();



router.get("/", createUsers)
router.post("/",getUsers)

router.get("/:id", getUser)
router.delete("/:id",deleteUser)

router.patch("/:id", patchUser)
export default router;