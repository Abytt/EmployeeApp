import React from 'react'
import Nav from './Nav'

const Delete1 = () => {
  return (
    <div>
          <Nav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="label form-lablel">Adm no.</label>
                            <input type="text" className="input form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <botton className="btn btn-danger">delete</botton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delete1