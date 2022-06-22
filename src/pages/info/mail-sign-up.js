import styled from 'styled-components';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsletterForm from '../../Components/NewsletterForm';

const MailSignUpStyles = styled.div`
  margin-top: 40px;
  padding: 20px;
  color: var(--navy);
  h3 {
    margin-bottom: 20px;
  }
  .lower {
    font-size: 2.4rem;
  }
  p {
    color: var(--navy);
    font-size: 1.8rem;
    margin: 10px 0;
  }
  .form-fields {
    margin: 50px 0 0;
    .field {
      margin: 30px auto;
      input {
        padding: 12px 18px;
        max-width: 400px;
        width: 90vw;
        font-size: 1.6rem;
        border-radius: 8px;
        border: none;
        color: var(--navy);
      }
    }
  }
  .button-wrap {
    button {
      padding: 12px 26px 12px 32px;
      border: none;
      font-size: 2rem;
      background: var(--navy);
      color: var(--peach);
      font-weight: 600;
      border-radius: 8px;
      &:hover {
        background: var(--peach);
        color: var(--navy);
      }
    }
  }
  .form-info {
    margin: 30px 0;
    color: var(--red);
  }
`;

const { MAILCHIMP_URL } = process.env;

export default function MailSignUp() {
  return (
    <MailSignUpStyles>
      <h3>sign up to our mail list</h3>
      <h3 className="lower">for our top 5 ultimate hair tips.</h3>
      <MailchimpSubscribe
        url={MAILCHIMP_URL}
        render={(props) => {
          const { subscribe, status, message } = props || {};
          return (
            <NewsletterForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          );
        }}
      />
    </MailSignUpStyles>
  );
}
