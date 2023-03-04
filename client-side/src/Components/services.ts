interface userInput{email:string, password:string}
export const createUser = async ({email, password}:userInput) => {
    const data = await fetch('http://localhost:8080/signUp', {
        method: "POST",   
        headers: {
            "Content-Type": "application/json",
          }, 
        mode:"cors",
        body:JSON.stringify({"email": email, "password": password}) 
    })
    const response = await data.json()
    return response
}


