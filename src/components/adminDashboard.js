import React from 'react';
import axios from 'axios';
import { AddCompany } from "./addCompany";
import { CompanyList } from "./companyList";
import { StudentList } from "./studentList";
export class AdminDashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };

    }
    render() {
        return (
            <div>
                <CompanyList loggedUser={this.props.loggedUser}/>
                <StudentList loggedUserRole={this.props.loggedUser.role}/>
                <AddCompany/>

                AdminDashboard
            </div>
        );
    }
}