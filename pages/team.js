import React from 'react'

function team() {
  return (
    <div className=" bg-black min-h-screen pt-36">
    <div className = "grid grid-cols-4 gap-5 mx-4 my-8">
      <div className="card">
        <img src="/Vihar.jpg" alt="Vihar Devalla" className="rounded-xl" style={{width: '65%'}} />
        <div className="text-white">
          <h2>Vihar Devalla</h2>
          <p className="title">Full Stack Developer</p>
          <p className="description">I am a Junior from PES University studying Computer Science Engineering. I am an avid tech enthusiast with lifelong passion towards learning something new.</p>
          <p>vihardevalla@gmail.com</p>
          
          
        </div>
      </div>
   
      <div className="card">
        <img src="/Srinivasa_Raghavan_S_copy1.jpg" alt="Srinivasa Raghavan" className="rounded-xl" style={{width: '50%'}} />
        <div className="text-white">
          <h2>Srinivas Raghavan</h2>
          <p className="title">Full Stack Developer</p>
          <p className="description">I am a Junior studying at PES University. Highly Interested in Machine learning, Data Science, Deep learning and Web Development</p>
          <p>sraghavsrg@gmail.com</p>
        </div>
      </div>
      <div className="card">
        <img src="swati.jpg" alt="Swati Maste" className="rounded-xl" style={{width: '48%'}} />
        <div className="text-white">
          <h2>Swati Maste</h2>
          <p className="title">Full Stack Developer</p>
          <p>I am a Junior at PES University, I am enthusiastic and eager to learn something new.</p>
          <p>smatim8@gmail.com</p>
          
        </div>
      </div>
      <div className="card">
        <img src="pallavi.jpg" alt="Pallavi Prabhu" className="rounded-xl" style={{width: '60%'}} />
        <div className="text-white">
          <h2>Pallavi Prabhu</h2>
          <p className="title">Full Stack Developer</p>
          <p>I am a Junior from PES University, interested in the fields of Data Science and Machine Learning.</p>
          <p>pallaviprabhu2810@gmail.com</p>
          
        </div>
      </div>
  </div>
  </div>
  )
}

export default team