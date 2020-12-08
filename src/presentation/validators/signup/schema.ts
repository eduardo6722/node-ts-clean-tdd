import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});
