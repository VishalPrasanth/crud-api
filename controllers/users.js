import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';


let users =[]
 export const createUsers = async (req, res) => {
    try {
      // Assuming users is an array of user objects, each with a 'password' property
      const saltRounds = 10;
      const hashedUsers = await Promise.all(users.map(async user => {
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        return {...user, password: hashedPassword};
      }));
  
      res.send(hashedUsers);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  };

export const getUsers = (req,res)=>{
    const user =req.body;

    const userId = uuidv4();
    const userWithId = {...user, id:userId}
    users.push(userWithId);
    res.send("user with username "+ (user.firstName)+" added to Db");
}
 export const getUser = (req,res) => {
    const {id} = req.params;
    const userFound = users.find((user) =>user.id ===id);
    res.send(userFound);
}

 export const deleteUser = (req,res)=> {
    const {id} =req.params;
    users = users.find((user)=> user.id !== id);
    res.send ("userId with the id " +(user.id)+"deleted");      
}

 export const patchUser = (req,res) =>{
    const {id} = req.params;

    const {username, email, password}= req.body;
    const user =users.find((user) => user.id ===id);

    if(username) user.username=username;
    if(email) user.email=email;
    if(password) user.password=password;

    res.send(`user with id: ${id} updated`);
}

export default users;