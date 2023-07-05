import { Checkbox } from "flowbite-react";
import SaveIcon from '@mui/icons-material/Save'
import { useState } from "react";

const UserRolesCard = ({ roles = [], userRoles = [] }) => {

    let previousUser = ''
    let previousRole = ''

    function setAssignedRoles() {
        userRoles.map((userRole) => {
            roles.map((role) => {
                if (role.role !== previousRole) {
                    return (
                        <div key={role.id} className="" >
                            <Checkbox defaultChecked={role.role === userRole.roleAssigned & userRole.status} />
                            <label key={role.id} htmlFor="checked-checkbox" className="ml-2 mr-4 font-medium text-sm md:text-base text-dark-violet"> {role.role} </label>
                        </div>
                    )
                }
            })
        })
        
    }

    return (
        <div className="grid md:grid-cols-4 2xl:grid-cols-2 place-items-center mb-8">
            {
                userRoles.map((userRole) => {
                    if (userRole.status)
                        if (previousUser != userRole.userName) {
                            previousUser = userRole.userName
                            return (
                                <div key={userRole.userId} className='w-full md:w-11/12 max-w-4xl 2xl:max-w-5xl 2xl:text-2xl h-full p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl font-montserrat'>
                                    <p className='font-bold text-dark-violet'> {userRole.userName} </p>
                                    <p className='font-bold text-dark-violet'> {userRole.email} </p>
                                    <p className='mt-4 font-bold text-dark-violet'>Permisos asignados </p>
                                    <div className="">
                                        {roles.map((role) => {
                                            if (role.role !== previousRole) {
                                                return (
                                                    <div key={role.id} className="" >
                                                        <Checkbox defaultChecked={role.role === userRole.roleAssigned & userRole.status} />
                                                        <label key={role.id} htmlFor="checked-checkbox" className="ml-2 mr-4 font-medium text-sm md:text-base text-dark-violet"> {role.role} </label>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>

                                   {/*} <div className="w-full mt-4 mb-2 md:col-span-2 text-right">
                                        <button className='rounded-lg left-2 bg-pure-indigo hover:bg-violet-700 w-48 h-10 p-2 text-white md:text-sm my-auto font-montserrat' type='button'>
                                            <span><SaveIcon className='mr-2 align-text-top' fontSize='small' /> Guardar cambios</span>
                                        </button>
                                    </div>*/}
                                </div>
                            )
                        }

                })
            }
        </div>
    )
}

export default UserRolesCard