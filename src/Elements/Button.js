import Link from 'next/link';

export default function Button({ title = 'Button', exLink, link = '/' }) {
  if (exLink) {
    return (
      <a href={exLink}>
        <button className="universal-button" type="button">
          {title}
        </button>
      </a>
    );
  }
  return (
    <Link href={link}>
      <button className="universal-button" type="button">
        {title}
      </button>
    </Link>
  );
}
