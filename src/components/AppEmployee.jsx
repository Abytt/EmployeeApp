import React from 'react'
import Nav from './Nav'

const AppEmployee = () => {
  return (
    <div>
        <Nav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-     sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                        <label htmlFor="" className="label form-label">Name</label>
                        <input type="text" className="input form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                            <label htmlFor="" className="label form-label">Addm No</label>
                            <input type="text" className="input form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                            <label htmlFor="" className="label form-label">Roll No</label>
                            <input type="text" className="input form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                        <label htmlFor="" className="label form-label">Parent Name</label>
                        <input type="text" className="input form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xx-12">
                        <label htmlFor="" className="label form-label">College</label>
                            <textarea name="" id="" className="form-control"></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                            <label htmlFor="" className="label form-label">DOB</label>
                            <input type="date" name="" id="" className="input form-control" />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                            <label htmlFor="" className="label form-label">DOB</label>
                            <input type="date" name="" id="" className="input form-control" />
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                            <label htmlFor="" className="label form-label">Password</label>
                            <input type="text" className="input form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                                <label htmlFor="" className="label form-label">Confirm Password</label>
                                <input type="text" className="input form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                                <button className="btn btn-warning">Success</button>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppEmployee