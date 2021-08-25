import UserInfo from "./userInfo";

function App() {
  return (
    <div>
      <UserInfo 
      userName = "Vova" 
      userGender = "male"
      userAge = "27" 
      yearsWorked = "1" 
      salary = "10"
      />
      <UserInfo
      userName = "Ivan"
      userGender = "male" 
      userAge = "21"
      yearsWorked = "2"
      salary = "20"
        />
        
      <UserInfo
      userName = "Olga" 
      userGender = "female"
      userAge = "37"
      yearsWorked = "3"
      salary = "30" 
        />
    </div>
  );
}

export default App;
