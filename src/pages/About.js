import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function About() {
  return (
    <>
      <section className="page-header">
        <div className="wrapper">
          <span className="tag">Our Story</span>
          <h1>About <span className="blue">Falcones Capital</span></h1>
          <p>Building the future of proprietary trading, one trader at a time</p>
        </div>
      </section>

      <section className="story">
        <div className="wrapper">
          <div className="story-layout">
            <div className="story-text">
              <h2>Our <span className="blue">Mission</span></h2>
              <p>Falcones Capital was founded with a simple belief: talented traders shouldnt be held back by lack of capital. We provide the funding, you bring the skills.</p>
              <p>Our mission is to identify and empower skilled traders worldwide, giving them access to significant trading capital without risking their own money. We believe in fair rules, transparent processes, and genuine partnerships with our traders.</p>
              <p>Whether youre a seasoned professional or an emerging talent, we provide the platform and capital you need to succeed in the financial markets.</p>
            </div>
            <div className="story-img">
              <div className="img-placeholder">
                <img src={logo} alt="Falcones Capital" className="about-logo" />
                <span>Trading Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="wrapper">
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-num">$180M+</div>
              <p>Total Payouts to Traders</p>
            </div>
            <div className="stat-box">
              <div className="stat-num">50,000+</div>
              <p>Active Traders Worldwide</p>
            </div>
            <div className="stat-box">
              <div className="stat-num">195+</div>
              <p>Countries Represented</p>
            </div>
            <div className="stat-box">
              <div className="stat-num">2021</div>
              <p>Year Founded</p>
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="wrapper">
          <div className="title-area">
            <span className="tag">What We Stand For</span>
            <h2>Our <span className="blue">Values</span></h2>
          </div>
          <div className="values-list">
            <div className="value-box">
              <div className="value-icon"><i className="fas fa-handshake"></i></div>
              <h3>Transparency</h3>
              <p>Clear rules, no hidden fees, and honest communication. What you see is what you get.</p>
            </div>
            <div className="value-box">
              <div className="value-icon"><i className="fas fa-users"></i></div>
              <h3>Trader First</h3>
              <p>Every decision we make considers the impact on our trading community first.</p>
            </div>
            <div className="value-box">
              <div className="value-icon"><i className="fas fa-lightbulb"></i></div>
              <h3>Innovation</h3>
              <p>Constantly improving our platform, tools, and offerings based on trader feedback.</p>
            </div>
            <div className="value-box">
              <div className="value-icon"><i className="fas fa-balance-scale"></i></div>
              <h3>Fairness</h3>
              <p>Rules designed to give you the best chance of success, not to trip you up.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="wrapper">
          <div className="title-area">
            <span className="tag">Our Journey</span>
            <h2>Company <span className="blue">Timeline</span></h2>
          </div>
          <div className="timeline">
            <div className="timeline-entry">
              <div className="marker"></div>
              <div className="timeline-box">
                <span className="date-tag">2021</span>
                <h3>The Beginning</h3>
                <p>Falcones Capital was founded with a mission to democratize access to trading capital for talented traders worldwide.</p>
              </div>
            </div>
            <div className="timeline-entry">
              <div className="marker"></div>
              <div className="timeline-box">
                <span className="date-tag">2022</span>
                <h3>Rapid Growth</h3>
                <p>Reached 10,000 traders and $10M in payouts. Launched new account sizes and improved our evaluation process.</p>
              </div>
            </div>
            <div className="timeline-entry">
              <div className="marker"></div>
              <div className="timeline-box">
                <span className="date-tag">2023</span>
                <h3>Global Expansion</h3>
                <p>Expanded to 150+ countries, launched mobile app, and introduced the scaling program with up to 100% profit splits.</p>
              </div>
            </div>
            <div className="timeline-entry">
              <div className="marker"></div>
              <div className="timeline-box">
                <span className="date-tag">2024</span>
                <h3>Industry Leader</h3>
                <p>Surpassed $180M in payouts, serving 50,000+ traders across 195 countries. Continuing to innovate and grow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrapper">
          <div className="cta-inner">
            <h2>Join the <span className="blue">Falcones Family</span></h2>
            <p>Become part of a global community of successful traders</p>
            <div className="cta-buttons">
              <Link to="/challenges" className="button blue-btn big-btn">Get Started Today</Link>
              <Link to="/contact" className="button border-btn big-btn">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
