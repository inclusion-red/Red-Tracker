import React from 'react';
import applicants from './dummyDB/applicants'


function AdminPage() {
    let lis=[];
    for( let id in applicants){
        lis.push( <li key={id}>{applicants[id].email}</li>)
    }
    return (
        <div>
            {lis}
        </div>
    )
}

export default AdminPage

