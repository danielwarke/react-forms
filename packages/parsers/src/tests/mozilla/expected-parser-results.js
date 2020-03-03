export const simpleSchemaResult = {
  title: 'A registration form',
  description: 'A simple form example.',
  fields: [
    {
      name: 'firstName',
      label: 'First name',
      title: 'First name',
      dataType: 'string',
      component: 'text-field',
      type: 'text',
      autoFocus: true,
      isRequired: true,
      validate: [
        {
          type: 'required-validator'
        }
      ]
    },
    {
      name: 'lastName',
      dataType: 'string',
      component: 'text-field',
      label: 'Last name',
      title: 'Last name',
      isRequired: true,
      validate: [
        {
          type: 'required-validator'
        }
      ],
      type: 'text',
      autoFocus: false
    },
    {
      name: 'age',
      dataType: 'integer',
      label: 'Age of person',
      title: 'Age',
      description: '(earthian year)',
      component: 'text-field',
      type: 'number',
      autoFocus: false,
      validate: []
    },
    {
      name: 'bio',
      dataType: 'string',
      component: 'textarea',
      label: 'Bio',
      title: 'Bio',
      autoFocus: false,
      validate: [],
      type: 'string'
    },
    {
      name: 'password',
      label: 'Password',
      title: 'Password',
      dataType: 'string',
      component: 'text-field',
      type: 'password',
      autoFocus: false,
      helperText: 'Hint: Make it strong!',
      validate: [
        {
          type: 'min-length-validator',
          threshold: 3
        }
      ]
    },
    {
      name: 'telephone',
      dataType: 'string',
      label: 'Telephone',
      title: 'Telephone',
      autoFocus: false,
      component: 'text-field',
      type: 'tel',
      validate: [
        {
          type: 'min-length-validator',
          threshold: 10
        }
      ]
    }
  ]
};

export const nestedSchemaResult = {
  title: 'A list of tasks',
  fields: [
    {
      name: 'title',
      dataType: 'string',
      autoFocus: false,
      isRequired: true,
      validate: [
        {
          type: 'required-validator'
        }
      ],
      label: 'Task list title',
      title: 'Task list title',
      component: 'text-field',
      type: 'text'
    },
    {
      itemDefault: {
        done: false
      },
      component: 'field-array',
      validate: [],
      title: 'Tasks',
      key: 'tasks',
      fields: [
        {
          dataType: 'string',
          name: 'tasks.title',
          initialKey: 'title',
          label: 'Title',
          title: 'Title',
          type: 'text',
          description: 'A sample title',
          component: 'text-field',
          isRequired: true,
          validate: [
            {
              type: 'required-validator'
            }
          ],
          autoFocus: false
        },
        {
          name: 'tasks.details',
          initialKey: 'details',
          dataType: 'string',
          label: 'Task details',
          title: 'Task details',
          description: 'Enter the task details',
          component: 'textarea',
          type: 'string',
          validate: [],
          autoFocus: false
        },
        {
          name: 'tasks.done',
          initialKey: 'done',
          dataType: 'boolean',
          label: 'Done?',
          title: 'Done?',
          default: false,
          component: 'checkbox',
          type: 'checkbox',
          autoFocus: false,
          validate: []
        }
      ]
    }
  ]
};

export const arraySchemaResult = {
  fields: [
    {
      title: 'A list of strings',
      key: 'listOfStrings',
      component: 'field-array',
      itemDefault: 'bazinga',
      validate: [],
      fields: [
        {
          component: 'text-field',
          dataType: 'string',
          type: 'text',
          validate: [],
          initialKey: 'items',
          name: 'listOfStrings.items',
          default: ['bazinga'],
          autoFocus: false
        }
      ]
    },
    {
      key: 'multipleChoicesList',
      title: 'A multiple choices list',
      name: 'multipleChoicesList',
      label: 'A multiple choices list',
      component: 'checkbox',
      dataType: 'string',
      validate: [],
      options: [
        {
          label: 'foo',
          value: 'foo'
        },
        {
          value: 'bar',
          label: 'bar'
        },
        {
          value: 'fuzz',
          label: 'fuzz'
        },
        {
          value: 'qux',
          label: 'qux'
        }
      ],
      type: 'checkbox'
    },
    {
      key: 'fixedItemsList',
      title: 'A list of fixed items',
      component: 'fixed-list',
      fields: [
        {
          name: 'fixedItemsList.items.0',
          dataType: 'string',
          label: 'A string value',
          component: 'textarea',
          default: 'lorem ipsum',
          validate: []
        },
        {
          name: 'fixedItemsList.items.1',
          dataType: 'boolean',
          label: 'a boolean value',
          validate: [],
          component: 'select',
          options: [
            {
              disabled: true,
              label: 'Please Choose'
            },
            {
              label: 'Yes',
              value: true
            },
            {
              label: 'No',
              value: false
            }
          ]
        }
      ],
      additionalItems: {
        key: 'fixedItemsList.additionalItems',
        validate: [],
        component: 'field-array',
        fields: [
          {
            initialKey: 'items',
            dataType: 'number',
            label: 'Additional item',
            component: 'text-field',
            type: 'number',
            validate: [],
            autoFocus: false,
            name: 'fixedItemsList.additionalItems.items',
            title: 'Additional item'
          }
        ]
      }
    },
    {
      key: 'minItemsList',
      component: 'field-array',
      title: 'A list with a minimal number of items',
      validate: [
        {
          type: 'min-items-validator',
          threshold: 3
        }
      ],
      fields: [
        {
          label: 'name',
          initialKey: 'name',
          name: 'minItemsList.name',
          dataType: 'string',
          default: 'Default name',
          component: 'text-field',
          type: 'text',
          validate: [],
          autoFocus: false
        }
      ],
      itemDefault: {
        name: 'Default name'
      }
    },
    {
      key: 'defaultsAndMinItems',
      component: 'field-array',
      title: 'List and item level defaults',
      itemDefault: 'unidentified',
      validate: [
        {
          type: 'min-items-validator',
          threshold: 5
        }
      ],
      fields: [
        {
          dataType: 'string',
          component: 'text-field',
          type: 'text',
          validate: [],
          initialKey: 'items',
          name: 'defaultsAndMinItems.items',
          default: ['unidentified'],
          autoFocus: false
        }
      ]
    },
    {
      key: 'nestedList',
      name: 'nestedList',
      title: 'Nested list',
      component: 'field-array',
      fields: [
        {
          title: 'Inner list',
          component: 'field-array',
          validate: [],
          key: 'nestedList',
          fields: [
            {
              dataType: 'string',
              component: 'text-field',
              validate: [],
              type: 'text',
              initialKey: 'items',
              name: 'nestedList.items',
              default: 'lorem ipsum',
              autoFocus: false
            }
          ]
        }
      ]
    },
    {
      component: 'field-array',
      key: 'unorderable',
      title: 'Unorderable items',
      validate: [],
      fields: [
        {
          dataType: 'string',
          component: 'text-field',
          type: 'text',
          validate: [],
          initialKey: 'items',
          name: 'unorderable.items',
          default: ['lorem ipsum'],
          autoFocus: false
        }
      ],
      itemDefault: 'lorem ipsum'
    },
    {
      key: 'unremovable',
      title: 'Unremovable items',
      component: 'field-array',
      validate: [],
      fields: [
        {
          dataType: 'string',
          component: 'text-field',
          type: 'text',
          validate: [],
          name: 'unremovable.items',
          initialKey: 'items',
          default: ['lorem ipsum'],
          autoFocus: false
        }
      ],
      itemDefault: 'lorem ipsum'
    },
    {
      key: 'noToolbar',
      title: 'No add, remove and order buttons',
      component: 'field-array',
      validate: [],
      fields: [
        {
          dataType: 'string',
          component: 'text-field',
          type: 'text',
          validate: [],
          name: 'noToolbar.items',
          initialKey: 'items',
          default: ['lorem ipsum'],
          autoFocus: false
        }
      ],
      itemDefault: 'lorem ipsum'
    },
    {
      key: 'fixedNoToolbar',
      title: 'Fixed array without buttons',
      component: 'fixed-list',
      fields: [
        {
          dataType: 'number',
          name: 'fixedNoToolbar.items.0',
          label: 'A number',
          default: 42,
          component: 'text-field',
          type: 'number',
          validate: []
        },
        {
          name: 'fixedNoToolbar.items.1',
          dataType: 'boolean',
          label: 'A boolean',
          component: 'checkbox',
          type: 'checkbox',
          validate: [],
          default: false
        }
      ],
      additionalItems: {
        component: 'field-array',
        key: 'fixedNoToolbar.additionalItems',
        validate: [],
        fields: [
          {
            dataType: 'string',
            component: 'text-field',
            label: 'A string',
            title: 'A string',
            initialKey: 'items',
            name: 'fixedNoToolbar.additionalItems.items',
            autoFocus: false,
            default: 'lorem ipsum',
            type: 'text',
            validate: []
          }
        ]
      }
    }
  ]
};

export const numbersSchemaResult = {
  title: 'Number fields & widgets',
  fields: [
    {
      component: 'text-field',
      dataType: 'number',
      name: 'number',
      type: 'number',
      label: 'Number',
      title: 'Number',
      validate: [],
      autoFocus: false
    },
    {
      name: 'integer',
      autoFocus: false,
      component: 'text-field',
      dataType: 'integer',
      type: 'number',
      title: 'Integer',
      label: 'Integer',
      validate: []
    },
    {
      name: 'numberEnum',
      dataType: 'number',
      label: 'Number enum',
      title: 'Number enum',
      autoFocus: false,
      component: 'select',
      type: 'number',
      options: [
        {
          label: 'Please Choose'
        },
        {
          label: 1,
          value: 1
        },
        {
          label: 2,
          value: 2
        },
        {
          label: 3,
          value: 3
        }
      ],
      validate: []
    },
    {
      name: 'numberEnumRadio',
      label: 'Number enum',
      title: 'Number enum',
      dataType: 'number',
      autoFocus: false,
      options: [
        {
          label: 1,
          value: 1
        },
        {
          label: 2,
          value: 2
        },
        {
          label: 3,
          value: 3
        }
      ],
      inline: true,
      component: 'radio',
      validate: [],
      type: 'radio'
    },
    {
      name: 'integerRange',
      label: 'Integer range',
      title: 'Integer range',
      dataType: 'integer',
      validate: [
        {
          type: 'min-number-value',
          value: 42
        },
        {
          type: 'max-number-value',
          value: 100
        }
      ],
      component: 'text-field',
      type: 'range',
      autoFocus: false
    },
    {
      name: 'integerRangeSteps',
      dataType: 'integer',
      label: 'Integer range (by 10)',
      title: 'Integer range (by 10)',
      step: 10,
      validate: [
        {
          type: 'min-number-value',
          value: 50
        },
        {
          type: 'max-number-value',
          value: 100
        }
      ],
      component: 'text-field',
      type: 'range',
      autoFocus: false
    }
  ]
};

export const widgetsExpectedResult = {
  title: 'Widgets',
  fields: [
    {
      autoFocus: false,
      name: 'stringFormats',
      validate: [],
      key: 'stringFormats',
      title: 'String formats',
      component: 'sub-form',
      fields: [
        {
          initialKey: 'email',
          name: 'stringFormats.email',
          component: 'text-field',
          type: 'email',
          label: 'email',
          dataType: 'string',
          validate: [],
          autoFocus: false
        },
        {
          name: 'stringFormats.uri',
          label: 'uri',
          initialKey: 'uri',
          component: 'text-field',
          type: 'uri',
          dataType: 'string',
          validate: [],
          autoFocus: false
        }
      ]
    },
    {
      autoFocus: false,
      name: 'boolean',
      title: 'Boolean field',
      validate: [],
      key: 'boolean',
      component: 'sub-form',
      fields: [
        {
          name: 'boolean.default',
          initialKey: 'default',
          title: 'checkbox (default)',
          label: 'checkbox (default)',
          validate: [],
          autoFocus: false,
          description: 'This is the checkbox-description',
          component: 'checkbox',
          type: 'checkbox',
          dataType: 'boolean'
        },
        {
          name: 'boolean.radio',
          initialKey: 'radio',
          title: 'radio buttons',
          label: 'radio buttons',
          validate: [],
          autoFocus: false,
          description: 'This is the radio-description',
          component: 'radio',
          type: 'radio',
          dataType: 'boolean',
          options: [
            {
              label: 'Yes',
              value: true
            },
            {
              label: 'No',
              value: false
            }
          ]
        },
        {
          autoFocus: false,
          validate: [],
          name: 'boolean.select',
          initialKey: 'select',
          title: 'select box',
          label: 'select box',
          component: 'select',
          type: 'boolean',
          dataType: 'boolean',
          description: 'This is the select-description',
          options: [
            {
              label: 'Please Choose'
            },
            {
              value: true,
              label: 'Yes'
            },
            {
              value: false,
              label: 'No'
            }
          ]
        }
      ]
    },
    {
      autoFocus: false,
      name: 'string',
      title: 'String field',
      validate: [],
      component: 'sub-form',
      key: 'string',
      fields: [
        {
          autoFocus: false,
          validate: [],
          name: 'string.default',
          initialKey: 'default',
          type: 'text',
          dataType: 'string',
          component: 'text-field',
          title: 'text input (default)',
          label: 'text input (default)'
        },
        {
          autoFocus: false,
          validate: [],
          name: 'string.textarea',
          initialKey: 'textarea',
          rows: 5,
          type: 'string',
          dataType: 'string',
          component: 'textarea',
          title: 'textarea',
          label: 'textarea'
        },
        {
          autoFocus: false,
          validate: [],
          name: 'string.color',
          initialKey: 'color',
          type: 'color',
          dataType: 'string',
          component: 'text-field',
          title: 'color picker',
          label: 'color picker',
          default: '#151ce6'
        }
      ]
    },
    {
      autoFocus: false,
      name: 'secret',
      type: 'hidden',
      dataType: 'string',
      component: 'text-field',
      default: 'I m a hidden string.'
    },
    {
      autoFocus: false,
      validate: [],
      name: 'disabled',
      type: 'text',
      dataType: 'string',
      component: 'text-field',
      title: 'A disabled field',
      label: 'A disabled field',
      default: 'I am disabled.',
      isDisabled: true
    },
    {
      autoFocus: false,
      validate: [],
      name: 'readonly',
      type: 'text',
      dataType: 'string',
      component: 'text-field',
      title: 'A readonly field',
      label: 'A readonly field',
      default: 'I am read-only.',
      isReadOnly: true
    },
    {
      autoFocus: false,
      validate: [],
      name: 'widgetOptions',
      type: 'text',
      dataType: 'string',
      component: 'text-field',
      title: 'Custom widget with options',
      label: 'Custom widget with options',
      default: 'I am yellow'
    },
    {
      autoFocus: false,
      validate: [],
      name: 'selectWidgetOptions',
      type: 'string',
      dataType: 'string',
      component: 'select',
      title: 'Custom select widget with options',
      label: 'Custom select widget with options',
      options: [
        {
          label: 'Please Choose'
        },
        {
          value: 'foo',
          label: 'Foo'
        },
        {
          value: 'bar',
          label: 'Bar'
        }
      ]
    }
  ]
};
