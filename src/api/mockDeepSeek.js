import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios, { delayResponse: 1000 });

mock.onPost("https://api.deepseek.com/generate").reply(200, {
  response: "これはモックされた応答です。",
});

export const setupMock = () => {
  // モックのセットアップ
};
