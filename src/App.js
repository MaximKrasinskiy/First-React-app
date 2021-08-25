

function App() {
  return (
    <div>
      <UserInfo 
      userName = "Vova" 
      userGender = "male"
      userAge = "27" 
      yearsWorked = "1" 
      />
      <UserInfo
      userName = "Ivan"
      userGender = "male" 
      userAge = "21"
      yearsWorked = "2"
        />
      <UserInfo
      userName = "Olga" 
      userGender = "female"
      userAge = "37"
      yearsWorked = "3" 
        />
    </div>
  );
}

export default App;
