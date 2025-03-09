import React from 'react'

function Create() {
  return (
    <>
      <div className="main bg-[rgb(241,250,254)] h-auto  w-full shadow-xl py-10	">
                <div className="heading flex justify-center">
                    <h1 className='text-[rgb(0,173,240)] text-center mt-20 text-4xl roboto-light-2 '>Values</h1>
                </div>

                <div className="sub-heading">
                    <h1 className='text-center roboto-thin mt-3 text-xl'>Our values are anchored around our business ethics, consumer focus and</h1>
                    <h1 className='text-center roboto-thin mt-3 text-xl'    >corporate responsibility towards society at large</h1>
           
                </div>

                <div className="create grid grid-cols-1 lg:grid-cols-6  mt-10 mb-10 justify-items-center px-4">
                    <div className="box-1 h-52 w-40
                      text-center 
                    ">
                       <h1 className='roboto-thin text-6xl'>C</h1>
                       <p className='roboto-thin text-2xl '>Cost-effective & simple</p>

                    </div>
                    <div className="box-2 h-52 w-40 text-center">
                        
                    <h1 className='roboto-thin text-6xl'>R</h1>
                       <p className='roboto-thin text-2xl  '>Respect for all</p>

                    </div>
                    <div className="box-3 h-52 w-40
                    text-center">

                    <h1 className='roboto-thin text-6xl'>E</h1>
                    <p className='roboto-thin text-2xl'>Exemplary governance</p>


                    </div>

                    <div className="box-4  h-52 w-44
                    text-center">
                       
                    <h1 className='roboto-thin text-6xl'>A</h1>
                    <p className='roboto-thin text-2xl'>Accountability, professionalism & discipline</p>

                    </div>

                    <div className="box-5  h-52 w-40 text-center">

                    <h1 className='roboto-thin text-6xl'>T
                    </h1>
                    <p className='roboto-thin text-2xl'>CTransparency & integrity</p>

                    </div>

                    <div className="box-6  h-52 w-40 text-center">

                    <h1 className='roboto-thin text-6xl'>E</h1>
                    <p className='roboto-thin text-2xl'>Effective teamwork and commitment</p>

                    </div>
                    
                    
                </div>
      </div>
    
    </>
  )
}

export default Create


