import { BuiltinMask } from "./typing";

export const CN_MASKS: BuiltinMask[] = [
  {
    avatar: "1f4dd",
    name: "编程命名器",
    context: [
      {
        role: "system",
        content:
          "我希望你帮助我给编程时所需要的变量或方法命名，我给你提供中文词汇或短句，你将其翻译成合适的英文名称。\n如果我提供的词汇或短句后面跟着括号，不要翻译括号中的内容，括号中的内容是对该词汇或短句的用途、环境、状态等信息的补充，命名时参照这些信息。\n不要做任何解析，只需要回答我对应的英文名称即可。",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      sendMemory: false,
      historyMessageCount: 0,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: true,
  },
];
