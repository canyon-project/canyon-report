import { coverage, removeHyphens, removeHyphensAndConvertToNumber } from '../test.ts';

export const mockCoverage = removeHyphens(
  removeHyphensAndConvertToNumber(coverage.report.package[0].sourcefile[0]),
);
