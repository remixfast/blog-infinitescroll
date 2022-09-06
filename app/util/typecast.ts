

export function transformType(data: any, dataType: string): any {
  switch (dataType) {
    case 'boolean':
      if (typeof data === 'string') {
        return data === '1' || data === 'Y' || data === 'YES' || data === 'true' || data === 'on' || data === 'ON';
      } else {
        return data === 1;
      }
    case 'currency':
    case 'number':
      return data ? +data : undefined;
    case 'date':
    case 'Date':
      if (data && data instanceof Date) return data;
      if (data) return new Date(data);
      else return undefined;
    case 'string':
      if (!data) return undefined;
      return String(data);
    default:
      return data;
  }
}




