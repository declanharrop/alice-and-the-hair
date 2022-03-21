import Div100vh from 'react-div-100vh';

export default function Book() {
  return (
    <Div100vh>
      <iframe
        title="booking page"
        className="booking-page"
        src="https://bookings.saloniq.co.uk/widget/dist/?id=ba4ec2c4-ae5f-4f81-a6de-82ee2a837ac8"
        frameBorder="0"
      />
    </Div100vh>
  );
}
