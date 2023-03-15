import React, { useRef } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rt225xs', 'template_qjjkvbt', form.current, 'user_kHXmQRxujLkKvavE8zNF0')
            .then((result) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil!',
                    text: 'Pesan berhasil dikirim!',
                    showConfirmButton: false,
                    timer: 1500
                })
            }, (error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            });

    }

    return (
        <div className='contact mx-auto pb-5'>
            <h1><span className='text-white'>Contact</span> Me</h1>
            <form ref={form} onSubmit={sendEmail} className="wrap-contect mt-4 d-flex justify-content-between align-items-center">
                <div className="col-6">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput3" className="form-label">Enter Subject</label>
                        <input name="user_subject" type="text" className="form-control" id="exampleFormControlInput3" placeholder="subject" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">Name</label>
                        <input name="user_name" type="text" className="form-control" id="Name" placeholder="what u'r name? " />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input name="user_email" type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Massage</label>
                        <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button className="btn btn-warning">Send Message</button>
                </div>
                <div className="col-5 ">
                    <h3> -- If you have questions about me or want to submit Information, Suggestions, Experiences with me , please fill out the form next to this.
                    </h3>
                </div>
            </form>
        </div>
    );
}

export default Contact;
