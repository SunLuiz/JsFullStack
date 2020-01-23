//index: listagem de sessoes
//show: : uma unica sessao
//store : criar um sessao
//update : atualizar a sessao
//destroy: deletar um sessao
const User = require('../models/User');

module.exports = {
 async store(req, res){
   const {email} = req.body;

    let user = await User.findOne({ email });

    if(!user){
      user = await User.create({email});
    }
   return res.json(user);
 }
};
