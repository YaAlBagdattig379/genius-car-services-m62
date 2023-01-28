import Button from 'react-bootstrap/Button';
import React from 'react';
import {Link, useParams} from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h1>Welcome to serviceDetail: {serviceId} </h1>
            <div className='text-center'>
              <Link to='/checkout'>
                 <Button variant="primary">Proceed Checkout</Button>
              </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;