//create the form 
function LoginForm(){
return (
    <div>
        <h3>Log in</h3>
        <table>
            <tr>
                <td>
                <label for="userName">User Name</label>
                </td>
                <td>
                <input type='text' id="userName" placeholder="Input username"></input>
                </td>
            </tr>
            <tr>
                <td>
                <label for="password">Password</label>
                </td>
                <td>
                <input type='password' id="password" placeholder="Input password"></input>
                </td>
            </tr>
            <tr>
                <button onclick="Submit()">Submit</button>
            </tr>
        </table>
        <br></br>
    </div>
)
}
export default LoginForm;