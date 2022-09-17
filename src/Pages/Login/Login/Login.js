import React from 'react';
import { useForm } from 'react-hook-form';
import './Login.css';
import logo from '../../../Assets/img/logo/images__2___1_-removebg-preview.png';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
/* import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'; */
/* import auth from '../../../Firebase.init'; */

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    /*  const [
         signInWithEmailAndPassword,
         user,
         loading,
         error,
     ] = useSignInWithEmailAndPassword(auth); */


    return (
        <div className='login-bg'>
            <div className='container'>
                <div className='login'>
                    <div className='login-dev'>
                        <div className='d-flex justify-content-center pt-4'>
                            <img width='100px' src={logo} alt='' />
                        </div>
                        <h4 className='text-center pt-3 login-color'>Login</h4>
                        <form /* onSubmit={handleSubmit(onSubmit)}  */ className='login-form'>
                            <div className='input-field'>
                                <input className='login-input border-0' type='email'
                                    placeholder=' Email' autoComplete="off"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className='label ml-12'>
                                    {errors.email?.type === 'required' && <span className='text-red-500'>{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.email.message}</span>}
                                </label>
                            </div>

                            <div className='input-field'>
                                <input className='login-input border-0' type='password'
                                    placeholder=' Password' autocomplete="off"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label className='label ml-12 '>
                                    {errors.password?.type === 'required' && <span className='text-red-500'>{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className='text-red-500'>{errors.password.message}</span>}
                                </label>
                            </div>
                            {/* {signInError} */}
                            <div className='d-flex justify-content-center pt-3 input-field'>
                                <input type='submit' className='continue-with-google border-0' value='Login' />
                            </div>
                        </form>
                        <p className='text-center reset-password pt-1 fw-bold'>Reset Password</p>
                        <div>
                            <SocialLogin />
                        </div>
                        <p className='text-center new-to-site ' style={{color:'gray'}}>New to WebSite? <Link to='/register' className='please-register-text-color pe-auto text-decoration-none'>Please Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;