import { useState } from 'react';
import { decode } from 'html-entities';

const NewsletterForm = ({ status, message, onValidated }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {
    setError(null);

    if (!email) {
      setError('Please enter a valid email address');
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email, FNAME: name });

    // On success return true
    return name && email && email.indexOf('@') > -1 && isFormValidated;
  };

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = (event) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split('-') ?? null;
    if (result?.[0]?.trim() !== '0') {
      return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode(formattedMessage) : null;
  };

  return (
    <>
      <div className="form-fields">
        <div className="field">
          <input
            onChange={(event) => setName(event?.target?.value ?? '')}
            type="name"
            placeholder="Your First Name"
            className="mr-2"
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
        </div>
        <div className="field">
          <input
            onChange={(event) => setEmail(event?.target?.value ?? '')}
            type="email"
            placeholder="Your Email"
            className="mr-2"
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
        </div>
        <div className="button-wrap">
          <button
            type="button"
            className="wp-block-button__link"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="form-info">
        {status === 'sending' && (
          <div>Adding your info to our mailing list...</div>
        )}
        {status === 'error' || error ? (
          <div
            className="newsletter-form-error"
            dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
          />
        ) : null}
        {status === 'success' && status !== 'error' && !error && (
          <div dangerouslySetInnerHTML={{ __html: decode(message) }} />
        )}
      </div>
    </>
  );
};

export default NewsletterForm;
