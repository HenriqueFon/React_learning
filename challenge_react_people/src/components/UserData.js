import React, {useState} from "react";
import UserDetails from "./UserDetails";
import UserForm from "./UserForm";
const UserData = () => {
    const clientData =
        [{
            "id": 1,
            "first_name": "Maurise",
            "last_name": "Conn",
            "age":40,
            "email": "mconn0@jigsy.com",
            "gender": "Male",
            "ip_address": "40.189.91.89",
            "city": "Angadanan"
        }, {
            "id": 2,
            "first_name": "Helenelizabeth",
            "last_name": "Kenworthy",
            "age":18,
            "email": "hkenworthy1@amazonaws.com",
            "gender": "Female",
            "ip_address": "161.228.209.166",
            "city": "Sagay"
        }, {
            "id": 3,
            "first_name": "Kennedy",
            "last_name": "Longlands",
            "age":12,
            "email": "klonglands2@wsj.com",
            "gender": "Male",
            "ip_address": "51.80.154.246",
            "city": "Somita"
        }, {
            "id": 4,
            "first_name": "Emlyn",
            "last_name": "Andrioletti",
            "age":17,
            "email": "eandrioletti3@cargocollective.com",
            "gender": "Genderqueer",
            "ip_address": "111.159.78.242",
            "city": "Dadamtu"
        }, {
            "id": 5,
            "first_name": "Robb",
            "last_name": "Yankin",
            "age":14,
            "email": "ryankin4@ocn.ne.jp",
            "gender": "Male",
            "ip_address": "57.201.95.62",
            "city": "Orguz"
        }, {
            "id": 6,
            "first_name": "Devonne",
            "last_name": "Jurczak",
            "age":10,
            "email": "djurczak5@etsy.com",
            "gender": "Genderfluid",
            "ip_address": "142.133.229.106",
            "city": "Olszówka"
        }
    ];

    const [user,SetUser] = useState(clientData);

    const AddNewUser = (userObject) => {
        SetUser((prevUser) => [...prevUser,userObject]);
    }

    const AddNewUser2 = (name, age, email, gender, ip_adress, city) => {
        SetUser((prevUser) => [...prevUser, {
            first_name:name,
            age:age,
            email:email,
            gender:gender,
            ip_address:ip_adress,
            city:city
        }]);
    }
    
    return (
        <>
            <UserForm functionAddUser = {AddNewUser2}/>
            <ul>
                {user.map((search,i) => <li><UserDetails key = {i}
                    name = {search.first_name}
                    age = {search.age}
                    email = {search.email}
                    gender = {search.gender}
                    ip_adress = {search.ip_address}
                    city = {search.city}
                /></li>)}
            </ul>
        </>
    )
}

export default UserData;
