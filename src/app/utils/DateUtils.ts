export class DateUtils {
    static converterTimestampParaData(timestamp: Date): string {
      const data = new Date(timestamp);
      const ano = data.getFullYear();
      const mes = ('0' + (data.getMonth() + 1)).slice(-2);
      const dia = ('0' + data.getDate()).slice(-2);
      return `${ano}-${mes}-${dia}`;
    }
  }
  