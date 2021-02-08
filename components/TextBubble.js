import React, { useState, useRef } from 'react';
  import { View, Button, TextInput, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, FlatList, Image } from 'react-native';
  import { Ionicons } from '@expo/vector-icons';

  function TextBubble(props) {

    let Script = [
         {text: "Tell me more!", user: "all"},
         {text: "That sounds really interesting, I wonder what made you think that way?", user: "all"},
         {text: "What else can I help you with?", user: "all"},
         {text: "I think my job is great, and I love it alot!", user: "all"},
         {text: "Did you need advice with anything in particular?", user: "all"},
         {text: "Wow, I am so excited for you!", user: "all"},
         {text: "I'm doing great, how about you?",user: "all"}
     ]

     let BrianWilliamsScript = [
       {text: "Yes! What question did you have in particular about your condition?", user: "all"},
       {text: "I see. How often have you been taking your medications?", user: "all"},
       {text: "So we generally recommend that patients take it 2 times a day, once in the morning and once at night.", user: "all"},
       {text: "How has your exercise been lately?", user: "all"},
       {text: "That's good! Make sure to get enough sunlight too! Especially since alot of us are indoors most of the time under quarantine now", user: "all"},
       {text: "Yep! Did you have any other questions for me?", user: "all"},
       {text: "No worries! Thanks for stopping by!",user: "all"}
    ]


    function myMessage() {
      return(
          [{
            text: "Hi there! My name is " + props.name + ". Nice to meet you! What can I help with you today?",
            type: "bot",
            key: 0
          }]
      )
    }

    const [ text, setText ] = useState('');
    const [ botText, setBotText ] = useState('');
    const [ messages, setMessages ] = useState(myMessage);
    const [counter, setCounter] = useState(0);

    var startID = 0;
    if (messages.length != 0)
    {
      startID = messages[0].key + 1;
    }

    const [ messageID, setMessageID ] = useState(startID);
    const inputRef = useRef(null)

    const renderItem = ({ item }) => {
      if (item.type == "user")
      {
        return (
          <View style = {styles.outerUserMessage}>
            <View style={styles.messageBubble}>
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
          <View style = {styles.space}></View>
          </View>
        );
      }
      else {
        return (
          <View style = {styles.outerBotMessage}>
            <View style = {styles.botPic}>
         <Image
                   style ={{
                       width: 45,
                       height: 45,
                       borderRadius: 45,
                       borderWidth: 2,
                       borderColor: 'green'
                   }}
                   source={{uri: props.uri}}/>
         </View>

            <View style={styles.botBubble}>
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
          <View style = {styles.space}></View>
          </View>
        )
      }
      };

    //const [ isRender, setisRender] = useState(false);

    const sendMessage = () => {
      /*
      'key'
          - a prop required for all items in a list.
            Must be a string and must be unique
      ...messages
          - shorthand meaning "take all items of the messages array and copy them here"
      */
  //console.log(messages)
      if (text != "")
      {
      setMessages(messages =>[{
        key: messageID,
        text: text,
        type: 'user'
      }, ...messages]);
      //dismissKeyboard();
      //setMessageID(messageID + 1)
      botStuff(text);
      setText(''); // reset input text to empty
      //setisRender(true);
      //console.log(messages);
    }
    }

    const botStuff = (userText) => {
     if (userText == "Hi" || userText == "hi")
     {
       botMessage("Nice to meet you!")
     }
     else {
       let index = Math.floor(Math.random() * Script.length)
       if (props.name != "Brian Williams, MD" || counter >= 7)
       {
         botMessage(Script[index].text)
       }
       else
       {
         botMessage(BrianWilliamsScript[counter].text)
         setCounter(counter + 1)
       }
     }
   }

    const botMessage = (message) => {
      setMessages(messages => [{
        key: messageID + 1,
        text: message,
        type: 'bot'
      }, ...messages]);
      setMessageID(messageID + 2)
    }

    return (
    <KeyboardAvoidingView behavior = 'padding' style={[styles.container]}>
      <View style={styles.container}>

        <FlatList
            inverted
            style = {styles.messagesList}

            data={messages}
            renderItem={renderItem}
            keyExtractor={(item) => { return item.key.toString(); }}
            />

        <View style = {styles.bot}>
        <View style = {styles.bottomView}>
          <TextInput
          style={styles.textInput}
          placeholder='type a message'
          onChangeText={text => setText(text)}
          value={text}
          onKeyPress = {event => {
            if (event.nativeEvent.key == 'Enter')
            {
              sendMessage();
            }
          }}
          returnKeyType='send'
          multiline = {true}
          scrollEnabled = {true}
          blurOnSubmit = {true}
          onBlur = {sendMessage}
          />
          <TouchableOpacity onPress = {sendMessage} style = {styles.button}>
            <Ionicons name="md-enter" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      </View>
      <View style = {{height:70}}/>
    </KeyboardAvoidingView>
    )
  }

  const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1
  },
  messagesBox: {
    flex: 10,
    alignItems: 'flex-end',
  },
  textLine: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'pink'
  },

  textInput: {
    borderColor: 'grey',
    borderWidth: 1,
    width: '80%',
    flex: 4,
    padding: 8,
    borderRadius: 16,
  },

  messageBubble: {
    backgroundColor: "#AAC5E2",
    borderRadius: 16,
    paddingHorizontal: 12,
    justifyContent: 'center',
    maxWidth: '40%',
    margin: 10,
  },

  botBubble: {
    backgroundColor: "#E8EAEC",
    borderRadius: 16,
    paddingHorizontal: 12,
    justifyContent: 'center',
    maxWidth: '40%',
    margin: 5,
  },

  botPic: {
    margin: 2,
  },
  messageText: {
    color: 'black',
    padding: 10
  },
  button:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomView: {
    width: '100%',
    flexDirection: 'row',
    flex: 1
  },
  bot:
  {
    height: 40
  },
  messageBorder:
  {
    borderWidth: 2,
    borderColor: 'green'
  },
  space:
  {
    height: 5,
  },
  messagesList:
  {
    width: '100%'
  },
  outerUserMessage:
  {
    width: '100%',
    alignItems: 'flex-end',
    alignSelf: 'center'
  },
  outerBotMessage:
  {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignSelf: 'center'
  }
 })



  export default TextBubble;
