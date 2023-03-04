import { ChangeEvent, FormEvent, useState } from 'react'
import { createUser } from './services'


const Form = () => {
    const [data, setData] = useState({email: '', password: ''})
    const inputInfo = (e:ChangeEvent <HTMLInputElement>) => {
        setData((infoValue) => {
            const nameOfInput = e.target.name;
            return {
                ...infoValue, [nameOfInput]:e.target.value
            }
        })
    }

    const submitHandler = (e:FormEvent) => {
        e.preventDefault()
        //alert(JSON.stringify(data))
        createUser(data).then((res) => {
            console.log(res)
        }).catch((error) => {
            console.error(error)
        })
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
            <h1>Email</h1>
            <input name="email"  onChange={inputInfo} type="email" />
            <h1>Password</h1>
            <input name="password" onChange={inputInfo} type="password" />
            <button type='submit'>
                Submit
            </button>
            </form>
        </div>
    )
}

export default Form;