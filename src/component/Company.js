import React from 'react'
import EmployeeComponent from './EmployeeComponent'
import CompanyComponent from './HomeComponents/CompanyComponent'



function Company() {
    return (
        <div className="container">
            <CompanyComponent />
            <EmployeeComponent />
        </div>
    )
}

export default Company
