import React from 'react'
import { Collapse, ConfigProvider } from 'antd';

import '../../styles/views/landing-content/ProductFeatures.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'; // solid

const emailFAQs = [
  {
    key: '1',
    label: 'What is Email Marketing? ',
    children: <p>Email marketing is a digital marketing strategy that involves sending targeted messages to a group of recipients via email. It's a powerful tool for engaging with your audience, promoting products or services, and nurturing customer relationships.</p>
  },
  {
    key: '2',
    label: 'Why is Email Marketing Important?  ',
    children: <p>Email marketing allows direct communication with your audience, fostering brand loyalty and engagement. It's cost-effective, measurable, and helps you stay top-of-mind with your subscribers.</p>
  },
  {
    key: '3',
    label: 'How Does Email Marketing Work?   ',
    children: <p>Email marketing involves creating compelling content, designing visually appealing emails, segmenting your audience, and sending targeted campaigns. To measure success, you can track metrics like open rates, click-through rates, and conversions.</p>
  },
  {
    key: '4',
    label: 'What are Open Rates and Click-Through Rates?  ',
    children: <p>The open rate indicates the percentage of recipients who opened your email, while the click-through rate measures the percentage of people who clicked on a link within your email. These metrics help evaluate the effectiveness of your campaigns.</p>
  },
  {
    key: '5',
    label: 'How Can I Build a Quality Email List?  ',
    children: <p>Building a quality email list involves obtaining consent from individuals to receive your emails. Use opt-in forms, incentives, and lead magnets to encourage sign-ups. Avoid purchasing email lists to maintain engagement and compliance.</p>
  },
  {
    key: '6',
    label: 'What is Email Automation?',
    children: <p>Email automation involves setting up workflows that trigger specific emails based on user actions or behaviours. It saves time, ensures timely communication, and nurtures leads automatically.</p>
  }
]
const EmailPage = () => {
  return (
    <div className='bs-container-fluid bs-p-0'>
      <section className='bs-container bs-py-5'>
        <p className='label bs-mt-5 bs-mb-3'>Mastering Email Marketing</p>
        <h1 className='hero-heading'>Your Path to Engagement and Growth </h1>
        <p className='section-text text-muted'>Imagine creating emails that go beyond simple text on a screen. Your messages have the potential to engage, attract, and convert when used with Mail Lime. </p>
        <div className='bs-d-flex bs-justify-content-center'>
          <button className='btn btn--dark bs-mt-5' href="">Start Connecting</button>
        </div>
      </section>
      <section className='bs-container-fluid bs-py-5'>
        <div className="bs-container">
          <div className='bs-d-flex bs-flex-column-reverse bs-flex-md-row bs-justify-content-between'>
            <div className="bs-col-md-6 bs-d-flex bs-align-items-center bs-mt-4">
              <div>
                <h2 className='section-h'>Designing Impact: <br /> Your Canvas for Email Marketing Campaigns</h2>
                <p className='text-muted bs-mx-0 bs-mt-4'>Experience the future of email marketing through the art of campaign automation. Imagine creating impactful and personalised journeys for your audience without lifting a finger. My most straightforward automation technology empowers you to craft intricate workflows that engage, nurture, and convert</p>
              </div>
            </div>
            <div className="bs-col-md-4 bs-d-flex bs-align-items-center bs-mt-4"><img src="https://placehold.co/300x400" alt="" /></div>
          </div>
        </div>
      </section>
      <section className='bs-container-fluid bs-py-5'>
        <div className="bs-container">
          <div className='bs-row bs-justify-content-between'>
            <div className="bs-col-md-4 bs-d-flex bs-align-items-center bs-mt-4"><img src="https://placehold.co/300x400" alt="" /></div>
            <div className="bs-col-md-6 bs-d-flex bs-align-items-center bs-mt-4">
              <div>
                <h2 className='section-h'>Designing Impact: <br /> Your Canvas for Email Marketing Campaigns</h2>
                <p className='text-muted bs-mx-0 bs-mt-4'>My Email Marketing Campaigns Template Builder – your ultimate tool for crafting campaigns that leave a lasting impact. Elevate your communication strategy by customising every detail of your emails, from layout and imagery to fonts and colours. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bs-container-fluid bs-py-5'>
        <div className="bs-container">
          <div className='bs-d-flex bs-flex-column-reverse bs-flex-md-row bs-justify-content-between'>
            <div className="bs-col-md-6 bs-d-flex bs-align-items-center bs-mt-4">
              <div>
                <h2 className='section-h'>Strengthen Your Email Marketing: <br /> Uncovering Full Feature Capabilities</h2>
                <p className='text-muted bs-mx-0 bs-mt-4'>Dive into the world of limitless possibilities with the full features of my Email Marketing platform. Every facet of your email marketing journey is covered, from crafting compelling campaigns to analysing comprehensive statistics.</p>
              </div>
            </div>
            <div className="bs-col-md-4 bs-d-flex bs-align-items-center bs-mt-4"><img src="https://placehold.co/300x400" alt="" /></div>
          </div>
        </div>
      </section>
      <section className='bs-container-fluid'>
        <div className='bs-container'>
          <h2 className='section-h text-center bs-mb-5'>Full Email Marketing features</h2>
          <div className='bs-row bs-justify-content-center bs-align-items-stretch'>
            <div className='bs-col-md-5 bs-mb-4'>
              <div style={{ height: '100%' }} className='section-border bs-d-flex'>
                <div className='bs-mt-1'>
                  <FontAwesomeIcon className='bs-me-3' icon={faCircleCheck} style={{ color: '#FF3131', height: 25 }} />
                </div>
                <div>
                  <h3 className='section-h section-h--sm'>Open Rate, Click Rate, Delivery Rate, Bounced Emails: </h3>
                  <p className='text-muted section-p--sm bs-mt-2'>Gain insights into the effectiveness of your campaigns with real-time tracking of open rates, click rates, and delivery rates. </p>
                </div>
              </div>
            </div>
            <div className='bs-col-md-5 bs-mb-4'>
              <div style={{ height: '100%' }} className='section-border bs-d-flex'>
                <div className='bs-mt-1'>
                  <FontAwesomeIcon className='bs-me-3' icon={faCircleCheck} style={{ color: '#FF3131', height: 25 }} />
                </div>
                <div>
                  <h3 className='section-h section-h--sm'>Campaign Builder:  </h3>
                  <p className='text-muted section-p--sm bs-mt-2'>Craft visually appealing and engaging campaigns effortlessly with my intuitive campaign builder. Customise content, design, and layouts to create messages that resonate with your audience. </p>
                </div>
              </div>
            </div>
            <div className='bs-col-md-5 bs-mb-4'>
              <div style={{ height: '100%' }} className='section-border bs-d-flex'>
                <div className='bs-mt-1'>
                  <FontAwesomeIcon className='bs-me-3' icon={faCircleCheck} style={{ color: '#FF3131', height: 25 }} />
                </div>
                <div>
                  <h3 className='section-h section-h--sm'>Campaign Statistics:  </h3>
                  <p className='text-muted section-p--sm bs-mt-2'>Access comprehensive campaign statistics that provide in-depth insights into your campaigns' performance.  </p>
                </div>
              </div>
            </div>
            <div className='bs-col-md-5 bs-mb-4'>
              <div style={{ height: '100%' }} className='section-border bs-d-flex'>
                <div className='bs-mt-1'>
                  <FontAwesomeIcon className='bs-me-3' icon={faCircleCheck} style={{ color: '#FF3131', height: 25 }} />
                </div>
                <div>
                  <h3 className='section-h section-h--sm'>Campaign Scheduler:   </h3>
                  <p className='text-muted section-p--sm bs-mt-2'>Strategically plan your campaigns with the campaign scheduler. Choose the best times to reach your audience, ensuring maximum visibility and engagement.</p>
                </div>
              </div>
            </div>
            <div className='bs-col-md-5 bs-mb-4'>
              <div style={{ height: '100%' }} className='section-border bs-d-flex'>
                <div className='bs-mt-1'>
                  <FontAwesomeIcon className='bs-me-3' icon={faCircleCheck} style={{ color: '#FF3131', height: 25 }} />
                </div>
                <div>
                  <h3 className='section-h section-h--sm'>Email Compose, Sent, Draft, Trash:    </h3>
                  <p className='text-muted section-p--sm bs-mt-2'>Effortlessly manage your emails through every stage of creation and distribution. Draft your content, send it to your recipients, keep track of what's sent, and manage drafts and discarded emails.</p>
                </div>
              </div>
            </div>
            <div className='bs-col-md-5 bs-mb-4'>
              <div style={{ height: '100%' }} className='section-border bs-d-flex'>
                <div className='bs-mt-1'>
                  <FontAwesomeIcon className='bs-me-3' icon={faCircleCheck} style={{ color: '#FF3131', height: 25 }} />
                </div>
                <div>
                  <h3 className='section-h section-h--sm'>Email Sender Management:     </h3>
                  <p className='text-muted section-p--sm bs-mt-2'>Manage and monitor email senders to maintain consistent communication and adhere to best practices for effective email delivery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: '#F9F9FA' }} className='bs-container bs-d-flex bs-flex-column bs-align-items-center bs-py-5 bs-mt-5'>
        <h2 className='section-h bs-mb-5'>Demystifying Email Marketing: Your FAQs Answered</h2>
        <div className='bs-col-md-8'>
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
            <Collapse items={emailFAQs
            } accordion="true" />
          </ConfigProvider>
        </div>

      </section>
    </div>
  )
}

export default EmailPage