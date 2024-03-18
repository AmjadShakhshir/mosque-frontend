const Contact = () => {
  return (
    <section className="contact mt-3">
      <div className="contact-container">
        <div className="contact-content">
          <h1 className="display-4 fst-italic mb-5">Contact</h1>
          <p className="lead">
            We are always happy to hear from you. If you have any questions or comments, please feel free to contact us. You can reach us by phone, email, or by visiting our office. Our team is here to help you with anything you need. We look forward
            to hearing from you!
          </p>
          <p className="lead">
            Office: Lönnrotinkatu 22 C 34
            <br />
            Mosque: Lönnrotinkatu 22 P 41
            <br />
            Phone: +358 50 533 5592
            <br />
            Email rabita(at)rabita.fi
          </p>
        </div>
        <div className="contact-img">
          <img src="https://img.freepik.com/free-vector/contact-center-abstract-concept_335657-3032.jpg?t=st=1710806021~exp=1710809621~hmac=0f0303cf13d80a43ff2634ab7c297af929244c886ebb55c605162f3c3d3b17ef&w=826" alt="contact us" />
        </div>
      </div>
      <div className="location my-5">
        <h4 className="display-4 fst-italic px-4 mb-2">Location:</h4>
        <div className="card">
          <img
            src="https://img.freepik.com/free-vector/travel-road-street-map-with-location-pin-symbol-vector-illustration_1284-2005.jpg?t=st=1710804875~exp=1710808475~hmac=ca391af9ce70ca76146a4f2f222ab7d582d17f70917ef40e6ac4fc9207d41ad6&w=826"
            className="card-img-top"
            alt="address map"
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.9716505107433!2d24.931393877637234!3d60.164648175029626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bcaf2e9279b%3A0x4f1de5df2f467e02!2sL%C3%B6nnrotinkatu%2022%2C%2000120%20Helsinki!5e0!3m2!1sen!2sfi!4v1710803375352!5m2!1sen!2sfi"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="contact-form">
        <div className="contact-form-content">
          <h4 className="display-4 fst-italic mb-5">Contact Form</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea className="form-control" id="message" rows={3}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="contact-form-img">
          <img src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?t=st=1710804727~exp=1710808327~hmac=ed67fe0732882269f7fc5654e43740b91044cb1b3706da0413a5e12295866e0f&w=826" alt="contact us" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
