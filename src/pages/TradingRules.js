import React from 'react';
import { Link } from 'react-router-dom';

function TradingRules() {
  return (
    <>
      <section className="page-header">
        <div className="wrapper">
          <span className="tag">Know the Rules</span>
          <h1>Trading <span className="blue">Rules</span></h1>
          <p>Clear and fair rules designed to help you succeed as a funded trader</p>
        </div>
      </section>

      <section className="page-content">
        <div className="wrapper">
          <div className="rules-cards">
            <div className="rule-card">
              <div className="rule-icon allowed"><i className="fas fa-check-circle"></i></div>
              <h3>Allowed</h3>
              <ul className="rule-list allowed">
                <li><i className="fas fa-check"></i> All trading strategies</li>
                <li><i className="fas fa-check"></i> News trading</li>
                <li><i className="fas fa-check"></i> Weekend and overnight holding</li>
                <li><i className="fas fa-check"></i> Expert Advisors (EAs)</li>
                <li><i className="fas fa-check"></i> Scalping and day trading</li>
                <li><i className="fas fa-check"></i> Swing trading</li>
              </ul>
            </div>
            <div className="rule-card">
              <div className="rule-icon not-allowed"><i className="fas fa-times-circle"></i></div>
              <h3>Not Allowed</h3>
              <ul className="rule-list not-allowed">
                <li><i className="fas fa-times"></i> Martingale or grid without stop loss</li>
                <li><i className="fas fa-times"></i> Arbitrage or latency exploitation</li>
                <li><i className="fas fa-times"></i> Account management services</li>
                <li><i className="fas fa-times"></i> Copy trading between accounts</li>
                <li><i className="fas fa-times"></i> High-frequency tick scalping</li>
                <li><i className="fas fa-times"></i> Exploiting platform errors</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="table-section">
        <div className="wrapper">
          <h2>Challenge <span className="blue">Parameters</span></h2>
          <div className="table-container">
            <table className="params-table">
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Evaluation Phase</th>
                  <th>Funded Account</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Profit Target</td>
                  <td>8%</td>
                  <td>No target</td>
                </tr>
                <tr>
                  <td>Daily Drawdown</td>
                  <td>5%</td>
                  <td>5%</td>
                </tr>
                <tr>
                  <td>Maximum Drawdown</td>
                  <td>10%</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>Minimum Trading Days</td>
                  <td>1 day</td>
                  <td>No minimum</td>
                </tr>
                <tr>
                  <td>Maximum Trading Period</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Profit Split</td>
                  <td>N/A</td>
                  <td>60% - 100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="page-content">
        <div className="wrapper">
          <h2>Rule <span className="blue">Details</span></h2>
          <div className="detail-cards">
            <div className="detail-card">
              <div className="detail-top">
                <div className="detail-icon"><i className="fas fa-chart-pie"></i></div>
                <h3>Daily Drawdown (5%)</h3>
              </div>
              <div className="detail-text">
                <p>Your daily loss cannot exceed 5% of your starting balance for that day. This is calculated at the end of each trading day.</p>
                <div className="example">
                  <strong>Example:</strong> With a $50,000 account, your maximum daily loss is $2,500. If your account starts the day at $52,000, your max loss for that day is $2,600 (5% of $52,000).
                </div>
              </div>
            </div>
            <div className="detail-card">
              <div className="detail-top">
                <div className="detail-icon"><i className="fas fa-shield-alt"></i></div>
                <h3>Maximum Drawdown (10%)</h3>
              </div>
              <div className="detail-text">
                <p>Your account balance cannot fall below 90% of your initial starting balance at any time during the challenge.</p>
                <div className="example">
                  <strong>Example:</strong> With a $50,000 account, your account must never drop below $45,000. This is a static level based on your initial balance.
                </div>
              </div>
            </div>
            <div className="detail-card">
              <div className="detail-top">
                <div className="detail-icon"><i className="fas fa-bullseye"></i></div>
                <h3>Profit Target (8%)</h3>
              </div>
              <div className="detail-text">
                <p>To pass the evaluation, you need to achieve an 8% profit on your initial account balance. There is no time limit to achieve this.</p>
                <div className="note">
                  <i className="fas fa-info-circle"></i> Once funded, there is no profit target. Trade at your own pace and withdraw profits whenever you want.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="payouts">
        <div className="wrapper">
          <div className="title-area">
            <span className="tag">Get Paid</span>
            <h2>Payout <span className="blue">Rules</span></h2>
          </div>
          <div className="payouts-list">
            <div className="payout-box">
              <div className="percent"><i className="fas fa-calendar-alt"></i></div>
              <h3>Bi-Weekly Payouts</h3>
              <p>Request your profits every 14 days. Consistent payouts you can rely on.</p>
            </div>
            <div className="payout-box">
              <div className="percent"><i className="fas fa-bolt"></i></div>
              <h3>Fast Processing</h3>
              <p>Payouts processed within 24-48 hours via your preferred method.</p>
            </div>
            <div className="payout-box">
              <div className="percent"><i className="fas fa-wallet"></i></div>
              <h3>Multiple Methods</h3>
              <p>Bank transfer, crypto, and other payment options available.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrapper">
          <div className="cta-inner">
            <h2>Ready to Start <span className="blue">Trading?</span></h2>
            <p>Choose your challenge and prove your skills</p>
            <div className="cta-buttons">
              <Link to="/challenges" className="button blue-btn big-btn">View Challenges</Link>
              <Link to="/faq" className="button border-btn big-btn">More Questions?</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TradingRules;
