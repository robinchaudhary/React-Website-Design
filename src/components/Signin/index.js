import React from 'react';

import {
  Form,
  Icon,
  FormLabel,
  FormWrap,
  FormH1,
  FormInput,
  FormButton,
  FormContent,
  Container,
  Text,
} from './SigninElements';

const Signin = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Robeens</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Sign in to your accmount</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Passowrd</FormLabel>
              <FormInput type='password' required />
              <FormButton htmlFor='for'>Continue</FormButton>
              <Text>Forget Passowrd</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Signin;
