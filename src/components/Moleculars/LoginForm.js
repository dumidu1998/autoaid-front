import React from 'react'

export default function LoginForm(props) {
    return (
        <div>
            <div className="flex flex-col items-center">
                <div className="">
                    <div>
                        <h1 className="font-primary  text-md">  Username/Email</h1>
                        <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-60 float-right" value={props.username}
                            onChange={(event) => props.onChangeusername(event.target.value)} />
                    </div>
                </div>
                <div className="mt-7">
                    <div>
                        <h1 className="font-primary  text-md">  Password</h1>
                        <input type="password" name="name" className=" rounded-lg shadow-lg h-10 w-60 float-right" value={props.password}
                            onChange={(event) => props.onChangepassword(event.target.value)} />
                    </div>
                </div>
            </div>

        </div>
    )
}
