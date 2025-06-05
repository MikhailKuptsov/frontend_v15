import React from 'react';
import { Accordion, Form } from 'react-bootstrap';
import DropdownBox from './DropdownBox';

const QuestionAccordionItem = ({ 
  questionNumber,
  questionData,
  register,
  setValue
}) => {
  // Устанавливаем начальное значение для комментария
  React.useEffect(() => {
    if (questionData.comment !== undefined) {
      setValue(`comment-${questionNumber}`, questionData.comment || '');
    }
  }, [questionNumber, questionData.comment, setValue]);

  return (
    <Accordion.Item eventKey={questionNumber}>
      <Accordion.Header>Пункт {questionNumber}</Accordion.Header>
      <Accordion.Body>
        <div className="mb-3">
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
              defaultValue={questionData.comment || ''}
            />
          </Form.Group>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default QuestionAccordionItem;