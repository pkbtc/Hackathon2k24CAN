import React from 'react';

const LearnMorePage = () => {
    
// Inline CSS styles
const containerStyle = {
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
  };
  
  const headingStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };
  
  const paragraphStyle = {
    fontSize: '16px',
    marginBottom: '30px',
  };
  
  const subHeadingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };
  
  const listStyle = {
    listStyleType: 'none',
    padding: '0',
  };
  
  const linkStyle = {
    color: '#007bff',
    textDecoration: 'none',
    fontSize: '18px',
  };
  
  // Hover effect for links
  linkStyle:hover = {
    textDecoration: 'underline',
  };
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to the Learn More Page</h1>
      <p style={paragraphStyle}>
        Welcome to our Learn More page! Here you can find helpful information to enhance your job search experience and make the most out of our job listing platform. Whether you're a job seeker or an employer, we've curated a selection of resources to address your needs and provide valuable insights.
      </p>
      <h2 style={subHeadingStyle}>Explore Our Resources:</h2>
      <ul style={listStyle}>
        <li><a href="/blog" style={linkStyle}>Blog Articles</a></li>
        <li><a href="/guides" style={linkStyle}>Guides and Tips</a></li>
        <li><a href="/webinars" style={linkStyle}>Webinars and Workshops</a></li>
        <li><a href="/faq" style={linkStyle}>Frequently Asked Questions (FAQs)</a></li>
        <li><a href="/success-stories" style={linkStyle}>Success Stories</a></li>
        <li><a href="/resources" style={linkStyle}>Resource Library</a></li>
        <li><a href="/industry-insights" style={linkStyle}>Industry Insights</a></li>
      </ul>
    </div>
  );
}

export default LearnMorePage;