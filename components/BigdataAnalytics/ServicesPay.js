import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import StripeCheckout from 'react-stripe-checkout';
import swal from 'sweetalert';
import axios from 'axios';
import { checkout } from '../../checkout';






export default function ServicesPay() {
    const router = useRouter();


    function paymentPlan(newPlan) {
    localStorage.setItem('paymentPlan',newPlan);
    };
    function amountPlan(amount) {
    localStorage.setItem('amount',amount);
    };

    const { query } = useRouter();


    const sessionId = decodeURIComponent(query.session_id);
    const showStatus = decodeURIComponent(query.status);




    useEffect(() => {
      const username = localStorage.getItem('username');
      const link = localStorage.getItem('link');
      const plan = localStorage.getItem('paymentPlan'); 
      const amount = localStorage.getItem('amount'); 
      const attendedBy = localStorage.getItem('attendedBy');      
      
      if(!username){
        router.push('/sign-up/');
      }else{
        const data = {
          username: username,
          attendedBy: attendedBy,
          amount: amount,
          paymentPlan: plan,
        };

        if(showStatus==='success'){
          axios.post(`/api/payment`,data).then(res=>{
            if(res.data.status ===200){     
                console.log('welcom'+res.data.message);
                swal("Success",`Ready to show videos, your Link is: ${link}`,"success");   
                router.push('/');                   
            }else if(res.data.status === 400){
                swal("Failed",'Something went wrong, please contact support to resolve the issue...',"warning");                    
            }
        });

        }else{
        }            
      }



    }, [showStatus]);

  return (
    <>
      <div className="bigdata-services-area ptb-80 bg-eef6fd">
        <div className="container">
          <div className="section-title">
            <h2>Our special packages</h2>
            <div className="bar"></div>
            <p>
              You can choose the package that suits you and enjoy the experience
              with us
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="pricing-table">
                <div className="pricing-header">
                  <h3>6FE Standard</h3>
                </div>
                <div className="price">
                  <span>
                    <sup>$</sup>1.00{' '}
                  </span>
                </div>
                <div className="pricing-features">
                  <ul></ul>
                </div>
                <div className="pricing-footer">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                        paymentPlan('Standard');
                        amountPlan('1');
                        checkout({
                            lineItems: [
                            {
                                price: 'price_1NZ92nD9XEKkDfre5w75hHES',
                                quantity: 1,
                            },
                            ],
                        });
                    }}
                  >BUY
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="pricing-table">
                <div className="pricing-header">
                  <h3>6FE Pro</h3>
                </div>
                <div className="price">
                  <span>
                    <sup>$</sup>600.00{' '}
                  </span>
                </div>
                <div className="pricing-features">
                  <ul></ul>
                </div>
                <div className="pricing-footer">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                    paymentPlan('Pro');
                    amountPlan('600');
                      checkout({
                        lineItems: [
                          {
                            price: 'price_1Na5sED9XEKkDfrehrd8l9CG',
                            quantity: 1,
                          },
                        ],
                      });
                    }}
                  >BUY
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}