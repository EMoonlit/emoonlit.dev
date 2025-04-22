import { useEffect } from "react";

declare global {
    interface Window {
      BlipChat: any;
    }
  }
  

const ChatWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/blip-chat-widget';
    script.async = true;
    script.onload = () => {
      new window.BlipChat()
        .withAppKey("bG9yYXRlc3RlcHJhdGljb2RldjpiZmQ2NjMzZC1lOWEwLTQyYWEtOGU3NC1jMzk0ZDFmZjlmNTA=")
        .withButton({ color: '#0096fa', icon: '' })
        .withCustomCommonUrl('https://emerson-moonlit-le974.chat.blip.ai/')
        .build();
    };
    document.body.appendChild(script);
  }, []);

  return null;
};

export default ChatWidget;

  // const ChatWidget = () => {
  //   useEffect(() => {

  //           //   .withButton({ color: '#2CC3D6' })
  //     const script = document.createElement('script');
  //   //   script.src = 'https://unpkg.com/blip-chat-widget@1.11.*';
  //     script.src = 'https://unpkg.com/blip-chat-widget';
  //     script.type = 'text/javascript';
  //     script.async = true;
  //     script.onload = () => {
  //       new window.BlipChat()
  //       //   .withAppKey('YOUR-APP-KEY')
  //         .withAppKey("bG9yYXRlc3RlcHJhdGljb2RldjpiZmQ2NjMzZC1lOWEwLTQyYWEtOGU3NC1jMzk0ZDFmZjlmNTA=")
  //       //   .withButton({ color: '#2CC3D6' })
          
  //       .withCustomCommonUrl('https://emerson-moonlit-le974.chat.blip.ai/')
  //         .withButton({"color":"#2CC3D6"})
  //         .build();
  //     };
  //     document.body.appendChild(script);
  //   }, []);
  
  //   return null;
  // };
  
  // export default ChatWidget;