import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '', agree: false });
  };

  return (
    <>
      <section className="page-header">
        <div className="wrapper">
          <span className="tag">Get in Touch</span>
          <h1>Contact <span className="blue">Us</span></h1>
          <p>Have questions? We are here to help you succeed</p>
        </div>
      </section>

      <section className="page-content">
        <div className="wrapper">
          <div className="contact-layout">
            <div className="contact-left">
              <h2>Reach Out <span className="blue">Anytime</span></h2>
              <p>Our support team is available to assist you with any questions about challenges, trading rules, or payouts.</p>
              
              <div className="methods">
                <div className="method">
                  <div className="method-icon"><i className="fas fa-envelope"></i></div>
                  <div className="method-text">
                    <h3>Email Us</h3>
                    <p>support@falcones-capital.com</p>
                    <span className="green-text">Usually responds within 24 hours</span>
                  </div>
                </div>
                <div className="method">
                  <div className="method-icon"><i className="fas fa-comments"></i></div>
                  <div className="method-text">
                    <h3>Live Chat</h3>
                    <p>Available on our dashboard</p>
                    <span className="green-text">Average response time: 5 minutes</span>
                  </div>
                </div>
                <div className="method">
                  <div className="method-icon"><i className="fas fa-clock"></i></div>
                  <div className="method-text">
                    <h3>Support Hours</h3>
                    <p>Monday - Friday</p>
                    <span>9:00 AM - 6:00 PM (EST)</span>
                  </div>
                </div>
              </div>

              <div className="social-area">
                <h3>Follow Us</h3>
                <div className="social-buttons">
                  <a href="#" className="social-btn"><i className="fab fa-discord"></i></a>
                  <a href="#" className="social-btn"><i className="fab fa-telegram"></i></a>
                  <a href="#" className="social-btn"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="social-btn"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>

            <div className="form-box">
              <h3>Send us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-cols">
                  <div className="input-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required 
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required 
                    />
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="subject">Subject</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Question</option>
                    <option value="challenge">Challenge Inquiry</option>
                    <option value="payout">Payout Support</option>
                    <option value="technical">Technical Issue</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="input-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                <div className="checkbox">
                  <input 
                    type="checkbox" 
                    id="agree" 
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    required 
                  />
                  <label htmlFor="agree">I agree to the Terms of Service and Privacy Policy</label>
                </div>
                <button type="submit" className="button blue-btn wide-btn">Send Message</button>
              </form>
              <p className="form-info"><i className="fas fa-lock"></i> Your information is secure and will never be shared</p>
            </div>
          </div>
        </div>
      </section>

      <section className="topics">
        <div className="wrapper">
          <div className="title-area">
            <span className="tag">Quick Help</span>
            <h2>Popular <span className="blue">Topics</span></h2>
          </div>
          <div className="topics-list">
            <a href="/faq" className="topic-box">
              <div className="topic-icon"><i className="fas fa-rocket"></i></div>
              <h3>Getting Started</h3>
              <p>Learn how to begin your trading journey with us</p>
              <span className="topic-link">Learn more <i className="fas fa-arrow-right"></i></span>
            </a>
            <a href="/trading-rules" className="topic-box">
              <div className="topic-icon"><i className="fas fa-book"></i></div>
              <h3>Trading Rules</h3>
              <p>Understand all the rules and parameters</p>
              <span className="topic-link">View rules <i className="fas fa-arrow-right"></i></span>
            </a>
            <a href="/faq" className="topic-box">
              <div className="topic-icon"><i className="fas fa-wallet"></i></div>
              <h3>Payouts</h3>
              <p>Everything about withdrawals and profit splits</p>
              <span className="topic-link">Read more <i className="fas fa-arrow-right"></i></span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
