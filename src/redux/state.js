let state = {
    profilePage:{
        postData: [
            {message: "how are you?", likesCount: 23},
            {message: "smells like teen spirit", likesCount: 1203},
            {message: "You are like the man who sold the world", likesCount: 5746},
            {message: "Yo", likesCount: 304},
            {message: "R.I.P", likesCount: 223213},
        ]
    },
    messagePage:{
        messages: [
            {id: "id1", message: "Hello"},
            {id: "id2", message: "How are you?"},
            {id: "id3", message: "I'm fine"},
            {id: "id4", message: "What about you?"},
            {id: "id5", message: "+"}
        ],
        dialogsData: [
            {user: "Artem", id: "id1"},
            {user: "Dima", id: "id2"},
            {user: "Oleg", id: "id3"},
            {user: "Kate", id: "id4"},
            {user: "Andrew", id: "id5"}
        ]
    }
};

export default state;
