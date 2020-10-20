import fetcher from './fetcher';

const getAllUsers = async () => {
    try {
        const users = await fetcher.get('./api/user');
        return users.data
    }catch(error){
        console.log(error)
    }
};

const getUsersByEmail = async (email, password) => {
    console.log("fetcher,users", email, password)
    try{
        const {data} = await fetcher.post('./api/user', {email,password});
        return data;
    }catch(error){
        console.log(error);
    }
}

const addUserToDB = async (name, email, password, phone, companyName, address, selectedFile) =>{
    try {
        const add = await fetcher.post('./api/signup', {name, email, password, phone, companyName, address, selectedFile});
        return add;
    }catch(error){
        console.error(error)
    }
};


export {getUsersByEmail, getAllUsers, addUserToDB};
