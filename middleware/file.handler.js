import fs from "node:fs"
import multer from "multer";

const galleryCreation = (req, res, next) => {
    


    const storage = multer.diskStorage({
        destination:function(req, file,cb){
            const body = req.body
            const path = `./media/catalogue/${body.catalogue}/${body.id}`
            if(!fs.existsSync(path)){
                fs.mkdirSync(path,{recursive:true})
            }
            cb(null, path)
        },
        filename:function(req, file ,cb){
            const body = req.body
            const path = `./media/catalogue/${body.catalogue}/${body.id}`
            const counter = fs.readdirSync(path).length
            // const format = file.originalname.split('.').pop()
            if(counter === 0){
                cb(null, `main.png`)
            }
            else{
                // cb(null, `${counter+1}.png`)
                cb(null, `main.png`)
            }
        }
    })
    const upload = multer({
        storage,
        limits: { fileSize: 10 * 1024 * 1024 }
        }).single('file');

    upload(req, res,(err) => {
        console.log(req.body)
        if (err){
            return "error al subir el archivo"
        }
        else if(!req.file){
            next()
        }
        else{
            next()
        }
    })
}




const storage = multer.diskStorage({
    destination:function(req,file,cb){
        const uploadPath = (`./media/${req.body.catalogue}/${req.body.id}-${req.body.table}`)

        cb(null, uploadPath)
    },
    filename: function(req,file,cb){
        const uploadPath = (`./media/${req.body.catalogue}/${req.body.id}-${req.body.table}`)
        const format = file.originalname.split('.').pop()
        if(req.body.table === "menu"){
            if(!fs.existsSync(uploadPath)){
                fs.mkdirSync(uploadPath,{recursive:true})
            }
            cb(null, `main.${format}`)
        }
        else if(req.body.table === "catalogue"){
            if(!fs.existsSync(uploadPath)){
                fs.mkdirSync(uploadPath,{recursive:true})
            }
            cb(null, `${file.originalname}`)
        }
    }
})

const media = multer({storage:storage})


export {media, galleryCreation}