import NextHead from 'next/head';
import Head from '../Components/Head';

export default function Book() {
  return (
    <>
      <Head
        title="Book and Appointment"
        url="https://aliceandthehair.co.uk/book"
        description="Book your first appointment right here! Sign up for an account and keep track of your hair goals!! We can't wait to meet you."
      />
      <NextHead>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </NextHead>
      <div className="booking">
        <iframe
          title="booking page"
          className="booking-page"
          src="https://phorest.com/book/salons/aliceandthehair"
          frameBorder="0"
        />
      </div>
    </>
  );
}
