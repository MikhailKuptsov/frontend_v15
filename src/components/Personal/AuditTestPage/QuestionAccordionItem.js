import React from 'react';
import { Accordion, Card, Form } from 'react-bootstrap';
import DropdownBox from './DropdownBox';

const QuestionAccordionItem = ({ 
  questionNumber,
  questionData,
  register,
  setValue
}) => {
  return (
    <Accordion.Item eventKey={questionNumber}>
      <Accordion.Header>Пункт {questionNumber}</Accordion.Header>
      <Accordion.Body>
        <Card.Body>
          <p><strong>Задание:</strong> {questionData.task_value}</p>
          <p><strong>Контрольный элемент:</strong> {questionData.control_element}</p>
          {questionData.additional_info && (
            <p><strong>Дополнительная информация:</strong> {questionData.additional_info}</p>
          )}
          
          {questionData.answer_type === "checkbox" && (
            <>
              <strong>Выберите ответ:</strong>
              <DropdownBox
                answer_label={questionData.answer_label}
                result={questionData.result}
                onSelect={(value) => setValue(`result-${questionNumber}`, value)}
              />
            </>
          )}

          <Form.Group controlId={`comment-${questionNumber}`} className="mt-3">
            <Form.Label>Комментарий:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              {...register(`comment-${questionNumber}`)}
            />
          </Form.Group>
        </Card.Body>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default QuestionAccordionItem;