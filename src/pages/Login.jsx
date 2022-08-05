import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import userToken from '../utils/userService'

<<<<<<< HEAD

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    min-width: 250px;
    max-width: 50vw;
    align-items: baseline;
    div input {
        margin-right: 25px;
    }
`
=======
>>>>>>> development

const LoginTest = ({handleSignupOrLogin}) => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState()

    const handleChange = (e) => {
        setFormData({...formData, [e.target.id] : e.target.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            await userToken.login(formData);
            handleSignupOrLogin()
            navigate('/')
        } 
        catch (err){
            alert('Invalid Credentials')
        }
    }

  return (
    <div onSubmit={handleSubmit} className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <title>Sign Into Your Account</title>
    <div className="max-w-md w-full space-y-8">
      <form className="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="name" className="sr-only">
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="appearance-none rounded-none relative block
              w-full px-3 py-2 border border-gray-300
              placeholder-gray-500 text-gray-900 rounded-t-md
              focus:outline-none focus:ring-green-700
              focus:border-green-700 focus:z-10 sm:text-sm"
              placeholder="Username"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="appearance-none rounded-none relative block
              w-full px-3 py-2 border border-gray-300
              placeholder-gray-500 text-gray-900 rounded-b-md
              focus:outline-none focus:ring-green-700
              focus:border-green-700 focus:z-10 sm:text-sm"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center
            py-2 px-4 border border-transparent text-sm font-medium
            rounded-md text-white bg-green-700 hover:bg-green-900
            focus:outline-none focus:ring-2 focus:ring-offset-2
            focus:ring-green-500"
          >
            Sign in
          </button>
        </div>
<<<<<<< HEAD

        <input type='submit' value='Log In' />
        <imageUpload />

    </StyledForm>
=======
      </form>
    </div>
  </div>
>>>>>>> development
  )
}

export default LoginTest