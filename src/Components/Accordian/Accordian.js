import { useState } from 'react';
import AccordianStyles from './Accordian.styles';

const data = [
  {
    section: 'Cuts',
    content: [
      {
        item: 'Chops',
        cost: '38+',
      },
      {
        item: 'Blowey',
        cost: '20+',
      },
      {
        item: 'Kids',
        cost: '15+',
      },
    ],
  },
  {
    section: 'Colours',
    content: [
      {
        item: 'Lightening',
        cost: '55 - £260+',
      },
      {
        item: 'Tinting',
        cost: '47+',
      },
      {
        item: 'Glossing',
        cost: '30+',
      },
    ],
  },
];
export default function Accordian() {
  const [selected, setSelected] = useState(0);

  const toggle = (i) => {
    setSelected(i);
  };

  return (
    <AccordianStyles>
      <div className="inner">
        <div className="header">
          {data.map((item, i) => (
            <div className="title" key={i} onClick={() => toggle(i)}>
              <h3 className={selected === i ? 'active' : 'inactive'}>
                {item.section}
              </h3>
            </div>
          ))}
        </div>
        <div className="lower">
          {data[selected].content.map((text, t) => (
            <div className="text" key={t}>
              <p>{text.item}</p>
              <p className="cost">£{text.cost}</p>
            </div>
          ))}
        </div>
      </div>
    </AccordianStyles>
  );
}
