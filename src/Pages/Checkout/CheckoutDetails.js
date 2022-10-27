import React from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './checkoutDetails.css'

const CheckoutDetails = ({details}) => {
    const {rating, total_view, total_tutorial, author, category_id} = details; 
    return (
        <div className='mt-5' data-aos="zoom-in-right">
           <div className="row">
    <div className="col-md-4 col-sm-6">
        <div className="pricing-table-3 basic">
            <div className="pricing-table-header">
                <h4><strong>{author.name}</strong></h4>
            </div>
            <div className="price"><strong>${rating.price}</strong> / MONTH</div>
            <div className="pricing-body">
                <ul className="pricing-table-ul">
                    <li><i className="fa fa-send"></i><FaEye className='me-2'></FaEye>{total_view}</li>
                    <li><i className="fa fa-cloud"></i>Total Tutorial: {total_tutorial}</li>
                    <li><i className="fa fa-database"></i>Ratings: {rating.number}</li> 
                </ul><Link to={`/premium/${category_id}`} className="view-more rounded">Check Out</Link></div>
        </div>
    </div>


    <div className="col-md-4 col-sm-6">
        <div className="pricing-table-3 premium">
            <div className="pricing-table-header">
                <h4><strong>{author.name}</strong></h4>
            </div>
            <div className="price"><strong>${rating.price}</strong> / MONTH</div>
            <div className="pricing-body">
                <ul className="pricing-table-ul">
                    <li><i className="fa fa-send"></i> <FaEye className='me-2'></FaEye>{total_view}</li>
                    <li><i className="fa fa-cloud"></i> Total Tutorial: {total_tutorial}</li>
                    <li><i className="fa fa-database"></i> Ratings: {rating.number}</li> 
                </ul><Link to={`/premium/${category_id}`} className="view-more rounded">Check Out</Link></div>
        </div>
    </div>


    <div className="col-md-4 col-sm-12">
        <div className="pricing-table-3 business">
            <div className="pricing-table-header">
                <h4><strong>{author.name}</strong></h4>
            </div>
            <div className="price"><strong>${rating.price}</strong> / MONTH</div>
            <div className="pricing-body">
                <ul className="pricing-table-ul">
                    <li><i className="fa fa-send"></i><FaEye className='me-2'></FaEye>{total_view}</li>
                    <li><i className="fa fa-cloud"></i> Total Tutorial: {total_tutorial}</li>
                    <li><i className="fa fa-database"></i> Ratings: {rating.number}</li> 
                </ul><Link to={`/premium/${category_id}`} className="view-more rounded">Check Out</Link></div>
        </div>
    </div>
</div>
        </div>
    );
};

export default CheckoutDetails;