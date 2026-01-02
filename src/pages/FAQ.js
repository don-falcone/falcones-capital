import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function FAQ() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openFaq, setOpenFaq] = useState(null);

  const faqData = {
    general: [
      { q: 'What is Falcones Capital?', a: 'Falcones Capital is a proprietary trading firm that provides funding to skilled traders. Pass our evaluation challenge, and trade with our capital while keeping up to 100% of your profits.' },
      { q: 'How does the evaluation work?', a: 'Our evaluation is a one-step process. You need to achieve an 8% profit target while respecting the 5% daily and 10% maximum drawdown limits. There is no time limit to complete the challenge.' },
      { q: 'Is there a time limit for the challenge?', a: 'No, there is no time limit. Take as long as you need to reach the profit target. We believe in quality trading, not rushed decisions.' },
      { q: 'What platforms can I trade on?', a: 'We offer MetaTrader 5, cTrader, and Match-Trader. You can choose your preferred platform when purchasing your challenge.' }
    ],
    trading: [
      { q: 'What trading strategies are allowed?', a: 'Most strategies are allowed including scalping, day trading, swing trading, news trading, and using Expert Advisors (EAs). However, strategies like martingale without stop loss, arbitrage, and latency exploitation are prohibited.' },
      { q: 'Can I hold trades overnight and over weekends?', a: 'Yes, you can hold positions overnight and over weekends. There are no restrictions on how long you keep your trades open.' },
      { q: 'What is the profit target?', a: 'The profit target is 8% of your initial account balance. Once you achieve this during the evaluation, you become a funded trader.' },
      { q: 'What are the drawdown rules?', a: 'Daily drawdown is 5% of your starting balance for that day. Maximum drawdown is 10% of your initial account balance. These are designed to encourage responsible risk management.' }
    ],
    payouts: [
      { q: 'How often can I request a payout?', a: 'You can request payouts every 14 days (bi-weekly). Our processing time is typically 24-48 hours.' },
      { q: 'What is the profit split?', a: 'Profit splits range from 60% to 100% depending on your account size and scaling level. You can increase your split by consistently trading profitably and scaling your account.' },
      { q: 'What payment methods are available?', a: 'We support bank transfers, cryptocurrency (Bitcoin, USDT), and other payment methods depending on your region.' },
      { q: 'Is there a minimum withdrawal amount?', a: 'The minimum withdrawal amount is $100. There is no maximum limit on how much you can withdraw.' }
    ],
    account: [
      { q: 'How do I get started?', a: 'Simply choose your preferred account size on our Challenges page, complete the purchase, and youll receive your account credentials instantly via email.' },
      { q: 'What happens if I fail the challenge?', a: 'If you violate the drawdown rules, the challenge ends. You can purchase a new challenge at any time to try again. We also offer discounts for returning traders.' },
      { q: 'Can I have multiple accounts?', a: 'Yes, you can have multiple challenge accounts simultaneously. However, you cannot use the same strategy across accounts to hedge or guarantee profits.' },
      { q: 'How does the scaling plan work?', a: 'Consistent traders can scale their accounts up to $300,000 in capital. As you scale, your profit split also increases, potentially reaching 100%.' }
    ]
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>
      <section className="page-header">
        <div className="wrapper">
          <span className="tag">Got Questions?</span>
          <h1>Frequently Asked <span className="blue">Questions</span></h1>
          <p>Find answers to common questions about our challenges, rules, and payouts</p>
        </div>
      </section>

      <section className="faq-content">
        <div className="wrapper">
          <div className="faq-tabs">
            <button 
              className={`faq-tab ${activeCategory === 'general' ? 'active' : ''}`}
              onClick={() => { setActiveCategory('general'); setOpenFaq(null); }}
            >
              <i className="fas fa-info-circle"></i> General
            </button>
            <button 
              className={`faq-tab ${activeCategory === 'trading' ? 'active' : ''}`}
              onClick={() => { setActiveCategory('trading'); setOpenFaq(null); }}
            >
              <i className="fas fa-chart-line"></i> Trading
            </button>
            <button 
              className={`faq-tab ${activeCategory === 'payouts' ? 'active' : ''}`}
              onClick={() => { setActiveCategory('payouts'); setOpenFaq(null); }}
            >
              <i className="fas fa-wallet"></i> Payouts
            </button>
            <button 
              className={`faq-tab ${activeCategory === 'account' ? 'active' : ''}`}
              onClick={() => { setActiveCategory('account'); setOpenFaq(null); }}
            >
              <i className="fas fa-user"></i> Account
            </button>
          </div>

          <div className="faq-list">
            {faqData[activeCategory].map((faq, idx) => (
              <div key={idx} className={`faq-card ${openFaq === idx ? 'open' : ''}`}>
                <button className="question" onClick={() => toggleFaq(idx)}>
                  {faq.q}
                  <i className={`fas fa-chevron-down`}></i>
                </button>
                <div className="answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-bottom">
        <div className="wrapper">
          <div className="cta-inner">
            <h2>Still Have <span className="blue">Questions?</span></h2>
            <p>Our support team is ready to help you with any questions</p>
            <div className="faq-buttons">
              <Link to="/contact" className="button blue-btn big-btn">Contact Support</Link>
              <Link to="/challenges" className="button border-btn big-btn">View Challenges</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQ;
