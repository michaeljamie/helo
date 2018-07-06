const users = [];

module.exports = {

    
    register: function( req, res, next ) {
        // const { session } = req;
        const { username, password } = req.body;
        
    
        req.app.get('db').add_user( [username, password] )
          .then( user => res.status(200).send( user[0] )
        )
        },

    login: function( req, res, next ) {
        // const { session } = req;
        const { username, password } = req.body;

        
        req.app.get('db').find_user( [username, password] )
            .then( user => res.status(200).send(user[0])
        )
        },    

    readPosts: function( req, res, next ){
        const { posts } = req.body;
        req.app.get('db').get_posts()
        .then( posts => res.status(200).send(posts))
        .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err.response)
            } ) 
    },

    // searchPosts: function( req, res, next ){
    //     const { posts } = req.body;
    //     var userposts = req.query.userposts;
    //     var search = req.query.search;
    //     req.app.get('db').get_posts()
    //     .then( posts => res.status(200).send(posts))
    //     .catch( err => {
    //         res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
    //         console.log(err.response)
    //         } ) 
    // }
}




