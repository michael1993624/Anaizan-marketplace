import Chat, { Bubble, useMessages } from "@chatui/core";
import { useState } from "react";
import Conversation from "./conversation";
import defaultSettings from "./characters";
import { Configuration, OpenAIApi } from "openai";

import GrammarChecker from "./grammarChecker";
import './common.css';
import '@chatui/core/dist/index.css'; 
import React from "react"


const ChatArea = ({ setCurrent }: any) => {
    const storedApiKey = defaultSettings["api-key"]
    console.log(storedApiKey)
    const { messages, appendMsg, setTyping } = useMessages([]);
    const [openai, setOpenai] = useState(new OpenAIApi(new Configuration({ apiKey: storedApiKey })));

    const [grammarChecker, setGrammarChecker] = useState(new GrammarChecker(defaultSettings.LANGUAGE, new Configuration({ apiKey: storedApiKey })));

    // Conversation hook
    const [conversation, setConversation] = useState(new Conversation(defaultSettings));

    function handleSend(type: any, val: string) {
        if (type === 'text' && val.trim()) {
            appendMsg({
                type: 'text',
                content: { text: val },
                position: 'right',
            });

            setTyping(true);
            let correction = new Promise<string>((resolve) => resolve(val))
            

            correction.then((correction) => {

                console.log(correction)
                if (correction.trim() !== val.trim()) {
                    appendMsg({
                        type: 'text',
                        content: { text: "*" + correction },
                        position: 'right',
                    });
                }

                const prompt = conversation.get_prompt(correction).trim()
                console.log("Prompt: ", prompt)
                console.log("Conversation: ", conversation.conversation)

                if (storedApiKey === undefined || storedApiKey === "") {
                    console.log("NO API KEY")
                    appendMsg({
                        type: 'text',
                        content: { text: "Please set an API key in the settings. If you don't have one, you can get it at https://beta.openai.com/account/api-keys after creating an OpenAI account." },
                        position: 'left',
                    });
                }
                else {
                    openai.createCompletion({
                        model: 'text-davinci-003',
                        prompt: prompt,
                        stop: (defaultSettings['USER_PREFIX']).trim(),
                        max_tokens: defaultSettings['MAX_TOKENS'],
                        frequency_penalty: defaultSettings['FREQUENCY_PENALTY'],
                        presence_penalty: defaultSettings['PRESENCE_PENALTY'],
                    }).then((completion) => {
                        const responseText = completion.data.choices![0].text!;
                        conversation.set_completion(responseText)
                        appendMsg({
                            type: 'text',
                            content: { text: responseText.trim() },
                        });
                    });

                }
            })

        }
    }

    function renderMessageContent(msg: any) {
        const { content } = msg;
        return <Bubble content={content.text} />;
    }


    return (
        <>
            {
                storedApiKey ? (<Chat
                    navbar={{ title: 'Chatbot' }}
                    messages={messages}
                    renderMessageContent={renderMessageContent}
                    onSend={handleSend}
                    locale="en"
                    placeholder='Type a message'
                />) :
                    (<div className="noApiKeyLabel">We couldn't find an OpenAI API key. Please configure the chatbot in the&nbsp;
                        <span className="spanAsLink" onClick={() => { setCurrent('settings') }}>Settings</span>
                        &nbsp;to continue.</div>)
            }
        </>
    )
}

export default ChatArea;
