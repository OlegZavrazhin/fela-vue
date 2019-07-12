import test from 'ava'
const { css } = require('../../dist/bundle')

test('lit-css', (t) => {
  return new Promise(async (ff) => {
    try {
      const value = 40
      const obj = {
        margin: 'some-shit',
        padding: 'some-shit',
        those: 'shiii',
        marginLeft: 40,
        marginRight: '10px',
        '>*:first-of-type': {
          shit: 66,
          '& .inner': {
            left: 42
          }
        },
        cls: {
          color: 'yellow',
          background: 'url("data:image/gif;base64,R0lGO")',
         '& .red': {
            padding: 5,
            '& .one': {
              margin: 5,
              padding: 15
            },
            '& .two': {
              margin: 5
            }
         },
         '& .green': {
            padding: 5,
            '& .one': {
              margin: 5,
              padding: 15
            },
            '& .two': {
              margin: 5
            }
          }
        }
      }
      const rule = () => css`
        empty {} // should be removed.
        margin: some-shit;
        padding some-shit; those: shiii
        margin-left: ${value}
        margin-right: 10px /*
          some block comment
        */
        >*:first-of-type {
          shit 66
          .inner {
            left: 42
          }
        }
        .cls {
          .red, .green: {
            padding: 5
            // margin: 7px 5px
            .one, .two {
              margin: 5
            }
            .one {
              padding: 15
            }
          }
        }
        .cls {
          margin ${null};  // Should omit.
          color yellow
          background url("data:image/gif;base64,R0lGO")
        }
      `

      ff(t.deepEqual(rule(), obj))
    } catch(e) {
      ff(t.fail(e))
    }
  })
})