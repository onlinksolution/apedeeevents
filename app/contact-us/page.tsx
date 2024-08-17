'use client'

import Swal from 'sweetalert2'

const page = () => {

  async function handleSubmit(e: React.ChangeEvent<any>) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "f7408e5d-2107-4275-9789-73bc5e229fc5",
        name: e.target.fname.value + " " + e.target.lname.value,
        email: e.target.email.value,
        message: e.target.subject.value + " :: " + e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      Swal.fire({
        title: "Submited",
        text: "Message sent successfully!",
        icon: "success"
      });
      e.target.reset();
    }
  }


  return (
    <section>
      <div className="contact_hero flex flex-col justify-center items-center">
        <h2 className="text-white font-600 text-5xl lg:text-7xl">Contact Us</h2>
        <p className="text-slate-300 text-sm">Latest News About Ape Dee Events</p>
      </div>

      <div className="py-20">
        <h3 className="text-center font-secondFont text-2xl lg:text-5xl">Send Us a Message</h3>

        <div className='main_container bg-slate-100 shadow-xl shadow-slate-300 py-10 mt-6 lg:flex lg:w-2/3 lg:justify-center'>
          <form className='px-3 py-4 lg:w-3/4' onSubmit={handleSubmit}>
            <div className='md:grid md:grid-cols-2 md:gap-4 lg:gap-5'>
              <div className='flex flex-col'>
                <label>First Name:</label>
                <input type="text" name="fname" className="py-3 px-3 outline-yellow" placeholder="Enter your first name" required />
              </div>
              <div className='flex flex-col mt-2 md:mt-0'>
                <label>Last Name:</label>
                <input type="text" name="lname" className="py-3 px-3 outline-yellow" placeholder="Enter your last name" required />
              </div>
            </div>

            <div className='flex flex-col mt-2'>
              <label>Email:</label>
              <input type="text" name="email" className="py-3 px-3 outline-yellow" placeholder="Enter your email" required />
            </div>

            <div className='flex flex-col mt-2'>
              <label>Subject:</label>
              <input type="text" name="subject" className="py-3 px-3 outline-yellow" placeholder="Enter your subject" required />
            </div>

            <div className='flex flex-col mt-2'>
              <label>Message:</label>
              <textarea rows={10} name="message" className="py-3 px-3 outline-yellow" placeholder="Enter your message" required />
            </div>

            <div className='flex w-full justify-center md:justify-end'>
              <button type="submit" className="bg-yellow hover:text-white hover:bg-black duration-300 transition-all text-black py-4 px-5 self-center mt-5">Submit</button>
            </div>

          </form>
        </div >
      </div >

    </section >
  )
}

export default page