import { useContext, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import "./login.css"
const Login = () => {
    const [form, setForm] = useState("");
    const { handleToken } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = ({ target: { name, value } }) => {
        setForm({
            ...form,
            [name]: value
        })
    }
    return <div>
        <div className="login">
            <h1 style={{ textAlign: "center" }}>You Must Login To Access Patient Data</h1>
            <input type="text" onChange={handleChange} name="email" placeholder="Enter Email" />
            <input type="text" onChange={handleChange} name="password" placeholder="Enter Password" />
            <button onClick={() => {
                handleToken("322fkjs")
                navigate("/doctor")
            }}>Sign In</button>
        </div>
        <img style={{ width: 400, marginLeft: 450 }} src="https://www.drupal.org/files/project-images/Disable%20Login%20Page-Icon.png" alt="" />
    </div>
}

export default Login