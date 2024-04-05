const User = require("../Models/model");
module.exports.addToLikedMovies = async (req,res)=>{
    try{
        const {email,data} = req.body;
        const user= await User.findOne({email});
        if(user){
            const {likedMovies} = user;
            const movieAlreadyLiked = likedMovies.find(({id})=> id === data.id);
            if(!movieAlreadyLiked){
                await User.findByIdAndUpdate(user._id,{
                    likedMovies:[...user.likedMovies,data],
                }
                ,{new:true}
                );
            }else return res.json({msg:"movie already added to the liked list."});
        }else await User.create({email,likedMovies:[data] });
        return res.json({msg:"movie added successfully"})
    }catch(error){
        return res.json({msg:"Error adding movie"})
    }
};


module.exports.getLikedMovies = async(req,res)=>{
    try{
        const {email}= req.params;
        const user= await User.findOne({email});
        if(user){
            res.json({msg:"success",movies: user.likedMovies});
        }else return res.json({msg:"user with given email not found"})
    }catch(err){
        return res.json({msg:"Error Fetch movie"});
    }
}

// module.exports.removeFromLikedMovies = async(req,res)=>{
//     try{
//         const {email,movieId} = req.body;
//         const user= await User.findOne({email});
//         if(user){
//             const {likedMovies} = user;
//             const movieIndex = likedMovies.findIndex(({id})=> id === movieId)
//             if(!movieIndex) res.status(400).send({msg:"movie not found"})
//             likedMovies.splice(movieIndex,1)
            
//                 await User.findByIdAndUpdate(user._id,{
//                     likedMovies,
//                 }
//                 ,{new:true}
//                 );
//                 return res.json({msg:"movie deleted",movies:likedMovies});
//             }
            
        
//     }catch(err){
//         return res.json({msg:"Error deleting movie"});
//     }
// }

module.exports.removeFromLikedMovies = async (req, res) => {
    try {
        const { email, movieId } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            const { likedMovies } = user;
            const movieIndex = likedMovies.findIndex(({ id }) => id === movieId);
            if (movieIndex === -1) {
                return res.status(400).send({ msg: "Movie not found" });
            }
            likedMovies.splice(movieIndex, 1);
            await User.findByIdAndUpdate(user._id, {
                likedMovies,
            }, { new: true });
            return res.json({ msg: "Movie deleted", movies: likedMovies });
        } else {
            return res.status(404).json({ msg: "User not found" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Error deleting movie" });
    }
};
