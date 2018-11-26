const _ = require('lodash')

module.exports = {
  id: 'trivia',
  title: 'User Questions',
  renderer: '#trivia-question',

  jsonSchema: {
    title: 'User Questions',
    description: 'Create a new Trivia question with up to 5 choices and only one correct answer',
    type: 'object',
    required: ['question', 'good', 'bad'],
    properties: {
      question: {
        type: 'string',
        title: 'User Answer'
      },
      good: {
        type: 'string',
        title: 'Criteria'
      },
      bad: {
        title: 'Recommendations',
        type: 'array',
        items: {
          type: 'string',
          default: ''
        }
      }
    }
  },

  uiSchema: {
    bad: {
      'ui:options': {
        orderable: false
      }
    }
  },

  computeData: formData => {
    // const good = { payload: 'TRIVIA_GOOD', text: formData.good }
    const bad = formData.bad.map(i => ({ payload: 'TRIVIA_BAD', text: i }))
    const choices = [...bad]

    return {
      question: formData.question,
      choices: _.shuffle(choices)
    }
  },

  computePreviewText: formData => 'Question: ' + formData.question,
  computeMetadata: null
}
