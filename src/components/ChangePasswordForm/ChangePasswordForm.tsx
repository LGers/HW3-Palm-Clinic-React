import { Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from "react-redux";
import { Check, X } from "react-feather";
import { changePasswordValidationSchema } from "../../validations/auth.validation";
import { fetchChangePassword } from '../../store/auth/authSlice';
import { CHANGE_PASSWORD } from "../../constants/auth.dictionary";
import { Button } from "../Button/Button";
import { AuthInput } from "../../pages/Auth/Components/AuthInput/AuthInput";
import { ChangePasswordWrapper, Content, FormTitle } from './ChangePasswordForm.styles';
import { Flex } from "../Flex/Flex";
import { ChangePasswordFormProps } from './ChangePasswordForm.types';

const changePasswordInputs = (inputs: typeof CHANGE_PASSWORD.INPUTS) => {
  return inputs.map(input =>
    <>
      <label htmlFor={input.NAME}>{input.LABEL_TEXT}</label>
      <AuthInput
        key={input.NAME}
        name={input.NAME}
        id={input.NAME}
        type={input.TYPE}
        placeholder={input.PLACEHOLDER}
        icon_url={input.ICON_URL}
      />
    </>
  )
}

export const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({handleChangePassword}) => {
  const dispatch = useDispatch()
  return (
    <ChangePasswordWrapper>
      <Content>
        <FormTitle>{CHANGE_PASSWORD.TITLE}</FormTitle>
        <Formik
          initialValues={CHANGE_PASSWORD.INITIAL_VALUES}
          validationSchema={changePasswordValidationSchema}
          onSubmit={(values, {setSubmitting}) => {
            setSubmitting(false);
            dispatch(fetchChangePassword(values))
          }}
        >
          {({
              isSubmitting,
            }) => (
            <Form>
              {changePasswordInputs(CHANGE_PASSWORD.INPUTS)}
              <Flex direction={'row'} justify={'space-between'}>
                <Button secondary leftIcon onClick={handleChangePassword}>
                  <X />{CHANGE_PASSWORD.BUTTON_TEXT.CANCEL}
                </Button>
                <Button primary leftIcon type={"submit"}>
                  <Check />{CHANGE_PASSWORD.BUTTON_TEXT.SAVE}
                </Button>
              </Flex>
            </Form>
          )}
        </Formik>
      </Content>
    </ChangePasswordWrapper>
  );
};
