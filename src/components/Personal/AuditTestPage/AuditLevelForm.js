import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Card, Accordion,Form } from 'react-bootstrap';
import QuestionAccordionItem from './QuestionAccordionItem';

const AuditLevelForm = ({ 
  partName, 
  category, 
  level, 
  questions, 
  initialData,
  onLevelSubmit,
  onNextLevel
}) => {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: initialData || {}
  });

  const onSubmit = (data) => {
    const results = Object.keys(questions).map(questionNumber => ({
      part_name: partName,
      category: category,
      level: parseInt(level.replace('LEV', '')),
      question_number: parseInt(questionNumber),
      result: data[`result-${questionNumber}`] || null,
      comment: data[`comment-${questionNumber}`] || ''
    }));
    
    onLevelSubmit(results);
    // console.log('Submitted level results:', results);
    alert('Данные сохранены'); // Добавлен alert после сохранения
  };

  const handleNextLevel = () => {
    onNextLevel();
  };

  return (
    <Card className="mb-4">
      <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Accordion 
          // defaultActiveKey={Object.keys(questions)[0]} 
          alwaysOpen>
            {Object.entries(questions).map(([questionNumber, questionData]) => (
              <QuestionAccordionItem
                key={questionNumber}
                questionNumber={questionNumber}
                questionData={questionData}
                register={register}
                setValue={setValue}
              />
            ))}
          </Accordion>
          <div className="d-flex justify-content-between mt-3">
            <Button variant="primary" type="submit" style={{marginRight:"5px",marginLeft:"5px"}}>
              Сохранить результаты
            </Button>
            {onNextLevel && (
              <Button 
                variant="success" 
                onClick={handleNextLevel}
                type="button"
                style={{marginRight:"5px",marginLeft:"5px"}}
              >
                Перейти на следующий уровень
              </Button>
            )}
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AuditLevelForm;