import React from 'react'
import Dashboard from './Dashboard';
import Charts from './Charts';
function ContentPage({pages}) {
    return (
        <div id="page-content-wrapper">
            <div className="container-fluid">
                <div className = "col-lg-12">
                    {pages}
                </div>
            </div>
        </div>
    )
}

export default ContentPage
