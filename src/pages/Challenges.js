import React, { useState } from 'react';

function Challenges() {
  const [selectedType, setSelectedType] = useState('all');

  const allChallenges = [
    { size: '$5,000', label: 'Starter', price: '$49', target: '8%', daily: '5%', max: '10%', split: '60-80%', link: 'https://app.falcones-capital.com/checkout/5k' },
    { size: '$10,000', label: 'Basic', price: '$99', target: '8%', daily: '5%', max: '10%', split: '60-80%', link: 'https://app.falcones-capital.com/checkout/10k' },
    { size: '$25,000', label: 'Standard', price: '$199', target: '8%', daily: '5%', max: '10%', split: '65-85%', link: 'https://app.falcones-capital.com/checkout/25k' },
    { size: '$50,000', label: 'Pro', price: '$289', target: '8%', daily: '5%', max: '10%', split: '70-90%', popular: true, link: 'https://app.falcones-capital.com/checkout/50k' },
    { size: '$100,000', label: 'Elite', price: '$499', target: '8%', daily: '5%', max: '10%', split: '80-100%', link: 'https://app.falcones-capital.com/checkout/100k' },
    { size: '$200,000', label: 'Master', price: '$899', target: '8%', daily: '5%', max: '10%', split: '80-100%', link: 'https://app.falcones-capital.com/checkout/200k' }
  ];

  return (
    <>
      <section className="page-header">
        <div className="wrapper">
          <span className="tag">Start Trading</span>
          <h1>Choose Your <span className="blue">Challenge</span></h1>
          <p>Select your preferred account size and begin your journey to becoming a funded trader</p>
        </div>
      </section>

      <section className="page-content">
        <div className="wrapper">
          <div className="type-picker">
            <div className="type-options">
              <button 
                className={`type-option ${selectedType === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedType('all')}
              >
                All Accounts
              </button>
              <button 
                className={`type-option ${selectedType === 'starter' ? 'active' : ''}`}
                onClick={() => setSelectedType('starter')}
              >
                Starter ($5K-$25K)
              </button>
              <button 
                className={`type-option ${selectedType === 'pro' ? 'active' : ''}`}
                onClick={() => setSelectedType('pro')}
              >
                Pro ($50K-$200K)
              </button>
            </div>
          </div>

          <div className="all-cards">
            {allChallenges
              .filter(c => {
                if (selectedType === 'starter') return ['$5,000', '$10,000', '$25,000'].includes(c.size);
                if (selectedType === 'pro') return ['$50,000', '$100,000', '$200,000'].includes(c.size);
                return true;
              })
              .map((challenge, idx) => (
                <div key={idx} className={`full-card ${challenge.popular ? 'popular' : ''}`}>
                  {challenge.popular && <div className="popular-badge">Most Popular</div>}
                  <div className="card-top">
                    <span className="label">{challenge.label}</span>
                    <span className="account-amount">{challenge.size}</span>
                  </div>
                  <div className="card-price">
                    <span className="price">{challenge.price}</span>
                    <span className="price-note">one-time fee</span>
                  </div>
                  <div className="details">
                    <div className="detail"><span>Profit Target</span><strong>{challenge.target}</strong></div>
                    <div className="detail"><span>Daily Drawdown</span><strong>{challenge.daily}</strong></div>
                    <div className="detail"><span>Max Drawdown</span><strong>{challenge.max}</strong></div>
                    <div className="detail"><span>Profit Split</span><strong className="green-text">{challenge.split}</strong></div>
                  </div>
                  <div className="included-section">
                    <h4>Whats Included:</h4>
                    <ul className="included-list">
                      <li className="included"><i className="fas fa-check"></i> No Time Limit</li>
                      <li className="included"><i className="fas fa-check"></i> Free Retries on Profit Split</li>
                      <li className="included"><i className="fas fa-check"></i> All Trading Styles Allowed</li>
                      <li className="included"><i className="fas fa-check"></i> News Trading Permitted</li>
                      <li className="included"><i className="fas fa-check"></i> Weekend Holding Allowed</li>
                      <li className="included"><i className="fas fa-check"></i> EA/Bots Welcome</li>
                    </ul>
                  </div>
                  <a href={challenge.link} className={`button ${challenge.popular ? 'blue-btn' : 'border-btn'} wide-btn`}>
                    Get Started
                  </a>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="scaling">
        <div className="wrapper">
          <div className="title-area">
            <span className="tag">Grow With Us</span>
            <h2>Scaling <span className="blue">Plan</span></h2>
            <p>Consistent traders unlock higher capital and better profit splits</p>
          </div>
          <div className="scale-list">
            <div className="scale-box">
              <div className="scale-icon"><i className="fas fa-seedling"></i></div>
              <h3>Phase 1</h3>
              <p>Starting capital with 60% profit split</p>
              <div className="requirement">Complete 3 profitable months</div>
            </div>
            <div className="arrow"><i className="fas fa-chevron-right"></i></div>
            <div className="scale-box">
              <div className="scale-icon"><i className="fas fa-chart-line"></i></div>
              <h3>Phase 2</h3>
              <p>1.5x capital with 70% profit split</p>
              <div className="requirement">Maintain consistency for 3 months</div>
            </div>
            <div className="arrow"><i className="fas fa-chevron-right"></i></div>
            <div className="scale-box">
              <div className="scale-icon"><i className="fas fa-rocket"></i></div>
              <h3>Phase 3</h3>
              <p>2x capital with 80-100% profit split</p>
              <div className="requirement">Continue growing with us</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Challenges;
