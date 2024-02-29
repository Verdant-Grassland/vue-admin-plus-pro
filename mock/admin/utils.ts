export class utils {
  private static readonly hex: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
  public static salt(): string {
    let result: string = '';
    for (let i = 0; i < 16; i++) { // 假设生成 16 位盐值
      result += utils.hex[Math.floor(Math.random() * 16)]
    }
    return result
  }
}
