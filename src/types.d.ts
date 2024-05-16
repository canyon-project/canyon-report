enum CoverageType {
  INSTRUCTION = 'INSTRUCTION',
  BRANCH = 'BRANCH',
  LINE = 'LINE',
  COMPLEXITY = 'COMPLEXITY',
  METHOD = 'METHOD',
}

interface Counter {
  type: CoverageType;
  missed: string;
  covered: string;
}

interface Line {
  nr: string; //行号（Line Number）。表示代码文件中的行号。
  mi: string; // 未执行指令数（Missed Instructions）。表示在该行中未被执行的指令数目。
  ci: string; //执行指令数（Covered Instructions）。表示在该行中被执行的指令数目。
  mb: string; //未执行分支数（Missed Branches）。表示在该行中未被执行的分支数目。
  cb: string; //执行分支数（Covered Branches）。表示在该行中被执行的分支数目。
}

interface Method {
  name: string;
  desc: string;
  line: string;
  counter: Counter[];
}

interface Sourcefile {
  name: string;
  line: Line[];
  counter: Counter[];
}

interface Class {
  name: string;
  sourcefilename: string;
  method: Method[];
  counter: Counter[];
}
interface JacocoCoverage {
  package: {
    name: string;
    class: Class[];
    counter: Counter[];
    sourcefile: Sourcefile[];
  }[];
  counter: Counter[];
  name: string;
}
