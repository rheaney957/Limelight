import React from 'react';
import styles from '../styles/Form.module.css';
import button from '../styles/Button.module.css';

export default function ContactUsForm()
{
  const [contact, setContact] = React.useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });
  const [submit, setSubmit] = React.useState(false);

  const handleChange = (att: string, value: string) =>
  {
    att === "name" && setContact({ ...contact, name: value })
    att === "email" && setContact({ ...contact, email: value });
    att === "phone" && setContact({ ...contact, phone: value });
    att === "comments" && setContact({ ...contact, comments: value });
  };

  return (
    <form action="location.php" method="post" className={styles.form}>
      {!submit ?
        <>
          <p>If you have any questions regarding Shine please use the form below. We will be
            in touch with you as soon as we can.</p>
          <div><label>
            <input name="name" type="text" placeholder="Full Name *" required onChange={(e) => handleChange('name', (e.target.value).toString())} />
          </label>
          </div>
          <div><input type="email" id='email' placeholder='Email address *' onChange={(e) => handleChange('email', (e.target.value).toString())} /></div>
          <div><input name="contactnum" type="text" placeholder="Contact phone number *" required onChange={(e) => handleChange('phone', (e.target.value).toString())} /></div>

          <div>
            <label>
              <textarea name="comments" onChange={(e) => handleChange('comments', (e.target.value).toString())}></textarea>
            </label>
          </div>
          <div className={styles.submit}>
            <label>
              <input className={button.primary} type="submit" name="Submit" value="Submit" onClick={() => setSubmit(true)} />
            </label>
          </div>
        </>
        : <><h2>Success</h2>
          <p>Thank you for contacting us. We will be in touch with you shortly with your enquiry.</p></>
      }
    </form>
  )
}