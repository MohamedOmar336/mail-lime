import React from 'react'
import { Collapse, ConfigProvider } from 'antd';

import '../../styles/views/landing-content/ProductFeatures.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'; // solid
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; // solid


const smsFAQs = [
    {
      key: '1',
      label: 'What is SMS Marketing? ',
      children: <p>SMS marketing involves sending promotional messages or alerts to a group of recipients via text messages. It's a direct and immediate way to engage with your audience.</p>
    },
    {
      key: '2',
      label: 'Why is SMS Marketing Effective? ',
      children: <p>SMS messages have high open rates and quick delivery, making them ideal for time-sensitive offers, event reminders, and urgent communications.</p>
    },
    {
      key: '3',
      label: 'How Does SMS Marketing Work? ',
      children: <p>You create and send targeted SMS campaigns to subscribers' mobile phones. These messages can include promotions, updates, reminders, and more.</p>
    },
    {
      key: '4',
      label: 'How Can I Build an SMS Subscriber List?  ',
      children: <p>The open rate indicates the percentage of recipients who opened your email, while the click-through rate measures the percentage of people who clicked on a link within your email. These metrics help evaluate the effectiveness of your campaigns.</p>
    },
    {
      key: '5',
      label: 'How Do I Personalize SMS Messages?  ',
      children: <p>Use recipient's names, location-based offers, and personalised content to make messages relevant and engaging.</p>
    },
    {
      key: '6',
      label: 'Can I Use Multimedia in SMS?  ',
      children: <p>My platform supports multimedia messaging, allowing you to include images, GIFs, or videos in your SMS campaigns.</p>
    }
  ]
  
const SMSPage = () => {
  return (
    <div className='bs-container-fluid bs-p-0'>
      <section className='bs-container bs-py-5'>
        <p className='label bs-mt-5 bs-mb-3'>Textual Symphony</p>
        <h1 className='hero-heading'>Mastering the Art of SMS Marketing </h1>
        <p className='section-text text-muted'>Utilise the skill of SMS marketing to set out on a road of direct and assertive communication. My SMS marketing platform gives you the tools to write unique, succinct, and compelling messages that immediately connect with your audience.  </p>
        <div className='bs-d-flex bs-justify-content-center'>
          <button className='btn btn--dark bs-mt-5' href="">Expand Your Reach</button>
        </div>
      </section>
      <section className='bs-container-fluid bs-py-5'>
        <div className="bs-container">
          <div className='bs-d-flex bs-flex-column-reverse bs-flex-md-row bs-justify-content-between'>
            <div className="bs-col-md-6 bs-d-flex bs-align-items-center bs-mt-4">
              <div>
                <h2 className='section-h'>SMS Magic: <br /> Automating Your Marketing Campaigns for Impact</h2>
                <p className='text-muted bs-mx-0 bs-mt-4'>Experience the magic of streamlined communication with automated SMS marketing campaigns. Imagine creating personalised journeys that engage, captivate, and convert your audience without manual intervention.</p>
              </div>
            </div>
            <div className="bs-col-md-4 bs-d-flex bs-align-items-center bs-mt-4"><img src="https://placehold.co/300x400" alt="" /></div>
          </div>
          <a className='link' href="">Unlock the Magic <FontAwesomeIcon className='bs-ms-3' style={{ transform: 'rotate(45deg)' }} icon={faArrowUp} /></a>
        </div>
      </section>
      <section className='bs-container-fluid bs-py-5'>
        <div className="bs-container">
          <div className='bs-row bs-justify-content-between'>
            <div className="bs-col-md-4 bs-d-flex bs-align-items-center bs-mt-4"><img src="https://placehold.co/300x400" alt="" /></div>
            <div className="bs-col-md-6 bs-d-flex bs-align-items-center bs-mt-4">
              <div>
                <h2 className='section-h'>SMS Symphony:  <br /> Building Dynamic Campaigns with our Template Builder</h2>
                <p className='text-muted bs-mx-0 bs-mt-4'>Elevate your SMS marketing prowess with my SMS Marketing Campaigns Template Builder – your gateway to crafting resonate campaigns. Empower your communication strategy by personalising every aspect of your SMS messages, from content and tone to visual elements. </p>
              </div>
            </div>
          </div>
          <a style={{textAlign:'right'}} className='link' href="">Start Crafting Impact <FontAwesomeIcon className='bs-ms-3' style={{ transform: 'rotate(45deg)' }} icon={faArrowUp} /></a>

        </div>
      </section>
      <section className='bs-container-fluid'>
        <div className='bs-container'>
          <h2 className='section-h text-center bs-mb-2'>SMS Evolution</h2>
          <p className='text-muted text-center bs-mb-5'>Unravelling the Complete Spectrum of Features</p>
          <div className='bs-row bs-justify-content-center bs-align-items-stretch'>
            <div className='bs-col-md-5 bs-mb-4'>
              <div style={{ height: '100%' }} className='section-border bs-d-flex'>
                <div className='bs-mt-1'>
                  <FontAwesomeIcon className='bs-me-3' icon={faCircleCheck} style={{ color: '#FF3131', height: 25 }} />
                </div>
                <div>
                  <h3 className='section-h section-h--sm'>Campaign Scheduler: </h3>
                  <p className='text-muted section-p--sm bs-mt-2'>Timing is everything. With the Campaign Scheduler, strategically plan your messaging to reach your audience at optimal times.</p>
                </div>
              </div>
            </div>
            <div className='bs-col-md-5 bs-mb-4'>
              <div style={{ height: '100%' }} className='section-border bs-d-flex'>
                <div className='bs-mt-1'>
                  <FontAwesomeIcon className='bs-me-3' icon={faCircleCheck} style={{ color: '#FF3131', height: 25 }} />
                </div>
                <div>
                  <h3 className='section-h section-h--sm'>Contact List:     </h3>
                  <p className='text-muted section-p--sm bs-mt-2'>Effortlessly manage your contacts in one place. My Contact List feature lets you organise, segment, and maintain up-to-date information, ensuring your messages reach the proper recipients.</p>
                </div>
              </div>
            </div>
            <div className='bs-col-md-5 bs-mb-4'>
              <div style={{ height: '100%' }} className='section-border bs-d-flex'>
                <div className='bs-mt-1'>
                  <FontAwesomeIcon className='bs-me-3' icon={faCircleCheck} style={{ color: '#FF3131', height: 25 }} />
                </div>
                <div>
                  <h3 className='section-h section-h--sm'>Group List Builder:  </h3>
                  <p className='text-muted section-p--sm bs-mt-2'>Tailor your messaging by creating segmented groups within your Contact List. With the Group List Builder, you can target specific audiences with relevant content that resonates. </p>
                </div>
              </div>
            </div>
            <div className='bs-col-md-5 bs-mb-4'>
              <div style={{ height: '100%' }} className='section-border bs-d-flex'>
                <div className='bs-mt-1'>
                  <FontAwesomeIcon className='bs-me-3' icon={faCircleCheck} style={{ color: '#FF3131', height: 25 }} />
                </div>
                <div>
                  <h3 className='section-h section-h--sm'>Upload CSV File of Your Contacts:  </h3>
                  <p className='text-muted section-p--sm bs-mt-2'>Transition seamlessly to my platform by uploading CSV files of your existing contacts. Maintain continuity in your communication while benefiting from my advanced features.</p>
                </div>
              </div>
            </div>
            <div className='bs-col-md-5 bs-mb-4'>
              <div style={{ height: '100%' }} className='section-border bs-d-flex'>
                <div className='bs-mt-1'>
                  <FontAwesomeIcon className='bs-me-3' icon={faCircleCheck} style={{ color: '#FF3131', height: 25 }} />
                </div>
                <div>
                  <h3 className='section-h section-h--sm'>Bulk Export & Import:   </h3>
                  <p className='text-muted section-p--sm bs-mt-2'>Simplify list management with Bulk Export and Import functionality. Transfer contact data quickly, whether updating your database or integrating it with other tools.</p>
                </div>
              </div>
            </div>
            <div className='bs-col-md-5 bs-mb-4'>
              <div style={{ height: '100%' }} className='section-border bs-d-flex'>
                <div className='bs-mt-1'>
                  <FontAwesomeIcon className='bs-me-3' icon={faCircleCheck} style={{ color: '#FF3131', height: 25 }} />
                </div>
                <div>
                  <h3 className='section-h section-h--sm'>Email and SMS Logs:    </h3>
                  <p className='text-muted section-p--sm bs-mt-2'>Gain transparency into your SMS campaigns with SMS Logs. Track message delivery statuses, responses, and engagement metrics. This real-time insight allows you to monitor performance and fine-tune your strategies for better results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: '#F9F9FA' }} className='bs-container bs-d-flex bs-flex-column bs-align-items-center bs-py-5 bs-my-5'>
        <h2 className='section-h bs-mb-5'>SMS Marketing Decoded: Your Essential FAQs Answered</h2>
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
            <Collapse items={smsFAQs
            } accordion="true" />
          </ConfigProvider>
        </div>

      </section>
    </div>
  )
}

export default SMSPage