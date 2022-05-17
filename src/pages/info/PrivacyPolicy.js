import styled from 'styled-components';
import TextSection from '../../Components/TextSection';

const Wrap = styled.div`
  .header {
    padding: 120px 20px 100px 20px;
    background: var(--peach);
    h1 {
      color: var(--blue);
    }
  }
`;

export default function PrivacyPolicy() {
  return (
    <Wrap>
      <div className="header">
        <h1>Privacy Policy</h1>
      </div>
      <TextSection
        margin="0 auto 50px auto"
        subtitle="Protecting your privacy"
        texts={[
          'This Privacy Policy describes current policies and practices with regard to Personal Data collected manually or through this website. This website is operated by, and Personal Data collected through it will be controlled by Alice And The Hair , 51, Sadlergate, Derby DE1 3NQ.',
          "The term 'Personal Data' refers to personally identifiable information about you, such as your name, birth date, telephone number, e-mail address or mailing address.",
          "The terms 'you' and 'your' when used in this Privacy Policy means any user of this website.",
        ]}
      />
      <TextSection
        margin="50px auto 50px auto"
        subtitle="Notification of changes to this Privacy Policy"
        texts={[
          'This website is continually improved by adding new functionality and features and by improving and adding to existing services. Because of these ongoing changes, changes in the law and the changing nature of technology, data practices will change from time to time. If and when data practices change, such changes will (as soon as practicable) be posted on this website to notify you of the changes. You should check this page frequently.',
          'You will understandably have a concern about privacy. Your privacy is respected and your personal information is treated with the highest standards of safety, security and confidentiality. To better protect your privacy, this notice explains online information practices and the choices you can make about the way your information is collected and used on this website. If you have questions regarding this Policy, contact info@aliceandthehair.co.uk.',
        ]}
      />
      <TextSection
        margin="50px auto 30px auto"
        subtitle="Explaining the Legal Basis"
        texts={[
          'The law on data protection sets out a number of different reasons for which a company may collect and process your personal data, including:',
        ]}
      />
      <TextSection
        margin="30px auto 30px auto"
        subtitle="Consent"
        texts={[
          'In specific situations, we can collect and process your data with your consent.',
          'For example, when you tick a box to receive email newsletter.',
          'When collecting your personal data, we’ll always make clear to you which data is necessary in connection with a particular service.',
        ]}
      />
      <TextSection
        margin="30px auto 30px auto"
        subtitle="Contractual obligations"
        texts={[
          'In certain circumstances, we need your personal data to comply with our contractual obligations.',
          'For example, if you order an item from us for home delivery, we’ll collect your address details to deliver your purchase, and pass then to our courier.',
        ]}
      />
      <TextSection
        margin="30px auto 30px auto"
        subtitle="Legal compliance"
        texts={[
          'If the law requires us to, we may need to collect and process your data.',
          'For example, we can pass on details of people involved in fraud or other criminal activity affecting the company to law enforcement.',
        ]}
      />
      <TextSection
        margin="30px auto 30px auto"
        subtitle="Legitimate interest"
        texts={[
          'In specific situations, we require your data to pursue our legitimate interests in a way which might reasonably be expected as part of running our business and which does not materially impact your rights, freedom or interests.',
          'For example, we will use your purchase history to send you or make available personalised offers.',
          'We also combine the shopping history of many customers to identify trends and ensure we can keep up with demand, or develop new products/services.',
        ]}
      />
      <TextSection
        margin="50px auto 50px auto"
        subtitle="Collection of Personal Data including e-mail addresses"
        texts={[
          'Information is collected about you in an effort to make products and services on this website more efficient and customized to you. You are free to browse this website without revealing any personal information about yourself. However, once you provide your personal information, you are not anonymous.',
          'The information you provide will be collected and stored securely. You may use this website to register to receive additional information or services.',
          'When you register, you will be asked for contact information like your name, postal address and e-mail address.',
          'The information that you provide is sometimes supplemented with information that is received from third parties. For instance, if inaccurate postal or zip codes are received, third party software may be used to rectify this.',
        ]}
      />
      <TextSection
        margin="50px auto 50px auto"
        subtitle="Use of Personal Data"
        texts={[
          'The purposes for which Personal Data is processed include the following:',
          'To respond to your requests and to fulfil your orders for products and services.',
          "To improve products and services, make your experience more efficient and relevant and provide you with a personalised service. To administer this website, To analyse and research website visitors' demographics, interests, and pages viewed based on the information provided during ordering, from server log files, or surveys.",
          'To contact you from time to time with information of new products and services or events that may be of interest to you.',
        ]}
      />
      <TextSection
        margin="50px auto 50px auto"
        subtitle="How can you stop the use of your personal data"
        texts={[
          'There are several ways you can stop direct marketing communications from us:',
          'Click the ‘unsubscribe’ link in any email communication that we send you. We will then stop any further emails.',
          'Write to: Alice And The Hair, 51, Sadlergate, Derby, DE1 3NQ',
          'Email: info@aliceandthehair.co.uk',
          'Please note that you may continue to receive communications for a short period after changing your preferences while our systems are fully updated.',
        ]}
      />
      <TextSection
        margin="50px auto 50px auto"
        subtitle="Anonymous data collected through this website"
        texts={[
          'In addition to the information collected as described above, technology is used to collect anonymous information about the use of this website. ',
          'These technologies may include though are not limited to, Google Analytics Advertising Features such as ‘Remarketing with Google Analytics’ and ‘Google Analytics Demographics and Interest Reporting’. These and other technologies may be used to track which pages of this website visitors view as well as to collate non-personal demographic information about our visitors. Technology may also be used to determine which web browsers visitors use. This technology does not identify you personally, it simply enables the compilation of statistics about website visitors and their use of this website.',
          'This website contains hyperlinks to other pages on this website. Technology may be used to track how often these links are used and which pages on this website visitors choose to view. Again this technology does not identify you personally & it simply enables the compilation of statistics about the use of these hyperlinks.',
          'Such anonymous data is used to improve the content and functionality of this website and e-mail updates, to better understand clients and markets, and to improve services.',
        ]}
      />
      <TextSection
        margin="50px auto 50px auto"
        subtitle="Cookies and IP address"
        texts={[
          "In order to collect the anonymous data described in the preceding paragraph, in the future temporary 'cookies' that collect the first level domain name of the user (for example, if your e-mail address is 'john@bigmail.com', the cookie collects the 'bigmail.com' portion of your e-mail address) and the date and time you accessed this website may be used. Cookies by themselves cannot be used to discover the identity of the user. A cookie is a small piece of information which is sent to your browser and stored on your computer's hard drive. An example of a Cookie that we use is the ‘Google Analytics’ cookie which aids our internal reporting. Cookies do not damage your computer. You can set your browser to notify you when you receive a cookie. This enables you to decide if you want to accept it or not. You can also opt out of Google Analytics Advertising Features at IP address may also be used to help diagnose problems with this website's server and to administer this website. An IP address is a numeric code that identifies your computer on a network, or in this case, the Internet. Your IP address is also used to gather broad demographic information, such as determining how many visitors are from outside of the UK.",
        ]}
      />
      <TextSection
        margin="50px auto 50px auto"
        subtitle="Disclosure of your Personal Data"
        texts={[
          'Your Personal Data will not be shared, sold or distributed with unrelated third parties, except under these circumstances:',
          'Personal Data may occasionally be transferred to third parties for further processing in accordance with the purposes for which the data was originally collected or for purposes to which you have subsequently consented.',
          'Personal Data will be transferred to third parties for further processing in order to fulfil orders placed by you via this Web Site and to provide an after sales service.',
          "Third parties are engaged to perform services or functions in order to manage and improve this website, merchandising, marketing and promotional efforts, communications or other services. Those third parties include authorized contractors, consultants, legal advisors and other companies (collectively, 'agents'). They only have access to personal information needed to perform their functions, and may not share any personal information with others or use it for any other purposes than that which is contractually agreed. Where appropriate, before disclosing Personal Data to a third party, that third party is contractually required to take adequate precautions to protect that data and maintain confidentiality. Information about you may also be received from other sources (such as demographic information and purchase history) and it may be added to records about you in order to make marketing efforts more efficient.",
          "The information in this websites databases' may be shared or transferred to comply with a legal requirement, for the administration of justice, to protect your vital interests, to protect the security or integrity of the databases or this website, to take precautions against legal liability, or in the event of a sale, merger, reorganisation, dissolution or similar event.",
          'Where you have consented, your information may be disclosed to partners or other businesses who may contact you about their products or services that may interest you.',
          'During the purchase process, your information may be shared with certain intermediaries (e.g. UPS) strictly to process and ship your order.',
        ]}
      />
      <TextSection
        margin="50px auto 50px auto"
        subtitle="Data integrity and security"
        texts={[
          'Personal Data in this websites databases are maintained to a high standard of reliability, accuracy, completeness and currency and to protect the privacy and security of the databases. Personal Data will be kept only for as long as reasonably necessary for the purposes for which it was collected or to comply with any applicable legal or ethical reporting or document retention requirements.',
          'Employees and third parties who have access to Personal Data have been trained to handle such data properly and in accordance with security protocols and strict standards of confidentiality. Although loss, misuse, unauthorised disclosure, alteration or destruction of data cannot be guaranteed, such unfortunate occurrences are prevented as far as reasonably possible.',
          "Security measures protect you while you shop on this website so that you never have to worry about credit card safety. This website's servers use Secure Sockets Layer (SSL), an encryption technology that works with Netscape, Microsoft Internet Explorer, and AOL's browser, so that no other party can read a buyer's personal information. Only the last five digits of your credit card number will be revealed when you are sent an order confirmation. However, the entire credit card number will be transmitted to the appropriate credit card company during order processing.",
        ]}
      />
      <TextSection
        margin="50px auto 50px auto"
        subtitle="Gift Certificates"
        texts={[
          'This Privacy Policy forms part of the website Terms of Use and as such shall be governed by and construed in accordance with the laws of England & Wales. You agree to submit any dispute arising out of your use of this website to the exclusive jurisdiction of the courts of England & Wales.',
        ]}
      />
      <TextSection
        margin="50px auto 50px auto"
        subtitle="Contacting the Regulator"
        texts={[
          'If you feel that your data has not been handled correctly, or are unhappy with our response to any requests you have made to us regarding the use of your personal data, you have the right to lodge a complaint with the Information Commissioner’s Office.',
          'You can contact them by calling 0303 123 1113 or go online to https://ico.org.uk/',
          'If you are based outside the UK, you have the right to lodge your complaint with the relevant data protection regulator in your country of residence.',
        ]}
      />
      <TextSection
        margin="50px auto 50px auto"
        subtitle="Use of Personal Data for Credit Checking"
        texts={[
          'To ensure that your credit, debit or chargecard is not being used without your consent, we will validate name, address and other personal information supplied by you during the order process against appropriate third party databases. By accepting these terms and conditions you consent to such checks being made. In performing these checks personal information provided by you may be disclosed to a registered Credit Reference Agency which may keep a record of that information. You can rest assured that this is done only to confirm your identity, that a credit check is not performed and that your credit rating & will be & unaffected. All information provided by you will be treated securely and strictly in accordance with the Data Protection Act 1998.',
        ]}
      />
      <TextSection
        margin="50px auto 50px auto"
        subtitle="Questions"
        texts={[
          'If you have further questions about this Privacy Policy or comments on how this website can be improved, please do not hesitate to send an email to info@aliceandthehair.co.uk',
        ]}
      />
    </Wrap>
  );
}
