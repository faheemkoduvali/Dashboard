import React from 'react'
import Dashboard from './Dashboard';
import Charts from './Charts';
function ContentPage({pages}) {
    return (
        <div id="page-content-wrapper">
            <div class="container-fluid">
                <div class = "col-lg-12">
                    {pages}
                </div>
            </div>
        </div>
    )
}

export default ContentPage
