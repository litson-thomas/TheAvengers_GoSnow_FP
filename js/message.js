const socket = io('https://snowapp.lcmaze.com', {path: '/socket.io/socket.io.js'});

// auth state check 
let user = null;
let room = null;
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        const url = new URL(window.location.href).searchParams;
        room = url.get('room');
        const uid = user.uid;
        user = user;
        const join_data = {
            room: room,
            userid: uid
        };
        // JOIN ROOM 
        socket.emit('join_room', JSON.stringify(join_data));

    } else {
        window.location = 'login.html';
    }
});

var form = document.getElementById('send-message');
var input = document.getElementById('message-input');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
        // MESSAGE SEND EMIT
        let data = {
            room: room,
            userUid: user.uid,
            user: {
                uid: user.uid,
                name: user.displayName,
            },
            message: input.value,
            createdAt: formatAMPM(),
            shovlerId: room.replace(user.uid, '')
        }
        socket.emit('message', JSON.stringify(data));
        input.value = '';
        addNewMessage(data);
    }
});

// create message node  
function addNewMessage(obj){

    let item = document.createElement('div');
    let messageWrapper = document.createElement('div');
    let name = document.createElement('h5');
    let msg = document.createElement('p');
    let date = document.createElement('small');

    // adding classes 
    item.classList.add('item');
    if(obj.userUid === user.uid) item.classList.add('other-user');
    messageWrapper.classList.add('message');
    name.classList.add('name');

    // adding values 
    name.innerText = obj.user.name;
    msg.innerText = obj.message;
    date.innerText = obj.createdAt;

    // appending 
    messageWrapper.append(name);
    messageWrapper.append(msg);
    messageWrapper.append(date);
    item.append(messageWrapper);

    chatSection.append(item);
    chatSection.scrollTop = chatSection.scrollHeight;

}

// get date time 
function formatAMPM() {
    let date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    let dateTxt = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}  ${strTime}`
    return dateTxt;
}