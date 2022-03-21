import Head from 'next/head';

export default function Book() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <div className="booking">
        <iframe
          title="booking page"
          className="booking-page"
          src="https://bookings.saloniq.co.uk/widget/dist/?id=ba4ec2c4-ae5f-4f81-a6de-82ee2a837ac8"
          frameBorder="0"
        />
      </div>
    </>
  );
}
