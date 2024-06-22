import React from 'react'
import '../../styles/views/landing-content/LandingPage.css';
import { Collapse, ConfigProvider } from 'antd';
import DashboardImg from '../../assets/LandingContent/LandingPage/dashboard.png';
import CampaignBuilederIcon from '../../assets/LandingContent/LandingPage/campaign-builder.svg';
import Analytics from '../../assets/LandingContent/LandingPage/analytics.svg';
import FormBuilder from '../../assets/LandingContent/LandingPage/form-builder.svg';
import Scheduler from '../../assets/LandingContent/LandingPage/scheduler.svg';
import EmailSmsTemplate from '../../assets/LandingContent/LandingPage/email-sms-template.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; // solid
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'; // solid

const emailFeatures = [
  {
    key: '1',
    label: 'Open Rate, Click Rate, Delivery Rate, Bounced Emails: ',
    children: <p>Gain insights into the effectiveness of your campaigns with real-time tracking of open rates, click rates, and delivery rates. Identify bounced emails to keep your contact list accurate and up-to-date, ensuring better engagement in the future.</p>,
  },
  {
    key: '2',
    label: 'Campaign Builder: ',
    children: <p>Gain insights into the effectiveness of your campaigns with real-time tracking of open rates, click rates, and delivery rates. Identify bounced emails to keep your contact list accurate and up-to-date, ensuring better engagement in the future.</p>,
  },
  {
    key: '3',
    label: 'Campaign Statistics: ',
    children: <p>Craft visually appealing and engaging campaigns effortlessly with my intuitive campaign builder. Customise content, design, and layouts to create messages that resonate with your audience.</p>,
  },
  {
    key: '4',
    label: 'Campaign Scheduler: ',
    children: <p>Strategically plan your campaigns with the campaign scheduler. Choose the best times to reach your audience, ensuring maximum visibility and engagement.</p>,
  },
];
const smsFeatures = [
  {
    key: '1',
    label: 'Campaign Builder: ',
    children: <p>Craft captivating campaigns that captivate your audience's attention. My user-friendly Campaign Builder empowers you to create visually stunning and engaging marketing messages—Customise content, images, and layouts to convey your brand's unique voice and message effectively.</p>,
  },
  {
    key: '2',
    label: 'Campaign Statistics: ',
    children: <p>Stay informed and data-driven with detailed Campaign Statistics. Track open rates, click-through rates, and engagement metrics in real time. Uncover actionable insights to refine your strategies and create more impactful campaigns.</p>,
  },
  {
    key: '3',
    label: 'Campaign Scheduler: ',
    children: <p>Timing is everything. With the Campaign Scheduler, strategically plan your messaging to reach your audience at optimal times. Whether it's a global campaign or localised targeting, ensure your messages are delivered when they're most likely to make an impact.</p>,
  },
];
const LandingPage = () => {
  return (
    <div className='bs-container-fluid bs-px-5'>
      <section className='bs-container hero-section'>
        <h1 className=''>Transform Your Marketing Strategy with Mail Lime</h1>
        <p> Hello there, business savvy!  I'm Mail Lime, your online Email Marketing guru, and here to spice up your email and SMS campaigns in the MENA region.</p>
        <button className='cta-btn bs-mt-5'>Elevate My Campaigns</button>
        <img src={DashboardImg} alt="Mailime Dashboard" className='bs-mt-5 bs-w-100' style={{ maxWidth: '80%' }} />
      </section>
      <section className='robust-features bs-container-fluid bs-mt-5 bs-mx-auto bs-p-5'>
        <div className='bs-row'>
          <div className='feature bs-col-md-6 bs-col-xl-4 bs-d-flex bs-align-items-start bs-mt-5'>
            <img src={CampaignBuilederIcon} alt="" style={{ maxWidth: '60px', height: 'auto', marginRight: 20 }} />
            <div>
              <p className='feature-name'>Unified Campaign Builder:</p>
              <p className='feature-desc'>Create cohesive multi-channel campaigns that resonate with your audience—craft emails and SMS messages that complement each other, ensuring consistent messaging across platforms.</p>
            </div>
          </div>
          <div className='feature bs-col-md-6 bs-col-xl-4 bs-d-flex bs-align-items-start bs-mt-5'>
            <img src={Analytics} alt="" style={{ maxWidth: '60px', marginRight: 20 }} />
            <div>
              <p className='feature-name'>Comprehensive Analytics:</p>
              <p className='feature-desc'>Gain deep insights into your campaign's performance. Measure open rates, click-through rates, delivery rates, and SMS engagement metrics to refine your strategies and achieve maximum impact.</p>
            </div>
          </div>
          <div className='feature bs-col-md-6 bs-col-xl-4 bs-d-flex bs-align-items-start bs-mt-5'>
            <img src={FormBuilder} alt="" style={{ maxWidth: '60px', height: 'auto', marginRight: 20 }} />
            <div>
              <p className='feature-name'>Dynamic Custom Form Builder:</p>
              <p className='feature-desc'>Tailor your sign-up forms to capture exactly what you need. Whether it's email addresses, phone numbers, or preferences, our dynamic forms adapt to your requirements.</p>
            </div>
          </div>
          <div className='feature bs-col-md-6 bs-col-xl-4 bs-d-flex bs-align-items-start bs-mt-5'>
            <img src={Scheduler} alt="" style={{ maxWidth: '60px', height: 'auto', marginRight: 20 }} />
            <div>
              <p className='feature-name'>Campaign Scheduler:</p>
              <p className='feature-desc'>Plan your communications strategically. Schedule email and SMS campaigns to reach your audience optimally, ensuring higher engagement and response rates.</p>
            </div>
          </div>
          <div className='feature bs-col-md-6 bs-col-xl-4 bs-d-flex bs-align-items-start bs-mt-5'>
            <img src={EmailSmsTemplate} alt="" style={{ maxWidth: '60px', height: 'auto', marginRight: 20 }} />
            <div>
              <p className='feature-name'>Email and SMS Template Builders:</p>
              <p className='feature-desc'>Choose from a range of professionally designed templates for both emails and SMS. Customise them to align with your brand and message while saving time and effort.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='bs-container-fluid bs-mt-5 bs-p-5' style={{ backgroundColor: '#F9F9FA' }}>
        <div className='bs-row'>
          <div className='bs-col-md-6'>
            <h2 className='feature-heading'>Mail Lime: Where Simplest Communication Meets Marketing Excellence</h2>
            <p className='bs-mb-4 feature-p--regular bs-my-4'>I am more than just an email marketing software – I am a dynamic platform where the most straightforward communication converges with unparalleled marketing excellence.  </p>
            <div className='bs-row bs-gx-5 bs-justify-content-between'>
              <p className='bs-col-sm-6 feature-p--bold'>My simplest tools and features empower businesses to craft meaningful connections with their audience, fostering engagement and success.</p>
              <p className='bs-col-sm-6 feature-p--bold'>With me, you're not just sending emails; you're crafting compelling narratives that resonate, converting recipients into loyal customers.</p>
            </div>
            <a className='bs-my-5 link'>Experience the Revolution <FontAwesomeIcon className='bs-ms-3' style={{ transform: 'rotate(45deg)' }} icon={faArrowUp} /></a>
          </div>
          <div className='bs-col-md-6 bs-d-flex bs-justify-content-center bs-justify-content-md-end'>
            <img src="https://placehold.co/300x400" alt="" />
          </div>
        </div>
      </section>
      <section className='bs-container-fluid-fluid bs-mt-5 bs-p-5'>
        <div className='bs-row'>
          <div className='bs-col-md-6 bs-d-flex bs-justify-content-center bs-justify-content-md-start'>
            <img src="https://placehold.co/300x400" alt="" />
          </div>
          <div className='bs-col-md-6'>
            <p className='feature-heading'>Join the ranks of successful marketers who have harnessed the power of Mail Lime. </p>
            <p className='feature-p--regular bs-my-4 bs-me-5'>With my user-centric design, comprehensive features, and dedication to simplicity, I’m your partner in achieving marketing excellence. <br />Don't miss the opportunity to create lasting connections, drive conversions, and amplify your brand's reach. Ready to step into a new era of marketing? Let Mail Lime be your guide. </p>

            <button className='cta-btn bs-mx-auto'>Explore Mail Lime</button>
          </div>
        </div>
      </section>
      <section className='bs-container-fluid bs-mt-5 bs-p-5' style={{ backgroundColor: '#F9F9FA' }}>
        <div className='bs-row'>
          <div className='bs-col-md-6'>
            <p className='feature-heading'>Email Marketing Software</p>
            <p className='feature-p--regular bs-my-4'> Here are some key features of my email marketing software</p>
            <ConfigProvider
              theme={{
                token: {
                  borderRadius: 0,
                },
                components: {
                  Collapse: {
                    contentBg: 'transparent',
                    headerBg: 'transparent',
                    colorBorder: 'none'
                  }
                }
              }}
            >
              <Collapse items={emailFeatures} accordion="true" />
            </ConfigProvider>
            <a className='bs-mt-4 link'>View Full Features  <FontAwesomeIcon className='bs-ms-3' style={{ transform: 'rotate(45deg)' }} icon={faArrowUp} /></a>
          </div>
          <div className='bs-col-md-6'>
            <div className='img-container bs-d-flex bs-justify-content-center bs-justify-content-md-end'>
              <img src="https://placehold.co/300x400" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className='bs-container-fluid bs-mt-5 bs-p-5'>
        <div className='bs-row'>
          <div className='bs-col-md-6'>
            <div className='img-container bs-d-flex bs-justify-content-center bs-justify-content-md-start bs-align-items-center'>
              <img src="https://placehold.co/300x400" alt="" />
            </div>
          </div>
          <div className='bs-col-md-6'>
            <h2 className='feature-heading'>Text with Impact: Increase Engagement Through SMS Marketing With Mail Lime</h2>
            <p className='bs-mb-4 feature-p--regular bs-my-4'>With Mail Lime, you can experience SMS marketing's revolutionary potential like never before. With messages instantly resonating with and engaging your audience, my SMS marketing software redefines how you communicate with them. Create effective campaigns by skillfully fusing the personal touch of SMS with the effectiveness of automation.   </p>
            <div className='bs-row bs-gx-5 bs-justify-content-between'>
              <p className='bs-col-sm-6 feature-p--bold'>SMS marketing with me creates additional channels for communication for everything from alerts to promotions and beyond. Interested in improving your engagement? Accept the messaging of tomorrow right now. </p>
              <p className='bs-col-sm-6 feature-p--bold'>Unlock a world of possibilities with my SMS marketing software. Reach your audience wherever they are, delivering concise yet compelling messages that command attention. </p>
            </div>
            <a className='bs-my-5 link'>Successful SMS Ignition <FontAwesomeIcon className='bs-ms-3' style={{ transform: 'rotate(45deg)' }} icon={faArrowUp} /></a>
          </div>
        </div>
      </section>
      <section className='bs-container-fluid bs-mt-5 bs-p-5' style={{ backgroundColor: '#F9F9FA' }}>
        <div className='bs-row'>
          <div className='bs-col-md-6'>
            <p className='feature-heading'>SMS Marketing Software</p>
            <p className='feature-p--regular bs-my-4'> Here are some key features of my SMS marketing software</p>
            <ConfigProvider
              theme={{
                token: {
                  borderRadius: 0,
                },
                components: {
                  Collapse: {
                    contentBg: 'transparent',
                    headerBg: 'transparent',
                    colorBorder: 'none'
                  }
                }
              }}
            >
              <Collapse items={smsFeatures} accordion="true" />
            </ConfigProvider>
            <a className='bs-mt-4 link'>View Full Features  <FontAwesomeIcon className='bs-ms-3' style={{ transform: 'rotate(45deg)' }} icon={faArrowUp} /></a>
          </div>
          <div className='bs-col-md-6'>
            <div className='img-container bs-d-flex bs-justify-content-center bs-justify-content-md-end'>
              <img src="https://placehold.co/300x400" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className='bs-container-fluid bs-mt-5 bs-p-5'>
        <h3 className='feature-heading' style={{ textAlign: 'center', maxWidth: 450, margin: '0px auto' }}>Standard functions that my software has</h3>
        <div className='bs-row bs-justify-content-center bs-mt-5'>
          <div className='bs-col-md-5 bs-mb-4'>
            <div className='bs-d-flex feature-box'>
              <div className='bs-mt-1'>
                <FontAwesomeIcon className='bs-me-3' icon={faCircleCheck} />
              </div>
              <div>
                <h3>Intuitive User Interface: Navigate through my software seamlessly with an intuitive user interface to make your experience smooth and efficient.</h3>
              </div>
            </div>
          </div>
          <div className='bs-col-md-5 bs-mb-4'>
            <div className='bs-d-flex feature-box'>
              <div className='bs-mt-1'>
                <FontAwesomeIcon className='bs-me-3' icon={faCircleCheck} />
              </div>
              <div>
                <h3>Integration Capabilities: Seamlessly integrate my software with your existing tools, platforms, and systems to create a unified and streamlined workflow.</h3>
              </div>
            </div>
          </div>
          <div className='bs-col-md-5 bs-mb-4'>
            <div className='bs-d-flex feature-box'>
              <div className='bs-mt-1'>
                <FontAwesomeIcon className='bs-me-3' icon={faCircleCheck} />
              </div>
              <div>
                <h3>Automation and Workflows: Boost productivity and efficiency by automating repetitive tasks and creating workflows that optimise your processes.</h3>
              </div>
            </div>
          </div>
          <div className='bs-col-md-5 bs-mb-4'>
            <div className='bs-d-flex feature-box'>
              <div className='bs-mt-1'>
                <FontAwesomeIcon className='bs-me-3' icon={faCircleCheck} />
              </div>
              <div>
                <h3>Advanced Analytics and Reporting: Gain insights into your performance through detailed analytics and reports that inform your decision-making.</h3>
              </div>
            </div>
          </div>
          <div className='bs-col-md-5 bs-mb-4'>
            <div className='bs-d-flex feature-box'>
              <div className='bs-mt-1'>
                <FontAwesomeIcon className='bs-me-3' icon={faCircleCheck} />
              </div>
              <div>
                <h3>Scalability: Grow your usage as your needs evolve with features that accommodate increased usage and changing requirements.</h3>
              </div>
            </div>
          </div>
          <div className='bs-col-md-5'></div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage