
function UserInfo(props){
    return (
        <div>
            <span>Name: {props.userName}</span> <br />
            <span>Gender: {props.userGender}</span> <br />
            <span>Age: {props.userAge}</span> <br />
            <span>Worked years: {props.yearsWorked}</span> <br />
            <span>Salary: {props.salary} - thousand rubles !</span>

            <div className="line"></div>
        </div>
    )
}
export default UserInfo