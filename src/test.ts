export function removeHyphens(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => removeHyphens(item));
  }

  const newObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = key.replace(/-/g, ''); // 用空字符串替换 "-"
      newObj[newKey] = removeHyphens(obj[key]);
    }
  }
  return newObj;
}

export function removeHyphensAndConvertToNumber(obj) {
  if (typeof obj !== 'object' || obj === null) {
    // 如果值是字符串且可以转换为数字，则转换为数字
    if (typeof obj === 'string' && !isNaN(parseFloat(obj))) {
      return parseFloat(obj);
    }
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => removeHyphensAndConvertToNumber(item));
  }

  const newObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = key.replace(/-/g, ''); // 用空字符串替换 "-"
      newObj[newKey] = removeHyphensAndConvertToNumber(obj[key]);
    }
  }
  return newObj;
}
export function percent(covered, total) {
  let tmp;
  if (total > 0) {
    tmp = (1000 * 100 * covered) / total;
    return Math.floor(tmp / 10) / 100;
  } else {
    return 100.0;
  }
}
export const coverage = {
  report: {
    '-name': 'untitled',
    sessioninfo: [
      {
        '-id': 'zhangtaos-MacBook-Pro.local-e56e54bb',
        '-start': '1715763153245',
        '-dump': '1715763153500',
      },
      {
        '-id': 'zhangtaos-MacBook-Pro.local-8e6528c7',
        '-start': '1715763571485',
        '-dump': '1715763572114',
      },
      {
        '-id': 'zhangtaos-MacBook-Pro.local-da56b6b1',
        '-start': '1715769607572',
        '-dump': '1715769608128',
      },
      {
        '-id': 'zhangtaos-MacBook-Pro.local-a5b3dd8c',
        '-start': '1715769750672',
        '-dump': '1715769751076',
      },
      {
        '-id': 'zhangtaos-MacBook-Pro.local-5ddc7912',
        '-start': '1715773627497',
        '-dump': '1715773628104',
      },
      {
        '-id': 'zhangtaos-MacBook-Pro.local-3a14dc81',
        '-start': '1715773863640',
        '-dump': '1715773864209',
      },
    ],
    package: [
      {
        '-name': 'org/example',
        class: [
          {
            '-name': 'org/example/Main',
            '-sourcefilename': 'Main.java',
            method: [
              {
                '-name': '<init>',
                '-desc': '()V',
                '-line': '3',
                counter: [
                  {
                    '-type': 'INSTRUCTION',
                    '-missed': '3',
                    '-covered': '0',
                  },
                  {
                    '-type': 'LINE',
                    '-missed': '1',
                    '-covered': '0',
                  },
                  {
                    '-type': 'COMPLEXITY',
                    '-missed': '1',
                    '-covered': '0',
                  },
                  {
                    '-type': 'METHOD',
                    '-missed': '1',
                    '-covered': '0',
                  },
                ],
              },
              {
                '-name': 'main',
                '-desc': '([Ljava/lang/String;)V',
                '-line': '5',
                counter: [
                  {
                    '-type': 'INSTRUCTION',
                    '-missed': '4',
                    '-covered': '0',
                  },
                  {
                    '-type': 'LINE',
                    '-missed': '2',
                    '-covered': '0',
                  },
                  {
                    '-type': 'COMPLEXITY',
                    '-missed': '1',
                    '-covered': '0',
                  },
                  {
                    '-type': 'METHOD',
                    '-missed': '1',
                    '-covered': '0',
                  },
                ],
              },
            ],
            counter: [
              {
                '-type': 'INSTRUCTION',
                '-missed': '7',
                '-covered': '0',
              },
              {
                '-type': 'LINE',
                '-missed': '3',
                '-covered': '0',
              },
              {
                '-type': 'COMPLEXITY',
                '-missed': '2',
                '-covered': '0',
              },
              {
                '-type': 'METHOD',
                '-missed': '2',
                '-covered': '0',
              },
              {
                '-type': 'CLASS',
                '-missed': '1',
                '-covered': '0',
              },
            ],
          },
          {
            '-name': 'org/example/Jian',
            '-sourcefilename': 'Jian.java',
            method: [
              {
                '-name': '<init>',
                '-desc': '()V',
                '-line': '3',
                counter: [
                  {
                    '-type': 'INSTRUCTION',
                    '-missed': '3',
                    '-covered': '0',
                  },
                  {
                    '-type': 'LINE',
                    '-missed': '1',
                    '-covered': '0',
                  },
                  {
                    '-type': 'COMPLEXITY',
                    '-missed': '1',
                    '-covered': '0',
                  },
                  {
                    '-type': 'METHOD',
                    '-missed': '1',
                    '-covered': '0',
                  },
                ],
              },
              {
                '-name': 'sub',
                '-desc': '(II)I',
                '-line': '5',
                counter: [
                  {
                    '-type': 'INSTRUCTION',
                    '-missed': '4',
                    '-covered': '0',
                  },
                  {
                    '-type': 'LINE',
                    '-missed': '1',
                    '-covered': '0',
                  },
                  {
                    '-type': 'COMPLEXITY',
                    '-missed': '1',
                    '-covered': '0',
                  },
                  {
                    '-type': 'METHOD',
                    '-missed': '1',
                    '-covered': '0',
                  },
                ],
              },
            ],
            counter: [
              {
                '-type': 'INSTRUCTION',
                '-missed': '7',
                '-covered': '0',
              },
              {
                '-type': 'LINE',
                '-missed': '2',
                '-covered': '0',
              },
              {
                '-type': 'COMPLEXITY',
                '-missed': '2',
                '-covered': '0',
              },
              {
                '-type': 'METHOD',
                '-missed': '2',
                '-covered': '0',
              },
              {
                '-type': 'CLASS',
                '-missed': '1',
                '-covered': '0',
              },
            ],
          },
          {
            '-name': 'org/example/chen',
            '-sourcefilename': 'chen.java',
            method: {
              '-name': 'say',
              '-desc': '()V',
              '-line': '7',
              counter: [
                {
                  '-type': 'INSTRUCTION',
                  '-missed': '0',
                  '-covered': '4',
                },
                {
                  '-type': 'LINE',
                  '-missed': '0',
                  '-covered': '2',
                },
                {
                  '-type': 'COMPLEXITY',
                  '-missed': '0',
                  '-covered': '1',
                },
                {
                  '-type': 'METHOD',
                  '-missed': '0',
                  '-covered': '1',
                },
              ],
            },
            counter: [
              {
                '-type': 'INSTRUCTION',
                '-missed': '0',
                '-covered': '4',
              },
              {
                '-type': 'LINE',
                '-missed': '0',
                '-covered': '2',
              },
              {
                '-type': 'COMPLEXITY',
                '-missed': '0',
                '-covered': '1',
              },
              {
                '-type': 'METHOD',
                '-missed': '0',
                '-covered': '1',
              },
              {
                '-type': 'CLASS',
                '-missed': '0',
                '-covered': '1',
              },
            ],
          },
          {
            '-name': 'org/example/Add',
            '-sourcefilename': 'Add.java',
            method: [
              {
                '-name': '<init>',
                '-desc': '()V',
                '-line': '3',
                counter: [
                  {
                    '-type': 'INSTRUCTION',
                    '-missed': '0',
                    '-covered': '3',
                  },
                  {
                    '-type': 'LINE',
                    '-missed': '0',
                    '-covered': '1',
                  },
                  {
                    '-type': 'COMPLEXITY',
                    '-missed': '0',
                    '-covered': '1',
                  },
                  {
                    '-type': 'METHOD',
                    '-missed': '0',
                    '-covered': '1',
                  },
                ],
              },
              {
                '-name': 'add',
                '-desc': '(II)I',
                '-line': '5',
                counter: [
                  {
                    '-type': 'INSTRUCTION',
                    '-missed': '1',
                    '-covered': '10',
                  },
                  {
                    '-type': 'BRANCH',
                    '-missed': '1',
                    '-covered': '1',
                  },
                  {
                    '-type': 'LINE',
                    '-missed': '1',
                    '-covered': '4',
                  },
                  {
                    '-type': 'COMPLEXITY',
                    '-missed': '1',
                    '-covered': '1',
                  },
                  {
                    '-type': 'METHOD',
                    '-missed': '0',
                    '-covered': '1',
                  },
                ],
              },
              {
                '-name': 'sub',
                '-desc': '(II)I',
                '-line': '14',
                counter: [
                  {
                    '-type': 'INSTRUCTION',
                    '-missed': '4',
                    '-covered': '0',
                  },
                  {
                    '-type': 'LINE',
                    '-missed': '1',
                    '-covered': '0',
                  },
                  {
                    '-type': 'COMPLEXITY',
                    '-missed': '1',
                    '-covered': '0',
                  },
                  {
                    '-type': 'METHOD',
                    '-missed': '1',
                    '-covered': '0',
                  },
                ],
              },
              {
                '-name': 'div',
                '-desc': '(II)I',
                '-line': '17',
                counter: [
                  {
                    '-type': 'INSTRUCTION',
                    '-missed': '4',
                    '-covered': '0',
                  },
                  {
                    '-type': 'LINE',
                    '-missed': '1',
                    '-covered': '0',
                  },
                  {
                    '-type': 'COMPLEXITY',
                    '-missed': '1',
                    '-covered': '0',
                  },
                  {
                    '-type': 'METHOD',
                    '-missed': '1',
                    '-covered': '0',
                  },
                ],
              },
            ],
            counter: [
              {
                '-type': 'INSTRUCTION',
                '-missed': '9',
                '-covered': '13',
              },
              {
                '-type': 'BRANCH',
                '-missed': '1',
                '-covered': '1',
              },
              {
                '-type': 'LINE',
                '-missed': '3',
                '-covered': '5',
              },
              {
                '-type': 'COMPLEXITY',
                '-missed': '3',
                '-covered': '2',
              },
              {
                '-type': 'METHOD',
                '-missed': '2',
                '-covered': '2',
              },
              {
                '-type': 'CLASS',
                '-missed': '0',
                '-covered': '1',
              },
            ],
          },
        ],
        sourcefile: [
          {
            '-name': 'Add.java',
            line: [
              {
                '-nr': '3',
                '-mi': '0',
                '-ci': '3',
                '-mb': '0',
                '-cb': '0',
              },
              {
                '-nr': '5',
                '-mi': '0',
                '-ci': '2',
                '-mb': '0',
                '-cb': '0',
              },
              {
                '-nr': '6',
                '-mi': '0',
                '-ci': '2',
                '-mb': '1',
                '-cb': '1',
              },
              {
                '-nr': '7',
                '-mi': '0',
                '-ci': '2',
                '-mb': '0',
                '-cb': '0',
              },
              {
                '-nr': '9',
                '-mi': '1',
                '-ci': '0',
                '-mb': '0',
                '-cb': '0',
              },
              {
                '-nr': '11',
                '-mi': '0',
                '-ci': '4',
                '-mb': '0',
                '-cb': '0',
              },
              {
                '-nr': '14',
                '-mi': '4',
                '-ci': '0',
                '-mb': '0',
                '-cb': '0',
              },
              {
                '-nr': '17',
                '-mi': '4',
                '-ci': '0',
                '-mb': '0',
                '-cb': '0',
              },
            ],
            counter: [
              {
                '-type': 'INSTRUCTION',
                '-missed': '9',
                '-covered': '13',
              },
              {
                '-type': 'BRANCH',
                '-missed': '1',
                '-covered': '1',
              },
              {
                '-type': 'LINE',
                '-missed': '3',
                '-covered': '5',
              },
              {
                '-type': 'COMPLEXITY',
                '-missed': '3',
                '-covered': '2',
              },
              {
                '-type': 'METHOD',
                '-missed': '2',
                '-covered': '2',
              },
              {
                '-type': 'CLASS',
                '-missed': '0',
                '-covered': '1',
              },
            ],
          },
          {
            '-name': 'chen.java',
            line: [
              {
                '-nr': '7',
                '-mi': '0',
                '-ci': '3',
                '-mb': '0',
                '-cb': '0',
              },
              {
                '-nr': '8',
                '-mi': '0',
                '-ci': '1',
                '-mb': '0',
                '-cb': '0',
              },
            ],
            counter: [
              {
                '-type': 'INSTRUCTION',
                '-missed': '0',
                '-covered': '4',
              },
              {
                '-type': 'LINE',
                '-missed': '0',
                '-covered': '2',
              },
              {
                '-type': 'COMPLEXITY',
                '-missed': '0',
                '-covered': '1',
              },
              {
                '-type': 'METHOD',
                '-missed': '0',
                '-covered': '1',
              },
              {
                '-type': 'CLASS',
                '-missed': '0',
                '-covered': '1',
              },
            ],
          },
          {
            '-name': 'Main.java',
            line: [
              {
                '-nr': '3',
                '-mi': '3',
                '-ci': '0',
                '-mb': '0',
                '-cb': '0',
              },
              {
                '-nr': '5',
                '-mi': '3',
                '-ci': '0',
                '-mb': '0',
                '-cb': '0',
              },
              {
                '-nr': '6',
                '-mi': '1',
                '-ci': '0',
                '-mb': '0',
                '-cb': '0',
              },
            ],
            counter: [
              {
                '-type': 'INSTRUCTION',
                '-missed': '7',
                '-covered': '0',
              },
              {
                '-type': 'LINE',
                '-missed': '3',
                '-covered': '0',
              },
              {
                '-type': 'COMPLEXITY',
                '-missed': '2',
                '-covered': '0',
              },
              {
                '-type': 'METHOD',
                '-missed': '2',
                '-covered': '0',
              },
              {
                '-type': 'CLASS',
                '-missed': '1',
                '-covered': '0',
              },
            ],
          },
          {
            '-name': 'Jian.java',
            line: [
              {
                '-nr': '3',
                '-mi': '3',
                '-ci': '0',
                '-mb': '0',
                '-cb': '0',
              },
              {
                '-nr': '5',
                '-mi': '4',
                '-ci': '0',
                '-mb': '0',
                '-cb': '0',
              },
            ],
            counter: [
              {
                '-type': 'INSTRUCTION',
                '-missed': '7',
                '-covered': '0',
              },
              {
                '-type': 'LINE',
                '-missed': '2',
                '-covered': '0',
              },
              {
                '-type': 'COMPLEXITY',
                '-missed': '2',
                '-covered': '0',
              },
              {
                '-type': 'METHOD',
                '-missed': '2',
                '-covered': '0',
              },
              {
                '-type': 'CLASS',
                '-missed': '1',
                '-covered': '0',
              },
            ],
          },
        ],
        counter: [
          {
            '-type': 'INSTRUCTION',
            '-missed': '23',
            '-covered': '17',
          },
          {
            '-type': 'BRANCH',
            '-missed': '1',
            '-covered': '1',
          },
          {
            '-type': 'LINE',
            '-missed': '8',
            '-covered': '7',
          },
          {
            '-type': 'COMPLEXITY',
            '-missed': '7',
            '-covered': '3',
          },
          {
            '-type': 'METHOD',
            '-missed': '6',
            '-covered': '3',
          },
          {
            '-type': 'CLASS',
            '-missed': '2',
            '-covered': '2',
          },
        ],
      },
      {
        '-name': 'org/example/ewai',
        class: [
          {
            '-name': 'org/example/ewai/Cheng',
            '-sourcefilename': 'Cheng.java',
            method: [
              {
                '-name': '<init>',
                '-desc': '()V',
                '-line': '3',
                counter: [
                  {
                    '-type': 'INSTRUCTION',
                    '-missed': '3',
                    '-covered': '0',
                  },
                  {
                    '-type': 'LINE',
                    '-missed': '1',
                    '-covered': '0',
                  },
                  {
                    '-type': 'COMPLEXITY',
                    '-missed': '1',
                    '-covered': '0',
                  },
                  {
                    '-type': 'METHOD',
                    '-missed': '1',
                    '-covered': '0',
                  },
                ],
              },
              {
                '-name': 'div',
                '-desc': '(II)I',
                '-line': '5',
                counter: [
                  {
                    '-type': 'INSTRUCTION',
                    '-missed': '4',
                    '-covered': '0',
                  },
                  {
                    '-type': 'LINE',
                    '-missed': '1',
                    '-covered': '0',
                  },
                  {
                    '-type': 'COMPLEXITY',
                    '-missed': '1',
                    '-covered': '0',
                  },
                  {
                    '-type': 'METHOD',
                    '-missed': '1',
                    '-covered': '0',
                  },
                ],
              },
            ],
            counter: [
              {
                '-type': 'INSTRUCTION',
                '-missed': '7',
                '-covered': '0',
              },
              {
                '-type': 'LINE',
                '-missed': '2',
                '-covered': '0',
              },
              {
                '-type': 'COMPLEXITY',
                '-missed': '2',
                '-covered': '0',
              },
              {
                '-type': 'METHOD',
                '-missed': '2',
                '-covered': '0',
              },
              {
                '-type': 'CLASS',
                '-missed': '1',
                '-covered': '0',
              },
            ],
          },
          {
            '-name': 'org/example/ewai/chenImpl',
            '-sourcefilename': 'chenImpl.java',
            method: [
              {
                '-name': '<init>',
                '-desc': '()V',
                '-line': '5',
                counter: [
                  {
                    '-type': 'INSTRUCTION',
                    '-missed': '0',
                    '-covered': '3',
                  },
                  {
                    '-type': 'LINE',
                    '-missed': '0',
                    '-covered': '1',
                  },
                  {
                    '-type': 'COMPLEXITY',
                    '-missed': '0',
                    '-covered': '1',
                  },
                  {
                    '-type': 'METHOD',
                    '-missed': '0',
                    '-covered': '1',
                  },
                ],
              },
              {
                '-name': 'test',
                '-desc': '()V',
                '-line': '8',
                counter: [
                  {
                    '-type': 'INSTRUCTION',
                    '-missed': '3',
                    '-covered': '0',
                  },
                  {
                    '-type': 'LINE',
                    '-missed': '2',
                    '-covered': '0',
                  },
                  {
                    '-type': 'COMPLEXITY',
                    '-missed': '1',
                    '-covered': '0',
                  },
                  {
                    '-type': 'METHOD',
                    '-missed': '1',
                    '-covered': '0',
                  },
                ],
              },
            ],
            counter: [
              {
                '-type': 'INSTRUCTION',
                '-missed': '3',
                '-covered': '3',
              },
              {
                '-type': 'LINE',
                '-missed': '2',
                '-covered': '1',
              },
              {
                '-type': 'COMPLEXITY',
                '-missed': '1',
                '-covered': '1',
              },
              {
                '-type': 'METHOD',
                '-missed': '1',
                '-covered': '1',
              },
              {
                '-type': 'CLASS',
                '-missed': '0',
                '-covered': '1',
              },
            ],
          },
        ],
        sourcefile: [
          {
            '-name': 'Cheng.java',
            line: [
              {
                '-nr': '3',
                '-mi': '3',
                '-ci': '0',
                '-mb': '0',
                '-cb': '0',
              },
              {
                '-nr': '5',
                '-mi': '4',
                '-ci': '0',
                '-mb': '0',
                '-cb': '0',
              },
            ],
            counter: [
              {
                '-type': 'INSTRUCTION',
                '-missed': '7',
                '-covered': '0',
              },
              {
                '-type': 'LINE',
                '-missed': '2',
                '-covered': '0',
              },
              {
                '-type': 'COMPLEXITY',
                '-missed': '2',
                '-covered': '0',
              },
              {
                '-type': 'METHOD',
                '-missed': '2',
                '-covered': '0',
              },
              {
                '-type': 'CLASS',
                '-missed': '1',
                '-covered': '0',
              },
            ],
          },
          {
            '-name': 'chenImpl.java',
            line: [
              {
                '-nr': '5',
                '-mi': '0',
                '-ci': '3',
                '-mb': '0',
                '-cb': '0',
              },
              {
                '-nr': '8',
                '-mi': '2',
                '-ci': '0',
                '-mb': '0',
                '-cb': '0',
              },
              {
                '-nr': '9',
                '-mi': '1',
                '-ci': '0',
                '-mb': '0',
                '-cb': '0',
              },
            ],
            counter: [
              {
                '-type': 'INSTRUCTION',
                '-missed': '3',
                '-covered': '3',
              },
              {
                '-type': 'LINE',
                '-missed': '2',
                '-covered': '1',
              },
              {
                '-type': 'COMPLEXITY',
                '-missed': '1',
                '-covered': '1',
              },
              {
                '-type': 'METHOD',
                '-missed': '1',
                '-covered': '1',
              },
              {
                '-type': 'CLASS',
                '-missed': '0',
                '-covered': '1',
              },
            ],
          },
        ],
        counter: [
          {
            '-type': 'INSTRUCTION',
            '-missed': '10',
            '-covered': '3',
          },
          {
            '-type': 'LINE',
            '-missed': '4',
            '-covered': '1',
          },
          {
            '-type': 'COMPLEXITY',
            '-missed': '3',
            '-covered': '1',
          },
          {
            '-type': 'METHOD',
            '-missed': '3',
            '-covered': '1',
          },
          {
            '-type': 'CLASS',
            '-missed': '1',
            '-covered': '1',
          },
        ],
      },
    ],
    counter: [
      {
        '-type': 'INSTRUCTION',
        '-missed': '33',
        '-covered': '20',
      },
      {
        '-type': 'BRANCH',
        '-missed': '1',
        '-covered': '1',
      },
      {
        '-type': 'LINE',
        '-missed': '12',
        '-covered': '8',
      },
      {
        '-type': 'COMPLEXITY',
        '-missed': '10',
        '-covered': '4',
      },
      {
        '-type': 'METHOD',
        '-missed': '9',
        '-covered': '4',
      },
      {
        '-type': 'CLASS',
        '-missed': '3',
        '-covered': '3',
      },
    ],
  },
};
