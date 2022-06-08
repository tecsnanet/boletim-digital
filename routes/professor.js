const express = require("express");
const router = express.Router()
const Aluno = require('../model/Aluno')

// router.get("/loginProfessor", async (req, res)=>{
//     Aluno.findAll().then(function(alunos) {
//         console.log(alunos)
//         res.render('pagProfessor' , {alunos: alunos})
//     })     
// })
router.get("/loginProfessor",(req,res)=>{
    res.render("loginProfessor")
})

module.exports = router