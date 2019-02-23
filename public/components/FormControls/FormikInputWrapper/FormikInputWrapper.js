/*
 *   Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 *   Licensed under the Apache License, Version 2.0 (the "License").
 *   You may not use this file except in compliance with the License.
 *   A copy of the License is located at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   or in the "license" file accompanying this file. This file is distributed
 *   on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 *   express or implied. See the License for the specific language governing
 *   permissions and limitations under the License.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

const FormikInputWrapper = ({ name, fieldProps, render }) => (
  <Field name={name} {...fieldProps} render={({ field, form }) => render({ field, form })} />
);

FormikInputWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  fieldProps: PropTypes.object.isRequired,
  render: PropTypes.func.isRequired,
};

export default FormikInputWrapper;
