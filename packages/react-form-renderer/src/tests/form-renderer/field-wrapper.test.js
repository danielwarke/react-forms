import React from 'react';
import { mount } from 'enzyme';
import { componentTypes } from '@data-driven-forms/react-form-renderer';
import { Form } from 'react-final-form';

import FieldWrapper from '../../form-renderer/field-wrapper';
import FieldProvider from '../../components/field-provider';
import RendererContext from '../../components/renderer-context';

describe('fieldWrapper', () => {
  const Component = (props) => <div>{JSON.stringify(props, null, 2)}</div>;

  it('use arrayValidator if it is fieldArray', () => {
    const wrapper = mount(
      <RendererContext.Provider value={{ formOptions: {} }}>
        <Form
          onSubmit={jest.fn()}
          render={() => (
            <FieldWrapper name="foo" componentType={componentTypes.FIELD_ARRAY} validate={[(value) => value === 4]} component={Component} />
          )}
        />
      </RendererContext.Provider>
    );

    expect(wrapper.find(Component).props().arrayValidator).toEqual(expect.any(Function));
    expect(wrapper.find(FieldProvider).props().validate).toEqual(undefined);
  });

  it('do not use arrayValidator', () => {
    const wrapper = mount(
      <RendererContext.Provider value={{ formOptions: {} }}>
        <Form
          onSubmit={jest.fn()}
          render={() => (
            <FieldWrapper name="foo" componentType={componentTypes.TEXT_FIELD} validate={[(value) => value === 4]} component={Component} />
          )}
        />
      </RendererContext.Provider>
    );

    expect(wrapper.find(Component).props().arrayValidator).toEqual(undefined);
    expect(wrapper.find(FieldProvider).props().validate).toEqual(expect.any(Function));
  });

  it('custom component - should not be wrapper in field provider', () => {
    const wrapper = mount(<Form onSubmit={jest.fn()} render={() => <FieldWrapper name="foo" componentType="custom type" component={Component} />} />);

    expect(wrapper.find(FieldProvider)).toHaveLength(0);
  });

  it('data driven forms component - should be wrapper in field provider', () => {
    const wrapper = mount(
      <RendererContext.Provider value={{ formOptions: {} }}>
        <Form onSubmit={jest.fn()} render={() => <FieldWrapper name="foo" componentType={componentTypes.TEXT_FIELD} component={Component} />} />
      </RendererContext.Provider>
    );

    expect(wrapper.find(FieldProvider)).toHaveLength(1);
  });
});
