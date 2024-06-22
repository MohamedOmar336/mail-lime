import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalking } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

import { Button, ConfigProvider } from 'antd'

import "../../styles/views/client-dashboard/Plan.css";

const Plan = () => {
    return (
        <div className='bs-container'>
            <h4 className="bs-my-3" style={{ fontSize: '16px', fontWeight: "600", color: '#495057' }}>PRICING</h4>
            <h4 className='heading-text'>Pricing plans</h4>
            <p className='secondary-text'>At Mail Lime, I promote openness and honesty. This is reflected in our pricing strategies, which give you various choices per your objectives and aspirations. </p>
            <div className='bs-container bs-my-5'>
                <div className='bs-row'>
                    <div className='bs-col-md-6 bs-col-lg-4 bs-col-xl-3 '>
                        <div className='plan-col bs-p-4'>
                            <div className='bs-row'>
                                <div className='bs-col-10'>
                                    <h5 className='plan-name'>Starter</h5>
                                    <p className='plan-name-description'>small targted audience</p>
                                </div>
                                <div className='bs-col-2 bs-d-flex bs-justify-content-end'>
                                    <FontAwesomeIcon icon={faPersonWalking} style={{ fontSize: '2.03125rem', color: '#55B043' }} />
                                </div>
                            </div>
                            <div className='bs-my-4'>
                                <h2 className='plan-price'><sup>$</sup> 20 /  <span>Per month</span></h2>
                            </div>
                            <div className='bs-d-flex bs-justify-content-center'>
                                <ConfigProvider
                                    theme={{
                                        components: {
                                            Button: {
                                                colorBgContainer: '#5AB043',
                                                colorText: '#ffffff',
                                                defaultBorderColor: '#5AB043',
                                                colorPrimaryHover: '#ffffff',
                                                colorPrimaryActive: '#ffffff',
                                                colorBgTextActive: '#5AB043',
                                                borderRadius: 3,
                                                paddingContentHorizontal: 12,
                                                paddingContentVertical: 12,
                                            }
                                        },
                                        token: {
                                            controlHeight: 30
                                        }
                                    }}
                                >
                                    <Button > Subscribe</Button>
                                </ConfigProvider>
                            </div>
                            <div className='plan-details bs-mt-5'>
                                <div className='plan-details-item bs-mb-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} className='bs-me-2' style={{ color: '#55B043' }} />
                                    <p>Free Live Support</p>
                                </div>
                                <div className='plan-details-item bs-mb-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} className='bs-me-2' style={{ color: '#55B043' }} />
                                    <p> Unlimited User</p>
                                </div>
                                <div className='plan-details-item bs-mb-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} className='bs-me-2' style={{ color: '#55B043' }} />
                                    <p>Free Live Support</p>
                                </div>
                                <div className='plan-details-item bs-mb-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} className='bs-me-2' style={{ color: '#55B043' }} />
                                    <p>Free Live Support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bs-col-md-6 bs-col-lg-4 bs-col-xl-3 '>
                        <div className='plan-col bs-p-4'>
                            <div className='bs-row'>
                                <div className='bs-col-10'>
                                    <h5 className='plan-name'>Starter</h5>
                                    <p className='plan-name-description'>small targted audience</p>
                                </div>
                                <div className='bs-col-2 bs-d-flex bs-justify-content-end'>
                                    <FontAwesomeIcon icon={faPersonWalking} style={{ fontSize: '2.03125rem', color: '#55B043' }} />
                                </div>
                            </div>
                            <div className='bs-my-4'>
                                <h2 className='plan-price'><sup>$</sup> 20 /  <span>Per month</span></h2>
                            </div>
                            <div className='bs-d-flex bs-justify-content-center'>
                                <ConfigProvider
                                    theme={{
                                        components: {
                                            Button: {
                                                colorBgContainer: '#5AB043',
                                                colorText: '#ffffff',
                                                defaultBorderColor: '#5AB043',
                                                colorPrimaryHover: '#ffffff',
                                                colorPrimaryActive: '#ffffff',
                                                colorBgTextActive: '#5AB043',
                                                borderRadius: 3,
                                                paddingContentHorizontal: 12,
                                                paddingContentVertical: 12,
                                            }
                                        },
                                        token: {
                                            controlHeight: 30
                                        }
                                    }}
                                >
                                    <Button > Subscribe</Button>
                                </ConfigProvider>
                            </div>
                            <div className='plan-details bs-mt-5'>
                                <div className='plan-details-item bs-mb-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} className='bs-me-2' style={{ color: '#55B043' }} />
                                    <p>Free Live Support</p>
                                </div>
                                <div className='plan-details-item bs-mb-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} className='bs-me-2' style={{ color: '#55B043' }} />
                                    <p> Unlimited User</p>
                                </div>
                                <div className='plan-details-item bs-mb-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} className='bs-me-2' style={{ color: '#55B043' }} />
                                    <p>Free Live Support</p>
                                </div>
                                <div className='plan-details-item bs-mb-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} className='bs-me-2' style={{ color: '#55B043' }} />
                                    <p>Free Live Support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bs-col-md-6 bs-col-lg-4 bs-col-xl-3 '>
                        <div className='plan-col bs-p-4'>
                            <div className='bs-row'>
                                <div className='bs-col-10'>
                                    <h5 className='plan-name'>Starter</h5>
                                    <p className='plan-name-description'>small targted audience</p>
                                </div>
                                <div className='bs-col-2 bs-d-flex bs-justify-content-end'>
                                    <FontAwesomeIcon icon={faPersonWalking} style={{ fontSize: '2.03125rem', color: '#55B043' }} />
                                </div>
                            </div>
                            <div className='bs-my-4'>
                                <h2 className='plan-price'><sup>$</sup> 20 /  <span>Per month</span></h2>
                            </div>
                            <div className='bs-d-flex bs-justify-content-center'>
                                <ConfigProvider
                                    theme={{
                                        components: {
                                            Button: {
                                                colorBgContainer: '#5AB043',
                                                colorText: '#ffffff',
                                                defaultBorderColor: '#5AB043',
                                                colorPrimaryHover: '#ffffff',
                                                colorPrimaryActive: '#ffffff',
                                                colorBgTextActive: '#5AB043',
                                                borderRadius: 3,
                                                paddingContentHorizontal: 12,
                                                paddingContentVertical: 12,
                                            }
                                        },
                                        token: {
                                            controlHeight: 30
                                        }
                                    }}
                                >
                                    <Button > Subscribe</Button>
                                </ConfigProvider>
                            </div>
                            <div className='plan-details bs-mt-5'>
                                <div className='plan-details-item bs-mb-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} className='bs-me-2' style={{ color: '#55B043' }} />
                                    <p>Free Live Support</p>
                                </div>
                                <div className='plan-details-item bs-mb-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} className='bs-me-2' style={{ color: '#55B043' }} />
                                    <p> Unlimited User</p>
                                </div>
                                <div className='plan-details-item bs-mb-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} className='bs-me-2' style={{ color: '#55B043' }} />
                                    <p>Free Live Support</p>
                                </div>
                                <div className='plan-details-item bs-mb-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} className='bs-me-2' style={{ color: '#55B043' }} />
                                    <p>Free Live Support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bs-col-md-6 bs-col-lg-4 bs-col-xl-3 '>
                        <div className='plan-col bs-p-4'>
                            <div className='bs-row'>
                                <div className='bs-col-10'>
                                    <h5 className='plan-name'>Starter</h5>
                                    <p className='plan-name-description'>small targted audience</p>
                                </div>
                                <div className='bs-col-2 bs-d-flex bs-justify-content-end'>
                                    <FontAwesomeIcon icon={faPersonWalking} style={{ fontSize: '2.03125rem', color: '#55B043' }} />
                                </div>
                            </div>
                            <div className='bs-my-4'>
                                <h2 className='plan-price'><sup>$</sup> 20 /  <span>Per month</span></h2>
                            </div>
                            <div className='bs-d-flex bs-justify-content-center'>
                                <ConfigProvider
                                    theme={{
                                        components: {
                                            Button: {
                                                colorBgContainer: '#5AB043',
                                                colorText: '#ffffff',
                                                defaultBorderColor: '#5AB043',
                                                colorPrimaryHover: '#ffffff',
                                                colorPrimaryActive: '#ffffff',
                                                colorBgTextActive: '#5AB043',
                                                borderRadius: 3,
                                                paddingContentHorizontal: 12,
                                                paddingContentVertical: 12,
                                            }
                                        },
                                        token: {
                                            controlHeight: 30
                                        }
                                    }}
                                >
                                    <Button > Subscribe</Button>
                                </ConfigProvider>
                            </div>
                            <div className='plan-details bs-mt-5'>
                                <div className='plan-details-item bs-mb-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} className='bs-me-2' style={{ color: '#55B043' }} />
                                    <p>Free Live Support</p>
                                </div>
                                <div className='plan-details-item bs-mb-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} className='bs-me-2' style={{ color: '#55B043' }} />
                                    <p> Unlimited User</p>
                                </div>
                                <div className='plan-details-item bs-mb-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} className='bs-me-2' style={{ color: '#55B043' }} />
                                    <p>Free Live Support</p>
                                </div>
                                <div className='plan-details-item bs-mb-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} className='bs-me-2' style={{ color: '#55B043' }} />
                                    <p>Free Live Support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plan