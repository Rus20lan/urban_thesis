import { faq } from '../../const/consts';
import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from '@coreui/react';
export const Accordion = () => {
  return (
    <CAccordion flush>
      {faq.map((item) => (
        <CAccordionItem key={item.id} itemKey={item.id}>
          <CAccordionHeader>{item.question}</CAccordionHeader>{' '}
          <CAccordionBody>{item.answer}</CAccordionBody>
        </CAccordionItem>
      ))}
    </CAccordion>
  );
};
