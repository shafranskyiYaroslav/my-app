export default interface ITextInput {
  inputValue: string;
  onChangeValue: (arg: string) => void;
  onSubmitValue: (arg: string) => void;
}
