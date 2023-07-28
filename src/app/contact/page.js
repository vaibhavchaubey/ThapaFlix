import React from 'react';
import ContactCard from '@/app/components/ContactCard';
import styles from './contact.module.css';
import ContactForm from '@/app/components/ContactForm';

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard />

        <section className={styles.contact_section}>
          <h2>
            We'd love to hear <span> from you </span>
          </h2>

          <ContactForm />
        </section>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235526.94958439682!2d75.69903299005293!3d22.72420499970723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1690476238855!5m2!1sen!2sin"
        width={600}
        height={450}
        style={{border:0}}
        allowfullscreen=""
        loading="lazy"
        className={styles.mapping}
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Contact;
