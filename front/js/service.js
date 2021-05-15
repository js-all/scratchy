/*
- add axios cdn link in index.html
     	<script src="https://unpkg.com/axios@0.21.1/dist/axios.min.js"></script>
- start scratchy service : 
    const api = new ScratchyService("http://localhost:5000/api");
- call a method :
    api.function();|
*/


/**
 * @constructor
 * @param {string} apiUrl - Scratchy service API URL, eg: "http://localhost:5000"
 */
class ScratchyService {
    /**
     * create a new ScratchyService
     * @param {string} apiUrl the api's url (without the trailing /)
     */
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
        this.cachedUsers = [];
    }

    /**
     * update a room
     * @param {string} roomID - room id , eg:60895dd62d1a706830c31f10
     * @param {string} roomTitle - title of a room , eg:my room
     * @param {string} roomDescription - description of a room, eg:my room description
     * @returns {object} a json representation of the room
     */
    async updateRoom(roomId, roomTitle, roomDescription){
        const reponse = await axios.put(this.apiUrl + '/room/' + roomId, { title: roomTitle , description: roomDescription });
        return reponse.data;
    };


    /**
     * create a room
     * @param {string} roomTitle - title of a room, eg:my room
     * @param {string} roomDescription - description of a room, eg:my room description
     * @returns {string} - room id 
     */
    async createRoom(roomTitle, roomDescription){
        const reponse = await axios.post(this.apiUrl+'/room', { title: roomTitle , description: roomDescription });
        return reponse.data;
    };

    /**
     * delete a room
     * @param {string} roomID - room id , eg: 60895dd62d1a706830c31f10
     */
    async deleteRoom(roomID){
        const reponse = await axios.delete(this.apiUrl+'/room/'+roomID);
        return reponse.data;
    };
    /**
     * get every room on the database
     * @returns {array} - all rooms information 
     */
    async getAllRooms() { // put the id between "" 
        let reponse = await axios.get(this.apiUrl+'/room'); // make the GET request;
        return reponse.data;
    };

    /**
     * retreive a room's data
     * @param {string} roomID - room id , eg:60895dd62d1a706830c31f10
     * @returns {JSON} room information , { oid:"60895dd62d1a706830c31f10" ,title:"example"}
     */
    async getRoom(roomID) { // put the id between "" 
            // Make a request for a user with a given ID
            let reponse = await axios.get(this.apiUrl+'/room/'+roomID);// make the GET request
            return reponse.data;// return data JSON           
    };

//                               USER FUNCTIONS
    
    /**
     * get a user by their pseudo
     * @param {string} userPseudo - a user pseudo , eg:toto
     * @returns {JSON} - user information 
     */
    async getUserByPseudo(userPseudo){ // put the id between "" 
        // Make a request for a user with a given ID
        let reponse = await axios.get(this.apiUrl+'/user?pseudo='+userPseudo);// make the GET request
        return reponse.data;// return data JSON         
    };

    /**
     * get user by their id
     * @param {string} userID , user id , eg:60895dd62d1a706830c31f10
     * @returns {JSON} - user information
     */
    async getUserByid (userID){ // put the id between "" 
        // Make a request for a user with a given ID
        let reponse = await axios.get(this.apiUrl+'/user/'+userID) // make the GET request
        return reponse.data;// return data JSON          
    };

    /**
     * create user
     * @param {string} userPseudo - a user pseudo , eg:toto
     * @param {string} userProfileImage - profile image link , eg:https://myprofileimage.test/picture.png
     * @returns {object} returns a json representation of the user
     */
    async createUser(userPseudo, userProfileImage){
        const reponse = await axios.post(this.apiUrl+'/user', { pseudo: userPseudo , profileImage: userProfileImage });
        return reponse.data;
    };

    /**
     * delete user
     * @param {string} userID - user id , eg:60895dd62d1a706830c31f10
     */
    async deleteUser(userID){
        const reponse = await axios.delete(this.apiUrl+'/user/'+userID);
        return reponse.data;
    };

    /**
     * update a user
     * @param {string} userID - user id , eg:60895dd62d1a706830c31f10
     * @param {string} userPseudo - user pseudo , eg:toto
     * @param {string} userProfileImage - user profile image
     * @returns {string} - user id , eg:60895dd62d1a706830c31f10
     */
    async updateUser(userID, userPseudo, userProfileImage){
        const reponse = await axios.put(this.apiUrl+'/user/'+userID, { pseudo: userPseudo, profileImage: userProfileImage});
        return reponse.data;
    };

//                               MESSAGE FUNCTIONS

    /**
     * 
     * @param {string} messageID - message id , eg:60895dd62d1a706830c31f10
     * @returns {JSON} message information 
     */
    async getMessage(messageID){ // put the id between "" 
        // Make a request for a user with a given ID
        let reponse = await axios.get(this.apiUrl+'/message/'+messageID) // make the GET request
        return reponse.data;// return data JSON  

    };

    /**
     * 
     * @param {string} roomID - room id , eg:60895dd62d1a706830c31f10
     * @returns {array} message information
     */
    async getAllMessagesInRoom(roomID){ // put the id between "" 
        // Make a request for a user with a given ID
        let reponse = await axios.get(this.apiUrl+'/message?roomid='+roomID) // make the GET request
        return reponse.data;// return data JSON 
    };

    /**
     * 
     * @param {string} authorID - author id , eg:60895dd62d1a706830c31f10
     * @param {string} messageContent - message content , eg:my message content
     * @param {string} roomID - room id , eg:60895dd62d1a706830c31f10
     * @returns {object} returns a json representation of the message
     */
    async createMessage(authorID,messageContent,roomID){
        const reponse = await axios.post(this.apiUrl+'/message', { author : authorID , content : messageContent , roomId : roomID });
        return reponse.data;
    };

    /**
     * 
     * @param {string} messageID - message id , eg:60895dd62d1a706830c31f10
     * @param {string} messageContent - message content , eg:my message content 
     * @returns {string} message id
     */
    async updateMessage(messageID,messageContent){
        const reponse = await axios.put(this.apiUrl+'/message/'+messageID, { content: messageContent });
        return reponse.data;
    };

    /**
     * 
     * @param {string} messageID - message id , eg:60895dd62d1a706830c31f10
     */
    async deleteMessage(messageID){
        const reponse = await axios.delete(this.apiUrl+'/message/'+messageID);
        return reponse.data;
    };
}
