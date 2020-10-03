import fetcher from './fetcher';

const getAllUsers = async () => {
    try {
        const users = await fetcher.get('./users');
        return users.data
    }catch(error){
        console.log(error)
    }
};

const addUserToDB = async (name, email, password, phone, companyName, address, selectedFile) =>{
    try {
        return await fetcher.post('./signup', {name, email, password, phone, companyName, address, selectedFile});
    }catch(error){
        console.error(error)
    }
};

const getUsersById = async (email, password) => {
    try{
        const {data} = await fetcher.post('./signin', {email, password});
        return data;
    }catch(error){
        console.error(error);
    }
};

export {getUsersById, getAllUsers, addUserToDB};
