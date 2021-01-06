import fetcher from './fetcher';

// const getAllUsers = async () => {
//     try {
//         const users = await fetcher.get('./api/user');
//         return users.data
//     }catch(error){
//         console.log(error)
//     }
// }

const getUsersByEmail = async (email, password) => {
    console.log("fetcher,users", email, password)
    try{
        const {data} = await fetcher.post('./api/user/signin', {email,password});
        return data;
    }catch(error){
        console.log(error);
        console.log("e", error.message);
        return error
    }
}

// const addUserToDB = async (name, email, password, phone, companyName, address, selectedFile) =>{
const addUserToDB = async (name, email, password, phone, companyName, address) =>{
  console.log("inside adding user to db");
    
    try {
        console.log("im sending", name, email, password);
        // const add = await fetcher.post('./api/signup', {name, email, password, phone, companyName, address, selectedFile});
        const add = await fetcher.post('./api/user/signup', {name, email, password, phone, companyName, address});
        console.log("added",add);
        return add;
    }catch(error){
        console.error(error)
    }
};


export {getUsersByEmail, addUserToDB};
