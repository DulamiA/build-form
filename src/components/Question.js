
import React from 'react';
import { QuestionWrapper, QuestionHeader, InputWrapper, InputField, ButtonWrapper, Button } from './styles/QuestionStyles';

const Question = ({ question, answer, onChange, onNext, onPrev, isLastQuestion }) => (
    <QuestionWrapper>
        <QuestionHeader>{question.text}</QuestionHeader>
        <InputWrapper>
            <InputField
                type={question.type}
                value={answer}
                onChange={(e) => onChange(question.id, e.target.value)}
            />
        </InputWrapper>
        <ButtonWrapper>
            <Button onClick={onNext}>{isLastQuestion ? 'Submit' : 'OK'}</Button>
            <Button onClick={onPrev}>Previous</Button>
        </ButtonWrapper>
    </QuestionWrapper>
);

export default Question;
