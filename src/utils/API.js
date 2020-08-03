import axios from "axios";

export default {
    getBook: function(data){
        return axios.get("/api/google", {params: {data: "title:" + data}})
    },

    showSavedBooks: function() {
        return axios.get("/api/books")
    },

    saveBook: function(data) {
        return axios.post("/api/books", data)
    }
}