import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="banner">
        <div className="wrapper">
          <div className="banner-inner">
            <span className="banner-tag">Trusted Prop Trading Firm</span>
            <h1>Trade with Up to <span className="blue">$300,000</span> in Capital</h1>
            <p>Join thousands of funded traders worldwide. Pass our evaluation, get funded, and keep up to 100% of your profits.</p>
            <div className="stats-row">
              <div className="stat">
                <span className="stat-num">$180M+</span>
                <span className="stat-text">Paid to Traders</span>
              </div>
              <div className="stat">
                <span className="stat-num">195+</span>
                <span className="stat-text">Countries</span>
              </div>
              <div className="stat">
                <span className="stat-num">50K+</span>
                <span className="stat-text">Active Traders</span>
              </div>
            </div>
            <div className="banner-buttons">
              <Link to="/challenges" className="button blue-btn big-btn">Get Funded Now</Link>
              <Link to="/trading-rules" className="button border-btn big-btn">View Rules</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="platforms">
        <div className="wrapper">
          <p className="platforms-heading">Trade on industry-leading platforms</p>
          <div className="platforms-list">
            <div className="platform"><i className="fas fa-desktop"></i> MetaTrader 5</div>
            <div className="platform"><i className="fas fa-chart-bar"></i> cTrader</div>
            <div className="platform"><i className="fas fa-exchange-alt"></i> Match-Trader</div>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="wrapper">
          <div className="title-area">
            <span className="tag">Why Choose Us</span>
            <h2>Built for <span className="blue">Serious Traders</span></h2>
            <p>Experience the difference with our trader-first approach</p>
          </div>
          <div className="features-list">
            <div className="feature-box">
              <div className="icon-box"><i className="fas fa-bolt"></i></div>
              <h3>Instant Funding</h3>
              <p>Get your trading account credentials instantly after purchase. Start trading within minutes.</p>
            </div>
            <div className="feature-box">
              <div className="icon-box"><i className="fas fa-infinity"></i></div>
              <h3>No Time Limits</h3>
              <p>Take your time to hit profit targets. We don't rush you with arbitrary deadlines.</p>
            </div>
            <div className="feature-box">
              <div className="icon-box"><i className="fas fa-percent"></i></div>
              <h3>Up to 100% Profit Split</h3>
              <p>Start at 60% and scale up to keeping 100% of all your trading profits.</p>
            </div>
            <div className="feature-box">
              <div className="icon-box"><i className="fas fa-chart-line"></i></div>
              <h3>Scale to $300K</h3>
              <p>Grow your account through our scaling plan. Consistent traders get more capital.</p>
            </div>
            <div className="feature-box">
              <div className="icon-box"><i className="fas fa-newspaper"></i></div>
              <h3>News Trading Allowed</h3>
              <p>Trade during high-impact news events. No restrictions on your strategy.</p>
            </div>
            <div className="feature-box">
              <div className="icon-box"><i className="fas fa-robot"></i></div>
              <h3>EAs and Bots Welcome</h3>
              <p>Use Expert Advisors and automated strategies. We support algorithmic traders.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="steps">
        <div className="wrapper">
          <div className="title-area">
            <span className="tag">Simple Process</span>
            <h2>How It <span className="blue">Works</span></h2>
          </div>
          <div className="steps-list">
            <div className="step-box">
              <div className="step-num">1</div>
              <h3>Choose Your Challenge</h3>
              <p>Select an account size from $5K to $200K that matches your trading style and goals.</p>
            </div>
            <div className="step-box">
              <div className="step-num">2</div>
              <h3>Pass the Evaluation</h3>
              <p>Hit the 8% profit target while respecting drawdown limits. No time pressure.</p>
            </div>
            <div className="step-box">
              <div className="step-num">3</div>
              <h3>Get Funded and Paid</h3>
              <p>Receive your funded account and start earning. Request payouts bi-weekly.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="challenges" id="challenges">
        <div className="wrapper">
          <div className="title-area">
            <span className="tag">Choose Your Size</span>
            <h2>Trading <span className="blue">Challenges</span></h2>
            <p>One-step evaluation with transparent rules</p>
          </div>
          <div className="cards-grid">
            <div className="card">
              <div className="card-header">
                <span className="amount">$5,000</span>
                <span className="label">Starter</span>
              </div>
              <div className="price-area">
                <span className="price">$49</span>
              </div>
              <ul className="check-list">
                <li><i className="fas fa-check"></i> 8% Profit Target</li>
                <li><i className="fas fa-check"></i> 5% Daily Drawdown</li>
                <li><i className="fas fa-check"></i> 10% Max Drawdown</li>
                <li><i className="fas fa-check"></i> No Time Limit</li>
                <li><i className="fas fa-check"></i> 60-80% Profit Split</li>
              </ul>
              <a href="https://app.falcones-capital.com/checkout/5k" className="button border-btn wide-btn">Select Plan</a>
            </div>
            <div className="card popular">
              <div className="popular-badge">Most Popular</div>
              <div className="card-header">
                <span className="amount">$50,000</span>
                <span className="label">Pro</span>
              </div>
              <div className="price-area">
                <span className="price">$289</span>
              </div>
              <ul className="check-list">
                <li><i className="fas fa-check"></i> 8% Profit Target</li>
                <li><i className="fas fa-check"></i> 5% Daily Drawdown</li>
                <li><i className="fas fa-check"></i> 10% Max Drawdown</li>
                <li><i className="fas fa-check"></i> No Time Limit</li>
                <li><i className="fas fa-check"></i> 70-90% Profit Split</li>
              </ul>
              <a href="https://app.falcones-capital.com/checkout/50k" className="button blue-btn wide-btn">Select Plan</a>
            </div>
            <div className="card">
              <div className="card-header">
                <span className="amount">$100,000</span>
                <span className="label">Elite</span>
              </div>
              <div className="price-area">
                <span className="price">$499</span>
              </div>
              <ul className="check-list">
                <li><i className="fas fa-check"></i> 8% Profit Target</li>
                <li><i className="fas fa-check"></i> 5% Daily Drawdown</li>
                <li><i className="fas fa-check"></i> 10% Max Drawdown</li>
                <li><i className="fas fa-check"></i> No Time Limit</li>
                <li><i className="fas fa-check"></i> 80-100% Profit Split</li>
              </ul>
              <a href="https://app.falcones-capital.com/checkout/100k" className="button border-btn wide-btn">Select Plan</a>
            </div>
          </div>
          <div className="cards-bottom">
            <Link to="/challenges" className="button border-btn">View All Account Sizes</Link>
          </div>
        </div>
      </section>

      <section className="payouts">
        <div className="wrapper">
          <div className="title-area">
            <span className="tag">Flexible Rewards</span>
            <h2>Profit <span className="blue">Sharing</span></h2>
          </div>
          <div className="payouts-list">
            <div className="payout-box">
              <div className="percent">60%</div>
              <h3>Starting Split</h3>
              <p>Begin your journey with a competitive 60% profit split from day one.</p>
            </div>
            <div className="payout-box">
              <div className="percent">80%</div>
              <h3>Scaling Split</h3>
              <p>Increase to 80% as you prove consistent profitability.</p>
            </div>
            <div className="payout-box popular">
              <div className="percent">100%</div>
              <h3>Maximum Split</h3>
              <p>Top performers keep 100% of their profits. You earned it!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews">
        <div className="wrapper">
          <div className="title-area">
            <span className="tag">Trader Stories</span>
            <h2>What Our <span className="blue">Traders Say</span></h2>
          </div>
          <div className="reviews-list">
            <div className="review-box">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>"Best prop firm I've worked with. The rules are fair, payouts are fast, and the support team actually helps. Got my first $5K payout within 3 weeks!"</p>
              <div className="reviewer">
                <div className="avatar">JD</div>
                <div className="reviewer-info">
                  <strong>James D.</strong>
                  <span>$50K Funded Trader</span>
                </div>
              </div>
            </div>
            <div className="review-box">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>"No time limits is a game changer. I can trade my strategy without pressure. Already scaled to $100K and the profit splits keep getting better."</p>
              <div className="reviewer">
                <div className="avatar">SM</div>
                <div className="reviewer-info">
                  <strong>Sarah M.</strong>
                  <span>$100K Funded Trader</span>
                </div>
              </div>
            </div>
            <div className="review-box">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>"Coming from another prop firm, Falcones is leagues ahead. The dashboard is clean, spreads are tight, and I've received $25K in payouts so far."</p>
              <div className="reviewer">
                <div className="avatar">MK</div>
                <div className="reviewer-info">
                  <strong>Michael K.</strong>
                  <span>$200K Funded Trader</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrapper">
          <div className="cta-inner">
            <h2>Ready to Start Your <span className="blue">Trading Journey?</span></h2>
            <p>Join over 50,000 traders who trust Falcones Capital</p>
            <div className="cta-buttons">
              <Link to="/challenges" className="button blue-btn big-btn">Get Funded Today</Link>
              <Link to="/faq" className="button border-btn big-btn">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
