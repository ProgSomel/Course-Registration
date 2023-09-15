import React from 'react';

const Cart = ({selectedCourse}) => {

    

    return (
        <div className='  p-5 bg-[#FFFFFF]  w-full lg:w-[300px]'>
        
            <h1 className=' border-b-2 pb-5 font-bold text-blue-400'>Credit Remaining </h1>
            <h1 className='  pb-2 pt-8  font-bold '>Course Name</h1>

            {
                selectedCourse.map((course => (
                    <li className=' list-decimal'>{course.title}</li>
                )))
            }

            <p className=' border-y-2 pb-5 pt-8 mb-2' >Total Credit Hour: </p>

        </div>
    );
};

export default Cart;