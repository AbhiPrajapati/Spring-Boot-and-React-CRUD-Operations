import React,{useRef} from "react";
import axios from "axios";

const baseURL2 = "http://localhost:9192";


const MethodBody = ()=>{
    const inputId = useRef(null);
    const inputName = useRef(null);
    const inputGender = useRef(null);
    const inputAge = useRef(null);

    function putData() {

        // // console.log(inputId.current.value.toString());
        // { let Age = parseInt(inputAge.current.value)}
        axios
            .post(`${baseURL2}/addStudent`, {
                name: inputName.current.value.toString(),
                age :parseInt(inputAge.current.value),
                gender : inputGender.current.value.toString()
            })
            .then((response) => {
               console.log(inputName);
            });
    }

    function updatePost() {
        axios
            .put(`${baseURL2}/update`, {
                id : parseInt(inputId.current.value),
                name: inputName.current.value.toString(),
                age :parseInt(inputAge.current.value),
                gender : inputGender.current.value.toString()
            })
            .then((response) => {
                console.log(response.data);
            });
    }

    function deleteData() {
        let id = parseInt(inputId.current.value);
        axios
            .delete(`${baseURL2}/delete/${id}`)
            .then(() => {
                alert("Post deleted!");
            });
    }

    return(
        <div>
            Enter Id : <input ref={inputId} name="id" type="text"/>
            Enter Name : <input ref={inputName} name="name" type="text" />
            Enter Age : <input ref={inputAge} name="age" type="number" />
            <select ref={inputGender} name="gender" className="p- m-2">
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <input onClick={putData} className="m-2 p-2 bg-warning border-0" type="submit" value="POST"/>
            <input onClick={updatePost} className="m-2 p-2 bg-success border-0" type="submit" value="UPDATE"/>
            <input onClick={deleteData} className="m-2 p-2 bg-danger border-0" type="submit" value="DELETE"/>
        </div>
    );
}

export default MethodBody;