import React from "react";

const Footer = (props) => {
    const { company, email } = props;

    return (
        <div className="container-fluid">
            <hr />
            <div className="text-center text-uppercase">
               <span className="text-danger"> Powered By {company}</span>| <span className="text-muted">Contact By Email: {email}</span>
            </div>

        </div>
    )
}

export default Footer; 