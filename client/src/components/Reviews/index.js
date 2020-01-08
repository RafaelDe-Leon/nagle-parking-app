import React from 'react';

export default function Reviews() {
  return (
    <div>
      <div className='section-three'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center '>
              <h1 className='title-section-three'>
                What are our customers saying
              </h1>
            </div>
          </div>
          <div className='row reviews'>
            <div className='col-md-4 reviewstyle'>
              <p>"What an amazing experience"</p>
            </div>
            <div className='col-md-4 reviewstyle'>
              <p>"Wil be coming back here, this is my go to parking lot!"</p>
            </div>
            <div className='col-md-4 reviewstyle'>
              <p>"What a great experience we had"</p>
            </div>
          </div>
          <div className='row reviews-two'>
            <div className='col-md-4 reviewstyle'>
              <p>"5 stars! 5 stars!!!"</p>
            </div>
            <div className='col-md-4 reviewstyle'>
              <p>
                "Best Parking experience uptown, I felt like my needs was taken
                care of."
              </p>
            </div>
            <div className='col-md-4 reviewstyle'>
              <p>
                "Will recommend this business to anyone who is looking for
                parking!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}