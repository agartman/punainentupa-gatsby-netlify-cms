import React from 'react';
import Splash from './Splash'
import SubscribeRibbon from './SubscribeRibbon'
import Tools from './Tools'
import RecentBlogPosts from './RecentBlogPosts'
import ContactForm from './ContactForm'
import Footer from './Footer'

export default ({ content, className }) => <div className="container">
    <Splash heading1="Hi! I'm Atte"  heading2="Let's get to work!" subheader="Full stack developer in Southern Finland area" />
    <div className="content-wrapper">
        <SubscribeRibbon />
        <ContactForm />
        <Footer />

    </div>
</div>