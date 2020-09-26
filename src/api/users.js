import fetcher from './fetcher';

const getAllUsers = async () => {
    try {
        const users = await fetcher.get('./users');
        return users.data
    }catch(error){
        console.log(error)
    }
}

const addUserToDB = async (name, email, password, phone, companyName, address, selectedFile) =>{
    try {
        const add = await fetcher.post('./signup', {name, email, password, phone, companyName, address, selectedFile});
        return add;
    }catch(error){
        console.log(error)
    }
}

const getUsersById = async (email, password) => {
    try{
        const {data} = await fetcher.post('./signin', {email,password});
        return data;
    }catch(error){
        console.log(error);
    }
}

export {getUsersById, getAllUsers, addUserToDB};
