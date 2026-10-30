import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import './overrides.css';

const phone = '028 9048 6100';
const email = 'info@diamondbright.co.uk';
const phoneHref = 'tel:+442890486100';
const facebook = 'https://www.facebook.com/diamondbrightcleaningservice?locale=en_GB';
const pages = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'services', label: 'Services', href: '/services/' },
  { id: 'about', label: 'About', href: '/about/' },
  { id: 'videos', label: 'Videos', href: '/videos/' },
  { id: 'contact', label: 'Contact', href: '/contact/' },
];

function Mark({ small = false }) {
  return <span className={`brand-mark${small ? ' brand-mark-small' : ''}`} aria-hidden="true"><svg viewBox="0 0 40 40" fill="none"><path d="M20 2.8 25.2 14.8 37.2 20 25.2 25.2 20 37.2 14.8 25.2 2.8 20 14.8 14.8 20 2.8Z" fill="currentColor"/><path d="M31.7 3.5v7.1M28.15 7.05h7.1M8.3 29.4v6.2M5.2 32.5h6.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg></span>;
}

function ArrowIcon({ diagonal = false }) {
  return <svg className="arrow-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d={diagonal ? 'M5 15 15 5M6 5h9v9' : 'M3 10h13M11 4l6 6-6 6'} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

const serviceItems = [
  { title: 'Office & contract cleaning', text: 'Cleaning for offices and commercial premises, with contract arrangements to discuss around your workplace and schedule.', icon: '▦', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=82', alt: 'Bright, tidy office workspace' },
  { title: 'Carpet cleaning', text: 'Carpet cleaning for homes and workplaces. Share the room, floor covering and any particular concerns when requesting a quote.', icon: '⌂', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=82', alt: 'Clean and comfortable living room' },
  { title: 'Upholstery cleaning', text: 'Ask about cleaning for upholstered furniture and fabric surfaces, with options depending on the item and material.', icon: '◌', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=82', alt: 'Soft furnishings in a welcoming interior' },
  { title: 'Commercial window cleaning', text: 'Window cleaning for commercial premises. Get in touch with your location and building details to discuss the work.', icon: '□', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=82', alt: 'Modern commercial building with large windows' },
  { title: 'Domestic & one-off cleaning', text: 'One-off and spring cleaning for homes, as well as housekeeping. Describe the rooms and the level of help you need.', icon: '✧', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=82', alt: 'Cleaning supplies ready for a home clean' },
  { title: 'Specialist cleaning enquiries', text: 'The business listing also includes rugs, floors, kitchens, ovens and stone surfaces. Ask which options suit your space.', icon: '✦', image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=82', alt: 'Carefully arranged cleaning equipment' },
];

function Header({ active }) {
  const [open, setOpen] = useState(false);
  return <><div className="topline"><div className="container topline-inner"><span>Home and workplace cleaning in Belfast</span><a href={phoneHref}>Call us: {phone}</a></div></div><header className="site-header"><div className="container header-inner">
    <a className="brand" href="/" aria-label="Diamond Bright Cleaning Services home" onClick={() => setOpen(false)}><Mark /><span className="brand-copy"><strong>DIAMOND BRIGHT</strong><small>CLEANING SERVICES · BELFAST</small></span></a>
    <button className="menu-toggle" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}><span></span><span></span></button>
    <nav className={open ? 'main-nav is-open' : 'main-nav'} id="main-navigation" aria-label="Main navigation">{pages.map(page => <a key={page.id} href={page.href} aria-current={active === page.id ? 'page' : undefined} onClick={() => setOpen(false)}>{page.label}</a>)}<a className="nav-call" href={phoneHref} onClick={() => setOpen(false)}>Call for an enquiry <ArrowIcon diagonal /></a></nav>
  </div></header></>;
}

function Footer() {
  return <footer className="site-footer"><div className="container footer-top"><a className="brand footer-brand" href="/"><Mark /><span className="brand-copy"><strong>DIAMOND BRIGHT</strong><small>CLEANING SERVICES · BELFAST</small></span></a><p>Clean spaces, thoughtfully cared for.</p><a href="#top" className="back-top">Back to top ↑</a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Diamond Bright Cleaning Services</span><div><a href={phoneHref}>{phone}</a><a href={`mailto:${email}`}>{email}</a></div><span>Belfast, Northern Ireland</span></div></footer>;
}

function SectionTitle({ eyebrow, title, intro }) {
  return <div className="page-heading"><p className="eyebrow"><span className="eyebrow-line"></span>{eyebrow}</p><h1>{title}</h1>{intro && <p className="page-intro">{intro}</p>}</div>;
}

function HomePage() {
  return <><main id="top"><section className="hero"><div className="container hero-grid"><div className="hero-copy"><p className="eyebrow"><span className="eyebrow-line"></span> A brighter kind of clean</p><h1>Feel good<br/>coming <em>home.</em></h1><p className="hero-intro">Cleaning for Belfast homes and workplaces, from regular commercial care to carpets and one-off cleans.</p><div className="hero-actions"><a className="button button-dark" href="/contact/">Request a quote <ArrowIcon /></a><a className="text-link" href={phoneHref}>{phone}</a></div><div className="hero-note"><Mark small /><span>Domestic, commercial<br/>and specialist cleaning</span></div></div><div className="hero-visual"><div className="hero-photo" role="img" aria-label="Bright, freshly cleaned interior"/><div className="image-caption"><span className="caption-dot"/>A fresh start for every space</div><div className="hero-stamp"><Mark small/><span>DIAMOND<br/>BRIGHT</span></div><span className="visual-vertical">DIAMOND BRIGHT · BELFAST</span></div><div className="hero-bottom"><span>BASED IN BELFAST</span><span>Cleaning that fits around your space</span><a href="/services/">Explore services <ArrowIcon/></a></div></div></section>
    <section className="trust-strip"><div className="container trust-inner"><p>For spaces that feel<br/><strong>good to be in.</strong></p><div className="trust-item"><b>01</b><span>Homes &<br/>workplaces</span></div><div className="trust-item"><b>02</b><span>One-off or<br/>contract enquiries</span></div><div className="trust-item"><b>03</b><span>Carpet & upholstery<br/>cleaning</span></div><div className="trust-mark"><Mark small/></div></div></section>
    <section className="section home-services"><div className="container"><div className="split-heading"><div><p className="eyebrow"><span className="eyebrow-line"/>What we clean</p><h2>Care for the spaces<br/>you <em>live and work in.</em></h2></div><p className="heading-aside">Tell us what needs attention. We’ll talk through the service you’re looking for and how to request a quote.</p></div><div className="service-grid">{serviceItems.slice(0,4).map((item,i)=><ServiceCard key={item.title} item={item} number={i+1}/>)}</div><div className="center-cta"><a className="button button-dark" href="/services/">View all services <ArrowIcon/></a></div></div></section>
    <section className="home-about"><div className="home-about-image" role="img" aria-label="A calm, clean living room"/><div className="home-about-copy"><p className="eyebrow eyebrow-light"><span className="eyebrow-line"/>A little about us</p><h2>A clean space.<br/><em>A little more ease.</em></h2><p>Diamond Bright Cleaning Services provides domestic and commercial cleaning in Belfast. Explore the services or get in touch with details about your property and cleaning needs.</p><a className="button button-light" href="/about/">Meet Diamond Bright <ArrowIcon/></a></div></section>
    <section className="video-teaser"><div className="container teaser-inner"><div><p className="eyebrow"><span className="eyebrow-line"/>See cleaning in action</p><h2>A closer look at<br/><em>cleaning work.</em></h2></div><div><p>Browse illustrative cleaning clips and visit Diamond Bright’s Facebook page for any videos shared by the business.</p><a className="text-link text-link-green" href="/videos/">View videos <ArrowIcon/></a></div></div></section>
    <section className="home-contact"><div className="container home-contact-inner"><div><p className="eyebrow eyebrow-light"><span className="eyebrow-line"/>Your next step</p><h2>Tell us what<br/>needs a <em>refresh.</em></h2></div><div><p>Call or email to discuss a home, workplace, carpet or one-off cleaning enquiry.</p><a className="contact-phone" href={phoneHref}>{phone}<ArrowIcon diagonal/></a><a className="button button-accent" href="/contact/">Send an enquiry <ArrowIcon/></a></div></div></section></main></>;
}

function ServiceCard({ item, number }) {
  return <article className="service-card"><a className="service-card-image" href="/contact/" aria-label={`Ask about ${item.title}`}><img src={item.image} alt={item.alt} loading="lazy"/></a><div className="service-card-content"><div className="service-top"><span className="service-number">0{number}</span><span className="service-icon" aria-hidden="true">{item.icon}</span></div><h2>{item.title}</h2><p>{item.text}</p><a className="service-link" href="/contact/">Ask about this service <ArrowIcon diagonal/></a></div></article>;
}

function ServicesPage() {
  return <main id="top"><section className="page-hero"><div className="container"><SectionTitle eyebrow="Cleaning services" title={<>Practical care for<br/><em>every kind of space.</em></>} intro="From commercial premises to the carpets at home, tell us what you need cleaned and ask about the right service."/><div className="page-hero-actions"><a className="button button-dark" href="/contact/">Request a quote <ArrowIcon/></a><a className="text-link" href={phoneHref}>{phone}</a></div></div></section><section className="section service-list-section"><div className="container"><div className="service-grid service-grid-three">{serviceItems.map((item,i)=><ServiceCard item={item} number={i+1} key={item.title}/>)}</div><div className="service-note"><Mark small/><p><strong>Not sure which service you need?</strong> Call or email with a few details about the property and the work.</p><a href={phoneHref}>{phone} <ArrowIcon diagonal/></a></div></div></section><section className="steps-section"><div className="container steps-layout"><div className="steps-intro"><p className="eyebrow"><span className="eyebrow-line"/>Getting started</p><h2>Simple from<br/><em>the first call.</em></h2><p>Every space is different. A conversation helps the team understand your requirements.</p></div><div className="steps-list"><div className="step"><span className="step-num">01</span><div><h3>Tell us about the space</h3><p>Share the property type, what needs cleaning and your preferred timing.</p></div></div><div className="step"><span className="step-num">02</span><div><h3>Discuss the service</h3><p>Talk through the cleaning required and any practical details.</p></div></div><div className="step"><span className="step-num">03</span><div><h3>Request a quote</h3><p>Call, email or use the enquiry form to ask about pricing and availability.</p></div></div></div></div></section></main>;
}

function AboutPage() {
  return <main id="top"><section className="page-hero about-page-hero"><div className="container"><SectionTitle eyebrow="About Diamond Bright" title={<>A cleaner space,<br/><em>made easier.</em></>} intro="Diamond Bright Cleaning Services offers cleaning for domestic and commercial customers in Belfast."/></div></section><section className="about-detail"><div className="container about-detail-grid"><div className="about-detail-image" role="img" aria-label="Sunlight in a tidy living room"/><div><p className="eyebrow"><span className="eyebrow-line"/>Our approach</p><h2>Start with what<br/>your space <em>needs.</em></h2><p>Cleaning is personal to the property, the people using it and the work that needs doing. Diamond Bright’s listed services cover homes and workplaces, with options including contract cleaning, carpet cleaning and one-off cleans.</p><p>When you get in touch, share the type of premises, the services you’re considering and how often you need help. The team can then discuss what’s available and how to request a quote.</p><a className="button button-dark" href="/contact/">Talk to the team <ArrowIcon/></a></div></div></section><section className="values-strip"><div className="container values-grid"><article><span>01</span><h3>Clear conversations</h3><p>Discuss the scope and timing before moving ahead.</p></article><article><span>02</span><h3>Home or workplace</h3><p>Enquiries for domestic and commercial cleaning are welcome.</p></article><article><span>03</span><h3>Service to suit the space</h3><p>Ask about the listed services and what fits your property.</p></article></div></section></main>;
}

function VideosPage() {
  const clips = [
    { title: 'Carpet cleaning in progress', url: 'https://videos.pexels.com/video-files/7204664/7204664-uhd_3840_2160_24fps.mp4', poster: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=82', alt: 'Illustrative stock clip of a carpet being vacuumed' },
    { title: 'Commercial window cleaning', url: 'https://videos.pexels.com/video-files/2858711/2858711-hd_1920_1080_24fps.mp4', poster: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=82', alt: 'Illustrative stock clip of office window cleaning' },
  ];
  return <main id="top"><section className="page-hero"><div className="container"><SectionTitle eyebrow="Watch & explore" title={<>A closer look at<br/><em>cleaning in action.</em></>} intro="These illustrative clips show cleaning-related work. They are stock footage and are not presented as Diamond Bright jobs or staff."/><a className="button button-dark" href={facebook} target="_blank" rel="noreferrer">Visit Diamond Bright on Facebook <ArrowIcon diagonal/></a></div></section><section className="section videos-section"><div className="container video-grid">{clips.map((clip,i)=><article className="video-card" key={clip.url}><video controls preload="none" poster={clip.poster} aria-label={clip.alt}><source src={clip.url} type="video/mp4"/>Your browser does not support video playback.</video><div><span>ILLUSTRATIVE CLIP · 0{i+1}</span><h2>{clip.title}</h2><p>Stock footage for visual context. For videos shared by the business, visit its Facebook page.</p></div></article>)}</div><p className="container video-credit">Clip source: Pexels. Business videos, if available, are linked through the official Diamond Bright Facebook page.</p></section></main>;
}

function ContactPage() {
  const [notice, setNotice] = useState('');
  const [error, setError] = useState('');
  const submit = (event) => {
    event.preventDefault(); setError('');
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '').trim();
    const emailAddress = String(form.get('email') || '').trim();
    const service = String(form.get('service') || '').trim();
    const message = String(form.get('message') || '').trim();
    if (!name || !emailAddress || !service || !message) { setError('Please complete each required field before continuing.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)) { setError('Please enter a valid email address.'); return; }
    const subject = `Cleaning enquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${emailAddress}\nPhone: ${String(form.get('phone') || 'Not provided')}\nService: ${service}\n\nEnquiry:\n${message}`;
    setNotice('Your email app should open with the enquiry ready to send. Nothing is sent until you press Send in your email app.');
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  return <main id="top"><section className="page-hero contact-page-hero"><div className="container"><SectionTitle eyebrow="Contact us" title={<>Let’s talk about<br/><em>your cleaning needs.</em></>} intro="Call, email or prepare an enquiry below. Share a few details about the property and service you’re looking for."/></div></section><section className="contact-section"><div className="container contact-layout"><div className="contact-copy"><h2>Speak to<br/>Diamond Bright.</h2><p>For home, workplace, carpet or one-off cleaning enquiries in Belfast, get in touch with the team.</p><a className="contact-phone" href={phoneHref}>{phone}<ArrowIcon diagonal/></a><a className="contact-email" href={`mailto:${email}`}>{email}</a><div className="contact-address"><span>BUSINESS ADDRESS</span><p>2 Woodstock Link<br/>Belfast BT6 8DD</p><a href="https://www.google.com/maps/search/?api=1&query=2+Woodstock+Link+Belfast+BT6+8DD" target="_blank" rel="noreferrer">Open in Maps <ArrowIcon diagonal/></a></div><div className="contact-hours"><span>LISTED OPENING HOURS</span><p>Mon–Fri 9am–9pm<br/>Sat 9am–5pm · Sun closed</p></div></div><form className="contact-form" onSubmit={submit} noValidate><div className="form-heading"><span>REQUEST A QUOTE</span><p>This form prepares an email for you to review and send.</p></div><div className="form-row"><label>Your name *<input name="name" autoComplete="name" required/></label><label>Email address *<input name="email" type="email" autoComplete="email" required/></label></div><div className="form-row"><label>Phone number<input name="phone" type="tel" autoComplete="tel"/></label><label>Service *<select name="service" required defaultValue=""><option value="" disabled>Select a service</option><option>Office or contract cleaning</option><option>Carpet cleaning</option><option>Upholstery cleaning</option><option>Window cleaning</option><option>Domestic or one-off cleaning</option><option>Other specialist cleaning</option></select></label></div><label>How can we help? *<textarea name="message" required rows="5" placeholder="Tell us about the space, what needs cleaning and your preferred timing."/></label><button className="button button-accent form-submit" type="submit">Prepare my enquiry <ArrowIcon/></button><p className="form-privacy">Your details are placed in an email addressed to Diamond Bright. The website does not store or send this information.</p>{error && <p className="form-message form-error" role="alert">{error}</p>}{notice && <p className="form-message form-success" role="status">{notice}</p>}</form></div></section></main>;
}

const answerFor = (text) => {
  const q = text.toLowerCase();
  if (/price|cost|quote|estimate/.test(q)) return 'Pricing depends on the property and work required. Call 028 9048 6100 or use the contact form to request a quote.';
  if (/hour|open|when/.test(q)) return 'The listed hours are Monday to Friday, 9am–9pm; Saturday, 9am–5pm; Sunday, closed. Please call to confirm current availability.';
  if (/carpet|rug|upholster|sofa/.test(q)) return 'Carpet, rug and upholstery cleaning are listed services. Share the item or area and your location when you enquire.';
  if (/office|commercial|contract|window/.test(q)) return 'Diamond Bright lists office and contract cleaning, plus commercial window cleaning. Visit Services or contact the team to discuss your premises.';
  if (/home|domestic|one.off|spring/.test(q)) return 'Domestic cleaning, housekeeping and one-off or spring cleaning are listed. Use the contact form to describe the rooms and timing.';
  if (/contact|phone|call|email/.test(q)) return <>Call <a href={phoneHref}>028 9048 6100</a> or email <a href={`mailto:${email}`}>{email}</a>.</>;
  return <>I can help with services, opening hours and how to request a quote. You can also <a href="/contact/">contact the team</a> directly.</>;
};

function Chatbot() {
  const [open,setOpen]=useState(false);
  const [input,setInput]=useState('');
  const [messages,setMessages]=useState([{from:'bot',text:'Hello — I can help with common questions about cleaning services, hours and getting a quote.'}]);
  const send=(value=input)=>{ const clean=value.trim(); if(!clean)return; setMessages(old=>[...old,{from:'user',text:clean},{from:'bot',text:answerFor(clean)}]); setInput(''); };
  return <div className="chat-widget"><button className="chat-launcher" aria-expanded={open} aria-controls="chat-panel" onClick={()=>setOpen(!open)}>{open?'Close chat':'Ask a question'}<span aria-hidden="true">{open?'×':'✦'}</span></button>{open&&<section id="chat-panel" className="chat-panel" aria-label="Diamond Bright quick answers"><div className="chat-head"><div><strong>Diamond Bright assistant</strong><span>Quick answers · no live agent</span></div><button aria-label="Close chat" onClick={()=>setOpen(false)}>×</button></div><div className="chat-messages" aria-live="polite">{messages.map((m,i)=><div className={`chat-message ${m.from}`} key={i}>{typeof m.text==='string'?m.text:m.text}</div>)}</div><div className="chat-suggestions"><button onClick={()=>send('What services do you offer?')}>Services</button><button onClick={()=>send('What are your opening hours?')}>Hours</button><button onClick={()=>send('How do I get a quote?')}>Get a quote</button></div><form className="chat-input" onSubmit={e=>{e.preventDefault();send();}}><label className="visually-hidden" htmlFor="chat-question">Ask a question</label><input id="chat-question" value={input} onChange={e=>setInput(e.target.value)} placeholder="Type a question…"/><button type="submit" aria-label="Send question"><ArrowIcon/></button></form><p className="chat-disclaimer">Automated answers only. Please confirm details directly with the business.</p></section>}</div>;
}

function App() {
  const active = document.body.dataset.page || 'home';
  const Page = ({home:HomePage,services:ServicesPage,about:AboutPage,videos:VideosPage,contact:ContactPage})[active] || HomePage;
  return <><Header active={active}/><Page/><Footer/><a className="mobile-call" href={phoneHref}>Call Diamond Bright <ArrowIcon diagonal/></a><Chatbot/></>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
