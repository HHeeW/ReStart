import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { removeWhitespace, validateEmail, validatePassword } from '../utils/Valitate';

const SignUpPage = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [echeck, setEcheck] = useState(false);
    const [password, setPassword] = useState();
    const [pcheck, setPcheck] = useState(false);
    const [repassword, setRepassword] = useState();
    const [rpcheck, setRpcheck] = useState(false);

    const navigate = useNavigate()

    const EmailCheck = (e) => {
        setEmail(e)
        if(e){
            const changeemail = removeWhitespace(e);
            if(validateEmail(changeemail)){
                setEcheck(true)
            }else{
               setEcheck(false)
               return 
            }
        }
    }

    const PasswordCheck = (p) => {
        setPassword(p)
        if(p) {
            const changepassword = removeWhitespace(p);
            if(validatePassword(changepassword)){
                setPcheck(true)
            }else{
                setPcheck(false)
                return
            }
        }
    }

    const RePasswordCheck = (rp) => {
        setRepassword(rp)
        if(pcheck){
            if(rp){
                if(rp === password){
                    setRpcheck(true)
                }else{
                    setRpcheck(false)
                }
            }
        }
    }

    const handleSignup = () => {
        alert(email, repassword, name)
      }

    // useEffect(()=>{
    //     if(!!user ){navigate('/')}
    // })

  return (
    <div className='container'>
        <div className='max-w-[700px] max-auto my-16 mx-auto p-4'>
            <div>
                <h1 className='text-2xl font-bold py-2'>
                    회원가입
                </h1>
                <p className='py-2'>
                    이미 회원에 가입하셨나요? 바로 <Link to='/signin' className='underline font-bold text-lg text-blue-500'>로그인</Link> 하세요.
                </p>
            </div>

            <form>
                <div className='flex flex-col py-2'>
                    <label className='py-2 font-medium'>이름</label>
                    <input type="text" className="border p-3 text-center"
                        placeholder='황희원'
                        onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='py-2 font-medium'>이메일</label>
                    <input type="email" className="border p-3 text-center" 
                        placeholder='ID@email.com'
                        onChange={(e)=>EmailCheck(e.target.value)}/>
                </div>
                {email ? !!echeck ? <></>:
                <p className="text-red-600">이메일 형식이 옳바르지 않습니다.</p>:<></>
                }
                {/* <button className='border bg-blue-800 
                                hover:bg-blue-500 w-1/3 p-1 my-2 text-white'
                    >
                    이메일 확인
                </button> */}

                <div className='flex flex-col py-2'>
                    <label className='py-2 font-medium'>비밀번호</label>
                    <input type="password" className="border p-3 text-center"
                        placeholder='공백 제외 영어, 숫자, 문자 포함 8자 이상 16자 이하'
                        onChange={(e)=>PasswordCheck(e.target.value)}/>
                </div>
                {password ? pcheck ? <></> :
                    <p className="text-red-600">
                        비밀번호 형식은 공백 제외 영어, 숫자, 문자 포함 8자 이상 16자 이하입니다.
                    </p>:<></>
                }

                <div className='flex flex-col py-2'>
                    <label className='py-2 font-medium'>비밀번호 확인</label>
                    <input type="password" className="border p-3 text-center"
                        placeholder='비밀번호 재입력'
                        onChange={(e)=>RePasswordCheck(e.target.value)}/>
                </div>
                {repassword ? pcheck ? rpcheck  ? <></>:
                    <p className="text-red-600">비밀번호가 일치하지 않습니다.</p>
                    : <p className="text-red-600">비밀번호를 먼저 확인 해주세요</p> : <></>
                }

                {echeck && pcheck && rpcheck && name ?
                    <button type="button" onClick={handleSignup} className='button'>가입</button>
                    :<button disabled className='border bg-gray-300 w-full p-4 my-2 text-white'>가입</button>
                }

            </form>
        </div>
    </div>
  )
}

export default SignUpPage