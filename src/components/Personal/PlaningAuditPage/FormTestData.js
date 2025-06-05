import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Accordion } from 'react-bootstrap';
import Select from 'react-select';

// import FilterEmptySections from './FilterEmptySections';

const FormTestData = ({ data, onChange, onSubmit, userOptions }) => {
  const { handleSubmit } = useForm();

  const handleAuditorChange = (section, subsection, selectedOptions) => {
    const updatedAuditors = { ...data.auditors };
    updatedAuditors[section][subsection] = selectedOptions.map(opt => opt.value);
    onChange({ auditors: updatedAuditors });
  };

  const handleFormSubmit = () => {
    // console.log(JSON.stringify({"auditors":FilterEmptySections(data.auditors)}))
    // console.log(JSON.stringify(data.auditors))
    onSubmit(data.auditors);
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Accordion defaultActiveKey={Object.keys(data.auditors)[0]}>
        {Object.entries(data.auditors).map(([section, subsections], sectionIndex) => (
          <Accordion.Item eventKey={section} key={sectionIndex}>
            <Accordion.Header>{section}</Accordion.Header>
            <Accordion.Body>
              {Object.entries(subsections).map(([subsection, currentValues], subsectionIndex) => (
                <Form.Group key={subsectionIndex} className="mb-3">
                  <Form.Label>{subsection}</Form.Label>
                  <Select
                    isMulti
                    options={userOptions}
                    placeholder="Выберите аудиторов"
                    onChange={(selected) => 
                      handleAuditorChange(section, subsection, selected)
                    }
                    defaultValue={currentValues.map(value => ({
                      value,
                      label: userOptions.find(opt => opt.value === value)?.label || value
                    }))}
                  />
                </Form.Group>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      <Button variant="primary" type="submit" className="mt-3">
        Отправить данные
      </Button>
    </Form>
  );
};

export default FormTestData;